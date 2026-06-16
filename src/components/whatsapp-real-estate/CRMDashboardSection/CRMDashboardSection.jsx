import "./CRMDashboardSection.css";

import {
  FaWhatsapp,
  FaComments,
  FaFilter,
  FaSearch,
  FaUsers,
  FaUserTie,
  FaBroadcastTower,
  FaChartBar,
  FaCog,
  FaPaperPlane,
  FaSmile,
  FaPaperclip,
  FaCamera,
  FaStar,
  FaTag,
  FaRegClock,
  FaPhoneAlt,
  FaBullhorn,
  FaExchangeAlt,
  FaBolt,
  FaBullseye,
  FaChartLine,
  FaPlus,
  FaCalendarAlt,
  FaFileAlt,
  FaStickyNote,
  FaLayerGroup,
} from "react-icons/fa";

const sideFeatures = [
  {
    icon: <FaComments />,
    title: "Real-time Chat",
    desc: "Reply instantly to leads on WhatsApp and never miss an opportunity.",
    color: "purple",
  },
  {
    icon: <FaLayerGroup />,
    title: "Pipelines",
    desc: "Visualize your sales process and move leads across different stages.",
    color: "green",
  },
  {
    icon: <FaRegClock />,
    title: "Chat History",
    desc: "View all past conversations and customer interactions in one place.",
    color: "orange",
  },
  {
    icon: <FaUsers />,
    title: "Leads Distribution",
    desc: "Distribute leads evenly across your team for better follow-up.",
    color: "blue",
  },
  {
    icon: <FaBullhorn />,
    title: "Broadcast Campaigns",
    desc: "Send targeted WhatsApp broadcasts to accumulated leads in bulk.",
    color: "pink",
  },
  {
    icon: <FaExchangeAlt />,
    title: "Leads Transfer",
    desc: "Transfer leads between agents or teams seamlessly.",
    color: "teal",
  },
];

const sidebarItems = [
  { icon: <FaComments />, label: "Inbox", active: true },
  { icon: <FaLayerGroup />, label: "Pipelines" },
  { icon: <FaUserTie />, label: "Leads" },
  { icon: <FaUsers />, label: "Contacts" },
  { icon: <FaBroadcastTower />, label: "Broadcast" },
  { icon: <FaUsers />, label: "Team" },
  { icon: <FaChartBar />, label: "Reports" },
  { icon: <FaCog />, label: "Settings" },
];

const conversations = [
  {
    img: "/images/male.png",
    name: "Rahul Mehta",
    msg: "Hi, I'm interested in 2 BHK...",
    time: "10:30 AM",
    unread: 3,
    active: true,
  },
  {
    img: "/images/female.png",
    name: "Neha Patel",
    msg: "Can you share price details?",
    time: "10:28 AM",
    unread: 1,
  },
  {
    img: "/images/male.png",
    name: "Vikram Singh",
    msg: "Site visit this weekend?",
    time: "10:25 AM",
  },
  {
    img: "/images/male.png",
    name: "Anjali Verma",
    msg: "Is loan available?",
    time: "10:20 AM",
  },
  {
    img: "/images/male.png",
    name: "Karan Shah",
    msg: "Thanks for the information",
    time: "10:18 AM",
  },
  {
    img: "/images/female.png",
    name: "Priya Nair",
    msg: "Brochure please",
    time: "10:15 AM",
  },
  {
    img: "/images/male.png",
    name: "Amit Joshi",
    msg: "Looking for 3 BHK",
    time: "10:10 AM",
  },
];

const pipelineStats = [
  { label: "New Lead", value: "32" },
  { label: "Contacted", value: "28" },
  { label: "Qualified", value: "40" },
  { label: "Site Visit", value: "18" },
  { label: "Closed Won", value: "10" },
];

const bottomBenefits = [
  {
    icon: <FaBolt />,
    title: "Real-time Engagement",
    desc: "Respond instantly and build stronger relationships with leads.",
    color: "purple",
  },
  {
    icon: <FaBullseye />,
    title: "Organized Sales Process",
    desc: "Track every lead at every stage of your sales pipeline.",
    color: "green",
  },
  {
    icon: <FaUsers />,
    title: "Team Collaboration",
    desc: "Work together, assign leads, add notes and close deals faster.",
    color: "orange",
  },
  {
    icon: <FaChartLine />,
    title: "Higher Conversions",
    desc: "Better follow-ups, timely engagement and more closed deals.",
    color: "blue",
  },
];

const recentTransfers = [
  {
    img: "/images/male.png",
    name: "Rahul Mehta",
    from: "Neha Patel",
    to: "Amit Sharma",
    time: "Today 10:35 AM",
  },
  {
    img: "/images/male.png",
    name: "Vikram Singh",
    from: "Amit Sharma",
    to: "Rohit Verma",
    time: "Yesterday 05:20 PM",
  },
  {
    img: "/images/female.png",
    name: "Anjali Verma",
    from: "Priya Nair",
    to: "Neha Patel",
    time: "Yesterday 04:15 PM",
  },
];

const CRMDashboardSection = () => {
  return (
    <section className="wre-crm-section">
      <div className="container">
        <div className="wre-crm-shell">
          <div className="wre-crm-head">
            <div className="wre-crm-badge">
              <FaWhatsapp />
              <span>WHATSAPP CRM / AGENT DASHBOARD</span>
            </div>

            <h2>
              Manage Leads. Chat in <span>Real-Time.</span> Close More Deals.
            </h2>

            <p>
              A centralized dashboard for your team to engage leads on WhatsApp,
              manage pipelines, track conversations, and grow your real estate
              business.
            </p>
          </div>

          <div className="wre-crm-layout">
            <div className="wre-crm-left-features">
              {sideFeatures.map((item) => (
                <div
                  className={`wre-crm-side-feature ${item.color}`}
                  key={item.title}
                >
                  <div className="wre-crm-side-icon">{item.icon}</div>
                  <div>
                    <h6>{item.title}</h6>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="wre-crm-dashboard">
              <aside className="wre-crm-sidebar">
                <div className="wre-crm-sidebar-logo">
                  <FaWhatsapp />
                </div>

                <div className="wre-crm-sidebar-menu">
                  {sidebarItems.map((item) => (
                    <div
                      className={`wre-crm-sidebar-item ${
                        item.active ? "active" : ""
                      }`}
                      key={item.label}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </aside>

              <div className="wre-crm-conversations">
                <div className="wre-crm-conversation-top">
                  <div>
                    <strong>All Conversations</strong>
                    <span>128</span>
                  </div>

                  <FaFilter />
                </div>

                <div className="wre-crm-search">
                  <FaSearch />
                  <span>Search or start new chat</span>
                </div>

                <div className="wre-crm-tabs">
                  <span className="active">All</span>
                  <span>Unread</span>
                  <span>Mine</span>
                  <span>Mentions</span>
                </div>

                <div className="wre-crm-chat-list">
                  {conversations.map((chat) => (
                    <div
                      className={`wre-crm-chat-item ${
                        chat.active ? "active" : ""
                      }`}
                      key={chat.name}
                    >
                      <img src={chat.img} alt={chat.name} />

                      <div className="wre-crm-chat-meta">
                        <div>
                          <strong>{chat.name}</strong>
                          <span>{chat.time}</span>
                        </div>

                        <p>{chat.msg}</p>
                      </div>

                      {chat.unread && (
                        <span className="wre-crm-unread">{chat.unread}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="wre-crm-main-chat">
                <div className="wre-crm-main-header">
                  <div className="wre-crm-main-user">
                    <img src="/images/male.png" alt="Rahul Mehta" />
                    <div>
                      <strong>Rahul Mehta</strong>
                      <span>Online</span>
                    </div>
                  </div>

                  <div className="wre-crm-main-actions">
                    <FaTag />
                    <FaStar />
                    <FaPhoneAlt />
                  </div>
                </div>

                <div className="wre-crm-message-area">
                  <div className="wre-crm-msg right">
                    <p>
                      Hi Rahul 👋
                      <br />
                      How can I help you today?
                    </p>
                    <span>10:30 AM ✓✓</span>
                  </div>

                  <div className="wre-crm-msg left">
                    <p>Hi, I'm looking for a 2 BHK apartment in Gurgaon.</p>
                    <span>10:30 AM</span>
                  </div>

                  <div className="wre-crm-msg right">
                    <p>Great! May I know your preferred location in Gurgaon?</p>
                    <span>10:31 AM ✓✓</span>
                  </div>

                  <div className="wre-crm-msg left">
                    <p>Sector 57 or nearby areas.</p>
                    <span>10:31 AM</span>
                  </div>

                  <div className="wre-crm-msg right">
                    <p>Sure, what is your expected budget range?</p>
                    <span>10:32 AM ✓✓</span>
                  </div>

                  <div className="wre-crm-msg left">
                    <p>Between 60 to 80 Lakhs.</p>
                    <span>10:33 AM</span>
                  </div>

                  <div className="wre-crm-msg right property-card-msg">
                    <p>Thanks! I'll share some best options in that range.</p>

                    <div className="wre-crm-property-preview">
                      <img src="/images/building1.png" alt="Property" />
                      <div>
                        <strong>Green Residency</strong>
                        <span>2 BHK Apartment</span>
                        <b>₹72 Lakhs*</b>
                      </div>
                    </div>

                    <button>View Details</button>
                    <span>10:34 AM ✓✓</span>
                  </div>
                </div>

                <div className="wre-crm-input-row">
                  <FaSmile />
                  <span>Type a message...</span>
                  <FaPaperclip />
                  <FaCamera />
                  <button>
                    <FaPaperPlane />
                  </button>
                </div>
              </div>

              <aside className="wre-crm-lead-details">
                <div className="wre-crm-detail-head">
                  <h6>Lead Details</h6>
                  <button>Edit</button>
                </div>

                <div className="wre-crm-detail-list">
                  <div>
                    <span>Name</span>
                    <strong>Rahul Mehta</strong>
                  </div>
                  <div>
                    <span>Phone</span>
                    <strong>+91 98765 43210</strong>
                  </div>
                  <div>
                    <span>Source</span>
                    <strong>Google Ads</strong>
                  </div>
                  <div>
                    <span>Assigned To</span>
                    <strong>Amit Sharma</strong>
                  </div>
                  <div>
                    <span>Pipeline Stage</span>
                    <strong className="wre-crm-pill">Qualified Lead</strong>
                  </div>
                  <div>
                    <span>Tags</span>
                    <strong>2 BHK, Gurgaon, 60-80L</strong>
                  </div>
                  <div>
                    <span>Notes</span>
                    <strong>Interested in ready possession</strong>
                  </div>
                </div>

                <div className="wre-crm-history">
                  <div>
                    <h6>Conversation History</h6>
                    <button>View all</button>
                  </div>

                  <ul>
                    <li>
                      <FaRegClock />
                      <span>23 Apr, 10:15 AM</span>
                      <p>Brochure shared</p>
                    </li>
                    <li>
                      <FaRegClock />
                      <span>22 Apr, 04:30 PM</span>
                      <p>Site visit scheduled</p>
                    </li>
                    <li>
                      <FaRegClock />
                      <span>21 Apr, 11:20 AM</span>
                      <p>Price details shared</p>
                    </li>
                  </ul>
                </div>

                <div className="wre-crm-quick-actions">
                  <h6>Quick Actions</h6>

                  <button>
                    <FaCalendarAlt />
                    Schedule Site Visit
                  </button>
                  <button>
                    <FaFileAlt />
                    Share Brochure
                  </button>
                  <button>
                    <FaStickyNote />
                    Add Note
                  </button>
                  <button>
                    <FaLayerGroup />
                    Move Stage
                  </button>
                </div>
              </aside>
            </div>

            <div className="wre-crm-right-widgets">
              <div className="wre-crm-widget distribution">
                <h6>Leads Distribution</h6>

                <div className="wre-crm-donut">
                  <div>
                    <strong>128</strong>
                    <span>Total Leads</span>
                  </div>
                </div>

                <div className="wre-crm-donut-list">
                  <p>
                    <span className="dot green"></span>Amit Sharma <b>35%</b>
                  </p>
                  <p>
                    <span className="dot blue"></span>Neha Patel <b>25%</b>
                  </p>
                  <p>
                    <span className="dot orange"></span>Rohit Verma <b>20%</b>
                  </p>
                  <p>
                    <span className="dot purple"></span>Priya Nair <b>20%</b>
                  </p>
                </div>
              </div>

              <div className="wre-crm-widget pipeline">
                <h6>Pipeline Overview</h6>

                <div className="wre-crm-pipeline-grid">
                  {pipelineStats.map((item) => (
                    <div key={item.label}>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="wre-crm-widget broadcast">
                <div className="wre-crm-widget-title-row">
                  <h6>Broadcast Messages</h6>
                  <button>Create New</button>
                </div>

                <div className="wre-crm-broadcast-grid">
                  <div>
                    <span>Sent</span>
                    <strong>2,450</strong>
                  </div>
                  <div>
                    <span>Delivered</span>
                    <strong>2,305</strong>
                    <em>94%</em>
                  </div>
                  <div>
                    <span>Read</span>
                    <strong>1,802</strong>
                    <em>78%</em>
                  </div>
                  <div>
                    <span>Replies</span>
                    <strong>320</strong>
                    <em>14%</em>
                  </div>
                </div>

                <button className="wre-crm-view-btn">View All Broadcasts</button>
              </div>

              <div className="wre-crm-widget transfers">
                <div className="wre-crm-widget-title-row">
                  <h6>Recent Transfers</h6>
                  <button>View all</button>
                </div>

                {recentTransfers.map((item) => (
                  <div className="wre-crm-transfer-item" key={item.name}>
                    <img src={item.img} alt={item.name} />
                    <div>
                      <strong>{item.name}</strong>
                      <p>
                        From {item.from} <span>to {item.to}</span>
                      </p>
                    </div>
                    <small>{item.time}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="wre-crm-bottom-strip">
            {bottomBenefits.map((item) => (
              <div className={`wre-crm-benefit ${item.color}`} key={item.title}>
                <div>{item.icon}</div>
                <section>
                  <h6>{item.title}</h6>
                  <p>{item.desc}</p>
                </section>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMDashboardSection;