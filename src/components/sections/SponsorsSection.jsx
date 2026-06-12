import './SponsorsSection.css';

export default function SponsorsSection() {
  const sponsorData = {
    community: [
      { logo: 'ALPHA', name: 'Alpha Network', tier: 'Community Partner', desc: 'Empowering local tech ecosystems through open-source initiatives and developer mentorship.' },
      { logo: 'PULSE', name: 'DevPulse', tier: 'Community Partner', desc: 'Connecting over 50,000 regional engineers with modern learning tracks and tools.' },
      { logo: 'GUILD', name: 'GuildCraft', tier: 'Community Partner', desc: 'A non-profit foundation focused on bridging the digital divide in classrooms.' },
    ],
    logo: [
      { logo: 'VRTX', name: 'Vertex Design', tier: 'Branding Partner', desc: 'A premium UI/UX design studio crafting digital identities for startup teams.' },
      { logo: 'PXFG', name: 'PixelForge', tier: 'Branding Partner', desc: 'Specialists in high-fidelity vector assets and scalable design languages.' },
      { logo: 'NEON', name: 'Neon Agency', tier: 'Branding Partner', desc: 'Modern creative studio building immersive visual narratives across web media.' },
    ],
    it: [
      { logo: 'QTM', name: 'Quantum Cloud', tier: 'Infrastructure Provider', desc: 'Providing high-availability servers and cloud architecture for live coding labs.' },
      { logo: 'SHLD', name: 'CyberShield', tier: 'Infrastructure Provider', desc: 'Securing event communication channels and ensuring strict user privacy protocols.' },
    ]
  };

  const SponsorCard = ({ sponsor, tier }) => (
    <div className="card-container">
      <div className="sponsorcard">
        <div className="card-front">
          <div className="front-content">
            <div className="logo-div">
              <span className="logo-text">{sponsor.logo}</span>
            </div>
            <div className="sponsor-name">{sponsor.name}</div>
            <div className="sponsor-tier">{sponsor.tier}</div>
          </div>
        </div>
        <div className="card-back">
          <div className="back-content">
            <div className="back-title">{sponsor.name}</div>
            <p className="back-desc">{sponsor.desc}</p>
          </div>
          <a href="/" className="btn btn-visit">Visit Website</a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="sponsors">
      <div className="container">
        <h1 className="main-title">Our Event Sponsors</h1>

        <section className="sponsor-category community-tier">
          <h2 className="category-title">Our Community Sponsors</h2>
          <div className="sponsor-grid">
            {sponsorData.community.map(s => <SponsorCard key={s.name} sponsor={s} tier="community" />)}
          </div>
        </section>

        <section className="sponsor-category logo-tier">
          <h2 className="category-title">Logo Sponsors</h2>
          <div className="sponsor-grid">
            {sponsorData.logo.map(s => <SponsorCard key={s.name} sponsor={s} tier="logo" />)}
          </div>
        </section>

        <section className="sponsor-category it-tier">
          <h2 className="category-title">IT Sponsors</h2>
          <div className="sponsor-grid">
            {sponsorData.it.map(s => <SponsorCard key={s.name} sponsor={s} tier="it" />)}
          </div>
        </section>

        <a href="https://fusionixsponsers.carrd.co/" target="_blank" rel="noreferrer" className="sponsor-btn">Want to be a sponsor</a>
      </div>
    </section>
  );
}
