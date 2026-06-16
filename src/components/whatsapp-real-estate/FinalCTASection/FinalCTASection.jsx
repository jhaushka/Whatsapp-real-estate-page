import React from "react";
import {
  FaWhatsapp,
  FaCalendarAlt,
  FaCheckCircle,
  FaUsers,
  FaRobot,
  FaChartLine,
  FaStar,
} from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import "./FinalCTASection.css";

const FinalCTASection = () => {
  return (
    <section className="wre-final-cta-section">
      <div className="wre-final-cta-card">
        <div className="wre-final-left">
          <div className="wre-final-badge">
            <FaStar />
            <span>Ready to Grow Your Real Estate Business?</span>
          </div>

          <h2>
            Turn More Property Inquiries <br />
            into Site Visits and Sales <br />
            with <span>WhatsApp</span>
          </h2>

          <p className="wre-final-desc">
            Engage buyers instantly, automate conversations, schedule site
            visits, and close more deals — all on WhatsApp.
          </p>

          <div className="wre-final-features">
            <div>
              <span>
                <FaUsers />
              </span>
              <p>
                <strong>Capture Leads</strong>
                <small>from Every Channel</small>
              </p>
            </div>

            <div>
              <span>
                <FaRobot />
              </span>
              <p>
                <strong>AI-Powered</strong>
                <small>Buyer Engagement</small>
              </p>
            </div>

            <div>
              <span>
                <MdEventAvailable />
              </span>
              <p>
                <strong>Automate</strong>
                <small>Site Visits</small>
              </p>
            </div>

            <div>
              <span>
                <FaChartLine />
              </span>
              <p>
                <strong>Track, Analyze &</strong>
                <small>Close More Deals</small>
              </p>
            </div>
          </div>

          <div className="wre-final-actions">
            <button className="wre-final-primary-btn">
              <FaWhatsapp />
              Get Started with WhatsApp API
              <span>→</span>
            </button>

            <button className="wre-final-secondary-btn">
              <FaCalendarAlt />
              Book a Demo
            </button>
          </div>

          <div className="wre-final-trust-row">
            <span>
              <FaCheckCircle />
              No Setup Fees
            </span>
            <span>
              <FaCheckCircle />
              Quick Onboarding
            </span>
            <span>
              <FaCheckCircle />
              14-Day Free Trial
            </span>
          </div>
        </div>

        <div className="wre-final-right">
          <div className="wre-final-dashboard">
            <div className="wre-final-dashboard-head">
              <strong>Dashboard</strong>
              <span>This Month ▾</span>
            </div>

            <div className="wre-final-stats-grid">
              <div>
                <small>New Leads</small>
                <strong>1,248</strong>
                <em>↑ 32%</em>
              </div>
              <div>
                <small>Site Visits Scheduled</small>
                <strong>256</strong>
                <em>↑ 28%</em>
              </div>
              <div>
                <small>Conversions</small>
                <strong>176</strong>
                <em>↑ 35%</em>
              </div>
              <div>
                <small>Revenue Generated</small>
                <strong>₹6.3 Cr</strong>
                <em>↑ 40%</em>
              </div>
            </div>

            <div className="wre-final-dashboard-bottom">
              <div className="wre-final-chart-card">
                <strong>Leads Over Time</strong>
                <svg viewBox="0 0 260 130" preserveAspectRatio="none">
                  <polyline
                    points="5,115 28,95 50,88 70,70 94,82 118,58 140,65 165,45 188,52 210,35 235,42 255,20"
                    fill="none"
                    stroke="#6d35ff"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="5,115 28,95 50,88 70,70 94,82 118,58 140,65 165,45 188,52 210,35 235,42 255,20 255,130 5,130"
                    fill="rgba(109, 53, 255, 0.1)"
                    stroke="none"
                  />
                </svg>
                <div className="wre-final-chart-dates">
                  <span>May 01</span>
                  <span>May 08</span>
                  <span>May 15</span>
                  <span>May 22</span>
                  <span>May 29</span>
                </div>
              </div>

              <div className="wre-final-campaign-card">
                <strong>Top Campaigns</strong>
                <ul>
                  <li>
                    <span>Luxury Homes Launch</span>
                    <b>842</b>
                    <em>↑ 35%</em>
                  </li>
                  <li>
                    <span>Weekend Open House</span>
                    <b>624</b>
                    <em>↑ 28%</em>
                  </li>
                  <li>
                    <span>Festive Offers</span>
                    <b>512</b>
                    <em>↑ 22%</em>
                  </li>
                </ul>
                <button>View All Campaigns →</button>
              </div>
            </div>
          </div>

          <div className="wre-final-phone">
            <div className="wre-final-phone-top">
              <span>10:30</span>
            </div>

            <div className="wre-final-phone-head">
              <span className="avatar-dot"></span>
              <div>
                <strong>Green View Residences</strong>
                <small>Business Account</small>
              </div>
            </div>

            <div className="wre-final-phone-body">
              <img
                src="/images/building1.png"
                alt="property"
                className="wre-final-phone-img"
              />

              <div className="wre-final-chat-card">
                <p>Hi Neha 👋</p>
                <p>
                  Explore 3 & 4 BHK premium apartments with world-class
                  amenities.
                </p>
                <small>Would you like to schedule a site visit?</small>
              </div>

              <button>Yes, Schedule Now</button>
              <button>Download Brochure</button>
            </div>

            <div className="wre-final-phone-footer">
              <span>Message</span>
              <FaWhatsapp />
            </div>
          </div>

          <div className="wre-final-trusted-card">
            <FaStar />
            <span>Trusted by 500+ Real Estate Businesses Across India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;