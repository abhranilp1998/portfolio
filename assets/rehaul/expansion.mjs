const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
const validMotion=x=>['terminal','scan','fade'].includes(x)?x:'terminal';
const root=document.documentElement;
root.dataset.motion=validMotion(root.dataset.motion);
function syncMotion(){ $$('[data-motion]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.motion===root.dataset.motion))); }
syncMotion();
let previewTimer;
$$('button[data-motion]').forEach(button=>button.addEventListener('click',()=>{
  clearTimeout(previewTimer);root.dataset.motion=validMotion(button.dataset.motion);
  try{localStorage.setItem('ap-motion',root.dataset.motion)}catch{}
  syncMotion();$('#motion-status').textContent='Selected: '+root.dataset.motion+'. Follow a page link to see entry and exit together.';
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){$('#motion-status').textContent+=' Reduced motion is enabled, so animations stay off.';return;}
  root.classList.remove('entering','exiting');
  requestAnimationFrame(()=>{root.classList.add('exiting');previewTimer=setTimeout(()=>{root.classList.remove('exiting');root.classList.add('entering');previewTimer=setTimeout(()=>root.classList.remove('entering'),750);},430);});
}));
$('#print-cv')?.addEventListener('click',()=>window.print());
document.addEventListener('click',e=>{if(!e.target.closest('.more-menu'))$$('.more-menu[open]').forEach(x=>x.open=false);});
document.addEventListener('keydown',e=>{if(e.key==='Escape')$$('.more-menu[open]').forEach(x=>{x.open=false;x.querySelector('summary').focus();});});
const mapGate=$('#map-gate'),mapForm=$('#map-gate-form'),map=$('#location-map');
$('#open-map-gate')?.addEventListener('click',()=>mapGate.showModal());
$('#close-map-gate')?.addEventListener('click',()=>mapGate.close());
mapGate?.addEventListener('click',e=>{if(e.target===mapGate)mapGate.close();});
mapForm?.addEventListener('submit',e=>{e.preventDefault();const name=mapForm.elements.name.value.trim();const email=mapForm.elements.email;
  if(name.length<2&&(!email.value.trim()||!email.validity.valid)){$('#map-gate-status').textContent='Enter a name of at least two characters or a valid email address.';return;}
  map.src='https://www.openstreetmap.org/export/embed.html?bbox=88.34%2C22.42%2C88.43%2C22.49&layer=mapnik&marker=22.4516%2C88.3840';
  map.hidden=false;$('#map-lock').hidden=true;$('#relock-map').hidden=false;mapForm.reset();mapGate.close();$('#relock-map').focus();
});
$('#relock-map')?.addEventListener('click',()=>{map.hidden=true;map.removeAttribute('src');$('#map-lock').hidden=false;$('#relock-map').hidden=true;$('#open-map-gate').focus();});
const feedback=$('#testimonial-form'),draftContainer=$('#testimonial-drafts');
const storageKey='ap-testimonial-drafts-v1';
let drafts=[];try{const saved=JSON.parse(localStorage.getItem(storageKey)||'[]');if(Array.isArray(saved))drafts=saved.filter(d=>d&&typeof d.name==='string'&&typeof d.quote==='string').slice(0,10);}catch{}
function saveDrafts(){try{localStorage.setItem(storageKey,JSON.stringify(drafts));return true;}catch{return false;}}
function renderDrafts(){if(!draftContainer)return;draftContainer.replaceChildren();drafts.forEach((d,index)=>{const card=document.createElement('article');const title=document.createElement('h3');title.textContent=d.name;const meta=document.createElement('small');meta.textContent=(d.role||'Contributor')+' · Local draft — not published';const quote=document.createElement('blockquote');quote.textContent=d.quote;const actions=document.createElement('div');actions.className='draft-actions';const copy=document.createElement('button');copy.className='underlink';copy.textContent='Copy feedback +';copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(d.name+'\n'+(d.role||'')+'\n\n'+d.quote);$('#testimonial-status').textContent='Feedback copied.';}catch{$('#testimonial-status').textContent='Clipboard unavailable. Select the text in your draft to copy it.';}});const email=document.createElement('a');email.className='underlink';email.textContent='Prepare email for review ↗';email.href='mailto:abhranilpaul00@gmail.com?subject='+encodeURIComponent('Portfolio testimonial — '+d.name)+'&body='+encodeURIComponent(d.name+'\n'+(d.role||'')+'\n\n'+d.quote+'\n\nI consent to this feedback being considered for publication.');const remove=document.createElement('button');remove.className='underlink';remove.textContent='Delete local draft ×';remove.addEventListener('click',()=>{drafts.splice(index,1);saveDrafts();renderDrafts();$('#testimonial-status').textContent='Local draft deleted.';});actions.append(copy,email,remove);card.append(title,meta,quote,actions);draftContainer.append(card);});}
renderDrafts();
feedback?.addEventListener('submit',e=>{e.preventDefault();if(!feedback.reportValidity())return;const data=new FormData(feedback);const name=data.get('name').trim(),quote=data.get('quote').trim();if(name.length<2||quote.length<20){$('#testimonial-status').textContent='Please enter your name and at least 20 characters of feedback.';return;}drafts.unshift({name,role:data.get('role').trim(),quote});drafts=drafts.slice(0,10);const persisted=saveDrafts();renderDrafts();feedback.reset();$('#testimonial-status').textContent=persisted?'Saved in this browser only. Copy your draft or prepare an email for review.':'Draft prepared for this session. Browser storage is unavailable; copy it before leaving.';});
