import { useState, useEffect, useRef } from 'react';
import { createSnake, SNAKE_COLORS } from '../../utils/snakeUtils';
import './TeamCard.css';

export default function TeamCard({ name, role, imgSrc, imgAlt, index }) {
  const cardRef = useRef(null);
  const cardCanvasRef = useRef(null);
  const profileCanvasRef = useRef(null);
  const wrapRef = useRef(null);
  const snakesRef = useRef(null);

  useEffect(() => {
    if (!cardCanvasRef.current || !profileCanvasRef.current) return;
    const col = SNAKE_COLORS[index % SNAKE_COLORS.length];
    const col2 = SNAKE_COLORS[(index + 2) % SNAKE_COLORS.length];
    const cardSnake = createSnake(cardCanvasRef.current, { color: col, speed: 0.005, trailLen: 0.30, lineWidth: 2.5 });
    const profileSnake = createSnake(profileCanvasRef.current, { color: col2, speed: 0.008, trailLen: 0.35, lineWidth: 2, glowBlur: 10 });
    snakesRef.current = { cardSnake, profileSnake };
    return () => { cardSnake.destroy(); profileSnake.destroy(); };
  }, [index]);

  useEffect(() => {
    if (!wrapRef.current) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { wrapRef.current?.classList.add('visible'); obs.disconnect(); } });
    }, { threshold: 0.15 });
    obs.observe(wrapRef.current);
    return () => obs.disconnect();
  }, []);

  const onEnter = () => { snakesRef.current?.cardSnake.start(); snakesRef.current?.profileSnake.start(); };
  const onLeave = () => { snakesRef.current?.cardSnake.stop(); snakesRef.current?.profileSnake.stop(); };

  return (
    <div className="team-card-wrap" ref={wrapRef}>
      <canvas className="card-snake-canvas" ref={cardCanvasRef} />
      <div className="team-card" ref={cardRef} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <div className="profile-wrap">
          <img 
            className="profile-photo" 
            src={imgSrc} 
            alt={imgAlt} 
            loading="lazy" 
            decoding="async" 
            onError={e => e.target.style.display='none'} 
          />
          <canvas className="profile-snake-canvas" ref={profileCanvasRef} />
        </div>
        <div className="card-name">{name}</div>
        {role && <div className="card-role">{role}</div>}
        <div className="card-socials">
          <div className="social-dot">in</div>
          <div className="social-dot">✉</div>
        </div>
      </div>
    </div>
  );
}
