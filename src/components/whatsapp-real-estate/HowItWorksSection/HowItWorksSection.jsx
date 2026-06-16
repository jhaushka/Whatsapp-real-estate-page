import "./HowItWorksSection.css";

import {
    FaWhatsapp,
    FaGoogle,
    FaFacebookF,
    FaInstagram,
    FaWpforms,
    FaComments,
    FaUsers,
    FaQrcode,
    FaCheckCircle,
    FaSearch,
    FaRobot,
    FaUpload,
    FaFilePdf,
    FaQuestionCircle,
    FaCalendarAlt,
    FaSyncAlt,
    FaTimesCircle,
    FaTrophy,
    FaBullseye,
    FaBuilding,
    FaChartLine,
    FaCog,
} from "react-icons/fa";

const leadSources = [
    {
        icon: <FaGoogle />,
        label: "Google Ads",
        color: "blue",
    },
    {
        icon: <FaFacebookF />,
        label: "Facebook CTWA",
        color: "facebook",
    },
    {
        icon: <FaInstagram />,
        label: "Instagram CTWA",
        color: "pink",
    },
    {
        icon: <FaWpforms />,
        label: "Website Forms",
        color: "cyan",
    },
    {
        icon: <FaComments />,
        label: "Website Chat Button / Widget",
        color: "purple",
    },
    {
        icon: <FaUsers />,
        label: "Portals / Referrals",
        color: "orange",
    },
    {
        icon: <FaQrcode />,
        label: "Scan 2 Chat QRs and many more...",
        color: "green",
    },
];

const crmContacts = [
    {
        image: "/images/male.png",
        name: "Rohit Sharma",
        text: "Interested in 2 BHK in Gurgaon",
        time: "10:30 AM",
        active: true,
    },
    {
        image: "/images/female.png",
        name: "Neha Patel",
        text: "Budget around 60L",
        time: "10:28 AM",
    },
    {
        image: "/images/male.png",
        name: "Amit Verma",
        text: "Site visit this weekend?",
        time: "10:25 AM",
    },
    {
        image: "/images/female.png",
        name: "Priya Singh",
        text: "Loan eligibility details",
        time: "10:20 AM",
    },
    {
        image: "/images/male.png",
        name: "Karan Mehta",
        text: "3 BHK price details",
        time: "10:18 AM",
    },
];

const trainingItems = [
    "Project Brochures (PDF)",
    "Price Lists (PDF / Sheet)",
    "Payment Plans",
    "FAQs",
    "Location & Amenities",
    "Past Conversations",
];

const questions = [
    "Which property type are you looking for?",
    "What is your preferred location?",
    "What is your budget range?",
    "When are you planning to buy?",
    "Do you need a home loan?",
    "Would you like to schedule a site visit?",
];

const conversionCards = [
    {
        title: "Qualified Leads",
        icon: <FaUsers />,
        points: ["High Intent", "Budget Matched", "Ready to Engage"],
        color: "green",
    },
    {
        title: "Site Visit / Meeting Scheduled",
        icon: <FaCalendarAlt />,
        points: ["Site Visits Booked", "Meetings / Appointments", "Calendar & Team Notified"],
        color: "blue",
    },
    {
        title: "Nurture / Follow-Up",
        icon: <FaSyncAlt />,
        points: ["Interested, But Not Ready", "Automated Follow-ups", "Stay in Nurture Flow"],
        color: "orange",
    },
    {
        title: "Unqualified Leads",
        icon: <FaTimesCircle />,
        points: ["Low Intent / Not a Fit", "Irrelevant Requirements", "Filtered Out"],
        color: "red",
    },
];

const bottomBenefits = [
    {
        icon: <FaBullseye />,
        title: "Better Lead Quality",
    },
    {
        icon: <FaBuilding />,
        title: "More Site Visits",
    },
    {
        icon: <FaChartLine />,
        title: "Higher Conversions",
    },
    {
        icon: <FaCog />,
        title: "Automated & Scalable",
    },
];

const HowItWorksSection = () => {
    return (
        <section className="wre-how-section">
            <div className="container">
                <div className="wre-how-shell">
                    {/* PANEL 01 */}
                    <div className="wre-flow-panel wre-flow-panel-one">
                        <div className="wre-panel-number">01</div>

                        <div className="wre-panel-title">
                            <h2>
                                Real Estate Leads
                                <span>Come From Multiple Sources</span>
                            </h2>
                            <p>
                                All leads flow into your <strong>WhatsApp Business Number</strong>
                            </p>
                        </div>

                        <div className="wre-source-list">
                            {leadSources.map((item, index) => (
                                <div className="wre-source-row" key={item.label}>
                                    <div className={`wre-source-icon ${item.color}`}>
                                        {item.icon}
                                    </div>
                                    <span>{index + 1}</span>
                                    <p>{item.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="wre-source-lines" aria-hidden="true">
                            <svg
                                className="wre-source-flow-svg"
                                viewBox="0 0 150 210"
                                preserveAspectRatio="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <marker id="wre-arr-blue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                        <path d="M0,0 L6,3 L0,6 Z" fill="#2563eb" />
                                    </marker>

                                    <marker id="wre-arr-fb" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                        <path d="M0,0 L6,3 L0,6 Z" fill="#1877f2" />
                                    </marker>

                                    <marker id="wre-arr-pink" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                        <path d="M0,0 L6,3 L0,6 Z" fill="#ec4899" />
                                    </marker>

                                    <marker id="wre-arr-cyan" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                        <path d="M0,0 L6,3 L0,6 Z" fill="#06b6d4" />
                                    </marker>

                                    <marker id="wre-arr-purple" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                        <path d="M0,0 L6,3 L0,6 Z" fill="#7c3aed" />
                                    </marker>

                                    <marker id="wre-arr-orange" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                        <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
                                    </marker>

                                    <marker id="wre-arr-green" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                        <path d="M0,0 L6,3 L0,6 Z" fill="#16a34a" />
                                    </marker>
                                </defs>

                                <path d="M2 16 C42 16 72 72 162 95" className="wre-svg-line blue" />
                                <path d="M2 46 C46 46 76 82 162 98" className="wre-svg-line fb" />
                                <path d="M2 76 C54 76 84 96 162 101" className="wre-svg-line pink" />
                                <path d="M2 105 C60 105 92 105 162 105" className="wre-svg-line cyan" />
                                <path d="M2 134 C54 134 84 114 162 109" className="wre-svg-line purple" />
                                <path d="M2 162 C46 162 76 128 162 112" className="wre-svg-line orange" />
                                <path d="M2 190 C42 190 72 142 162 116" className="wre-svg-line green" />


                            </svg>
                        </div>
                        <div className="wre-whatsapp-center">
                            <div className="wre-whatsapp-pulse">
                                <FaWhatsapp />
                            </div>

                            <h5>WhatsApp Business Number</h5>

                            <div className="wre-phone-badge">
                                +91 98765 43210
                                <FaCheckCircle />
                            </div>
                        </div>

                        <div className="wre-green-arrow arrow-to-crm" />

                        <div className="wre-team-inbox">
                            <div className="wre-inbox-badge">
                                WhatsApp CRM / Team Inbox
                                <span>(Agent Dashboard)</span>
                            </div>

                            <div className="wre-mini-dashboard">
                                <aside className="wre-mini-dashboard-sidebar">
                                    <div className="wre-side-logo">
                                        <FaWhatsapp />
                                    </div>
                                    <span>Inbox</span>
                                    <span>Contacts</span>
                                    <span>Templates</span>
                                    <span>Broadcast</span>
                                    <span>Analytics</span>
                                    <span>Settings</span>
                                </aside>

                                <div className="wre-mini-conversations">
                                    <div className="wre-mini-convo-head">
                                        <strong>All Conversations</strong>
                                        <span>128</span>
                                    </div>

                                    <div className="wre-mini-search">
                                        <FaSearch />
                                        <p>Search conversations</p>
                                    </div>

                                    {crmContacts.map((item) => (
                                        <div
                                            className={`wre-mini-contact ${item.active ? "active" : ""
                                                }`}
                                            key={item.name}
                                        >
                                            <img src={item.image} alt={item.name} />

                                            <div>
                                                <strong>{item.name}</strong>
                                                <p>{item.text}</p>
                                            </div>

                                            <small>{item.time}</small>
                                        </div>
                                    ))}
                                </div>

                                <div className="wre-mini-chat-screen">
                                    <div className="wre-mini-chat-message left">
                                        <p>Hi, I’m looking for a 2 BHK apartment in Gurgaon.</p>
                                        <span>10:30 AM</span>
                                    </div>

                                    <div className="wre-mini-chat-message right">
                                        <p>
                                            Thanks for reaching out! I’m here to help you find the
                                            perfect home. What is your preferred location?
                                        </p>
                                        <span>10:30 AM ✓✓</span>
                                    </div>

                                    <div className="wre-mini-typing">•••</div>

                                    <div className="wre-mini-input">
                                        Type a message...
                                        <button>
                                            <FaWhatsapp />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="wre-ai-instant-card">
                            <div className="wre-ai-title-pill">AI Chatbot Engages Instantly</div>

                            <div className="wre-bot-illustration">
                                <FaRobot />
                            </div>

                            <ul>
                                <li>
                                    <FaCheckCircle /> Instant Responses
                                </li>
                                <li>
                                    <FaCheckCircle /> 24/7 Availability
                                </li>
                                <li>
                                    <FaCheckCircle /> Human-like Conversations
                                </li>
                                <li>
                                    <FaCheckCircle /> Capture & Understand Customer Intent
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* PANEL 02 */}
                    <div className="wre-flow-panel wre-flow-panel-two">
                        <div className="wre-panel-number">02</div>

                        <div className="wre-panel-title">
                            <h2>
                                AI Lead Filtration & Qualification
                                <span>to Conversion</span>
                            </h2>

                            <p>
                                Trained on your business using documents / knowledge base, our AI
                                asks the right questions, qualifies leads and drives conversions.
                            </p>
                        </div>

                        <div className="wre-train-card">
                            <h4>Train Your AI with Documents / Knowledge Base</h4>

                            <ul>
                                {trainingItems.map((item) => (
                                    <li key={item}>
                                        <FaFilePdf />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="wre-upload-box">
                                <FaUpload />
                                <span>Upload & Train</span>
                            </div>
                        </div>

                        <div className="wre-purple-arrow train-to-bot" />

                        <div className="wre-ai-bot-main">
                            <FaRobot />
                        </div>

                        <div className="wre-purple-arrow bot-to-questions" />

                        <div className="wre-question-flow">
                            <h4>AI Conversation Flow (Dynamic Q&A)</h4>

                            {questions.map((question, index) => (
                                <div className="wre-question-row" key={question}>
                                    <span>
                                        <FaQuestionCircle />
                                    </span>
                                    <p>{question}</p>
                                </div>
                            ))}

                            <div className="wre-ai-understands">
                                <FaRobot />
                                AI understands, qualifies & scores leads automatically.
                            </div>
                        </div>
                        <div className="wre-question-to-results-lines" aria-hidden="true">
                            <svg
                                className="wre-question-result-svg"
                                viewBox="0 0 90 260"
                                preserveAspectRatio="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <marker id="wre-q-green" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                        <path d="M0,0 L6,3 L0,6 Z" fill="#16a34a" />
                                    </marker>

                                    <marker id="wre-q-blue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                        <path d="M0,0 L6,3 L0,6 Z" fill="#2563eb" />
                                    </marker>

                                    <marker id="wre-q-orange" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                        <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
                                    </marker>

                                    <marker id="wre-q-red" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                        <path d="M0,0 L6,3 L0,6 Z" fill="#ef4444" />
                                    </marker>
                                </defs>

                                <path d="M2 84 C30 84 42 24 88 24" className="wre-q-line green" markerEnd="url(#wre-q-green)" />
                                <path d="M2 116 C34 116 44 88 88 88" className="wre-q-line blue" markerEnd="url(#wre-q-blue)" />
                                <path d="M2 150 C34 150 44 152 88 152" className="wre-q-line orange" markerEnd="url(#wre-q-orange)" />
                                <path d="M2 184 C30 184 42 216 88 216" className="wre-q-line red" markerEnd="url(#wre-q-red)" />
                            </svg>
                        </div>

                        <div className="wre-result-flow">
                            {conversionCards.map((item) => (
                                <div
                                    className={`wre-result-card ${item.color}`}
                                    key={item.title}
                                >
                                    <div className="wre-result-icon">{item.icon}</div>

                                    <div>
                                        <h5>{item.title}</h5>

                                        <ul>
                                            {item.points.map((point) => (
                                                <li key={point}>
                                                    <FaCheckCircle />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="wre-result-to-conversion-lines" aria-hidden="true">
  <svg
    className="wre-result-conversion-svg"
    viewBox="0 0 130 245"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <marker id="wre-c-green" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" fill="#16a34a" />
      </marker>

      <marker id="wre-c-blue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" fill="#2563eb" />
      </marker>

      <marker id="wre-c-orange" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" fill="#f97316" />
      </marker>

      <marker id="wre-c-red" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" fill="#ef4444" />
      </marker>
    </defs>

    <path
      d="M2 28 C65 28 74 78 126 92"
      className="wre-c-line green"
      markerEnd="url(#wre-c-green)"
    />

    <path
      d="M2 88 C58 88 80 104 126 106"
      className="wre-c-line blue"
      markerEnd="url(#wre-c-blue)"
    />

    <path
      d="M2 150 C58 150 80 128 126 122"
      className="wre-c-line orange"
      markerEnd="url(#wre-c-orange)"
    />

    <path
      d="M2 212 C65 212 74 152 126 136"
      className="wre-c-line red"
      markerEnd="url(#wre-c-red)"
    />
  </svg>
</div>

                        <div className="wre-conversion-final">
                            <FaTrophy />
                            <h5>Conversions</h5>
                            <ul>
                                <li>Deal Closed</li>
                                <li>Happy Customer</li>
                                <li>More Revenue</li>
                            </ul>
                        </div>

                        <div className="wre-bottom-benefits">
                            {bottomBenefits.map((item) => (
                                <div className="wre-benefit-item" key={item.title}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;