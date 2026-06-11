import { useState } from 'react';
import './FaqItem.css';

export default function FaqItem({ question, children, hidden, shown }) {
  const [active, setActive] = useState(false);
  return (
    <div className={`faq-item${hidden ? ' hidden-faq' : ''}${hidden && shown ? ' shown' : ''}`}>
      <button className="faq-question" onClick={() => setActive(!active)}>
        {question}
        <span className="faq-icon">{active ? '−' : '+'}</span>
      </button>
      <div className="faq-answer" style={active ? { maxHeight: '500px', paddingTop: '10px' } : {}}>
        <div className="faq-answer-content">{children}</div>
      </div>
    </div>
  );
}
