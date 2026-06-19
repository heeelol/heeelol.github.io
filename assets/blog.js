/* Persona travel-log shared behaviour: cursor, reveal-on-scroll, click burst */
(function(){
  const cursor=document.getElementById('cursor');
  if(cursor){
    addEventListener('mousemove',e=>{cursor.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;});
    addEventListener('mousedown',()=>cursor.classList.add('click'));
    addEventListener('mouseup',()=>cursor.classList.remove('click'));
  }
  // reveal on scroll
  const obs=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');obs.unobserve(en.target);}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
  // click burst
  addEventListener('click',e=>{
    for(let i=0;i<4;i++){
      const s=document.createElement('div');s.className='burst';s.textContent='✦';
      s.style.left=e.clientX+(Math.random()*30-15)+'px';
      s.style.top=e.clientY+(Math.random()*20-10)+'px';
      document.body.appendChild(s);setTimeout(()=>s.remove(),600);
    }
  });
})();
