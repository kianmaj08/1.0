(function(){
  function hideOverlay(){
    var el = document.getElementById('loaderOverlay');
    if(el){ el.style.display = 'none'; }
  }
  // Show only on first visit (per browser) using localStorage
  var already = false;
  try { already = localStorage.getItem('loaderShown') === '1'; } catch(e){}
  if (already) {
    // If already shown before, hide immediately when DOM is ready
    document.addEventListener('DOMContentLoaded', hideOverlay);
  } else {
    window.addEventListener('load', function(){
      setTimeout(function(){
        hideOverlay();
        try { localStorage.setItem('loaderShown', '1'); } catch(e){}
      }, 2000);
    });
  }
})();
