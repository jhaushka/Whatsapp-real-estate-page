import "./UseCasesSection.css";

import {
    FaWhatsapp,
    FaHome,
    FaComments,
    FaUsers,
    FaChartLine,
    FaCheckCircle,
    FaRobot,
    FaBullseye,
    FaFilter,
    FaFire,
    FaCalendarAlt,
    FaFileAlt,
    FaVrCardboard,
    FaTags,
    FaMapMarkerAlt,
    FaRupeeSign,
    FaStar,
    FaBuilding,
    FaPlay,
    FaMousePointer,
    FaBell,
    FaBullhorn,
    FaUserCheck,
    FaChartPie,
    FaClipboardCheck,
    FaRegBuilding,
    FaCamera,
    FaDownload,
    FaBed,
    FaBath,
    FaRulerCombined,
    FaShieldAlt,
    FaAward,
    FaHeadset,
    FaRegSmile,
    FaPaperPlane,
} from "react-icons/fa";

const buildingImage = "/images/hero-building.png";
const building1Image = "/images/building5.png";
const maleImg = "/images/male.png";
const femaleImg = "/images/female.png";

const sourceItems = [
    {
        logo: "/images/google-ads.png",
        title: "Google Ads",
        sub: "Search / Display",
        color: "#2563eb",
    },
    {
        logo: "/images/facebook-logo.png",
        title: "Facebook",
        sub: "CTWA",
        color: "#1877f2",
    },
    {
        logo: "/images/instagram-logo.png",
        title: "Instagram",
        sub: "CTWA",
        color: "#ec4899",
    },
    {
        logo: "/images/website-form.png",
        title: "Website",
        sub: "Forms",
        color: "#06b6d4",
    },
    {
        logo: "/images/property-portal.png",
        title: "Property",
        sub: "Portals",
        color: "#16a34a",
    },
    {
        logo: "/images/qr-code.png",
        title: "QR Scan",
        sub: "Offline / Print",
        color: "#111827",
    },
];

const leadBenefits = [
    { icon: <FaComments />, title: "Instant Engagement", text: "Reply to leads in real-time on WhatsApp" },
    { icon: <FaUsers />, title: "Higher Conversion", text: "Convert more leads with personalized conversations" },
    { icon: <FaClipboardCheck />, title: "All Leads in One Place", text: "Manage and organize leads in WhatsApp CRM" },
    { icon: <FaChartLine />, title: "Track & Follow Up", text: "Track interactions and follow up effortlessly" },
];

const offerBenefits = [
    { icon: <FaBell />, title: "New Launch Alerts", text: "Notify prospects about new projects instantly" },
    { icon: <FaTags />, title: "Festive Offers", text: "Promote exclusive offers and discounts" },
    { icon: <FaHome />, title: "Inventory Updates", text: "Share availability, unit updates & price changes" },
    { icon: <FaCalendarAlt />, title: "Payment Reminders", text: "Automate rent and EMI reminders effortlessly" },
];

const conversations = [
    { type: "bot", text: "Hi 👋 I'm your AI Property Assistant. Let me understand your requirements better." },
    { type: "user", text: "What type of property are you looking for?" },
    { type: "bot", text: "2 BHK Apartment" },
    { type: "user", text: "What is your budget range?" },
    { type: "bot", text: "₹50 - ₹80 Lakhs" },
    { type: "user", text: "Preferred location?" },
    { type: "bot", text: "Wakad, Pune" },
];

const PhoneChatMock = ({ listing = false, ad = false, offer = false }) => {
    return (
        <div className="wre-uc-phone">
            <div className="wre-uc-phone-header">
                <div className="wre-uc-avatar">
                    <FaBuilding />
                </div>
                <div>
                    <strong>Greenfield Realty</strong>
                    <span>Business Account</span>
                </div>
                <FaWhatsapp />
            </div>

            <div className="wre-uc-phone-body">
                {!listing && !ad && !offer && (
                    <>
                        {conversations.map((item, index) => (
                            <div className={`wre-uc-chat ${item.type}`} key={index}>
                                {item.text}
                                <small>10:{30 + index} AM</small>
                            </div>
                        ))}
                    </>
                )}

                {listing && (
                    <>
                        <div className="wre-uc-chat bot">
                            Hi Ankit! Here are premium properties that match your requirements.
                            <small>10:30 AM</small>
                        </div>

                        <div className="wre-uc-property-card">
                            <img src={buildingImage} alt="Property" />
                            <span>Featured</span>
                            <h4>Skyline Residences</h4>
                            <p>3 BHK Luxury Apartment</p>
                            <strong>₹1.85 Cr* Onwards</strong>
                            <button>Download Brochure</button>
                        </div>

                        <div className="wre-uc-phone-actions">
                            <button>Send Floor Plan</button>
                            <button>Watch Video Tour</button>
                        </div>

                        <button className="wre-uc-green-action">Schedule Site Visit</button>
                    </>
                )}

                {ad && (
                    <>
                        <div className="wre-uc-chat bot">
                            Hello! Looking for a property? I'm Greenfield AI Assistant.
                            <small>10:30 AM</small>
                        </div>

                        <div className="wre-uc-phone-actions vertical">
                            <button>Buy a Property</button>
                            <button>Know More</button>
                            <button>Book a Site Visit</button>
                        </div>

                        <div className="wre-uc-chat user">
                            I'm looking for 2 BHK in Pune around Wakad area.
                            <small>10:31 AM</small>
                        </div>

                        <div className="wre-uc-property-card compact">
                            <img src={building1Image} alt="Property" />
                            <h4>Skyline Residences</h4>
                            <p>2 BHK Apartment | Wakad, Pune</p>
                            <button>View Details</button>
                        </div>
                    </>
                )}

                {offer && (
                    <>
                        <div className="wre-uc-chat bot">
                            Hello Priya 👋 Here's an exclusive update just for you!
                            <small>10:30 AM</small>
                        </div>

                        <div className="wre-uc-property-card">
                            <img src={buildingImage} alt="Property" />
                            <span>New Launch</span>
                            <h4>New Project Launch!</h4>
                            <p>Skyline Residences — 3 BHK Apartments</p>
                            <strong>Starting ₹75 Lakhs*</strong>
                            <button>Download Brochure</button>
                        </div>

                        <button className="wre-uc-green-action">Book Site Visit</button>
                    </>
                )}
            </div>

            <div className="wre-uc-phone-footer">
                <span>Type a message...</span>
                <FaWhatsapp />
            </div>
        </div>
    );
};

const LeadSourceStack = () => {
    return (
        <div className="wre-uc-source-stack">
            <h5>LEAD SOURCES</h5>

            {sourceItems.map((item, index) => (
                <div className="wre-uc-source-card" key={item.title}>
                    <span
                        className="wre-uc-source-dot"
                        style={{ "--source-color": item.color }}
                    ></span>

                    <img src={item.logo} alt={item.title} />

                    <div>
                        <strong>{item.title}</strong>
                        <small>{item.sub}</small>
                    </div>

                    <span className="wre-uc-source-end-dot"></span>
                </div>
            ))}
        </div>
    );
};

const BenefitGrid = ({ items }) => {
    return (
        <div className="wre-uc-benefit-grid">
            {items.map((item) => (
                <div className="wre-uc-benefit" key={item.title}>
                    <span>{item.icon}</span>
                    <div>
                        <strong>{item.title}</strong>
                        <p>{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

const CrmMini = () => {
    return (
        <div className="wre-uc-crm-mini">
            <div className="wre-uc-crm-head">WhatsApp CRM Dashboard</div>

            <div className="wre-uc-crm-layout">
                <div className="wre-uc-crm-sidebar">
                    <span>Dashboard</span>
                    <span>Leads</span>
                    <span>Chats</span>
                    <span>Follow Ups</span>
                    <span>Campaigns</span>
                </div>

                <div className="wre-uc-crm-content">
                    <div className="wre-uc-crm-stats">
                        <div>
                            <strong>1,248</strong>
                            <span>Total Leads</span>
                        </div>
                        <div>
                            <strong>320</strong>
                            <span>Open Chats</span>
                        </div>
                        <div>
                            <strong>86</strong>
                            <span>Conversions</span>
                        </div>
                    </div>

                    {[maleImg, femaleImg, maleImg].map((img, index) => (
                        <div className="wre-uc-crm-lead" key={index}>
                            <img src={img} alt="Lead" />
                            <div>
                                <strong>{["Rahul Sharma", "Neha Patel", "Amit Verma"][index]}</strong>
                                <span>{["2 BHK in Pune", "3 BHK in Mumbai", "Villa in Bangalore"][index]}</span>
                            </div>
                            <small>New</small>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
const BroadcastDashboard = () => {
    return (
        <div className="wre-uc-broadcast">
            <div className="wre-uc-broadcast-head">
                <strong><FaWhatsapp /> Broadcast Dashboard</strong>
                <button>+ New Broadcast</button>
            </div>

            <div className="wre-uc-broadcast-body">
                <div className="wre-uc-broadcast-section-label">Campaign Overview</div>

                <div className="wre-uc-broadcast-stats">
                    <div className="wre-uc-stat-card">
                        <span className="wre-uc-stat-icon"><FaUsers /></span>
                        <div>
                            <small>Audience</small>
                            <strong>25,000</strong>
                            <em>Prospects</em>
                        </div>
                    </div>

                    <div className="wre-uc-stat-card">
                        <span className="wre-uc-stat-icon"><FaPaperPlane /></span>
                        <div>
                            <small>Messages Sent</small>
                            <strong>25,000</strong>
                            <em>100%</em>
                        </div>
                    </div>

                    <div className="wre-uc-stat-card">
                        <span className="wre-uc-stat-icon"><FaCheckCircle /></span>
                        <div>
                            <small>Delivery Rate</small>
                            <strong>98.7%</strong>
                            <em>24,675 Delivered</em>
                        </div>
                    </div>
                </div>

                <div className="wre-uc-broadcast-mid">
                    <div className="wre-uc-broadcast-preview">
                        <div className="wre-uc-mini-title">Message Preview</div>

                        <div className="wre-uc-preview-card">
                            <img src="/images/building4.png" alt="project" />
                            <div className="wre-uc-preview-copy">
                                <h4>🚀 New Project Launch!</h4>
                                <p>Skyline Residences</p>
                                <p>3 BHK Apartments</p>
                                <strong>Starting ₹75 Lakhs*</strong>

                                <ul>
                                    <li><FaCheckCircle /> Prime Location</li>
                                    <li><FaCheckCircle /> World-class Amenities</li>
                                    <li><FaCheckCircle /> Limited Units Available</li>
                                </ul>

                                <span>Book your site visit today!</span>
                                <button>Explore Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="wre-uc-broadcast-analytics">
                        <div className="wre-uc-analytics-head">
                            <span className="wre-uc-mini-title">Broadcast Analytics</span>
                            <small>This Campaign</small>
                        </div>

                        <div className="wre-uc-analytics-grid">
                            <div>
                                <small>Delivered</small>
                                <strong>24,675</strong>
                                <span>98.7%</span>
                                <i style={{ width: "98.7%" }}></i>
                            </div>

                            <div>
                                <small>Read</small>
                                <strong>18,542</strong>
                                <span>74.2%</span>
                                <i style={{ width: "74.2%" }}></i>
                            </div>

                            <div>
                                <small>Clicked</small>
                                <strong>6,892</strong>
                                <span>27.6%</span>
                                <i style={{ width: "27.6%" }}></i>
                            </div>

                            <div>
                                <small>Replies</small>
                                <strong>2,345</strong>
                                <span>9.4%</span>
                                <i style={{ width: "9.4%" }}></i>
                            </div>
                        </div>

                        <div className="wre-uc-audience-segments">
                            <div className="wre-uc-mini-title">Audience Segments</div>

                            <div className="wre-uc-segment-content">
                                <div className="wre-uc-donut">
                                    <div className="wre-uc-donut-center">
                                        <strong>25,000</strong>
                                        <span>Total</span>
                                    </div>
                                </div>

                                <ul className="wre-uc-segment-legend">
                                    <li><span className="buyers"></span> Buyers <b>15,000 (60%)</b></li>
                                    <li><span className="investors"></span> Investors <b>6,250 (25%)</b></li>
                                    <li><span className="tenants"></span> Tenants <b>3,750 (15%)</b></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wre-uc-recent-broadcasts">
                    <div className="wre-uc-mini-title">Recent Broadcasts</div>

                    <div className="wre-uc-broadcast-table">
                        <div className="wre-uc-broadcast-row">
                            <div className="left">
                                <img src="/images/building2.png" alt="project" />
                                <div>
                                    <strong>New Project Launch – Skyline Residences</strong>
                                    <span>Sent on 20 May, 2024 10:30 AM</span>
                                </div>
                            </div>
                            <div>25,000</div>
                            <div>98.7%</div>
                            <div>27.6%</div>
                            <button>View</button>
                        </div>

                        <div className="wre-uc-broadcast-row">
                            <div className="left">
                                <img src="/images/building5.png" alt="project" />
                                <div>
                                    <strong>Festive Offer – Akshaya Tritiya</strong>
                                    <span>Sent on 18 May, 2024 11:00 AM</span>
                                </div>
                            </div>
                            <div>22,000</div>
                            <div>97.5%</div>
                            <div>24.1%</div>
                            <button>View</button>
                        </div>

                        <div className="wre-uc-broadcast-row">
                            <div className="left">
                                <img src="/images/building1.png" alt="project" />
                                <div>
                                    <strong>Inventory Update – May 2024</strong>
                                    <span>Sent on 15 May, 2024 09:30 AM</span>
                                </div>
                            </div>
                            <div>18,500</div>
                            <div>96.3%</div>
                            <div>18.7%</div>
                            <button>View</button>
                        </div>
                    </div>

                    <div className="wre-uc-broadcast-footer-link">View All Broadcasts →</div>
                </div>
            </div>
        </div>
    );
};

const UseCasesSection = () => {
    return (
        <section className="wre-usecases-section">
            <div className="container">
                <div className="wre-usecases-header text-center">
                    <h2>WhatsApp Real Estate Use Cases</h2>
                    <p>Discover How Real Estate Businesses Use WhatsApp</p>
                </div>

                {/* 01 */}
                <article className="wre-usecase-panel wre-usecase-leads wre-usecase-leads-fixed">
                    <span className="wre-panel-number">1.</span>
                    <div className="wre-uc-left-copy">
                        <h3>
                            Generate <span>Property Leads</span> With <span>WhatsApp</span>
                            <FaWhatsapp />
                        </h3>

                        <div className="wre-uc-title-line"></div>

                        <p>
                            Capture inquiries from Google Ads, Facebook, Instagram, website forms,
                            QR codes, and property portals directly on WhatsApp.
                        </p>

                        <BenefitGrid items={leadBenefits} />

                    </div>
                    <div className="wre-uc-bottom-whatsapp">
                        <FaWhatsapp />
                        <strong>
                            Turn Conversations <br />
                            Into Customers
                        </strong>
                    </div>

                    <LeadSourceStack />

                    <div className="wre-uc-lead-arrow-layer" aria-hidden="true">
                        <svg viewBox="0 0 1080 610" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <marker id="leadArrowBlue1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                                    <path d="M0,0 L8,4 L0,8 Z" fill="#2563eb" />
                                </marker>
                                <marker id="leadArrowBlue2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                                    <path d="M0,0 L8,4 L0,8 Z" fill="#1877f2" />
                                </marker>
                                <marker id="leadArrowPink" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                                    <path d="M0,0 L8,4 L0,8 Z" fill="#ec4899" />
                                </marker>
                                <marker id="leadArrowCyan" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                                    <path d="M0,0 L8,4 L0,8 Z" fill="#06b6d4" />
                                </marker>
                                <marker id="leadArrowGreen" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                                    <path d="M0,0 L8,4 L0,8 Z" fill="#16a34a" />
                                </marker>
                                <marker id="leadArrowOrange" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                                    <path d="M0,0 L8,4 L0,8 Z" fill="#f59e0b" />
                                </marker>
                            </defs>

                            {/* Each arrow starts at the right edge of the matching source card */}
                            <path d="M535 104 C575 104, 595 170, 640 205" className="lead-path blue1" markerEnd="url(#leadArrowBlue1)" />
                            <path d="M535 167 C580 167, 602 190, 640 218" className="lead-path blue2" markerEnd="url(#leadArrowBlue2)" />
                            <path d="M535 230 C580 230, 604 230, 640 230" className="lead-path pink" markerEnd="url(#leadArrowPink)" />
                            <path d="M535 293 C580 293, 604 266, 640 242" className="lead-path cyan" markerEnd="url(#leadArrowCyan)" />
                            <path d="M535 356 C578 356, 600 300, 640 254" className="lead-path green" markerEnd="url(#leadArrowGreen)" />
                            <path d="M535 419 C575 419, 595 322, 640 266" className="lead-path orange" markerEnd="url(#leadArrowOrange)" />
                        </svg>
                    </div>

                    <div className="wre-uc-wa-hub">
                        <FaWhatsapp />
                        <strong>
                            WhatsApp Business <br />
                            Number
                        </strong>
                    </div>
                    <div className="wre-uc-notification-arrow-layer" aria-hidden="true">
                        <svg viewBox="0 0 1080 610" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <marker id="notifyArrowGreen" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                                    <path d="M0,0 L8,4 L0,8 Z" fill="#22c55e" />
                                </marker>
                            </defs>

                            {/* WhatsApp hub to the two live notification cards */}
                            <path
                                d="M690 210 C730 170, 742 118, 770 118"
                                className="notify-path"
                                markerEnd="url(#notifyArrowGreen)"
                            />
                            <path
                                d="M690 222 C730 212, 742 184, 770 184"
                                className="notify-path"
                                markerEnd="url(#notifyArrowGreen)"
                            />

                            {/* straight arrow from WhatsApp hub to CRM dashboard */}
                            <path
                                d="M690 236 L770 252"
                                className="crm-path"
                                markerEnd="url(#notifyArrowGreen)"
                            />
                        </svg>
                    </div>

                    <div className="wre-uc-live-area">
                        <h5 className="wre-live-title">LIVE LEAD NOTIFICATIONS</h5>

                        <div className="wre-uc-notification">
                            <FaWhatsapp />
                            <div>
                                <strong>New Lead from Facebook Ad</strong>
                                <span>Name: Priya Singh</span>
                                <small>Interested in 2 BHK in Gurgaon</small>
                            </div>
                            <em>now</em>
                        </div>

                        <div className="wre-uc-notification">
                            <FaWhatsapp />
                            <div>
                                <strong>New Lead from Google Search</strong>
                                <span>Name: Arjun Mehta</span>
                                <small>Interested in 3 BHK in Pune</small>
                            </div>
                            <em>now</em>
                        </div>

                        <CrmMini />
                    </div>

                    <div className="wre-uc-flow-strip">
                        <span>
                            <FaComments /> Capture Leads
                        </span>
                        <span>
                            <FaWhatsapp /> Engage Instantly
                        </span>
                        <span>
                            <FaUsers /> Manage & Follow Up
                        </span>
                        <span>
                            <FaChartLine /> Convert More Deals
                        </span>
                    </div>
                </article>
                {/* 02 */}
                <article className="wre-usecase-panel wre-usecase-ai-fixed">
                    <span className="wre-panel-number">2.</span>

                    <div className="wre-ai-left">
                        <div className="wre-ai-dot-bg"></div>

                        <h3>
                            Identify <span>Interested</span> <span>Customers</span>
                            <FaWhatsapp />
                        </h3>

                        <div className="wre-ai-title-line"></div>

                        <h4>
                            AI Identifies Serious Buyers <span>Automatically</span>
                        </h4>

                        <p>
                            Understand budget, preferred location, property type, and purchase
                            timeline to prioritize high-intent prospects.
                        </p>

                        <div className="wre-ai-feature-grid">
                            <div className="wre-ai-feature">
                                <span><FaRobot /></span>
                                <div>
                                    <strong>Ask Smart Questions</strong>
                                    <small>AI chat collects the right information</small>
                                </div>
                            </div>

                            <div className="wre-ai-feature">
                                <span><FaBullseye /></span>
                                <div>
                                    <strong>Qualify Automatically</strong>
                                    <small>Understand buyer intent in real-time</small>
                                </div>
                            </div>

                            <div className="wre-ai-feature">
                                <span><FaFilter /></span>
                                <div>
                                    <strong>Score & Prioritize High-Intent Leads</strong>
                                    <small>Focus on serious buyers only</small>
                                </div>
                            </div>

                            <div className="wre-ai-feature">
                                <span><FaChartLine /></span>
                                <div>
                                    <strong>Improve Conversions</strong>
                                    <small>Engage better, close faster</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wre-ai-phone">
                        <div className="wre-ai-phone-notch"></div>

                        <div className="wre-ai-phone-header">
                            <FaHome />
                            <div>
                                <strong>Greenfield Realty</strong>
                                <small>Business Account</small>
                            </div>
                            <FaWhatsapp />
                        </div>

                        <div className="wre-ai-phone-body">
                            <div className="wre-chat-bubble bot">
                                👋 Hi Ankit! I’m your AI Property Assistant. Let me understand your
                                requirements better.
                                <small>10:30 AM</small>
                            </div>

                            <div className="wre-chat-bubble user">
                                🏡 What type of property are you looking for?
                                <small>10:30 AM ✓✓</small>
                            </div>

                            <div className="wre-chat-answer">2 BHK Apartment</div>

                            <div className="wre-chat-bubble user">
                                💰 What is your budget range?
                                <small>10:30 AM ✓✓</small>
                            </div>

                            <div className="wre-chat-answer">₹50 - ₹80 Lakhs</div>

                            <div className="wre-chat-bubble user">
                                📍 Preferred location?
                                <small>10:30 AM ✓✓</small>
                            </div>

                            <div className="wre-chat-answer">Wakad, Pune</div>

                            <div className="wre-chat-bubble user">
                                📅 When are you planning to buy?
                                <small>10:30 AM ✓✓</small>
                            </div>

                            <div className="wre-chat-answer">Within 1 - 3 Months</div>

                            <div className="wre-chat-bubble bot final">
                                Thanks! I’ve noted your preferences. Let me find the best properties
                                for you.
                                <small>10:31 AM</small>
                            </div>
                        </div>

                        <div className="wre-ai-phone-input">
                            <span><FaRegSmile /> Type a message...</span>
                            <FaWhatsapp />
                        </div>
                    </div>

                    <div className="wre-ai-bot-orb">
                        <FaRobot />
                        <small>AI</small>
                    </div>

                    <div className="wre-ai-arrow-layer" aria-hidden="true">
                        <svg viewBox="0 0 260 220" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <marker
                                    id="wreAiArrowHead"
                                    markerWidth="8"
                                    markerHeight="8"
                                    refX="7"
                                    refY="4"
                                    orient="auto"
                                >
                                    <path d="M0,0 L8,4 L0,8 Z" fill="#22c55e" />
                                </marker>
                            </defs>

                            {/* Arrow to LEAD SCORE card */}
                            <path
                                className="wre-ai-dotted-arrow"
                                d="M28 108 H72 V46 H150"
                                markerEnd="url(#wreAiArrowHead)"
                            />

                            {/* Arrow to KEY INSIGHTS card */}
                            <path
                                className="wre-ai-dotted-arrow"
                                d="M28 108 H72 V164 H150"
                                markerEnd="url(#wreAiArrowHead)"
                            />
                        </svg>
                    </div>

                    <div className="wre-ai-right">
                        <div className="wre-ai-score-card">
                            <h5>LEAD SCORE</h5>

                            <div className="wre-ai-score-content">
                                <div className="wre-ai-score-ring">
                                    <strong>92</strong>
                                    <span>/100</span>
                                </div>

                                <div className="wre-ai-hot-lead">
                                    <h4>Hot Lead 🔥</h4>
                                    <div className="wre-ai-stars">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>

                                    <p><FaCheckCircle /> Highly Interested</p>
                                    <p><FaCheckCircle /> High Budget Match</p>
                                    <p><FaCheckCircle /> Perfect Location Match</p>
                                </div>
                            </div>

                            <div className="wre-ai-site-recommend">
                                <FaCalendarAlt />
                                Site Visit Recommended
                            </div>
                        </div>

                        <div className="wre-ai-insights-card">
                            <h5>KEY INSIGHTS</h5>

                            <div className="wre-ai-insight-row">
                                <span><FaHome /></span>
                                <p>Property Type</p>
                                <strong>2 BHK Apartment</strong>
                            </div>

                            <div className="wre-ai-insight-row">
                                <span><FaRupeeSign /></span>
                                <p>Budget</p>
                                <strong>₹50 - ₹80 Lakhs</strong>
                            </div>

                            <div className="wre-ai-insight-row">
                                <span><FaMapMarkerAlt /></span>
                                <p>Preferred Location</p>
                                <strong>Wakad, Pune</strong>
                            </div>

                            <div className="wre-ai-insight-row">
                                <span><FaCalendarAlt /></span>
                                <p>Purchase Timeline</p>
                                <strong>Within 1 - 3 Months</strong>
                            </div>
                        </div>

                        <div className="wre-ai-funnel">
                            <div className="wre-ai-funnel-item blue">
                                <span><FaUsers /></span>
                                <strong>NEW LEADS</strong>
                                <em>287</em>
                            </div>

                            <div className="wre-ai-funnel-arrow blue-arrow"></div>

                            <div className="wre-ai-funnel-item green">
                                <span><FaCheckCircle /></span>
                                <strong>QUALIFIED LEADS</strong>
                                <em>89</em>
                            </div>

                            <div className="wre-ai-funnel-arrow orange-arrow"></div>

                            <div className="wre-ai-funnel-item orange">
                                <span><FaFire /></span>
                                <strong>HOT BUYERS</strong>
                                <em>23</em>
                            </div>
                        </div>
                    </div>

                    <div className="wre-ai-bottom-strip">
                        <span><FaRobot /> AI Understands Intent</span>
                        <span><FaBullseye /> Scores & Prioritizes Leads</span>
                        <span><FaChartLine /> More Meetings More Sales</span>
                    </div>
                </article>

                {/* 03 */}
                <article className="wre-usecase-panel wre-usecase-listing-fixed">
                   <span className="wre-panel-number">3.</span>

                    <div className="wre-list-left">
                        <div className="wre-list-dot-bg"></div>

                        <h3>
                            Showcase <span>Property Listings</span> &amp; Drive <span>Sales</span>
                            <FaWhatsapp />
                        </h3>

                        <div className="wre-list-title-line"></div>

                        <h4>
                            Showcase Property Listings <span>on WhatsApp</span>
                        </h4>

                        <p>
                            Share brochures, floor plans, pricing sheets, photos, videos, and virtual
                            tours instantly.
                        </p>

                        <div className="wre-list-feature-grid">
                            <div className="wre-list-feature">
                                <span><FaFileAlt /></span>
                                <div>
                                    <strong>Brochures</strong>
                                    <small>Share detailed property brochures</small>
                                </div>
                            </div>

                            <div className="wre-list-feature">
                                <span><FaRegBuilding /></span>
                                <div>
                                    <strong>Floor Plans</strong>
                                    <small>Send layout plans instantly</small>
                                </div>
                            </div>

                            <div className="wre-list-feature">
                                <span><FaCamera /></span>
                                <div>
                                    <strong>Photos</strong>
                                    <small>High-quality property images</small>
                                </div>
                            </div>

                            <div className="wre-list-feature">
                                <span><FaPlay /></span>
                                <div>
                                    <strong>Videos</strong>
                                    <small>Property video tours</small>
                                </div>
                            </div>

                            <div className="wre-list-feature">
                                <span><FaVrCardboard /></span>
                                <div>
                                    <strong>Virtual Tours</strong>
                                    <small>Immersive 360° experience</small>
                                </div>
                            </div>

                            <div className="wre-list-feature">
                                <span><FaTags /></span>
                                <div>
                                    <strong>Pricing Sheets</strong>
                                    <small>Transparent pricing details</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wre-list-phone">
                        <div className="wre-list-phone-notch"></div>

                        <div className="wre-list-phone-header">
                            <FaRegBuilding />
                            <div>
                                <strong>Greenfield Realty</strong>
                                <small>Business Account</small>
                            </div>
                            <FaWhatsapp />
                        </div>

                        <div className="wre-list-phone-body">
                            <div className="wre-list-chat-bubble">
                                Hi Ankit! Here are premium properties that match your requirements.
                                <small>10:30 AM</small>
                            </div>

                            <div className="wre-list-property-card">
                                <div className="wre-list-property-img">
                                    <img src="/images/building2.png" alt="Skyline Residences" />
                                    <em>Featured</em>
                                </div>

                                <div className="wre-list-property-content">
                                    <strong>Skyline Residences</strong>
                                    <small>3 BHK Luxury Apartment</small>

                                    <div className="wre-list-property-meta">
                                        <span><FaMapMarkerAlt /> Koregaon Park, Pune</span>
                                    </div>

                                    <div className="wre-list-property-specs">
                                        <span><FaBed /> 3 Beds</span>
                                        <span><FaBath /> 3 Baths</span>
                                        <span><FaRulerCombined /> 1785 Sq.ft.</span>
                                    </div>

                                    <h5>₹1.85 Cr* <span>Onwards</span></h5>
                                    <p>All Inclusive</p>

                                    <button type="button">
                                        <FaDownload /> Download Brochure
                                    </button>
                                </div>
                            </div>

                            <div className="wre-list-phone-actions">
                                <button type="button"><FaRegBuilding /> Send Floor Plan</button>
                                <button type="button"><FaPlay /> Watch Video Tour</button>
                            </div>

                            <button type="button" className="wre-list-site-btn">
                                <FaCalendarAlt /> Schedule Site Visit
                            </button>
                        </div>

                        <div className="wre-list-phone-input">
                            <span><FaRegSmile /> Type a message...</span>
                            <FaWhatsapp />
                        </div>
                    </div>

                    <div className="wre-list-connector" aria-hidden="true">
                        <svg viewBox="0 0 54 360" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <marker
                                    id="listArrowGreen"
                                    markerWidth="8"
                                    markerHeight="8"
                                    refX="7"
                                    refY="4"
                                    orient="auto"
                                >
                                    <path d="M0,0 L8,4 L0,8 Z" fill="#16a34a" />
                                </marker>
                            </defs>

                            <path
                                d="M10 48 V300"
                                className="wre-list-main-line"
                            />

                            <path
                                d="M10 48 H70"
                                className="wre-list-link-dot"
                                markerEnd="url(#listArrowGreen)"
                            />

                            <path
                                d="M10 118 H70"
                                className="wre-list-link-dot"
                                markerEnd="url(#listArrowGreen)"
                            />

                            <path
                                d="M10 205 H55 V250 H75"
                                className="wre-list-link-dot"
                                markerEnd="url(#listArrowGreen)"
                            />

                            <path
                                d="M142 430 H14"
                                className="wre-list-link-dot"
                                markerEnd="url(#listArrowGreen)"
                            />

                            <circle cx="10" cy="48" r="5" fill="#16a34a" />
                            <circle cx="10" cy="118" r="5" fill="#16a34a" />
                            <circle cx="10" cy="205" r="5" fill="#16a34a" />
                            {/* <circle cx="10" cy="294" r="5" fill="#16a34a" /> */}
                        </svg>
                    </div>

                    <div className="wre-list-right">
                        <div className="wre-list-video-card">
                            <img src="/images/phone-building.png" alt="Property video tour" />
                            <button type="button"><FaPlay /></button>
                            <em>Video Tour</em>
                        </div>

                        <div className="wre-list-floor-card">
                            <div className="wre-list-card-head">
                                <strong><FaRegBuilding /> Floor Plan</strong>
                                <span>View / Download</span>
                            </div>
                            <div className="wre-list-floor-grid"></div>
                        </div>

                        <div className="wre-list-price-card">
                            <h5>Pricing Details</h5>

                            <div>
                                <span>Base Price</span>
                                <strong>₹1.70 Cr</strong>
                            </div>

                            <div>
                                <span>Amenities &amp; Charges</span>
                                <strong>₹10.50 L</strong>
                            </div>

                            <div>
                                <span>Stamp Duty &amp; Registration</span>
                                <strong>₹4.65 L</strong>
                            </div>

                            <hr />

                            <div className="total">
                                <span>Total Price</span>
                                <strong>₹1.85 Cr*</strong>
                            </div>

                            <p>All Inclusive</p>
                        </div>

                        <button type="button" className="wre-list-schedule-card">
                            <span><FaCalendarAlt /></span>
                            <div>
                                <strong>Schedule Site Visit</strong>
                                <small>Our experts will contact you shortly</small>
                            </div>
                            <em>›</em>
                        </button>
                    </div>

                    <div className="wre-list-trust-strip">
                        <span><FaShieldAlt /> Verified Properties</span>
                        <span><FaAward /> Trusted by Thousands</span>
                        <span><FaHeadset /> Expert Support</span>
                    </div>
                </article>

                {/* 04 */}
                <article className="wre-usecase-panel wre-usecase-ads-fixed">
                    <span className="wre-panel-number">4.</span>

                    <div className="wre-ads-left">
                        <div className="wre-ads-dot-bg"></div>

                        <h3>
                            Run <span>Click-to-WhatsApp</span> Ads
                            <img src="/images/whatsapp-logo.png" alt="WhatsApp" />
                        </h3>

                        <div className="wre-ads-title-line"></div>

                        <p>
                            Turn ad clicks into real-time conversations and connect prospects
                            instantly with your sales team.
                        </p>

                        <div className="wre-ads-benefit-grid">
                            <div className="wre-ads-benefit">
                                <span><FaComments /></span>
                                <div>
                                    <strong>Instant Conversations</strong>
                                    <small>Engage prospects the moment they click your ad</small>
                                </div>
                            </div>

                            <div className="wre-ads-benefit">
                                <span><FaUsers /></span>
                                <div>
                                    <strong>Higher Conversion</strong>
                                    <small>Real-time interaction builds trust and boosts conversions</small>
                                </div>
                            </div>

                            <div className="wre-ads-benefit">
                                <span><FaBullseye /></span>
                                <div>
                                    <strong>Qualified Leads</strong>
                                    <small>AI qualifies and routes high-intent leads to your sales team</small>
                                </div>
                            </div>

                            <div className="wre-ads-benefit">
                                <span><FaChartLine /></span>
                                <div>
                                    <strong>Centralized in CRM</strong>
                                    <small>All conversations and lead data saved in one place</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wre-ads-cards">
                        <div className="wre-ad-card facebook-ad">
                            <div className="wre-ad-head">
                                <img src="/images/facebook-logo.png" alt="Facebook" />
                                <strong>Facebook Ad</strong>
                            </div>

                            <img className="wre-ad-building" src="/images/phone-building.png" alt="Facebook property ad" />

                            <h4>Luxury 2 &amp; 3 BHK Apartments</h4>
                            <p>Prime Location. World-class Amenities.</p>

                            <button type="button">Message on WhatsApp</button>

                            <div className="wre-ad-meta">
                                <span>❤️ 😮 👍 1.2K</span>
                                <span>128 Comments</span>
                            </div>
                        </div>

                        <div className="wre-ad-card instagram-ad">
                            <div className="wre-ad-head">
                                <img src="/images/instagram-logo.png" alt="Instagram" />
                                <strong>Instagram Ad</strong>
                            </div>

                            <img className="wre-ad-building" src="/images/building2.png" alt="Instagram property ad" />

                            <h4>Find Your Dream Home</h4>
                            <p>Premium Homes. Limited Units!</p>

                            <button type="button">Message on WhatsApp</button>

                            <div className="wre-ad-meta">
                                <span>♡ 💬</span>
                                <span>892 likes</span>
                            </div>
                        </div>

                        <div className="wre-ad-card google-ad">
                            <div className="wre-ad-head">
                                <img src="/images/google-logo.png" alt="Google" />
                                <strong>Google Ad</strong>
                            </div>

                            <h4>Premium Apartments in Pune</h4>
                            <p>2 &amp; 3 BHK Homes with Top Amenities.</p>

                            <small>Ad · www.greenfieldrealty.com</small>

                            <button type="button">Message on WhatsApp</button>
                        </div>
                    </div>

                    <div className="wre-ads-click-icon">
                        <span><FaMousePointer /></span>
                    </div>

                    <div className="wre-ads-phone">
                        <div className="wre-ads-phone-notch"></div>

                        <div className="wre-ads-phone-header">
                            <span>🏢</span>
                            <div>
                                <strong>Greenfield Realty</strong>
                                <small>Business Account</small>
                            </div>
                            <img src="/images/whatsapp-logo.png" alt="WhatsApp" />
                        </div>

                        <div className="wre-ads-phone-body">
                            <div className="wre-ads-msg bot">
                                Hello! Looking for a property? I’m Greenfield AI Assistant.
                                <small>10:30 AM</small>
                            </div>

                            <button>Buy a Property</button>
                            <button>Know More</button>
                            <button>Book a Site Visit</button>

                            <div className="wre-ads-msg user">
                                I’m looking for 2 BHK in Pune around Wakad area.
                                <small>10:31 AM ✓✓</small>
                            </div>

                            <div className="wre-ads-msg bot">
                                Great choice! 🎉 Here are some best options in Wakad for you.
                                <small>10:31 AM</small>
                            </div>

                            <div className="wre-ads-phone-property">
                                <img src="/images/building1.png" alt="Skyline Residences" />
                                <div>
                                    <strong>Skyline Residences</strong>
                                    <small>2 BHK Apartment | Wakad, Pune</small>
                                    <p>₹1.25 Cr* Onwards</p>
                                </div>
                            </div>

                            <button className="view-details">View Details</button>

                            <div className="wre-ads-msg bot small">
                                Would you like to schedule a site visit?
                                <small>10:32 AM</small>
                            </div>

                            <button className="schedule-now">Yes, Schedule Now</button>
                        </div>

                        <div className="wre-ads-phone-input">
                            <span>😊 Type a message...</span>
                            <img src="/images/whatsapp-logo.png" alt="WhatsApp" />
                        </div>
                    </div>

                    <div className="wre-ads-wa-middle">
                        <img src="/images/whatsapp-logo.png" alt="WhatsApp" />
                    </div>

                    <div className="wre-ads-side-badges">
                        <div>
                            <strong>AI Bot</strong>
                            <small>Qualifies &amp; engages in real-time</small>
                        </div>

                        <div>
                            <strong>Instant Response</strong>
                            <small>Higher engagement &amp; conversions</small>
                        </div>
                    </div>

                    <div className="wre-ads-crm">
                        <h4>CRM Dashboard</h4>

                        <div className="wre-ads-crm-profile">
                            <img src="/images/male.png" alt="Rahul Mehta" />
                            <div>
                                <strong>Rahul Mehta</strong>
                                <small>2 BHK in Wakad, Pune</small>
                                <span>
                                    Hot Lead <FaFire className="wre-inline-fire" />
                                </span>
                            </div>
                        </div>

                        <div className="wre-ads-lead-details">
                            <div><span>Source</span><strong>Facebook Ad</strong></div>
                            <div><span>Interested In</span><strong>2 BHK Apartment</strong></div>
                            <div><span>Location</span><strong>Wakad, Pune</strong></div>
                            <div><span>Budget</span><strong>₹1.20 Cr - ₹1.50 Cr</strong></div>
                            <div><span>Timeline</span><strong>Within 1-3 Months</strong></div>
                        </div>

                        <div className="wre-ads-score">
                            <strong>92</strong>
                            <span>High Intent Lead</span>
                        </div>

                        <div className="wre-ads-next">
                            <h5>Next Steps</h5>
                            <p>✓ Assign to Sales Executive</p>
                            <p>✓ Follow Up Reminder</p>
                            <p>✓ Schedule Site Visit</p>
                        </div>
                    </div>

                    <div className="wre-ads-flow">
                        <span><b>1. AD CLICK</b><small>Prospect clicks on ad CTA</small></span>
                        <span><b>2. WHATSAPP CONVERSATION</b><small>Real-time chat with AI Bot</small></span>
                        <span><b>3. LEAD IN CRM</b><small>Lead captured &amp; assigned instantly</small></span>
                    </div>

                    <div className="wre-ads-svg-layer" aria-hidden="true">
                        <svg viewBox="0 0 1080 760" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <marker id="adsArrowGreen" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                                    <path d="M0,0 L8,4 L0,8 Z" fill="#16a34a" />
                                </marker>
                            </defs>

                            {/* ad cards to click icon */}
                            <path
                                d="M458 145 C486 145 486 302 462 302"
                                className="ads-line solid"
                                markerEnd="url(#adsArrowGreen)"
                            />

                            <path
                                d="M458 320 C486 320 486 302 462 302"
                                className="ads-line solid"
                                markerEnd="url(#adsArrowGreen)"
                            />

                            <path
                                d="M458 490 C486 490 486 320 462 302"
                                className="ads-line solid"
                                markerEnd="url(#adsArrowGreen)"
                            />

                            {/* click icon to phone */}
                            <path
                                d="M493 302 H500"
                                className="ads-line solid"
                                markerEnd="url(#adsArrowGreen)"
                            />

                            {/* phone to WhatsApp middle */}
                            <path
                                d="M736 310 H742"
                                className="ads-line dotted"
                                markerEnd="url(#adsArrowGreen)"
                            />

                            {/* WhatsApp middle to CRM */}
                            <path
                                d="M794 310 H848"
                                className="ads-line dotted"
                                markerEnd="url(#adsArrowGreen)"
                            />
                        </svg>
                    </div>
                </article>
                {/* 05 */}
                <article className="wre-usecase-panel wre-usecase-offers wre-usecase-offers-fixed">
                    <span className="wre-panel-number">5.</span>

                    <div className="wre-uc-left-copy">
                        <h3>
                            Send Offers, <span>New Property Alerts</span> & <span>Payment Reminders</span>
                            <FaWhatsapp />
                        </h3>

                        <div className="wre-uc-title-line"></div>

                        <h4>
                            Send Timely Offers & <span>Property Updates</span>
                        </h4>

                        <p>
                            Promote new launches, inventory updates, festive offers, and automate
                            payment reminders through WhatsApp.
                        </p>

                        <BenefitGrid items={offerBenefits} />
                    </div>

                    <BroadcastDashboard />

                    <div className="wre-offer-connector-layer" aria-hidden="true">
                        <svg viewBox="0 0 220 360" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <marker
                                    id="offerArrowGreen"
                                    markerWidth="8"
                                    markerHeight="8"
                                    refX="7"
                                    refY="4"
                                    orient="auto"
                                >
                                    <path d="M0,0 L8,4 L0,8 Z" fill="#16a34a" />
                                </marker>
                            </defs>

                            <path
                                d="M0 120 C55 120 60 120 128 120"
                                className="offer-dotted-path"
                                markerEnd="url(#offerArrowGreen)"
                            />

                            <path
                                d="M0 120 C65 120 65 275 128 275"
                                className="offer-dotted-path"
                                markerEnd="url(#offerArrowGreen)"
                            />
                        </svg>
                    </div>


                    <div className="wre-uc-offer-phone-stack">
                        <PhoneChatMock offer />

                        <div className="wre-uc-payment-reminder">
                            <FaBell />
                            <div>
                                <strong>Rent Due Tomorrow</strong>
                                <p>
                                    Hi Rahul, your rent for the property #A-302 is due tomorrow.
                                    Amount: ₹25,000.
                                </p>
                                <small>Due Date: 21 May 2024</small>
                                <button>Pay Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="wre-uc-process-strip">
                        <span><FaBullhorn /> <b>Create Campaign</b><small>Design offers and updates</small></span>
                        <span><FaUserCheck /> <b>Select Audience</b><small>Target the right prospects</small></span>
                        <span><FaWhatsapp /> <b>Send via WhatsApp</b><small>Broadcast instantly</small></span>
                        <span><FaChartPie /> <b>Track Performance</b><small>Analyze delivery and replies</small></span>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default UseCasesSection; 
