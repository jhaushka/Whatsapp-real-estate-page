import "./CampaignStudioSection.css";

import {
  FaBullhorn,
  FaBuilding,
  FaCalendarCheck,
  FaRocket,
  FaUsers,
  FaWhatsapp,
  FaChartLine,
  FaPlayCircle,
  FaHome,

} from "react-icons/fa";

const campaignCards = [
  {
    icon: <FaBuilding />,
    title: "Residential Apartments",
    text: "Promote newly launched apartment projects.",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Site Visit Campaign",
    text: "Generate site visit bookings automatically.",
  },
  {
    icon: <FaRocket />,
    title: "Property Launch",
    text: "Announce new projects to interested buyers.",
  },
  {
    icon: <FaUsers />,
    title: "Lead Nurturing",
    text: "Engage prospects through automated campaigns.",
  },
];

const stats = [
  {
    value: "150K+",
    label: "Property Buyers",
  },
  {
    value: "90%",
    label: "Open Rate",
  },
  {
    value: "12.5%",
    label: "Booking Rate",
  },
  {
    value: "5000+",
    label: "Property Inquiries",
  },
];

const CampaignStudioSection = () => {
  return (
    <section className="wre-campaign-section">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT */}

          <div className="col-lg-5 mb-5 mb-lg-0">

            <div className="wre-campaign-badge">
              <FaHome />
              <span>AI-POWERED REAL ESTATE CAMPAIGN AUTOMATION</span>
            </div>

            <h2 className="wre-campaign-title">
              Generate More Real Estate Leads with{' '}
              <span style={{ color: '#16a34a' }}>AI-Powered WhatsApp</span>{' '}
              Marketing Campaigns
            </h2>

            <p className="wre-campaign-desc">
              Create targeted WhatsApp campaigns, promote new
              property launches, generate qualified leads,
              schedule site visits and increase property sales.
            </p>

            <div className="wre-campaign-btns">

              <button className="wre-campaign-btn-primary">
                <FaWhatsapp />
                Start Free Trial
              </button>

              <button className="wre-campaign-btn-outline">
                <FaPlayCircle />
                Book Demo
              </button>

            </div>

            <div className="wre-campaign-property-card">
  <img
    src="/images/building2.png"
    alt="Property"
    className="wre-campaign-property-img"
  />

  <div className="wre-property-info">
    <span>More Property Inquiries</span>
    <span>More Site Visits</span>
    <span>More Property Sales</span>
  </div>
</div>

          </div>

          {/* RIGHT */}

          <div className="col-lg-7">

            <div className="wre-dashboard">

              <aside className="wre-dashboard-sidebar">

                <div className="wre-sidebar-logo">
                  Campaign Studio
                </div>

                <ul className="wre-sidebar-menu">
                  <li>Overview</li>
                  <li>Audience</li>
                  <li className="active">Campaigns</li>
                  <li>Templates</li>
                  <li>Analytics</li>
                  <li>Automation</li>
                </ul>

              </aside>

              <div className="wre-dashboard-main">

                <div className="wre-dashboard-header">

                  <h5>Create Campaign</h5>

                  <span className="wre-status">
                    Active
                  </span>

                </div>

                <div className="row g-3 mb-4">

                  {campaignCards.map((card) => (
                    <div
                      className="col-md-6"
                      key={card.title}
                    >
                      <div className="wre-campaign-card">

                        <div className="wre-card-icon">
                          {card.icon}
                        </div>

                        <h6>{card.title}</h6>

                        <p>{card.text}</p>

                      </div>
                    </div>
                  ))}

                </div>

                <div className="wre-whatsapp-preview">

                  <div className="wre-preview-header">
                    <FaWhatsapp />
                    <span>WhatsApp Campaign Preview</span>
                  </div>

                  <div className="wre-preview-message">
                    🏠 New Luxury Apartments Available
                    <br />
                    📍 Prime Location
                    <br />
                    📅 Schedule a Site Visit
                    <br />
                    👉 Reply YES to know more
                  </div>

                </div>

                <div className="row g-3 mt-3">

                  {stats.map((item) => (
                    <div
                      className="col-6 col-lg-3"
                      key={item.label}
                    >
                      <div className="wre-dashboard-stat">

                        <h4>{item.value}</h4>

                        <span>{item.label}</span>

                      </div>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CampaignStudioSection;