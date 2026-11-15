import test from 'node:test';
import assert from 'node:assert/strict';
import {pathToFileURL} from 'node:url';
import path from 'node:path';

async function contactHarness(reduce,check){
  const names=['document','window','matchMedia','getComputedStyle'];
  const saved=Object.fromEntries(names.map(n=>[n,Object.getOwnPropertyDescriptor(globalThis,n)]));
  const attributes=new Map(),events={},animations=[];
  const summary={setAttribute:(k,v)=>attributes.set(k,v),replaceChildren(){},append(){},focus(){},addEventListener:(name,fn)=>events[name]=fn};
  const panel={id:'',style:{overflow:''},getBoundingClientRect:()=>({height:120}),animate:(frames,options)=>{const animation={frames,options,cancelled:false,cancel(){this.cancelled=true},finish(){this.onfinish?.()}};animations.push(animation);return animation;}};
  const details={open:false,dataset:{},querySelector:s=>s==='summary'?summary:panel,addEventListener(){}};
  const doc={querySelector:()=>null,querySelectorAll:s=>s==='.profile-contacts'?[details]:[],createTextNode:text=>({text}),createElement:()=>({setAttribute(){}})};
  try{
    Object.defineProperty(globalThis,'document',{configurable:true,value:doc});
    Object.defineProperty(globalThis,'window',{configurable:true,value:{addEventListener(){}}});
    Object.defineProperty(globalThis,'matchMedia',{configurable:true,value:()=>({matches:reduce,addEventListener(){}})});
    Object.defineProperty(globalThis,'getComputedStyle',{configurable:true,value:()=>({opacity:'1',paddingTop:'20px',paddingBottom:'0px'})});
    await import(pathToFileURL(path.resolve('assets/rehaul/world.mjs')).href+'?test='+Math.random());
    await check({details,panel,attributes,animations,click:()=>events.click({preventDefault(){}})});
  }finally{for(const name of names){if(saved[name])Object.defineProperty(globalThis,name,saved[name]);else delete globalThis[name];}}
}

test('reduced-motion contacts toggle immediately without invoking animation',async()=>{
  await contactHarness(true,({details,panel,attributes,animations,click})=>{
    click();assert.equal(details.open,true);assert.equal(attributes.get('aria-expanded'),'true');
    click();assert.equal(details.open,false);assert.equal(attributes.get('aria-expanded'),'false');
    assert.equal(animations.length,0);assert.equal(panel.style.overflow,'');
  });
});

test('rapid contact reversals discard stale completions and restore overflow',async()=>{
  await contactHarness(false,({details,panel,attributes,animations,click})=>{
    click();click();click();
    assert.equal(animations.length,3);assert.equal(animations[0].cancelled,true);assert.equal(animations[1].cancelled,true);
    animations[0].onfinish();animations[1].onfinish();
    assert.equal(details.open,true);assert.equal(attributes.get('aria-expanded'),'true');
    animations[2].finish();
    assert.equal(details.open,true);assert.equal(panel.style.overflow,'');assert.equal(details.dataset.animating,undefined);
    click();assert.equal(details.open,true);animations[3].finish();
    assert.equal(details.open,false);assert.equal(attributes.get('aria-expanded'),'false');assert.equal(panel.style.overflow,'');
  });
});
