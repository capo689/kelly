"""Build site-only loops; preserve the full-length web-ready catalog.

Usage: python3 scripts/prepare-header-videos.py --originals ~/Downloads
Requires ffmpeg, ffprobe, and Pillow. All dimensions retain the original 16:9 frame.
"""
import argparse
from concurrent.futures import ThreadPoolExecutor
import json
from pathlib import Path
import shutil
import subprocess
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
parser = argparse.ArgumentParser()
parser.add_argument('--originals', type=Path, default=Path.home() / 'Downloads')
parser.add_argument('--catalog', type=Path, default=ROOT.parent / 'web-ready-headers')
args = parser.parse_args()
OUT = ROOT / 'public/media/video'
OUT.mkdir(parents=True, exist_ok=True)
clips = {c['slug']: c for c in json.loads((args.catalog / 'manifest.json').read_text())}
HEADERS = ['mountain-lake-sunset-aerial', 'river-bend-sunset-aerial',
           'autumn-river-park-bridge-aerial', 'river-sunset-reflections-aerial']
FEATURES = ['alpine-lake-snowy-peaks-water-level', 'summer-riverside-neighborhood-aerial']
FPS = 30000 / 1001
FADE_FRAMES = 24

def run(command):
    subprocess.run(command, check=True, stdout=subprocess.DEVNULL)

def poster(video, slug):
    # The first loop frame is also the loading poster, avoiding a visual jump.
    raw = subprocess.check_output(['ffmpeg', '-v', 'error', '-i', str(video),
        '-frames:v', '1', '-f', 'image2pipe', '-vcodec', 'png', '-'])
    import io
    with Image.open(io.BytesIO(raw)) as image:
        image.save(OUT / f'{slug}.webp', 'WEBP', quality=84, method=6)
        image.resize((900, 506), Image.Resampling.LANCZOS).save(
            OUT / f'{slug}-mobile.webp', 'WEBP', quality=82, method=6)

def prepare(slug):
    clip = clips[slug]
    if slug in HEADERS:
        original = args.originals / clip['source']
        source = original if original.is_file() else args.catalog / clip['outputs']['desktop']['file']
        print(f'Loop source: {source}', flush=True)
        # Rotate the start forward by 24 frames, then dissolve the final 24
        # frames into the original opening. The loop resumes at the next frame.
        frames = round(clip['outputs']['desktop']['duration_seconds'] * FPS)
        # Both endpoints are sampled: 24 frames span 23 frame intervals.
        fade = (FADE_FRAMES - 1) / FPS
        offset = (frames - 2 * FADE_FRAMES) / FPS
        graph = (
            '[0:v:0]fps=30000/1001,scale=1920:1080:flags=lanczos,'
            'setsar=1,format=yuv420p,split=2[body][head];'
            f'[body]trim=start_frame={FADE_FRAMES}:end_frame={frames},setpts=PTS-STARTPTS[b];'
            f'[head]trim=end_frame={FADE_FRAMES},setpts=PTS-STARTPTS[h];'
            f'[b][h]xfade=transition=fade:duration={fade}:offset={offset},format=yuv420p[v]'
        )
        target = OUT / f'{slug}-loop.mp4'
        run(['ffmpeg', '-v', 'error', '-y', '-threads', '4', '-i', str(source),
             '-filter_complex_threads', '2', '-filter_complex', graph, '-map', '[v]', '-an', '-sn', '-dn',
             '-map_metadata', '-1', '-map_chapters', '-1', '-c:v', 'libx264', '-threads', '4',
             '-preset', 'slow', '-crf', '22' if original.is_file() else '20', '-maxrate', '6000k', '-bufsize', '12000k',
             '-pix_fmt', 'yuv420p', '-profile:v', 'high', '-level:v', '4.1', '-g', '60',
             '-color_primaries', 'bt709', '-color_trc', 'bt709', '-colorspace', 'bt709',
             '-color_range', 'tv', '-movflags', '+faststart', str(target)])
    else:
        target = OUT / f'{slug}.mp4'
        shutil.copy2(args.catalog / clip['outputs']['desktop']['file'], target)
        shutil.copy2(args.catalog / clip['outputs']['mobile']['file'], OUT / f'{slug}-720p.mp4')
    run(['ffmpeg', '-v', 'error', '-xerror', '-i', str(target), '-f', 'null', '-'])
    poster(target, slug)
    print(f'{target.name}: {target.stat().st_size / 1e6:.2f} MB; decoded successfully', flush=True)

with ThreadPoolExecutor(max_workers=2) as pool:
    list(pool.map(prepare, HEADERS + FEATURES))
