
(function(){
  const root = document.querySelector('.sm-wrap');
  if(!root) return;
  const panel = root.querySelector('.sm-panel');
  const btn = root.querySelector('.sm-toggle');
  const body = document.body;

  function openMenu(){
    root.classList.add('sm-open');
    body.style.overflow='hidden';
  }
  function closeMenu(){
    root.classList.remove('sm-open');
    body.style.overflow='';
  }
  btn.addEventListener('click', function(){
    if(root.classList.contains('sm-open')) closeMenu(); else openMenu();
  });
  panel.addEventListener('click', function(e){
    if(e.target.matches('a')) closeMenu();
  });
  window.addEventListener('keydown', function(e){
    if(e.key==='Escape') closeMenu();
  });
})();
