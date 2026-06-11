import { useState } from 'react';
import FaqItem from '../common/FaqItem';
import './FAQSection.css';

export default function FAQSection() {
  const [faqExpanded, setFaqExpanded] = useState(false);

  const visibleFaqs = [
    { q: 'Why should I join FusioniX?', a: <ul><li>Get a chance to win from a ₹50,000 prize pool.</li><li>Gain exposure to integrated hardware and software systems, extending beyond conventional academic projects.</li><li>Engage in hands-on development by working on real-world challenges within a time-bound environment.</li><li>Collaborate with participants from diverse institutions and technical backgrounds.</li><li>Present your ideas and prototypes before a panel of evaluators.</li><li>The platform offers scope for professional visibility, with potential pathways toward internships and career opportunities for distinguished participants.</li><li>Promising solutions may attract further exploration, development, or real-world applicability beyond the duration of the hackathon.</li></ul> },
    { q: 'Who can participate?', a: 'Current students from IEM Newtown Campus and IEM Saltlake Campus are eligible to participate.' },
    { q: 'What is the maximum/minimum team size?', a: 'Each team may consist of a minimum of 3 and a maximum of 4 participants.' },
  ];

  const hiddenFaqs = [
    { q: 'Are cross-institutional teams between both campuses allowed?', a: 'Yes. Teams may be formed with students from either of the two campuses.' },
    { q: 'Can I participate solo?', a: 'We strongly encourage teamwork, solo participation will not be permitted.' },
    { q: 'What is the participation fee?', a: 'The registration fee for participation is 400 INR per team.' },
    { q: 'What is the theme of this Hackathon?', a: 'This hackathon focuses on the theme of sustainability, encouraging participants to develop innovative solutions that address environmental and social challenges for a better future.' },
    { q: 'Where will the grand finale be held?', a: 'The grand finale will be hosted at: University of Engineering and Management, University Area, Action Area III, Newtown, Kolkata – 700160.' },
    { q: 'Can I participate remotely?', a: 'The idea submission round will be conducted online, allowing participants to take part remotely. However, all subsequent rounds will be held offline, and participants must be physically present for them.' },
    { q: 'Are we allowed to leave the campus before the conclusion of the hackathon?', a: 'No. Participants must remain on campus until the hackathon concludes. Leaving early will result in disqualification, as midway evaluations will take place.' },
    { q: 'Will there be any food provided by the organising team?', a: 'Lunch, snacks, and dinner will be provided to all participants by the organising team.' },
    { q: 'If we have any queries, where should we reach out?', a: 'For any further queries, please contact the event leads using the phone numbers provided on the website.' },
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="faq-spotlight spotlight-left" />
      <div className="faq-spotlight spotlight-right" />
      <h1 className="faq-title">FAQs</h1>
      <div className="faq-container">
        {visibleFaqs.map((faq, i) => (
          <FaqItem key={i} question={faq.q}>{faq.a}</FaqItem>
        ))}

        {hiddenFaqs.map((faq, i) => (
          <FaqItem key={i} question={faq.q} hidden shown={faqExpanded}>{faq.a}</FaqItem>
        ))}

        <div className="show-more-btn-wrap">
          <button className="show-more-btn" onClick={() => setFaqExpanded(!faqExpanded)}>
            {faqExpanded ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </section>
  );
}
