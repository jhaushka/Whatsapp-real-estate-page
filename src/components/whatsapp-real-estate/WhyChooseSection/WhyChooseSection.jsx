import React from "react";
import {
  FaChartLine,
  FaRocket,
  FaHeart,
  FaProjectDiagram,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";
import "./WhyChooseSection.css";

const whyCards = [
  {
    icon: <FaChartLine />,
    title: "Built to Scale",
    color: "purple",
    line: "purple",
    desc:
      "From individual brokers to large developers—Authkey grows with your business.",
  },
  {
    icon: <FaRocket />,
    title: "Quick & Easy Setup",
    color: "green",
    line: "green",
    desc:
      "Get started in minutes with expert onboarding, template approvals, and campaign assistance.",
  },
  {
    icon: <FaHeart />,
    title: "Amazing Customer Support",
    color: "pink",
    line: "pink",
    desc:
      "Our in-house support & developer team is always a call or message away when you need help.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Multi-Channel Platform",
    color: "blue",
    line: "blue",
    desc:
      "Engage your leads across WhatsApp, SMS, RCS, Email and Voice from a single unified platform.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure & Reliable",
    color: "indigo",
    line: "indigo",
    desc:
      "Built on official WhatsApp Business API with enterprise-grade security, compliance and 99.9% uptime you can trust.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="wre-why-section">
      <div className="wre-why-wrap">
        <div className="wre-why-header">
          <div className="wre-why-badge">
            <FaStar />
            <span>Why Real Estate Businesses Choose Authkey</span>
          </div>

          <h2>
            Sell More Properties on <span>WhatsApp</span>
          </h2>

          <p>Powerful features. Simple setup. Real results.</p>
        </div>

        <div className="wre-why-cards">
          {whyCards.map((card, index) => (
            <div className="wre-why-card" key={index}>
              <div className={`wre-why-icon ${card.color}`}>{card.icon}</div>

              <h3>{card.title}</h3>

              <span className={`wre-why-line ${card.line}`}></span>

              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;