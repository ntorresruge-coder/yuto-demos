// Fit the page to Rise's 16:9 embed window: lay out at 1280 px wide, then scale to fit both width and height,
// so everything is visible at once like a slide. Below 640 px wide (phones) the page scrolls normally.
(function(){
  var DW=1280, DH=720;
  function stage(){ return document.querySelector('[data-stage]') || document.getElementById('solo-wrap') || document.body.firstElementChild; }
  function fit(){
    var el=stage(); if(!el) return; var W=innerWidth, H=innerHeight;
    if (W<640){ document.documentElement.classList.remove('fitted'); el.style.cssText=el.dataset.css0||''; return; }
    if (el.dataset.css0===undefined) el.dataset.css0=el.style.cssText;
    document.documentElement.classList.add('fitted');
    el.style.width=DW+'px'; el.style.maxWidth='none'; el.style.minHeight='0'; el.style.transformOrigin='0 0'; el.style.position='absolute'; el.style.margin='0';
    var h=Math.max(DH, el.scrollHeight), s=Math.min(W/DW, H/h);
    el.style.transform='scale('+s+')'; el.style.left=Math.max(0,(W-DW*s)/2)+'px'; el.style.top=Math.max(0,(H-h*s)/2)+'px';
  }
  var raf=0; function soon(){ cancelAnimationFrame(raf); raf=requestAnimationFrame(fit); }
  addEventListener('resize',soon); addEventListener('load',soon); document.addEventListener('DOMContentLoaded',function(){ soon(); try{ new MutationObserver(soon).observe(stage(),{subtree:true,childList:true,attributes:true,characterData:true}); }catch(e){} });
  if (document.readyState!=='loading') soon();
})();
