<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
/* Default comment here */ 

document.addEventListener('click', function(e){
  const btn = e.target.closest('.menu-toggle, .ast-mobile-menu-trigger, .ast-header-burger, .ast-builder-menu-toggle');
  if(!btn) return;
  setTimeout(function(){
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    document.body.classList.toggle('has-shrink', expanded);
  }, 0);
});



</script>
<!-- end Simple Custom CSS and JS -->
