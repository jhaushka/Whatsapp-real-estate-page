
import './HeroSection.css';
import {
  FaHome,
  FaCalendarAlt,
  FaWhatsapp,
  FaChartLine,
  FaUsers,
  FaFileAlt,
  FaMicrophone,
  FaStar,
  FaRulerCombined,
  FaPaperPlane,
  FaUserTie,
  FaRobot,
} from "react-icons/fa";
import { MdBusiness } from "react-icons/md";

const stats = [
  {
    icon: <FaWhatsapp />,
    value: "10M+",
    label: "WhatsApp Messages Sent",
  },
  {
    icon: <FaUsers />,
    value: "500K+",
    label: "Property Inquiries Generated",
  },
  {
    icon: <FaCalendarAlt />,
    value: "50K+",
    label: "Site Visits Scheduled",
  },
  {
    icon: <FaChartLine />,
    value: "90%+",
    label: "Message Open Rate",
  },
];

const partners = [
  {
    name: "Meta",
    logo: "/images/meta-logo.png",
    subtitle: "Tech Provider Partner",
  },
  {
    name: "WhatsApp",
    logo: "/images/whatsapp-logo.png",
    subtitle: "Business API",
  },
  {
    name: "Google Cloud",
    logo: "/images/google-cloud-logo.png",
    subtitle: "Partner",
  },
  {
    name: "ISO",
    logo: "/images/iso-logo.png",
    subtitle: "27001 Certified",
  },
];

const HeroSection = () => {
  return (
    <section className="wre-hero-section">
      <div className="container">
        <div className="row align-items-center">

          {/* ── Left Content ── */}
          <div className="col-lg-6 wre-hero-left">

            <div className="wre-hero-badge">
              <FaHome className="wre-icon" />
              Trusted by Real Estate Developers, Brokers & Property Consultants
            </div>

            <h1 className="wre-hero-title">
              WhatsApp Business
              <span className="wre-hero-title-green"> API for Real Estate</span>
            </h1>

            <p className="wre-hero-desc">
              Generate more property inquiries with our AI Campaign Studio,
              automate follow-ups using Conversational AI Prompt Bots,
              schedule site visits instantly, and convert prospects into buyers
              with WhatsApp Business API.
            </p>

            <div className="wre-hero-cta-row">
              <a href="#" className="wre-btn-primary">
                <FaWhatsapp />
                Start Free Trial
              </a>
              <a href="#" className="wre-btn-outline">
                <FaCalendarAlt />
                Book a Demo
              </a>
            </div>

            <div className="wre-hero-rating">
              <div className="wre-stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span className="wre-rating-text">Trusted by 500+ Real Estate Businesses</span>
            </div>

            <div className="row wre-stats-row">
              {stats.map((stat) => (
                <div className="col-6 col-lg-3" key={stat.label}>
                  <div className="wre-stat-item">
                    <div className="wre-stat-icon">
                      {stat.icon}
                    </div>

                    <div className="wre-stat-value">
                      {stat.value}
                    </div>

                    <div className="wre-stat-label">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="wre-partners-wrapper">
              {partners.map((partner) => (
                <div
                  className="wre-partner-card"
                  key={partner.name}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                  />

                  <div>
                    <h6>{partner.name}</h6>
                    <span>{partner.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* ── Right: Phone Mockup ── */}
<div className="col-lg-6 wre-hero-right">
  <div className="wre-hero-mockup-wrapper">

    {/* decorative background shape */}
    <div className="wre-hero-art-bg"></div>
    <div className="wre-hero-art-dots"></div>

   
        {/* Building composition behind phone */}
    <div className="wre-buildings-layer">
      <img
        src="/images/side-tower.png"
        alt="Left Tower"
        className="wre-side-tower wre-side-tower-left"
      />

      <img
        src="/images/hero-building.png"
        alt="Main Building"
        className="wre-building-img"
      />

    </div>

    {/* floating cards */}
    <div className="wre-float-card wre-float-top-left">
      <div className="wre-float-card-head">
        <span className="wre-float-icon green">
          <FaUsers />
        </span>
        <div>
          <div className="wre-float-value">1,250</div>
          <div className="wre-float-label">New Property Inquiries</div>
        </div>
      </div>
      <div className="wre-float-bars green">
        <span></span><span></span><span></span><span></span>
      </div>
    </div>

    <div className="wre-float-card wre-float-mid-left">
      <div className="wre-float-card-head">
        <span className="wre-float-icon lime">
          <FaCalendarAlt />
        </span>
        <div>
          <div className="wre-float-value">347</div>
          <div className="wre-float-label">Site Visits Scheduled</div>
        </div>
      </div>
      <div className="wre-float-line-up green"></div>
    </div>

    <div className="wre-float-card wre-float-bottom-left">
      <div className="wre-float-card-head">
        <span className="wre-float-icon purple">
          <FaRobot />
        </span>
        <div>
          <div className="wre-float-small-title">AI Follow-Up</div>
          <div className="wre-float-label">Active</div>
        </div>
      </div>
      <div className="wre-float-under purple"></div>
    </div>

    <div className="wre-float-card wre-float-top-right">
      <div className="wre-float-card-head">
        <span className="wre-float-icon green">
          <FaPaperPlane />
        </span>
        <div>
          <div className="wre-float-value">25,000</div>
          <div className="wre-float-label">Bulk WhatsApp Messages Delivered</div>
        </div>
      </div>
      <div className="wre-float-bars green tall">
        <span></span><span></span><span></span><span></span><span></span>
      </div>
    </div>

    <div className="wre-float-card wre-float-bottom-right">
      <div className="wre-float-card-head">
        <span className="wre-float-icon orange">
          <FaUserTie />
        </span>
        <div>
          <div className="wre-float-value">128</div>
          <div className="wre-float-label">Qualified Buyers Generated</div>
        </div>
      </div>
      <div className="wre-float-line-up orange"></div>
    </div>

    {/* Phone Mockup */}
    <div className="wre-phone-mockup">
      <div className="wre-phone-header">
        <div className="wre-phone-contact">
          <div className="wre-phone-avatar">GR</div>
          <div>
            <div className="wre-phone-name">Greenfield Residences</div>
            <div className="wre-phone-status">
              <MdBusiness /> Business Account
            </div>
          </div>
        </div>
      </div>

      <div className="wre-phone-body">
        <div className="wre-chat-bubble">
          <div className="wre-chat-property-image">
            <img src="/images/building2.png" alt="Property"/>
          </div>
          <p>Hi {"{{Name}}"} 👋</p>
          <p>Thank you for your interest in Greenfield Residences.</p>
          <p>🏠 2, 3 & 4 BHK Apartments</p>
          <p>📍 Prime Location – Gurgaon</p>
          <p>💰 Starting ₹95 Lakhs*</p>
          <p>⏰ Limited Period Offer!</p>
          <p className="wre-bubble-question">How can we help you today?</p>
          <span className="wre-bubble-time">10:30 AM</span>
        </div>

        <div className="wre-quick-replies">
          <button className="wre-qr-btn"><FaFileAlt /> Download Brochure</button>
          <button className="wre-qr-btn"><FaCalendarAlt /> Schedule Site Visit</button>
          <button className="wre-qr-btn"><FaWhatsapp /> Talk to Sales Advisor</button>
          <button className="wre-qr-btn"><FaRulerCombined /> View Floor Plans</button>
        </div>
      </div>

      <div className="wre-phone-footer">
        <span className="wre-type-msg">Type a message</span>
        <span className="wre-phone-send"><FaMicrophone /></span>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;