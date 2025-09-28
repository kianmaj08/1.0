(function(){
  const wrap = document.querySelector('.sm-wrap');
  if(!wrap) return;
  const panel = wrap.querySelector('.sm-panel');
  const checkbox = wrap.querySelector('#burger');
  const layers = wrap.querySelectorAll('.sm-layer');

  function openMenu(){
    wrap.classList.add('sm-open');
    document.body.style.overflow='hidden';
    if(checkbox && !checkbox.checked) checkbox.checked = true;
  }
  function closeMenu(){
    wrap.classList.remove('sm-open');
    document.body.style.overflow='';
    if(checkbox && checkbox.checked) checkbox.checked = false;
  }

  // Toggle via checkbox
  if(checkbox){
    checkbox.addEventListener('change', (e)=>{
      if(checkbox.checked) openMenu(); else closeMenu();
    });
  }

  // Close when clicking a real link
  panel.addEventListener('click', function(e){
    const a = e.target.closest('a');
    if(a && !a.hasAttribute('data-inline')){
      closeMenu();
    }
    // inline settings toggle
    if(a && a.matches('[data-inline="settings"]')){
      e.preventDefault();
      const box = wrap.querySelector('.sm-settings');
      const open = box.getAttribute('data-open') === 'true';
      box.setAttribute('data-open', open ? 'false' : 'true');
    }
  });

  window.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') closeMenu();
  });

  // Theme handling
  const root = document.documentElement;
  const THEME_KEY = 'site-theme';
  function applyTheme(t){
    if(!t) t = 'light';
    root.setAttribute('data-theme', t);
    try{ localStorage.setItem(THEME_KEY, t); }catch(e){}
  }
  function loadTheme(){
    try{
      const t = localStorage.getItem(THEME_KEY);
      if(t === 'dark' || t === 'light'){ applyTheme(t); return; }
    }catch(e){}
    applyTheme(root.getAttribute('data-theme') || 'light');
  }
  loadTheme();

  const switchEl = wrap.querySelector('#sm-theme-switch');
  if(switchEl){
    // init switch state from current theme
    const isDark = root.getAttribute('data-theme') === 'dark';
    switchEl.checked = isDark;
    switchEl.addEventListener('change', ()=>{
      applyTheme(switchEl.checked ? 'dark' : 'light');
    });
  }
})();