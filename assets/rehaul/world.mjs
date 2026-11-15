// Native details remains usable without JS; animation is an enhancement.
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('.profile-contacts').forEach((details,index)=>{
  const summary=details.querySelector('summary'),panel=details.querySelector('.contact-facts');
  if(!summary||!panel)return;
  panel.id='contact-panel-'+index;
  summary.setAttribute('aria-controls',panel.id);
  let expanded=details.open,animation=null;const baseOverflow=panel.style.overflow;
  function label(){summary.replaceChildren(document.createTextNode(expanded?'Hide contacts':'Show contacts'));const sign=document.createElement('span');sign.className='contacts-indicator';sign.setAttribute('aria-hidden','true');sign.textContent=expanded?'−':'+';summary.append(sign);summary.setAttribute('aria-expanded',String(expanded));details.dataset.expanded=String(expanded);}
  function toggle(next){
    const currentHeight=details.open?panel.getBoundingClientRect().height:0;
    const currentOpacity=details.open?Number(getComputedStyle(panel).opacity):0;
    animation?.cancel();animation=null;expanded=next;label();
    if(reduced.matches||!panel.animate){details.open=next;panel.style.overflow=baseOverflow;delete details.dataset.animating;return;}
    details.open=true;
    const styles=getComputedStyle(panel),fullHeight=panel.getBoundingClientRect().height;
    const top=styles.paddingTop,bottom=styles.paddingBottom;
    details.dataset.animating='true';
    panel.style.overflow='hidden';
    const active=panel.animate([
      {height:currentHeight+'px',opacity:currentOpacity,paddingTop:currentHeight?top:'0px',paddingBottom:currentHeight?bottom:'0px'},
      {height:(next?fullHeight:0)+'px',opacity:next?1:0,paddingTop:next?top:'0px',paddingBottom:next?bottom:'0px'}
    ],{duration:next?300:240,easing:'cubic-bezier(.2,.7,.2,1)',fill:'both'});
    animation=active;
    active.onfinish=()=>{if(animation!==active)return;details.open=expanded;active.cancel();animation=null;panel.style.overflow=baseOverflow;delete details.dataset.animating;};
  }
  summary.addEventListener('click',event=>{event.preventDefault();toggle(!expanded);});
  details.addEventListener('keydown',event=>{if(event.key==='Escape'&&expanded){event.preventDefault();toggle(false);summary.focus();}});
  reduced.addEventListener('change',()=>{if(reduced.matches&&animation){animation.finish();}});
  label();
});
