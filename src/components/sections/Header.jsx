import { useState, useCallback } from 'react';
import './Header.css';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' }, 
    { href: '#about', label: 'About' }, 
    { href: '#timeline', label: 'Timeline' },
    { href: '#teams', label: 'Teams' }, 
    { href: '#sponsors', label: 'Sponsors' }, 
    { href: '#contact', label: 'Contact' }
  ];

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  return (
    <>
      <header>
        <ul className="nav-links" aria-label="Primary navigation">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#timeline">Timeline</a></li>
        </ul>
        <div className="logo">
          <img 
            src="image/logo.png" 
            alt="FusioniX logo" 
            loading="lazy" 
            decoding="async" 
            onError={e => e.target.style.display='none'} 
          />
        </div>
        <span className="mobile-brand" aria-hidden="true">FUSIONIX</span>
        <ul className="nav-links" aria-label="Secondary navigation">
          <li><a href="#teams">Teams</a></li>
          <li><a href="#sponsors">Sponsors</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button 
          className="menu-toggle" 
          aria-label="Open mobile menu" 
          aria-expanded={drawerOpen} 
          onClick={() => setDrawerOpen(true)}
        >
          <span className="bar" /><span className="bar" /><span className="bar" />
        </button>
      </header>

      <div className={`mobile-drawer${drawerOpen ? ' open' : ''}`} aria-hidden={!drawerOpen} role="dialog" aria-label="Mobile navigation">
        <button className="drawer-close" aria-label="Close mobile menu" onClick={closeDrawer}>×</button>
        <nav>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={closeDrawer}>{l.label}</a>
          ))}
        </nav>
      </div>
      <div className={`drawer-overlay${drawerOpen ? ' open' : ''}`} onClick={closeDrawer} />
    </>
  );
}
