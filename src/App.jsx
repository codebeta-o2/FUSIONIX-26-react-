// import { useState, useEffect, useRef } from "react";
// import './styles/global.css';
// import Header from './components/sections/Header';
// import HeroSection from './components/sections/HeroSection';
// import AboutSection from './components/sections/AboutSection';
// import TimelineSection from './components/sections/TimelineSection';
// import RulesSection from './components/sections/RulesSection';
// import TeamsSection from './components/sections/TeamsSection';
// import SponsorsSection from './components/sections/SponsorsSection';
// import FAQSection from './components/sections/FAQSection';
// import Footer from './components/sections/Footer';

// // Matrix rain effect styles
// const MATRIX_STYLES = `
// @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@400;600;700&display=swap');

// :root {
//   --matrix-green:   #00FF66;
//   --matrix-glow:    rgba(0, 255, 102, 0.4);
//   --dark-bg:        #030c08;
//   --panel-bg:       rgba(0, 15, 5, 0.75);
//   --neon-green:   #00ff88;
//   --neon-cyan:    #00ccff;
//   --neon-lime:    #7fff00;
//   --neon-dim:     rgba(0, 255, 136, 0.2);
//   --text-primary: #d4ffe8;
//   --text-muted:   #7fa893;
//   --font-display: 'Segoe UI', Roboto, Arial, sans-serif;
//   --font-ui:      'Segoe UI', Arial, sans-serif;
//   --font-body:    'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
//   --space-xs: 8px;
//   --space-sm: 16px;
//   --space-md: 24px;
//   --space-lg: 48px;
//   --space-xl: 80px;
//   --section-px: clamp(16px, 5vw, 40px);
//   --section-py: clamp(40px, 6vw, 80px);
//   --ease: 0.35s cubic-bezier(0.4, 0, 0.2, 1);
//   --bg:        #070d0a;
//   --surface:   #0e1a14;
//   --accent:    #00ff7f;
//   --accent2:   #00e5ff;
//   --accent3:   #ff4d94;
//   --card-bg:   rgba(255,255,255,0.04);
//   --card-bdr:  rgba(0,255,127,0.12);
//   --text:      #c8e6c9;
//   --muted:     #4a7c59;
// }
// `;

// export default function App() {
//   const matrixCanvasRef = useRef(null);

//   // Inject matrix styles once
//   useEffect(() => {
//     const style = document.createElement('style');
//     style.textContent = MATRIX_STYLES;
//     document.head.appendChild(style);
//     return () => document.head.removeChild(style);
//   }, []);

//   // Matrix rain effect
//   useEffect(() => {
//     const canvas = matrixCanvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+=_';
//     const FS = 20;
//     let drops = [], rafId = null, lastTime = 0, running = false;

//     const lowPower = window.matchMedia('(prefers-reduced-motion: reduce)').matches
//       || (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4);
//     if (lowPower) { canvas.style.display = 'none'; return; }

//     function resize() {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       drops = Array.from({ length: Math.floor(canvas.width / FS) }, () => 1);
//     }
    
//     function draw() {
//       ctx.fillStyle = 'rgba(3, 12, 8, 0.15)';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
//       ctx.fillStyle = '#00FF66';
//       ctx.font = FS + 'px monospace';
//       drops.forEach((y, i) => {
//         ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], i * FS, y * FS);
//         if (y * FS > canvas.height && Math.random() > 0.975) drops[i] = 0;
//         drops[i]++;
//       });
//     }
    
//     function step(ts) {
//       if (document.hidden) { running = false; rafId = null; return; }
//       if (!lastTime || ts - lastTime >= 33) { draw(); lastTime = ts; }
//       rafId = requestAnimationFrame(step);
//     }
    
//     function startMatrix() { if (running) return; running = true; rafId = requestAnimationFrame(step); }
//     function stopMatrix() { if (rafId) cancelAnimationFrame(rafId); rafId = null; running = false; }

//     resize();
//     window.addEventListener('resize', resize);
//     document.addEventListener('visibilitychange', () => document.hidden ? stopMatrix() : startMatrix());
//     startMatrix();
    
//     return () => { stopMatrix(); window.removeEventListener('resize', resize); };
//   }, []);

//   return (
//     <>
//       {/* SVG clip-path */}
//       <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
//         <defs>
//           <clipPath id="custom-curve-clip" clipPathUnits="objectBoundingBox">
//             <path d="M 0.03,0 L 0.85,0 A 0.03 0.03 0 0 1 0.88 0.02 C 0.88 0.15, 0.75 0.35, 0.75 0.5 C 0.75 0.65, 0.88 0.85, 0.88 0.98 A 0.03 0.03 0 0 1 0.85 1 L 0.03,1 A 0.03 0.03 0 0 1 0,0.95 L 0,0.05 A 0.03 0.03 0 0 1 0.03,0 Z" />
//           </clipPath>
//         </defs>
//       </svg>

//       {/* Matrix canvas background */}
//       <canvas id="matrixCanvas" ref={matrixCanvasRef} aria-hidden="true" />

//       {/* All sections as components */}
//       <Header />
//       <HeroSection />
//       <AboutSection />
//       <TimelineSection />
//       <RulesSection />
//       <TeamsSection />
//       <SponsorsSection />
//       <FAQSection />
//       <Footer />
//     </>
//   );
// }






import { useEffect, useRef } from "react";
import "./styles/global.css";

import Header from "./components/sections/Header";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import TimelineSection from "./components/sections/TimelineSection";
import RulesSection from "./components/sections/RulesSection";
import TeamsSection from "./components/sections/TeamsSection";
import SponsorsSection from "./components/sections/SponsorsSection";
import FAQSection from "./components/sections/FAQSection";
import Footer from "./components/sections/Footer";

const MATRIX_STYLES = `
:root {
  --matrix-green: #00FF66;
  --dark-bg: #030c08;
}
`;

export default function App() {
  const matrixCanvasRef = useRef(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = MATRIX_STYLES;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const canvas = matrixCanvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const CHARS =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+=_";

    const FONT_SIZE = 20;

    let drops = [];
    let animationId = null;
    let lastFrame = 0;
    let running = false;

    const lowPower =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches ||
      (navigator.hardwareConcurrency &&
        navigator.hardwareConcurrency < 4);

    if (lowPower) {
      canvas.style.display = "none";
      return;
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      drops = Array.from(
        { length: Math.floor(canvas.width / FONT_SIZE) },
        () => 1
      );
    }

    function drawMatrix() {
      ctx.fillStyle = "rgba(3,12,8,0.15)";
      ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      ctx.fillStyle = "#00FF66";
      ctx.font = `${FONT_SIZE}px monospace`;

      drops.forEach((y, i) => {
        const text =
          CHARS[
            Math.floor(
              Math.random() * CHARS.length
            )
          ];

        ctx.fillText(
          text,
          i * FONT_SIZE,
          y * FONT_SIZE
        );

        if (
          y * FONT_SIZE > canvas.height &&
          Math.random() > 0.975
        ) {
          drops[i] = 0;
        }

        drops[i]++;
      });
    }

    function animate(timestamp) {
      if (document.hidden) {
        running = false;
        animationId = null;
        return;
      }

      if (
        !lastFrame ||
        timestamp - lastFrame >= 33
      ) {
        drawMatrix();
        lastFrame = timestamp;
      }

      animationId =
        requestAnimationFrame(animate);
    }

    function start() {
      if (running) return;

      running = true;
      animationId =
        requestAnimationFrame(animate);
    }

    function stop() {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }

      animationId = null;
      running = false;
    }

    resizeCanvas();

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    window.addEventListener(
      "orientationchange",
      resizeCanvas
    );

    document.addEventListener(
      "visibilitychange",
      () => {
        if (document.hidden) {
          stop();
        } else {
          start();
        }
      }
    );

    start();

    return () => {
      stop();

      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      window.removeEventListener(
        "orientationchange",
        resizeCanvas
      );
    };
  }, []);

  return (
    <>
      <svg
        width="0"
        height="0"
        style={{
          position: "absolute",
          pointerEvents: "none",
        }}
      >
        <defs>
          <clipPath
            id="custom-curve-clip"
            clipPathUnits="objectBoundingBox"
          >
            <path d="M 0.03,0 L 0.85,0 A 0.03 0.03 0 0 1 0.88 0.02 C 0.88 0.15, 0.75 0.35, 0.75 0.5 C 0.75 0.65, 0.88 0.85, 0.88 0.98 A 0.03 0.03 0 0 1 0.85 1 L 0.03,1 A 0.03 0.03 0 0 1 0,0.95 L 0,0.05 A 0.03 0.03 0 0 1 0.03,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <canvas
        id="matrixCanvas"
        ref={matrixCanvasRef}
        aria-hidden="true"
      />

      <Header />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <RulesSection />
      <TeamsSection />
      <SponsorsSection />
      <FAQSection />
      <Footer />
    </>
  );
}