document.addEventListener('DOMContentLoaded', () => {
  // --- NAVIGATION ACTIVE ON SCROLL ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  const navObserverOptions = {
    threshold: 0.3,
    rootMargin: "-10% 0px -70% 0px"
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, navObserverOptions);

  sections.forEach(section => navObserver.observe(section));


  // --- SCROLL-REVEAL WORDS (INTRO) ---
  const words = document.querySelectorAll('.fade-word');
  
  const wordObserverOptions = {
    threshold: 1.0, // Le mot doit être entièrement visible
    rootMargin: "0px 0px -10% 0px" // Déclenche un peu avant le bas de l'écran
  };

  const wordObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, wordObserverOptions);

  words.forEach(word => wordObserver.observe(word));


  // --- CERTIFICATIONS CAROUSEL ---
  const certifs = [
    { icon: '📦', title: 'À remplir', desc: 'Nom et description de la certification à ajouter ici.', empty: true },
    { icon: '📦', title: 'À remplir', desc: 'Nom et description de la certification à ajouter ici.', empty: true },
    { icon: '📦', title: 'À remplir', desc: 'Nom et description de la certification à ajouter ici.', empty: true },
  ];
  let certIdx = 0;

  window.changeCertif = function(dir) {
    certIdx = (certIdx + dir + certifs.length) % certifs.length;
    const c = certifs[certIdx];
    const iconEl = document.getElementById('certif-icon');
    const titleEl = document.getElementById('certif-title');
    const descEl = document.getElementById('certif-desc');
    const circleEl = document.getElementById('certif-circle');
    const infoEl = document.getElementById('certif-info');

    if(iconEl) iconEl.textContent = c.icon;
    if(titleEl) titleEl.textContent = c.title;
    if(descEl) descEl.textContent = c.desc;
    if(circleEl) circleEl.className = 'certif-circle' + (c.empty ? ' empty' : '');
    if(infoEl) infoEl.className = 'certif-info' + (c.empty ? ' empty' : '');
  };
});
