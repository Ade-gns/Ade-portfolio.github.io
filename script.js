document.addEventListener('DOMContentLoaded', () => {
  // Nav active on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => { 
      if (window.scrollY >= s.offsetTop - 140) current = s.id; 
    });
    navLinks.forEach(a => { 
      a.classList.remove('active'); 
      if (a.getAttribute('href') === '#' + current) a.classList.add('active'); 
    });
  });

  // Scroll-reveal words (intro)
  const words = document.querySelectorAll('.fade-word');
  
  function revealWords() {
    const winH = window.innerHeight;
    words.forEach(w => {
      const rect = w.getBoundingClientRect();
      // On ajoute la classe visible quand le mot entre dans le champ de vision
      if (rect.top < winH * 0.85) {
        w.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealWords);
  // Appel immédiat au cas où des mots sont déjà visibles au chargement
  revealWords();

  // Certifications carousel
  const certifs = [
    { icon: '📦', title: 'À remplir', desc: 'Nom et description de la certification à ajouter ici.', empty: true },
    { icon: '📦', title: 'À remplir', desc: 'Nom et description de la certification à ajouter ici.', empty: true },
    { icon: '📦', title: 'À remplir', desc: 'Nom et description de la certification à ajouter ici.', empty: true },
  ];
  let certIdx = 0;

  // On expose la fonction au scope global car elle est appelée par l'attribut onclick dans le HTML
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

  // Projets — sticky preview update on hover
  document.querySelectorAll('.projet-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      const preview = document.querySelector('.projet-preview-placeholder');
      const previewTitle = document.querySelector('.projet-preview-top h3');
      const title = card.dataset.title || 'Aperçu du projet';
      const previewImg = card.dataset.preview;
      const pdf = card.dataset.pdf;
      
      if (preview) {
        preview.style.background = '';
        if (previewImg) {
          preview.innerHTML = `<img src="${previewImg}" alt="${title}" style="width:85%;border-radius:.8rem .8rem 0 0;border:1.5px solid rgba(255,255,255,.15);display:block;margin:0 auto;object-fit:cover;">${pdf ? `<a href="${pdf}" target="_blank" style="font-size:.82rem;color:#818cf8;text-decoration:none;margin-top:.8rem;display:block;text-align:center;">Voir le document →</a>` : ''}`;
        } else {
          const icon = card.dataset.icon || '🗂️';
          preview.style.background = card.dataset.color || '';
          preview.innerHTML = `<div style="font-size:3rem;">${icon}</div>${pdf ? `<a href="${pdf}" target="_blank" style="font-size:.82rem;color:#818cf8;text-decoration:none;margin-top:.5rem;">Voir le document →</a>` : ''}`;
        }
      }
      if (previewTitle) previewTitle.textContent = title;
    });

    card.addEventListener('mouseleave', () => {
      const preview = document.querySelector('.projet-preview-placeholder');
      const previewTitle = document.querySelector('.projet-preview-top h3');
      if (preview) {
        preview.style.background = '';
        preview.innerHTML = '<div style="font-size:3rem;opacity:.2;">🗂️</div><span style="font-size:.82rem;">Sélectionnez un projet</span>';
      }
      if (previewTitle) previewTitle.textContent = 'Aperçu du projet';
    });
  });
});
