import { useEffect, useRef } from 'react';
import './HeroSection.css';
import { Application } from "@splinetool/runtime";;

export default function HeroSection() {
  const splineCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = splineCanvasRef.current;
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    
function loadSpline() {
  const app = new Application(canvas);

  app.load(
    "https://prod.spline.design/60rcxftHjrZq554K/scene.splinecode"
  )
  .then(() => {
    const robot = app.findObjectByName("Robot");

    if (!robot) return;

    const center = () => {
      robot.position.x = 0;
      robot.position.y = 0;
    };

    center();
    window.addEventListener("resize", center);
  })
  .catch((err) => {
    console.log(err);
  });
}

    const obs = new IntersectionObserver((entries, o) => {
      if (entries.some(e => e.isIntersecting)) {
        if ('requestIdleCallback' in window) requestIdleCallback(loadSpline, { timeout: 1500 });
        else loadSpline();
        o.disconnect();
      }
    }, { rootMargin: '200px 0px' });
    obs.observe(canvas);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="hero-section" id="home">
      <canvas id="canvas3d" className="canvas" ref={splineCanvasRef} aria-hidden="true" />
      <div className="hero-container">
        <div className="left-panel">
          <div className="sci-fi-box">
            <div className="tagline">INNOVATE • BUILD • SUSTAIN</div>
            <h1>
              THE ULTIMATE<br />
              <span className="text-glow">SUSTAINABLE<br />ECE &amp; IoT</span><br />
              INNOVATION<br />
              <span className="text-glow">HACKATHON</span>
            </h1>
            <p className="subtitle">Build solutions for a smarter, greener<br />and more connected tomorrow.</p>
          </div>
        </div>
        <div className="center-panel">
          <button className="register-btn-glow" onClick={() => alert('Registration coming soon!')}>REGISTER NOW!!</button>
        </div>
        <div className="right-panel">
          <div className="perk-badge">
            <div className="perk-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00FF66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
              </svg>
            </div>
            50K Prize Pool
          </div>
          <div className="perk-badge">
            <div className="perk-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00FF66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            24Hr Hackathon
          </div>
          <div className="perk-badge">
            <div className="perk-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00FF66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
            Org. By ECE &amp; CSE(IoT)
          </div>
        </div>
      </div>
    </section>
  );
}
