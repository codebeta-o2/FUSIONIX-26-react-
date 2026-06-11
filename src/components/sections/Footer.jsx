import './Footer.css';

export default function Footer() {
  const quickLinks = [
    ['#home','Home'],
    ['#about','About'],
    ['#timeline','Timeline'],
    ['#teams','Teams'],
    ['#sponsors','Sponsors'],
    ['#faq',"FAQ's"]
  ];

  return (
    <footer className="footer" id="contact">
      <div style={{ backgroundColor: 'black' }}>
        <div className="footer-container">
          <div>
            <div className="footer-logo">FusioniX</div>
            <p style={{ color: '#9fd7bb', lineHeight: '1.8' }}>
              The Ultimate Sustainable Tech &amp; IoT Innovation Hackathon organized by ECE &amp; CSE(IoT), UEM Kolkata.
            </p>
            <div className="footer-contact-left">
              <table className="footer-contact-table">
                <tbody>
                  <tr>
                    <td rowSpan="3" className="phone-icon">📞</td>
                    <td className="contact-name"><a href="tel:+917063194265">Abhiraj Saha</a></td>
                    <td className="contact-number"><a href="tel:+917063194265">+91 70631 94265</a></td>
                  </tr>
                  <tr>
                    <td className="contact-name"><a href="tel:+919876543210">Debdip Ghosh</a></td>
                    <td className="contact-number"><a href="tel:+919876543210">+91 98765 43210</a></td>
                  </tr>
                  <tr>
                    <td className="contact-name"><a href="tel:+919123456789">Shibangi Bose</a></td>
                    <td className="contact-number"><a href="tel:+919123456789">+91 91234 56789</a></td>
                  </tr>
                </tbody>
              </table>
              <p>📧 <a href="mailto:fusionix2026@gmail.com">fusionix2026@gmail.com</a></p>
              <div className="footer-socials">
                <a href="YOUR_INSTAGRAM_LINK" target="_blank" rel="noreferrer">
                  <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" loading="lazy" decoding="async" alt="Instagram icon" />
                </a>
                <a href="YOUR_LINKEDIN_LINK" target="_blank" rel="noreferrer">
                  <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" loading="lazy" decoding="async" alt="LinkedIn icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map(([href, label]) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-map">
            <h3>UEM Kolkata Location</h3>
            <iframe
              src="https://maps.google.com/maps?q=University%20of%20Engineering%20and%20Management%20Kolkata&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="UEM Kolkata location map"
            />
            <p className="footer-address">
              📍 University of Engineering &amp; Management, AA-III/B, University Area, New Town, Kolkata, West Bengal, 700160
            </p>
          </div>
        </div>
        <div className="footer-bottom">FUSIONIX 2026. ALL RIGHTS RESERVED</div>
      </div>
    </footer>
  );
}
