# Website video placements

Six selected clips are used in four headers and two supporting placements.
The full 14-clip collection remains in `../web-ready-headers`; only selected
assets are included in the website build.

| Page / placement | Asset | Behavior |
| --- | --- | --- |
| Home, Cascades half of split hero | mountain-lake-sunset-aerial | Loop; original coastal photo remains in the right half |
| Central Oregon hero | river-bend-sunset-aerial | Loop |
| Bend hero | autumn-river-park-bridge-aerial | Loop |
| Second Homes & Investment hero | river-sunset-reflections-aerial | Loop |
| Second Homes, Mountain Basecamp card | alpine-lake-snowy-peaks-water-level | Click-to-play, full-length, native controls |
| Bend, introductory feature | summer-riverside-neighborhood-aerial | Click-to-play, full-length, native controls |

## Playback and delivery

- Hero media loads only on screens wider than 900px with a fine pointer,
  no reduced-motion preference, and no reported data-saving preference.
- Mobile, touch-only and reduced-motion visitors see a responsive WebP poster;
  background MP4 elements are not mounted in those cases. Prerendered pages
  contain posters and no MP4 sources.
- A labeled, keyboard-accessible button pauses or resumes each background film.
- Header playback pauses offscreen and when the tab is hidden. User pauses
  persist through scrolling and visibility changes on the current page.
- Autoplay rejection keeps the poster and a manual play control. Loading errors
  keep the poster and remove the unavailable video control.
- Supporting films have no video source until clicked. Mobile viewers get the
  720p version on explicit playback; desktop viewers get 1080p. Descriptions
  provide a text alternative for the silent footage.
- Site-only header versions crossfade the last 24 frames into the opening,
  rotating the start forward 24 frames. The loop is about 0.8 seconds shorter
  than the original, at unchanged playback speed. Posters match the first
  exported loop frame. Crop positions are in `src/data/videoData.js`.
- Original full-length exports are unchanged. Loop files were generated from
  the existing 1080p web exports because the original DJI paths were no longer
  present in Downloads at implementation time.

## Regeneration

`python3 scripts/prepare-header-videos.py --originals /path/to/originals`

Requires FFmpeg/FFprobe and Pillow. `--catalog` can point to the web-ready asset
folder. Original DJI footage is preferred when present; otherwise the script
uses the corresponding full-length desktop export. Generated assets live in
`public/media/video`.

## Community placement evidence

The Bend assignments are visual identifications, based on riverfront layout,
the footbridge, playing fields, city backdrop and surrounding landmarks.
The autumn shot matches the Drake/Harmon park area. The summer shot shows a
wider riverfront neighborhood view. Captions avoid unverified exact addresses
or specific property claims.

References consulted: [Drake Park / Mirror Pond](https://www.bendparksandrec.org/park/drake-park-and-mirror-pond/)
and [Harmon Park](https://www.bendparksandrec.org/park/harmon-park/), which documents
the riverfront sports fields. These sources support the landmark comparison;
they do not independently authenticate the DJI files.

Coast, other community pages, About, List With Me, Contact and booking retain
their existing photography. The remaining catalog footage stays in reserve.

## Verification

All generated loops passed a full FFmpeg decode. The production build
prerenders all 24 indexable routes. Browser checks cover four desktop headers,
keyboard controls, scroll pausing, persistent manual pause, mobile source
selection, zero background-video requests on mobile/reduced motion, click-only
supporting playback, preference changes, failed-media fallback and unchanged
coastal imagery. Screenshots were reviewed at desktop and phone widths.

Prerendering now uses React's `renderToString` to match the client's
`hydrateRoot`. This resolves the existing hydration mismatch found during
production verification; the final browser run completed without uncaught errors.
