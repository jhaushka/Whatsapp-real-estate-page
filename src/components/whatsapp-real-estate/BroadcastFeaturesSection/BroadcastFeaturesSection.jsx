// Server Component — no useState, no useEffect
import {
    FaUsers, FaGlobe, FaFileAlt, FaBroadcastTower,
    FaFileImport, FaClipboardList, FaChartBar, FaBullseye,
    FaCheckCircle
} from "react-icons/fa";
import { broadcastFeaturesData } from "../../../data/whatsapp-real-estate/broadcastFeaturesData";
import "./BroadcastFeaturesSection.css";

const iconMap = {
    FaUsers: <FaUsers />,
    FaGlobe: <FaGlobe />,
    FaFileAlt: <FaFileAlt />,
    FaBroadcastTower: <FaBroadcastTower />,
    FaFileImport: <FaFileImport />,
    FaClipboardList: <FaClipboardList />,
    FaChartBar: <FaChartBar />,
    FaBullseye: <FaBullseye />,
};

const CardMockup = ({ feature }) => {
    if (feature.id === 1) return (
        <div className="wre-bf-mockup-box">
            <div className="wre-bf-mockup-label">{feature.mockupTitle}</div>
            {feature.mockupItems.map((item) => (
                <div key={item.label} className="wre-bf-seg-row">
                    <div className="wre-bf-seg-dot" style={{ background: item.color }} />
                    <div>
                        <div className="wre-bf-seg-name">{item.label}</div>
                        <div className="wre-bf-seg-count">{item.count}</div>
                    </div>
                </div>
            ))}
        </div>
    );

    if (feature.id === 2) return (
        <div className="wre-bf-mockup-box">
            <div className="wre-bf-mockup-label">{feature.mockupTitle}</div>
            <div className="wre-bf-lang-select">English ▾</div>
            {feature.mockupItems.map((lang) => (
                <div key={lang} className="wre-bf-lang-row">
                    <FaCheckCircle className="wre-bf-lang-check" /> {lang}
                </div>
            ))}
        </div>
    );

    if (feature.id === 3) return (
        <div className="wre-bf-mockup-box">
            <div className="wre-bf-mockup-label">{feature.mockupTitle}</div>
            <div className="wre-bf-brochure-thumb"><img
                src="/images/building1.png"
                alt="Property"
                className="img-fluid w-100"
                style={{ borderRadius: '12px 12px 0 0', maxHeight: '160px', objectFit: 'cover' }}
            /></div>
            <div className="wre-bf-brochure-price">Starting ₹1.25 Cr*</div>
            <div className="wre-bf-brochure-row"><FaCheckCircle /> Brochure PDF Sharing</div>
            <div className="wre-bf-brochure-row"><FaCheckCircle /> Floor Plan & Images</div>
        </div>
    );

    if (feature.id === 4) return (
        <div className="wre-bf-mockup-box">
            <div className="wre-bf-mockup-label">{feature.mockupTitle}</div>
            <div className="wre-bf-broadcast-bubble">
                Hi {'{{Name}}'}, Exciting news! Our new project launch offer is live now. Check the details and book your site visit today! 🏠
            </div>
            <button className="wre-bf-broadcast-btn">Send Broadcast 🚀</button>
        </div>
    );

    if (feature.id === 5) return (
        <div className="wre-bf-mockup-box">
            <div className="wre-bf-mockup-label">{feature.mockupTitle}</div>
            {feature.mockupItems.map((item) => (
                <div key={item} className="wre-bf-import-row">
                    <FaCheckCircle className="wre-bf-import-check" /> {item}
                </div>
            ))}
        </div>
    );

    if (feature.id === 6) return (
        <div className="wre-bf-mockup-box">
            <div className="wre-bf-mockup-label">{feature.mockupTitle}</div>
            <div className="wre-bf-numbers-hint">Paste or type phone numbers (with country code)</div>
            {feature.mockupItems.map((num) => (
                <div key={num} className="wre-bf-number-row">
                    <FaCheckCircle className="wre-bf-import-check" /> {num}
                </div>
            ))}
            <div className="wre-bf-total">Total: 5,000 Contacts</div>
        </div>
    );

    if (feature.id === 7) return (
        <div className="wre-bf-mockup-box">
            <div className="wre-bf-mockup-label">{feature.mockupTitle}</div>
            {[
                { label: "Sent", value: "12,450", icon: "📤" },
                { label: "Delivered", value: "11,845  95.5%", icon: "✅" },
                { label: "Read", value: "8,712  70.6%", icon: "👁" },
                { label: "Replies", value: "1,245  10.1%", icon: "💬" },
            ].map((row) => (
                <div key={row.label} className="wre-bf-report-row">
                    <span className="wre-bf-report-icon">{row.icon}</span>
                    <span className="wre-bf-report-label">{row.label}</span>
                    <span className="wre-bf-report-val">{row.value}</span>
                </div>
            ))}
        </div>
    );

    if (feature.id === 8) return (
        <div className="wre-bf-mockup-box">
            <div className="wre-bf-mockup-label">{feature.mockupTitle}</div>
            {[
                { label: "Not Opened", count: "1,148 Contacts", action: "Retarget", color: "#ef4444" },
                { label: "Opened (No Reply)", count: "1,445 Contacts", action: "Retarget", color: "#f59e0b" },
                { label: "Replied", count: "1,200 Contacts", action: "Exclude", color: "#16a34a" },
            ].map((row) => (
                <div key={row.label} className="wre-bf-retarget-row">
                    <div>
                        <div className="wre-bf-retarget-label">{row.label}</div>
                        <div className="wre-bf-retarget-count">{row.count}</div>
                    </div>
                    <span className="wre-bf-retarget-action" style={{ color: row.color }}>{row.action}</span>
                </div>
            ))}
            <button className="wre-bf-retarget-btn">⟳ Retarget Now</button>
        </div>
    );

    return null;
};

const FeatureCard = ({ feature }) => (
    <div className="wre-bf-card">
        {/* Left: text */}
        <div className="wre-bf-left">
            <div
                className="wre-bf-icon"
                style={{ background: feature.iconBg, color: feature.iconColor }}
            >
                {iconMap[feature.icon]}
            </div>
            <h4 className="wre-bf-title">{feature.title}</h4>
            <p className="wre-bf-desc">{feature.description}</p>
            <ul className="wre-bf-bullets">
                {feature.bullets.map((b) => (
                    <li key={b}><FaCheckCircle className="wre-bf-check" />{b}</li>
                ))}
            </ul>
        </div>

        {/* Right: mockup */}
        <div className="wre-bf-right">
            <CardMockup feature={feature} />
        </div>
    </div>
);

const BroadcastFeaturesSection = () => (
    <section className="wre-bf-section">
        <div className="container">
            <div className="row g-3">
                {broadcastFeaturesData.map((feature) => (
                    <div className="col-lg-6" key={feature.id}>
                        <FeatureCard feature={feature} />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default BroadcastFeaturesSection;