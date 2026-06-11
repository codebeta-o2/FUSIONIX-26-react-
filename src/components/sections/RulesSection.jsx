import Accordion from '../common/Accordion';
import Reveal from '../common/Reveal';
import './RulesSection.css';

export default function RulesSection() {
  return (
    <section className="rules-section" id="rules">
      <Reveal className="rules-header">
        <div className="rules-bracket rules-bracket--left" aria-hidden="true" />
        <h2 className="rules-title">Rules &amp; Regulations</h2>
        <div className="rules-bracket rules-bracket--right" aria-hidden="true" />
      </Reveal>
      <div className="accordion-grid">
        <Reveal data-delay="100">
          <Accordion label="Do's">
            <ul className="accordion-list">
              <li>Work strictly within the hackathon duration</li>
              <li>Bring your own laptops and required components</li>
              <li>Maintain originality in all submissions</li>
              <li>Follow all timelines and submission rules</li>
            </ul>
          </Accordion>
        </Reveal>
        <Reveal data-delay="250">
          <Accordion label="Don'ts" dark>
            <ul className="accordion-list accordion-list--light">
              <li>Do not use pre-built projects or prior work</li>
              <li>Do not use generative AI tools during the event</li>
              <li>Do not copy or plagiarize code or ideas</li>
              <li>Do not use mobile phones or smart devices during rounds</li>
              <li>Do not violate any event protocols or instructions</li>
            </ul>
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
