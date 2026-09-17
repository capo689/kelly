"""Check the built site's local links, media, headings, and search metadata."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import json, re, sys
root=Path(__file__).resolve().parents[1]/'dist'
class Page(HTMLParser):
 def __init__(self,text):
  super().__init__(); self.tags=[];self.feed(text)
 def handle_starttag(self,tag,attrs):self.tags.append((tag,dict(attrs)))
errors=[];pages=[p for p in root.rglob('*.html') if p.name=='index.html']; checked=0; titles=[]; descriptions=[]
for file in pages:
 text=file.read_text(); page=Page(text)
 if file.name=='404.html':continue
 route='/'+str(file.relative_to(root)).removesuffix('index.html').removesuffix('.html').rstrip('/')
 if sum(t=='h1' for t,a in page.tags)!=1:errors.append(f'{route}: expected one H1')
 for field,selector in [('description',lambda t,a:t=='meta' and a.get('name')=='description'),('canonical',lambda t,a:t=='link' and a.get('rel')=='canonical')]:
  vals=[a.get('content') or a.get('href') for t,a in page.tags if selector(t,a)]
  if len(vals)!=1 or not vals[0]:errors.append(f'{route}: missing/duplicate {field}')
  if field=='description':descriptions.extend(vals)
 titles+=re.findall(r'<title>(.*?)</title>',text)
 for raw in re.findall(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>',text):
  try:json.loads(raw)
  except ValueError:errors.append(f'{route}: invalid JSON-LD')
 if 'opacity:0' in text: errors.append(f'{route}: hidden prerender content')
 refs=[]
 for tag,a in page.tags:
  for key in ['src','poster','href']:
   if key in a:refs.append(a[key])
  if 'srcset' in a:refs += [x.strip().split()[0] for x in a['srcset'].split(',')]
  if tag=='img' and 'alt' not in a:errors.append(f'{route}: image missing alt attribute')
 refs+=re.findall(r'url\([\'"]?(/[^)\'\"]+)',text)
 for ref in refs:
  u=urlsplit(ref)
  if u.netloc and u.netloc!='www.kellymillerrealestate.com':continue
  if u.scheme and u.scheme not in ['https','http']:continue
  path=unquote(u.path)
  if not path.startswith('/'):continue
  target=root/path.lstrip('/'); candidates=[target,target/'index.html',Path(str(target)+'.html')]
  hit=next((p for p in candidates if p.is_file()),None);checked+=1
  if not hit:errors.append(f'{route}: missing {ref}')
  elif u.fragment and hit.suffix=='.html' and not re.search(r'id=[\"\']'+re.escape(unquote(u.fragment))+r'[\"\']',hit.read_text()):errors.append(f'{route}: missing fragment {ref}')
for name,vals in [('title',titles),('description',descriptions)]:
 if len(vals)!=len(set(vals)):errors.append(f'Duplicate {name}')
report={'pages':len(pages),'localReferencesChecked':checked,'errors':sorted(set(errors))}
print(json.dumps(report,indent=2));sys.exit(bool(errors))
