// import './AboutSection.css';

// export default function AboutSection() {
//   return (
//     <section className="about-section" id="about">
//       <h2 className="about-title">ABOUT <span className="text-glow">US</span></h2>
//       <div className="card-wrapper">
//         <div className="border-glow-container">
//           <div className="about-card-body">
//             <p>FusioniX is a 24-hour hackathon by the Departments of ECE and CSE (IoT) at the University of Engineering &amp; Management, where participants transform ideas into real-world solutions through integrated hardware and software innovation. With no fixed domain — spanning intelligent systems, environmental monitoring, industrial safety, and beyond — teams ideate, design, and prototype across multiple competitive rounds. Judged on creativity and real-world impact, top performers win prizes and cash rewards alongside valuable feedback from industry experts. Full meals provided. At FusioniX, innovation is expected. Ideas become solutions.</p>
//           </div>
//         </div>
//         <button className="know-more-btn">Want to Know More?</button>
//       </div>
//     </section>
//   );
// }


import './AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      {/* SVG clip-path definitions — hidden, referenced by CSS */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <defs>
          {/* Mobile: wave cutout at the bottom center */}
          <clipPath id="mobile-bottom-curve-clip" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H1 V1 C0.75,1 0.65,0.88 0.5,0.88 C0.35,0.88 0.25,1 0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <h2 className="about-title">ABOUT <span className="text-glow">US</span></h2>
      <div className="card-wrapper">
        <div className="border-glow-container">
          <div className="about-card-body">
            <p>FusioniX is a 24-hour hackathon by the Departments of ECE and CSE (IoT) at the University of Engineering &amp; Management, where participants transform ideas into real-world solutions through integrated hardware and software innovation. With no fixed domain — spanning intelligent systems, environmental monitoring, industrial safety, and beyond — teams ideate, design, and prototype across multiple competitive rounds. Judged on creativity and real-world impact, top performers win prizes and cash rewards alongside valuable feedback from industry experts. Full meals provided. At FusioniX, innovation is expected. Ideas become solutions.</p>
          </div>
        </div>
        <button className="know-more-btn">Want to Know More?</button>
      </div>
    </section>
  );
}