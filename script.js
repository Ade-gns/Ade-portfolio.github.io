document.addEventListener('DOMContentLoaded', () => {
 // ── NAVIGATION ACTIVE AU SCROLL ──
 const sections = document.querySelectorAll('section[id]');
 const navLinks = document.querySelectorAll('.nav-links a');
 const navObserver = new IntersectionObserver((entries) => {
 entries.forEach(entry => {
 if (entry.isIntersecting) {
 const id = entry.target.getAttribute('id');
 navLinks.forEach(link => {
 link.classList.toggle('active', link.getAttribute('href') === '#' + id);
 });
 }
 });
 }, { threshold: 0.3, rootMargin: '-10% 0px -70% 0px' });
 sections.forEach(section => navObserver.observe(section));
 // ── APPARITION DES MOTS AU SCROLL ──
 const words = document.querySelectorAll('.fade-word');
 const wordObserver = new IntersectionObserver((entries) => {
 entries.forEach(entry => {
 if (entry.isIntersecting) entry.target.classList.add('visible');
 });
 }, { threshold: 1.0, rootMargin: '0px 0px -10% 0px' });
 words.forEach(word => wordObserver.observe(word));
 // ── CARROUSEL CERTIFICATIONS ──
 const certifs = [
 { icon: ' ', title: 'À remplir', desc: 'Nom et description de la certification à ajouter ici.', empty: true },
 { icon: ' ', title: 'À remplir', desc: 'Nom et description de la certification à ajouter ici.', empty: true },
 { icon: ' ', title: 'À remplir', desc: 'Nom et description de la certification à ajouter ici.', empty: true },
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
 if (iconEl) iconEl.textContent = c.icon;
 if (titleEl) titleEl.textContent = c.title;
 if (descEl) descEl.textContent = c.desc;
 if (circleEl) circleEl.className = 'certif-circle' + (c.empty ? ' empty' : '');
 if (infoEl) infoEl.className = 'certif-info' + (c.empty ? ' empty' : '');
 };
 // ── BARRE DE PROGRESSION AU SCROLL ──
 const progressBar = document.querySelector('.scroll-progress');
 if (progressBar) {
 window.addEventListener('scroll', () => {
 const h = document.documentElement;
 const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
 progressBar.style.width = scrolled + '%';
 }, { passive: true });
 }
 // ── BOUTONS MAGNÉTIQUES ──
 document.querySelectorAll('.btn-pill, .nav-cta').forEach(btn => {
 btn.addEventListener('mousemove', (e) => {
 const r = btn.getBoundingClientRect();
 const x = e.clientX - r.left - r.width / 2;
 const y = e.clientY - r.top - r.height / 2;
 btn.style.transform = `translate(${x * 0.18}px, ${y * 0.25}px)`;
 });
 btn.addEventListener('mouseleave', () => {
 btn.style.transform = '';
 });
 });
 // ── EFFET 3D TILT SUR LES CARTES ──
 document.querySelectorAll('.projet-card-new, .option-card').forEach(card => {
 card.addEventListener('mousemove', (e) => {
 const r = card.getBoundingClientRect();
 const rotX = ((e.clientY - r.top) / r.height - 0.5) * -8;
 const rotY = ((e.clientX - r.left) / r.width - 0.5) * 8;
 card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-5px)`;
 });
 card.addEventListener('mouseleave', () => {
 card.style.transform = '';
 });
 });
});