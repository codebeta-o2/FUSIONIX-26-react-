import Reveal from '../common/Reveal';
import './TimelineSection.css';

export default function TimelineSection() {
  return (
    <section className="timeline-section" id="timeline">
      <Reveal className="timeline-header">
        <h2 className="timeline-title">Timeline</h2>
        <div className="title-underline" />
      </Reveal>
      <div className="road-wrapper">
        <svg viewBox="0 0 900 1200" aria-hidden="true">
          <path className="road-line" d="M 470 80 C 760 90, 760 240, 480 250 C 180 260, 180 420, 640 430 C 860 440, 760 650, 350 690 C 80 720, 120 930, 650 960" />
        </svg>
        <Reveal className="card concept blue" data-delay="100">
          <h2>Concept Qualifier</h2>
          <p>Teams submit pitch decks and videos online</p>
        </Reveal>
        <Reveal className="card hardware green" data-delay="250">
          <h2>Hardware &amp; Architecture Phase</h2>
          <p>Teams assemble components and design architecture offline</p>
        </Reveal>
        <Reveal className="card software yellow" data-delay="400">
          <h2>Software &amp; Logic Sprint</h2>
          <p>Teams develop and integrate software with hardware offline</p>
        </Reveal>
        <div className="pin blue-pin" aria-hidden="true">✦</div>
        <div className="pin green-pin" aria-hidden="true">⌘</div>
        <div className="pin yellow-pin" aria-hidden="true">⚙</div>
      </div>
    </section>
  );
}
