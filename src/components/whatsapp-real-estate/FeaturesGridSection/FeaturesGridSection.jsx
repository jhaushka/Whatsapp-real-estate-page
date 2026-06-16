import "./FeaturesGridSection.css";

import {
    FaWhatsapp,
    FaTelegramPlane,
    FaRobot,
    FaCalendarAlt,
    FaTrophy,
    FaBolt,
    FaUsers,
    FaChartLine,
    FaCheckCircle,
    FaFilePdf,
    FaStar,
    FaBuilding,
    FaRegCalendarCheck,
    FaClipboardList,
    FaTags,
} from "react-icons/fa";

const buildingImage = "/images/hero-building.png";

const campaignBullets = [
    "Create campaigns using AI in seconds",
    "Upload CSV or import contacts",
    "Send offers, brochures, videos & more",
    "Track delivery, reads, replies & conversions",
];

const crmBullets = [
    "Manage all leads & chats in one place",
    "Team collaboration made simple",
    "Assign, transfer & tag leads easily",
    "Full chat history & notes at your fingertips",
];

const leadBullets = [
    "AI chats instantly with every lead",
    "Asks smart questions to understand needs",
    "Scores lead based on intent & budget",
    "Prioritize hot leads & focus on high potential",
];

const knowledgeBullets = [
    "Train AI with project brochures, price lists, floor plans, FAQs & more",
    "Answers buyer queries 24/7 accurately",
    "Consistent & reliable information every time",
    "Better customer experience, more qualified leads",
];

const bookingBullets = [
    "AI checks availability & suggests slots",
    "Books, reschedules & confirms appointments",
    "Sends reminders to buyers automatically",
    "Notifies assigned agents instantly",
];

const analyticsBullets = [
    "Capture leads from all channels",
    "Qualify, nurture & engage automatically",
    "Convert more site visits into sales",
    "Real-time insights to grow your business",
];

const inboxContacts = [
    {
        name: "Rahul Sharma",
        text: "Interested in 2 BHK in Gurgaon",
        time: "10:30 AM",
        active: true,
        img: "/images/male.png",
    },
    {
        name: "Neha Patel",
        text: "Budget around 60L",
        time: "10:28 AM",
        img: "/images/female.png",
    },
    {
        name: "Vikram Singh",
        text: "Site visit this weekend?",
        time: "10:25 AM",
        img: "/images/male.png",
    },
    {
        name: "Priya Nair",
        text: "Brochure please",
        time: "10:20 AM",
        img: "/images/female.png",
    },
];

const knowledgeFiles = [
    "Project Brochure.pdf",
    "Price List.pdf",
    "Payment Plan.pdf",
    "Floor Plan.pdf",
    "Location Advantages.pdf",
    "FAQs.docx",
];

const stats = [
    {
        label: "Leads Captured",
        value: "1,248",
        growth: "32%",
    },
    {
        label: "Site Visits Booked",
        value: "256",
        growth: "28%",
    },
    {
        label: "Deals Closed",
        value: "78",
        growth: "25%",
    },
    {
        label: "Revenue Generated",
        value: "₹6.3 Cr",
        growth: "35%",
    },
];

const bottomItems = [
    {
        icon: <FaBolt />,
        text: "Smart Automation",
    },
    {
        icon: <FaRobot />,
        text: "AI-Driven",
    },
    {
        icon: <FaUsers />,
        text: "Team Collaboration",
    },
    {
        icon: <FaChartLine />,
        text: "Better Conversions",
    },
];

const FeaturePointList = ({ items, color }) => {
    return (
        <ul className={`wre-feature-points ${color}`}>
            {items.map((item) => (
                <li key={item}>
                    <FaCheckCircle />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
};

const FeaturesGridSection = () => {
    return (
        <section className="wre-features-section">
            <div className="container">
                <div className="wre-features-shell">
                    <div className="wre-features-bg-dots wre-dots-left"></div>
                    <div className="wre-features-bg-dots wre-dots-right"></div>

                    <div className="wre-features-header text-center">
                        <div className="wre-features-badge">
                            <FaStar />
                            <span>Built for Real Estate Sales Teams</span>
                        </div>

                        <h2>
                            Everything Real Estate Teams
                            <span>
                                Need to <strong>Sell Faster on WhatsApp</strong>
                            </span>
                        </h2>

                        <p>
                            From lead generation to deal closure, Authkey helps you engage
                            buyers, automate conversations, and convert more prospects into
                            loyal customers.
                        </p>
                    </div>

                    <div className="wre-features-grid">
                        {/* 01 */}
                        <article className="wre-feature-card wre-feature-card-purple">
                            <div className="wre-feature-content">
                                <div className="wre-feature-title-row">
                                    <span className="wre-feature-number purple">01</span>
                                    <div>
                                        <h3>Bulk WhatsApp Campaign Studio with AI</h3>
                                    </div>
                                </div>

                                <FeaturePointList items={campaignBullets} color="purple" />
                            </div>

                            <div className="wre-campaign-mock">
                                <div className="wre-campaign-top">
                                    <span>Create Campaign with AI</span>
                                    <FaTelegramPlane />
                                </div>

                                <div className="wre-campaign-input">
                                    Promote new 3BHK apartments in Gurgaon with launch offers
                                </div>

                                <button>Generate Campaign</button>

                                <div className="wre-launch-offer">
                                    <strong>New Launch Offer!</strong>
                                    <p>Luxury 3 BHK Apartments Starting ₹1.25 Cr*</p>

                                    <div className="wre-offer-building-img">
                                        <img src={buildingImage} alt="Real estate property" />
                                    </div>

                                    <small>Book Site Visit</small>
                                </div>
                            </div>
                        </article>

                        {/* 02 */}
                        <article className="wre-feature-card wre-feature-card-green">
                            <div className="wre-feature-content">
                                <div className="wre-feature-title-row">
                                    <span className="wre-feature-number green">02</span>
                                    <div>
                                        <h3>Unified WhatsApp CRM & Team Inbox</h3>
                                    </div>
                                </div>

                                <FeaturePointList items={crmBullets} color="green" />
                            </div>

                            <div className="wre-team-inbox-mini">
                                <div className="wre-mini-sidebar-dark">
                                    <FaWhatsapp />
                                    <span>Inbox</span>
                                    <span>Leads</span>
                                    <span>Team</span>
                                </div>

                                <div className="wre-mini-inbox-board">
                                    <div className="wre-mini-inbox-head">
                                        <strong>Team Inbox</strong>
                                        <div>
                                            <span>All</span>
                                            <span>Unread</span>
                                            <span>Assigned</span>
                                            <span>12</span>
                                        </div>
                                    </div>

                                    {inboxContacts.map((contact) => (
                                        <div
                                            className={`wre-mini-inbox-contact ${contact.active ? "active" : ""
                                                }`}
                                            key={contact.name}
                                        >
                                            <img src={contact.img} alt={contact.name} />
                                            <div>
                                                <strong>{contact.name}</strong>
                                                <p>{contact.text}</p>
                                            </div>
                                            <small>{contact.time}</small>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </article>

                        {/* 03 */}
                        <article className="wre-feature-card wre-feature-card-orange">
                            <div className="wre-feature-content">
                                <div className="wre-feature-title-row">
                                    <span className="wre-feature-number orange">03</span>
                                    <div>
                                        <h3>AI Lead Qualification & Buyer Intent Scoring</h3>
                                    </div>
                                </div>

                                <FeaturePointList items={leadBullets} color="orange" />
                            </div>
                            <div className="wre-score-card">
                                <div className="wre-bot-badge orange">
                                    <FaRobot />
                                </div>

                                <h4>Lead Score</h4>

                                <div className="wre-score-ring">
                                    <strong>85</strong>
                                    <span>High Intent</span>
                                </div>

                                
                                <ul>
                                    <li>
                                        <FaClipboardList />
                                        Budget <span>₹50 - ₹80 L</span>
                                    </li>
                                    <li>
                                        <FaTags />
                                        Location <span>Gurgaon</span>
                                    </li>
                                    <li>
                                        <FaBuilding />
                                        Property Type <span>3 BHK</span>
                                    </li>
                                    <li>
                                        <FaRegCalendarCheck />
                                        Timeline <span>Within 3 Months</span>
                                    </li>
                                </ul>

                                <div className="wre-score-stars">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>


                        </article>

                        {/* 04 */}
                        <article className="wre-feature-card wre-feature-card-blue">
                            <div className="wre-feature-content">
                                <div className="wre-feature-title-row">
                                    <span className="wre-feature-number blue">04</span>
                                    <div>
                                        <h3>AI Trained on Your Projects & Knowledge Base</h3>
                                    </div>
                                </div>

                                <FeaturePointList items={knowledgeBullets} color="blue" />
                            </div>

                            <div className="wre-knowledge-wrap">
                                <div className="wre-knowledge-card">
                                    <h4>Knowledge Base</h4>

                                    <ul>
                                        {knowledgeFiles.map((file) => (
                                            <li key={file}>
                                                <FaFilePdf />
                                                <span>{file}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="wre-ai-robot-large">
                                    <div className="wre-robot-head">● ●</div>
                                    <FaRobot />
                                </div>
                            </div>
                        </article>

                        {/* 05 */}
                        <article className="wre-feature-card wre-feature-card-violet">
                            <div className="wre-feature-content">
                                <div className="wre-feature-title-row">
                                    <span className="wre-feature-number violet">05</span>
                                    <div>
                                        <h3>AI-Powered Site Visit & Appointment Booking</h3>
                                    </div>
                                </div>

                                <FeaturePointList items={bookingBullets} color="violet" />
                            </div>

                            <div className="wre-calendar-mock">
                                <div className="wre-calendar-title">
                                    <FaCalendarAlt />
                                    <span>Schedule Site Visit</span>
                                </div>

                                <div className="wre-calendar-box">
                                    <div className="wre-calendar-month">May 2024</div>

                                    <div className="wre-calendar-days">
                                        {Array.from({ length: 30 }, (_, index) => (
                                            <span
                                                key={index}
                                                className={index === 18 ? "active" : ""}
                                            >
                                                {index + 1}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="wre-time-slots">
                                        <button>10:00 AM</button>
                                        <button className="active">12:00 PM</button>
                                        <button>3:00 PM</button>
                                    </div>

                                    <button className="wre-confirm-booking">
                                        Confirm Booking
                                    </button>
                                </div>
                            </div>
                        </article>

                        {/* 06 */}
                        <article className="wre-feature-card wre-feature-card-pink">
                            <div className="wre-feature-content">
                                <div className="wre-feature-title-row">
                                    <span className="wre-feature-number pink">06</span>
                                    <div>
                                        <h3>Real-Time Analytics & Sales Performance</h3>
                                    </div>
                                </div>

                                <FeaturePointList items={analyticsBullets} color="pink" />
                            </div>

                            <div className="wre-analytics-mock">
                                <div className="wre-analytics-head">
                                    <span>Sales Performance</span>
                                    <small>This Month</small>
                                </div>

                                <div className="wre-stats-grid-mini">
                                    {stats.map((item) => (
                                        <div className="wre-stat-mini" key={item.label}>
                                            <span>{item.label}</span>
                                            <strong>{item.value}</strong>
                                            <small>▲ {item.growth}</small>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </article>
                    </div>

                    <div className="wre-features-bottom-bar">
                        <div className="wre-bottom-main">
                            <FaTrophy />
                            <strong>More Leads. More Site Visits. More Sales.</strong>
                            <span>All on WhatsApp. All in One Platform.</span>
                        </div>

                        <div className="wre-bottom-pills">
                            {bottomItems.map((item) => (
                                <div className="wre-bottom-pill" key={item.text}>
                                    {item.icon}
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesGridSection;