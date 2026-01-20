// year
document.getElementById('year').textContent = new Date().getFullYear();

// smooth scroll
document.querySelectorAll('a.nav-link[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if(!el) return;
    el.scrollIntoView({behavior:'smooth', block:'start'});
    // close navbar on mobile
    const nav = document.getElementById('nav');
    if(nav.classList.contains('show')) new bootstrap.Collapse(nav).toggle();
  });
});

// reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});
revealEls.forEach(el=>io.observe(el));

