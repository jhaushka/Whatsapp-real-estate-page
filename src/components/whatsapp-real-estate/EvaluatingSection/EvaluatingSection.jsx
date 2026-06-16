import React from "react";
import {
  FaWhatsapp,
  FaCheckCircle,
  FaCalendarAlt,
  FaChartLine,
  FaArrowRight,
  FaCommentDots,
  FaShieldAlt,
  FaCreditCard,
  FaSyncAlt,
  FaDownload,
} from "react-icons/fa";
import "./EvaluatingSection.css";

const EvaluatingSection = () => {
  return (
    <section className="wre-eval-section">
      <div className="wre-eval-card">
        <div className="wre-eval-left">
          <div className="wre-eval-chat-icon">
            <FaCommentDots />
          </div>

          <h2>
            Still Evaluating <br />
            <span className="green">WhatsApp</span> for Your <br />
            <span className="purple">Real Estate Business?</span>
          </h2>

          <p className="wre-eval-desc">
            Start generating property inquiries, automate follow-ups, qualify
            buyers with AI, and schedule more site visits—all from a single
            platform.
          </p>

          <div className="wre-eval-checklist">
            <div>
              <FaCheckCircle />
              <span>Free WhatsApp Business API Setup</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Free Trial on Authkey Platform</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Free AI Campaign Studio Demo</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Free Shared Agent Dashboard</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Expert Onboarding &amp; Support</span>
            </div>
          </div>
        </div>

        <div className="wre-eval-right">
          <div className="wre-eval-phone">
            <div className="wre-eval-phone-top">
              <span>10:30</span>
              <small></small>
            </div>

            <div className="wre-eval-phone-head">
              <span className="wre-eval-avatar"></span>
              <div>
                <strong>Green View Residences</strong>
                <small>Business Account</small>
              </div>
              <FaWhatsapp />
            </div>

            <div className="wre-eval-phone-body">
              <div className="wre-eval-chat incoming">
                Hi! I’m interested in 3 BHK apartments.
                <small>10:30 AM</small>
              </div>

              <div className="wre-eval-chat outgoing">
                Hello 👋 <br />
                Thanks for reaching out! Please let us know your preferred
                location and budget range.
                <small>10:30 AM ✓✓</small>
              </div>

              <div className="wre-eval-property-card">
                <img src="/images/building4.png" alt="property" />

                <h4>3 BHK Premium Apartment</h4>
                <p>Starting from ₹75 Lakhs*</p>

                <div className="wre-eval-property-meta">
                  <span>3 Beds</span>
                  <span>2 Baths</span>
                  <span>1500 Sq.ft</span>
                </div>

                <button>
                  <FaDownload />
                  Download Brochure
                </button>

                <button>
                  <FaCalendarAlt />
                  Schedule Site Visit
                </button>
              </div>
            </div>

            <div className="wre-eval-phone-footer">
              <span>Message</span>
              <FaWhatsapp />
            </div>
          </div>

          <div className="wre-eval-whatsapp-float">
            <FaWhatsapp />
          </div>
          
          <div className="wre-eval-building-wrap">
          <img
            src="/images/building1.png"
            alt="building"
            className="wre-eval-building"
          />
          </div>
        </div>

        <div className="wre-eval-bottom-cta">
          <div className="wre-eval-bottom-icon">
            <FaChartLine />
          </div>

          <div className="wre-eval-bottom-content">
            <h3>
              Ready to <span>Sell More Properties?</span>
            </h3>

            <div className="wre-eval-bottom-actions">
              <button className="primary">
                Start Free Trial
                <FaArrowRight />
              </button>

              <button className="secondary">
                <FaCalendarAlt />
                Book a Demo
              </button>
            </div>

            <div className="wre-eval-bottom-points">
              <span>
                <FaShieldAlt />
                No Setup Fees
              </span>

              <span>
                <FaCreditCard />
                No Credit Card
              </span>

              <span>
                <FaSyncAlt />
                Cancel Anytime
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvaluatingSection;