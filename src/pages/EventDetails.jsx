import hero1 from '../assets/hero1.png';
import "./EventDetails.css";

const EventDetails = () => {
  return (
    <div className="event-container">
      <h1 className="event-title">BEF Industry Conclave 2025 – Event Details</h1>

      <section className="event-section event-overview-section hero-event-overview">
        <div className="hero-event-content">
          <div className="hero-event-text">
            <h2 className="event-card-title">Event Overview</h2>
            <p className="event-card-description">
              The <strong>Bharat Economic Forum Industry Conclave 2025</strong> is a landmark full-day event bringing together India’s brightest minds and industry leaders at <strong>Bharat Mandapam, New Delhi</strong> on <strong>25th July 2025</strong>.
            </p>
            <ul className="event-hero-list">
              <li>
                <span role="img" aria-label="network">🤝</span> 500+ delegates from across India’s innovation ecosystem
              </li>
              <li>
                <span role="img" aria-label="roundtable">💡</span> 16 industry roundtables on future-defining topics
              </li>
              <li>
                <span role="img" aria-label="awards">🏆</span> Prestigious <strong>Viksit Bharat Awards</strong> ceremony
              </li>
              <li>
                <span role="img" aria-label="networking">🍽️</span> Gourmet meals & exclusive networking opportunities
              </li>
              <li>
                <span role="img" aria-label="media">📺</span> National media coverage and policy impact
              </li>
            </ul>
            <p className="event-card-description">
              <strong>Join us</strong> to shape the vision for a <span style={{color:"#00b4d8", fontWeight:600}}>Viksit Bharat by 2047</span> through innovation, collaboration, and celebration!
            </p>
            <a
              href="https://www.bharateconomicforum.org/register"
              className="event-hero-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </a>
          </div>
          <div className="hero-event-image slide-in">
            <img src={hero1} alt="BEF Industry Conclave 2025" />
          </div>
        </div>
      </section>

      <section className="event-section event-theme-section animate-theme">
        <h2 className="event-card-title">Theme</h2>
        <p className="event-theme-quote">
          <span className="theme-quote-mark">“</span>
          <span className="theme-gradient-text">
            Viksit Bharat by 2047: Innovate, Collaborate, Celebrate
          </span>
          <span className="theme-quote-mark">”</span>
        </p>
        <div className="event-theme-details">
          <p>
            <strong>Viksit Bharat by 2047</strong> is more than a vision—it's a national movement. The 2025 Industry Conclave brings together leaders, innovators, and changemakers to accelerate India's journey toward a developed, inclusive, and sustainable future.
          </p>
          <ul>
            <li><b>Innovate:</b> Embrace new technologies and ideas to drive progress.</li>
            <li><b>Collaborate:</b> Build partnerships across sectors and geographies.</li>
            <li><b>Celebrate:</b> Recognize achievements and inspire the next generation.</li>
          </ul>
          <p>
            Join us as we set the agenda for a thriving, resilient, and globally competitive India!
          </p>
        </div>
      </section>

      <section className="event-section event-date-venue-section">
        <h2 className="event-card-title">Date & Venue</h2>
        <div className="event-date-venue-details">
          <div className="event-date-venue-item">
            <span className="icon-calendar">
              <span className="calendar-pin" />
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <rect x="4" y="8" width="28" height="24" rx="4" fill="#fff" stroke="#00b4d8" strokeWidth="2"/>
                <rect x="10" y="14" width="16" height="6" rx="2" fill="#00b4d8" opacity="0.15"/>
                <rect x="10" y="22" width="8" height="4" rx="2" fill="#00b4d8" opacity="0.15"/>
                <rect x="12" y="4" width="2" height="8" rx="1" fill="#00b4d8"/>
                <rect x="22" y="4" width="2" height="8" rx="1" fill="#00b4d8"/>
              </svg>
            </span>
            <span className="event-date-venue-text">
              <b>25th July 2025</b>
            </span>
          </div>
          <div className="event-date-venue-item">
            <span className="icon-map">
              <span className="map-pin" />
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <ellipse cx="18" cy="24" rx="10" ry="6" fill="#00b4d8" opacity="0.12"/>
                <path d="M18 30C18 30 28 20.5 28 14C28 8.477 23.523 4 18 4C12.477 4 8 8.477 8 14C8 20.5 18 30 18 30Z" stroke="#00b4d8" strokeWidth="2" fill="#fff"/>
                <circle cx="18" cy="14" r="3" fill="#00b4d8" opacity="0.25"/>
              </svg>
            </span>
            <span className="event-date-venue-text">
              <b>Bharat Mandapam, New Delhi</b>
            </span>
          </div>
          <div className="event-date-venue-item">
            <span className="icon-watch">
              <span className="watch-hand" />
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="12" fill="#fff" stroke="#00b4d8" strokeWidth="2"/>
                <circle cx="18" cy="18" r="2" fill="#00b4d8"/>
                <rect x="17.5" y="10" width="3" height="9" rx="1.5" fill="#00b4d8" />
                <rect x="17.5" y="18" width="7" height="2" rx="1" fill="#00b4d8" />
              </svg>
            </span>
            <span className="event-date-venue-text">
              <b>10:00 AM to 9:00 PM IST</b>
            </span>
          </div>
        </div>
      </section>

      <section className="event-section event-why-attend">
        <h2 className="event-card-title">Why Attend?</h2>
        <p className="event-card-description">
          ✓ Engage in 16 industry roundtables<br />
          ✓ Enjoy gourmet meals and luxury networking<br />
          ✓ Connect with CEOs, policymakers, innovators<br />
          ✓ Media visibility across TV, social, and print<br />
          ✓ Witness the prestigious Viksit Bharat Awards
        </p>
      </section>

      <section className="event-section event-industries">
        <h2 className="event-card-title">Industries Covered</h2>
        <p className="event-card-description">
          FoodTech, AgriTech, EdTech, AdTech, MedTech, ClimateTech, FinTech, MSMEs, Tourism, CleanTech, Women Entrepreneurship, AI/Web3, Inclusion, Rural Development, Governance, Urban Planning
        </p>
      </section>

      <section className="event-section event-schedule">
        <h2 className="event-card-title">Schedule Highlights</h2>
        <p className="event-card-description">
          🔹 Opening Ceremony (10:00 AM - 10:30 AM)<br />
          🔹 Industry Dialogues (10:30 AM - 2:00 PM)<br />
          🔹 Viksit Bharat Awards (3:00 PM - 4:30 PM)<br />
          🔹 Private Networking Dinner (4:30 PM - 9:00 PM)
        </p>
      </section>

      <section className="event-section event-delegate">
        <h2 className="event-card-title">Delegate Options</h2>
        <p className="event-card-description">
          🎫 Standard Delegate - ₹35,000<br />
          ✔ Access 2 dialogues, meals, networking, kit<br />
          🎫 VIP Delegate - ₹55,000<br />
          ✔ All sessions, VIP seating, lounge, concierge
        </p>
      </section>

      <section className="event-section event-sponsorship">
        <h2 className="event-card-title">Sponsorship Tiers</h2>
        <p className="event-card-description">
          🏆 Title Sponsor (₹25L), Powered By (₹10L), Industry Sponsor (₹5L), Delegate Kit (₹2L), Digital PR (₹3L), Invite Kit (₹4L)
        </p>
      </section>

      <section className="event-section event-contact">
        <h2 className="event-card-title">Registration & Contact</h2>
        <p className="event-card-description">
          🌐 www.bharateconomicforum.org<br />
          📩 dialogues@bharateconomicforum.org<br />
          📞 +91-9266114256<br />
          🗓️ Register by 1st July 2025<br />
          🗓️ Sponsor by 15th June 2025
        </p>
      </section>
    </div>
  );
};

export default EventDetails;
