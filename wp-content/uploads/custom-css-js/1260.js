<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
document.addEventListener("DOMContentLoaded", function() {
  const targets = document.querySelectorAll('.fluor-text');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('inview');
        // Wil je dat het telkens opnieuw gebeurt? haal dan de volgende regel weg
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 }); // 20% zichtbaar is genoeg

  targets.forEach(el => observer.observe(el));
});
</script>
<!-- end Simple Custom CSS and JS -->
