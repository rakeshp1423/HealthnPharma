import React from "react";
import "./EventDetails.css"; // Optional if you want to move styles to a CSS file

const sections = [
  {
    title: "Event Overview",
    description:
      "The Bharat Economic Forum Industry Conclave 2025 is a full-day event at Bharat Mandapam, New Delhi, on 25th July 2025. It aims to spark innovation and collaboration for a Viksit Bharat by 2047.",
  },
  {
    title: "Theme",
    description: '"Viksit Bharat by 2047: Innovate, Collaborate, Celebrate"',
  },
  {
    title: "Date & Venue",
    description:
      "📅 25th July 2025\n📍 Bharat Mandapam, New Delhi\n🕙 10:00 AM to 9:00 PM IST",
  },
  {
    title: "Why Attend?",
    description:
      "✓ Engage in 16 industry roundtables\n✓ Enjoy gourmet meals and luxury networking\n✓ Connect with CEOs, policymakers, innovators\n✓ Media visibility across TV, social, and print\n✓ Witness the prestigious Viksit Bharat Awards",
  },
  {
    title: "Industries Covered",
    description:
      "FoodTech, AgriTech, EdTech, AdTech, MedTech, ClimateTech, FinTech, MSMEs, Tourism, CleanTech, Women Entrepreneurship, AI/Web3, Inclusion, Rural Development, Governance, Urban Planning",
  },
  {
    title: "Schedule Highlights",
    description:
      "🔹 Opening Ceremony (10:00 AM - 10:30 AM)\n🔹 Industry Dialogues (10:30 AM - 2:00 PM)\n🔹 Viksit Bharat Awards (3:00 PM - 4:30 PM)\n🔹 Private Networking Dinner (4:30 PM - 9:00 PM)",
  },
  {
    title: "Delegate Options",
    description:
      "🎫 Standard Delegate - ₹35,000\n✔ Access 2 dialogues, meals, networking, kit\n🎫 VIP Delegate - ₹55,000\n✔ All sessions, VIP seating, lounge, concierge",
  },
  {
    title: "Sponsorship Tiers",
    description:
      "🏆 Title Sponsor (₹25L), Powered By (₹10L), Industry Sponsor (₹5L), Delegate Kit (₹2L), Digital PR (₹3L), Invite Kit (₹4L)",
  },
  {
    title: "Registration & Contact",
    description:
      "🌐 www.bharateconomicforum.org\n📩 dialogues@bharateconomicforum.org\n📞 +91-9266114256\n🗓️ Register by 1st July 2025\n🗓️ Sponsor by 15th June 2025",
  },
];

const EventDetails = () => {
  return (
    <div className="event-container">
      <h1 className="event-title">BEF Industry Conclave 2025 – Event Details</h1>
      <div className="event-grid">
        {sections.map((section, index) => (
          <div className="event-card" key={index}>
            <h2 className="event-card-title">{section.title}</h2>
            <p className="event-card-description">
              {section.description.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDetails;
