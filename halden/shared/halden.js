// Tells a host page our height (Rise code block / any iframe host that listens) and marks completion.
(function(){
  function post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }
  var last=0; function size(){ var h=Math.ceil(document.documentElement.scrollHeight); if(Math.abs(h-last)>2){ last=h; post({type:'resize',height:h}); } }
  addEventListener('load',size); new ResizeObserver(size).observe(document.body);
  window.HALDEN={ complete:function(id){ post({type:'complete',widget:id}); },
    say:function(el,txt){ var p=el.querySelector('p'); p.textContent=txt; } };
})();
