/* global React, ReactDOM */
const { useRef, useEffect, useState } = React;

// ─── tiny inline icons (no emoji) ──────────────────────────────────────────
const Icon = ({ d, size = 14, stroke = 1.6 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none"
    stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
    {d}
  </svg>
);
const CoffeeIcon = () => <Icon d={<>
  <path d="M3 8h13v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/>
  <path d="M16 10h2a2 2 0 0 1 0 4h-2"/>
  <path d="M6 3v2M9 3v2M12 3v2"/>
</>} />;
const MoonIcon = () => <Icon d={<>
  <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>
</>} />;
const ClockIcon = () => <Icon d={<>
  <circle cx="12" cy="12" r="9"/>
  <path d="M12 7v5l3 2"/>
</>} />;
const GitHubGlyph = ({ size = 14 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/>
  </svg>
);

// ─── energy pip (custom — looks like a stamped seal, not a Pokémon symbol) ─
const Pip = ({ glyph = '⟨/⟩' }) => (
  <span className="pip" aria-hidden="true">
    <span className="pip-inner">{glyph}</span>
  </span>
);

// ─── fillable line ────────────────────────────────────────────────────────
const FillLine = ({ width = '100%' }) => (
  <span className="fill-line" style={{ width }} />
);

// ─── the card ──────────────────────────────────────────────────────────────
function CollectorCard() {
  const cardRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const card = cardRef.current;
    if (!wrap || !card) return;

    let raf = 0;
    let tx = 0.5, ty = 0.5;          // target
    let cx = 0.5, cy = 0.5;          // current (eased)
    let active = false;

    const tick = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      const rx = (0.5 - cy) * 14;     // deg
      const ry = (cx - 0.5) * 14;
      card.style.setProperty('--rx', `${rx}deg`);
      card.style.setProperty('--ry', `${ry}deg`);
      card.style.setProperty('--mx', `${(cx * 100).toFixed(2)}%`);
      card.style.setProperty('--my', `${(cy * 100).toFixed(2)}%`);
      card.style.setProperty('--active', active ? 1 : 0);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onMove = (e) => {
      const r = card.getBoundingClientRect();
      tx = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
      ty = Math.max(0, Math.min(1, (e.clientY - r.top) / r.height));
      active = true;
    };
    const onLeave = () => {
      tx = 0.5; ty = 0.5; active = false;
    };

    wrap.addEventListener('pointermove', onMove);
    wrap.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      wrap.removeEventListener('pointermove', onMove);
      wrap.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div className="card-wrap" ref={wrapRef}>
      <div className="card" ref={cardRef}>
        {/* paper grain layer */}
        <div className="grain" />

        {/* === header === */}
        <header className="card-head">
          <span className="tag">DEV · BASIC</span>
          <h1 className="name">Ade-gns</h1>
          <div className="head-right">
            <span className="hp-label">XP</span>
            <span className="hp-value">3<span className="hp-unit">ANS</span></span>
            <Pip glyph="⟨/⟩" />
          </div>
        </header>

        {/* === illustration window === */}
        <div className="art-frame">
          <image-slot
            id="ade-avatar"
            shape="rect"
            placeholder="déposez votre avatar ici"
          ></image-slot>
          <div className="art-overlay">
            <span className="holo-shine" />
            <span className="holo-rainbow" />
          </div>
        </div>

        <p className="subline">
          <span className="muted">No.</span> 042
          <span className="dot">·</span>
          Développeur Sauvage
          <span className="dot">·</span>
          <span className="muted">HT:</span> 1m80
          <span className="dot">·</span>
          <span className="muted">CAFÉ:</span> ∞
        </p>

        {/* === moves / projets === */}
        <section className="moves">
          <article className="move">
            <div className="move-head">
              <div className="pips"><Pip glyph="⟨/⟩" /></div>
              <h2 className="move-title">Projet 01</h2>
              <FillLine width="120px" />
            </div>
            <div className="move-body">
              <FillLine />
              <FillLine />
              <FillLine width="78%" />
            </div>
          </article>

          <article className="move">
            <div className="move-head">
              <div className="pips"><Pip glyph="⟨/⟩" /><Pip glyph="{ }" /></div>
              <h2 className="move-title">Projet 02</h2>
              <FillLine width="120px" />
            </div>
            <div className="move-body">
              <FillLine />
              <FillLine />
              <FillLine width="64%" />
            </div>
          </article>
        </section>

        {/* === stats bar === */}
        <div className="stats">
          <div className="stat">
            <span className="stat-label">faiblesse</span>
            <span className="stat-val"><CoffeeIcon /> ×2</span>
          </div>
          <div className="stat">
            <span className="stat-label">résistance</span>
            <span className="stat-val"><MoonIcon /> −20</span>
          </div>
          <div className="stat">
            <span className="stat-label">retraite</span>
            <span className="stat-val"><ClockIcon /><ClockIcon /></span>
          </div>
        </div>

        {/* === footer === */}
        <footer className="card-foot">
          <span className="illus">Illus. <em>moi-même</em></span>
          <div className="foot-right">
            <span className="set">001/001 ◆</span>
            <a className="gh" href="https://github.com/Ade-gns" target="_blank" rel="noopener">
              <GitHubGlyph /> Ade-gns
            </a>
          </div>
          <span className="flavor">
            « git commit -m “ship it” » — sa technique signature.
          </span>
        </footer>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CollectorCard />);
