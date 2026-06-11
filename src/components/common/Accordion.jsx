import { useState, useRef } from 'react';
import './Accordion.css';

export default function Accordion({ label, dark, children }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef(null);

  const toggle = () => {
    const body = bodyRef.current;
    if (!open) {
      body.style.maxHeight = body.scrollHeight + 'px';
      body.classList.add('is-open');
    } else {
      body.style.maxHeight = '0px';
      body.classList.remove('is-open');
    }
    setOpen(!open);
  };

  return (
    <div className={`accordion-box${dark ? ' accordion-box--dark' : ''}${open ? ' is-open' : ''}`}>
      <button className="accordion-header" aria-expanded={open} onClick={toggle}>
        <span className={`accordion-label${dark ? ' accordion-label--light' : ''}`}>{label}</span>
        <span className={`accordion-toggle${dark ? ' accordion-toggle--light' : ''}`}>{open ? '−' : '+'}</span>
      </button>
      <div className="accordion-body" ref={bodyRef} role="region">
        {children}
      </div>
    </div>
  );
}
