# 🖥️ Portfolio — Adelphe Borges-Silva

> Portfolio personnel développé dans le cadre de la validation du **BTS SIO option SISR** à H3 Hitema (Paris), en alternance.

---

## 👤 À propos

Je suis **Adelphe Borges-Silva**, technicien informatique en alternance chez **Fiducial** (Courbevoie), avec plus de 6 ans d'expérience terrain dans le support, l'administration système et la gestion de parcs informatiques.

- 📍 Gonesse (95500)
- 📞 07 52 91 88 08
- 🔗 [LinkedIn](https://linkedin.com/in/ad%C3%A8lphe-borges-silva-b45936316)
- 💻 [GitHub](https://github.com/Ade-gns)

---

## 🎓 Formation

| Diplôme | Établissement | Année |
|---|---|---|
| BTS SIO – Option SISR | H3 Hitema, Paris | 2024 – 2026 |
| Bac Pro Systèmes Numériques | Lycée la Tourelle, Sarcelles | 2017 – 2020 |

---

## 💼 Expériences

### Fiducial — *Technicien Support de proximité* *(Sept. 2025 – présent)*
- Support de proximité et assistance technique à distance
- Déploiement et gestion de postes (PDQ, GLPI)
- Gestion de tickets

### AXA France — *Technicien Support Informatique* *(Avr. – Sept. 2025)*
- Migration et enrôlement d'appareils mobiles (iPad, iPhone) via MDM
- Support à distance et assistance technique
- Gestion de postes (Intune)

### JDC – Aubervilliers — *Technicien Informatique* *(Sept. 2024 – Mars 2025)*
- Paramétrage de périphériques (imprimantes, scanners)
- Installation et configuration de solutions de sécurité
- Support à distance (TeamViewer), déploiement et migration de postes

### Lycée François Rabelais – Dugny — *Assistant d'Éducation & Référent Informatique* *(Sept. 2022 – Août 2024)*
- Encadrement, gestion administrative et support technique
- Formation des étudiants et du personnel, distribution de PC
- Gestion de l'Active Directory

### Mairie de Gonesse — *Technicien Informatique DSI* *(Sept. 2020 – Août 2022)*
- Administration, maintenance et support du parc informatique
- Assistance technique et gestion des incidents
- Déploiement d'applications métiers et outils collaboratifs
- Sécurisation des systèmes et participation aux projets d'évolution du SI

---

## 🛠️ Compétences techniques

| Catégorie | Outils / Technologies |
|---|---|
| Systèmes | Windows 11, Linux, macOS, Windows Server |
| Administration | Active Directory, Intune (MDM), Workspace One |
| Réseaux | Gestion des réseaux LAN/WAN, sécurité informatique |
| Support | GLPI, PDQ, TeamViewer, ticketing |
| Monitoring | Grafana |
| Reporting | Power BI |
| Mobilité | Enrôlement MDM (iPad, iPhone) |

---

## 📂 Structure du projet

```
portfolio/
├── index.html            # Page principale (portfolio)
├── Carte Dev.html        # Carte de dresseur interactive
├── Pixel Sky.html        # Ciel pixel art animé (prototype)
├── script.js             # Scripts et interactions
├── css/
│   ├── style.css         # Styles de la page principale
│   └── carte-dev.css     # Styles de la Carte Dev
├── js/
│   ├── image-slot.js     # Web Component drag-drop d'image
│   └── tweaks-panel.jsx  # Panneau de réglages live (React)
├── logos/                # Icônes technos et avatar
├── previews/             # Aperçus des documents PDF
└── README.md
```

---

## ✨ Carte Dev

Page dédiée inspirée des cartes Pokémon, accessible depuis le menu principal.

- **Carte collector** interactive avec effet holographique 3D au survol
- **Fond Pixel Sky** — ciel animé en pixel art (canvas) avec nuages, étoiles, lune/soleil
- **Panneaux glassmorphisme** — Contributions GitHub live + section "Ce que j'aime"
- **Tweaks panel** — bouton ✦ (bas droite) pour régler la palette du ciel, vitesse des nuages, taille des pixels, scanlines CRT, etc.
- Projets GitHub récupérés en direct via l'API GitHub

**Palettes disponibles** : Nuit · Aube · Coucher · Midi · Menthe

---

## 🚀 Lancer le projet en local

```bash
git clone https://github.com/Ade-gns/Ade-portfolio.github.io.git
cd Ade-portfolio.github.io
# Servir via un serveur HTTP local (requis pour les appels API)
python3 -m http.server 8000
# Ouvrir http://localhost:8000 dans le navigateur
```

> Un serveur HTTP local est recommandé pour les requêtes API GitHub.

---

## 🛠️ Stack technique

| Couche | Technologie |
|---|---|
| Structure | HTML5 sémantique |
| Styles | CSS3 (custom properties, grid, glassmorphism) |
| Interactivité | React 18 (UMD CDN) + Babel standalone |
| Animations | Canvas 2D (pixel sky), CSS 3D transforms |
| Données | GitHub REST API (repos, stats) |
| Composants | Web Components (`<image-slot>`) |

Aucune dépendance npm — tout fonctionne sans build step.

---

## 📌 Objectif du portfolio

Ce portfolio a été conçu pour :
- Présenter mon parcours et mes compétences en informatique
- Valider le diplôme **BTS SIO SISR**
- Servir de vitrine professionnelle pour mes futures candidatures

---

*Développé par Adelphe Borges-Silva — 2026*
