import "./AIAgentSection.css";

import {
  FaRobot,
  FaBrain,
  FaBookOpen,
  FaBolt,
  FaCheckCircle,
  FaHome,
  FaTag,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCreditCard,
  FaComments,
  FaArrowRight,
  FaChartLine,
  FaPaperclip,
  FaCamera,
  FaMicrophone,
  FaEllipsisV,
} from "react-icons/fa";

const aiFeatures = [
  {
    icon: <FaRobot />,
    title: "Human-like Conversations",
    desc: "Natural, context-aware conversations that build trust and engage prospects effortlessly.",
  },
  {
    icon: <FaBrain />,
    title: "AI Prompt Based Intelligence",
    desc: "Just define prompts and rules—your AI handles complex queries with accuracy.",
  },
  {
    icon: <FaBookOpen />,
    title: "Trained on Your Data",
    desc: "Train the AI with your property details, policies, pricing, FAQs, and more.",
  },
  {
    icon: <FaBolt />,
    title: "24/7 Instant Responses",
    desc: "Instant answers to every query, any time, improving customer satisfaction and conversions.",
  },
];

const promptItems = [
  "Project Details",
  "Pricing & Offers",
  "Amenities",
  "Location Advantages",
  "Payment Plans",
  "Site Visit Process",
  "FAQs",
];

const aiSteps = [
  { icon: <FaRobot />, title: "Understands", desc: "User Queries" },
  { icon: <FaBrain />, title: "Processes with", desc: "AI Intelligence" },
  { icon: <FaBookOpen />, title: "Retrieves from", desc: "Knowledge Base" },
  { icon: <FaArrowRight />, title: "Responds", desc: "Instantly" },
  { icon: <FaChartLine />, title: "Converts", desc: "More Leads" },
];

const queryCards = [
  {
    icon: <FaHome />,
    title: "Property Information",
    desc: "Get complete details about projects, units, floor plans, configurations, and availability instantly.",
    visual: "property",
  },
  {
    icon: <FaTag />,
    title: "Pricing and Offers",
    desc: "Discover the best prices, exclusive offers, early bird deals, and limited period discounts.",
    visual: "offer",
  },
  {
    icon: <FaRobot />,
    title: "Amenities and Facilities",
    desc: "Explore world-class amenities and facilities designed for comfort, luxury and convenience.",
    visual: "amenities",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location Advantages",
    desc: "Know about the prime location benefits, connectivity, nearby landmarks and infrastructure.",
    visual: "location",
  },
  {
    icon: <FaCalendarAlt />,
    title: "Site Visit Scheduling",
    desc: "Schedule site visits instantly. Choose your preferred date and time with ease.",
    visual: "calendar",
  },
  {
    icon: <FaCreditCard />,
    title: "Payment Plans and Loans",
    desc: "Get details on flexible payment plans, down payment options and home loan assistance.",
    visual: "payment",
  },
  {
    icon: <FaComments />,
    title: "FAQs and Support",
    desc: "Get instant answers to common questions and connect with our support team.",
    visual: "faq",
  },
];

const AIAgentSection = () => {
  return (
    <>
      <section className="wre-ai-agent-section">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-4">
              <div className="wre-ai-badge">
                <FaRobot />
                <span>Conversational AI Agent</span>
              </div>

              <h2 className="wre-ai-main-title">
                AI Prompts Are Enough
                <span>to answer every query</span>
              </h2>

              <p className="wre-ai-main-desc">
                Our Conversational AI Agent understands, responds, and
                converts—just the way your best team member would. Train once
                with your data, and let AI handle the rest.
              </p>

              <div className="wre-ai-feature-list">
                {aiFeatures.map((item) => (
                  <div className="wre-ai-feature-item" key={item.title}>
                    <div className="wre-ai-feature-icon">{item.icon}</div>
                    <div>
                      <h6>{item.title}</h6>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-8">
              <div className="wre-ai-visual-area">
                <div className="wre-ai-prompt-card">
                  <div className="wre-ai-prompt-title">
                    <FaRobot />
                    <span>AI Prompt Example</span>
                  </div>

                  <div className="wre-ai-prompt-box">
                    You are a real estate assistant for Greenfield Residences.
                    Answer property-related queries using the information
                    provided. Be friendly, concise and helpful.
                  </div>

                  <h6>Use the following information:</h6>

                  <ul>
                    {promptItems.map((item) => (
                      <li key={item}>
                        <FaCheckCircle />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="wre-ai-agent-card">
                  <div className="wre-ai-agent-icon">
                    <FaRobot />
                  </div>

                  <div className="wre-ai-agent-status">
                    <strong>AI Agent</strong>
                    <span>Active</span>
                  </div>

                  <p>Always ready to help your leads</p>
                </div>

                <div className="wre-ai-phone-mockup">
                  <div className="wre-ai-phone-top">
                    <span className="wre-ai-phone-back">‹</span>

                    <div className="wre-ai-phone-avatar">
                      <img
                        src="/images/building1.png"
                        alt="Greenfield Residences"
                      />
                    </div>

                    <div className="wre-ai-phone-info">
                      <strong>Greenfield Residences</strong>
                      <span>AI Assistant</span>
                    </div>

                    <FaEllipsisV className="wre-ai-phone-menu" />
                  </div>

                  <div className="wre-ai-phone-body">
                    <div className="wre-ai-chat-row left">
                      <div className="wre-ai-chat-icon">
                        <FaRobot />
                      </div>

                      <div className="wre-ai-chat-bubble">
                        <p>Hi 👋</p>
                        <p>I'm your AI Assistant.</p>
                        <p>How can I help you today?</p>
                        <span>10:30 AM</span>
                      </div>
                    </div>

                    <div className="wre-ai-chat-row right">
                      <div className="wre-ai-chat-bubble">
                        <p>What types of apartments are available?</p>
                        <span>10:30 AM ✓✓</span>
                      </div>
                    </div>

                    <div className="wre-ai-chat-row left">
                      <div className="wre-ai-chat-icon">
                        <FaRobot />
                      </div>

                      <div className="wre-ai-chat-bubble">
                        <p>
                          We offer 2, 3 & 4 BHK premium apartments with modern
                          amenities and spacious layouts.
                        </p>
                        <p>Would you like to see the floor plans?</p>
                        <span>10:31 AM</span>
                      </div>
                    </div>

                    <div className="wre-ai-reply-grid">
                      <button>Yes, show floor plans</button>
                      <button>Know the pricing</button>
                      <button>Schedule a site visit</button>
                    </div>
                  </div>

                  <div className="wre-ai-phone-footer">
                    <span>😊 Type a message...</span>

                    <div className="wre-ai-footer-icons">
                      <FaPaperclip />
                      <FaCamera />
                      <button>
                        <FaMicrophone />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="wre-ai-process-list">
                  {aiSteps.map((item) => (
                    <div className="wre-ai-process-item" key={item.title}>
                      <div className="wre-ai-process-icon">{item.icon}</div>
                      <div>
                        <strong>{item.title}</strong>
                        <span>{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wre-ai-query-section">
        <div className="container">
          <div className="wre-ai-query-head">
            <div className="wre-ai-badge">
              <FaRobot />
              <span>Conversational AI Agent</span>
            </div>

            <h2>Answer Every Query Automatically</h2>

            <p>
              Our AI Agent understands, responds, and converts—just the way your
              best team member would. Ask anything about your properties,
              anytime.
            </p>
          </div>

          <div className="row g-4">
            {queryCards.map((item) => (
              <div
                className={
                  item.visual === "calendar" ||
                  item.visual === "payment" ||
                  item.visual === "faq"
                    ? "col-lg-4 col-md-6"
                    : "col-lg-3 col-md-6"
                }
                key={item.title}
              >
                <div className="wre-query-card">
                  <div className="wre-query-content">
                    <div className="wre-query-icon">{item.icon}</div>

                    <h5>{item.title}</h5>

                    <p>{item.desc}</p>

                    <a href="#">
                      Ask Now
                      <FaArrowRight />
                    </a>
                  </div>

                  <div className={`wre-query-visual ${item.visual}`}>
                    {item.visual === "property" && (
                      <div className="wre-property-mini-card">
                        <img src="/images/building2.png" alt="Property" />
                        <div className="wre-property-mini-info">
                          <strong>2 & 3 BHK</strong>
                          <span>Premium Apartments</span>
                          <small>Starting From ₹68 L*</small>
                          <button>View Details</button>
                        </div>
                      </div>
                    )}

                    {item.visual === "offer" && (
                      <div className="wre-offer-mini-card">
                        <div className="wre-confetti-dot dot-one"></div>
                        <div className="wre-confetti-dot dot-two"></div>
                        <div className="wre-confetti-dot dot-three"></div>

                        <small>LIMITED TIME OFFER</small>
                        <span>Save Up To</span>
                        <strong>₹10 Lakh*</strong>
                        <button>View Offers</button>
                      </div>
                    )}

                    {item.visual === "amenities" && (
                      <div className="wre-amenity-grid">
                        <span>Clubhouse</span>
                        <span>Pool</span>
                        <span>Gym</span>
                        <span>Kids Play</span>
                        <span>Gardens</span>
                        <span>Security</span>
                      </div>
                    )}

                    {item.visual === "location" && (
                      <div className="wre-location-mini-card">
                        <img src="/images/building1.png" alt="Location" />

                        <div className="wre-location-pin">
                          <FaMapMarkerAlt />
                        </div>

                        <strong>Prime Location</strong>
                        <span>5 mins to Metro</span>
                        <span>Close to IT Parks</span>
                        <span>Near Top Schools</span>
                        <span>Easy Highway Access</span>
                      </div>
                    )}

                    {item.visual === "calendar" && (
                      <div className="wre-calendar-mini-card">
                        <div className="wre-calendar-head">
                          <span>‹</span>
                          <strong>May 2024</strong>
                          <span>›</span>
                        </div>

                        <div className="wre-calendar-grid">
                          {Array.from({ length: 35 }).map((_, index) => (
                            <span
                              key={index}
                              className={index === 18 ? "active" : ""}
                            >
                              {index + 1 <= 31 ? index + 1 : ""}
                            </span>
                          ))}
                        </div>

                        <button>
                          <FaCalendarAlt />
                          Schedule Visit
                        </button>
                      </div>
                    )}

                    {item.visual === "payment" && (
                      <div className="wre-payment-mini-card">
                        <strong>Flexible Payment Plan</strong>

                        <span>
                          <FaCheckCircle /> 10/90 Plan
                        </span>

                        <span>
                          <FaCheckCircle /> Construction Linked Plan
                        </span>

                        <span>
                          <FaCheckCircle /> Subvention Scheme
                        </span>

                        <small>Home Loan Partners</small>

                        <div className="wre-bank-logo-row">
                          <img src="/images/hdfc-logo.png" alt="HDFC Bank" />
                          <img src="/images/sbi-logo.png" alt="SBI Bank" />
                          <img src="/images/icici-logo.png" alt="ICICI Bank" />
                        </div>

                        <em>And more...</em>
                      </div>
                    )}

                    {item.visual === "faq" && (
                      <div className="wre-faq-mini-card">
                        <div className="wre-faq-head">How can we help you?</div>

                        <div className="wre-faq-msg left">
                          What is the possession date?
                          <small>10:30 AM</small>
                        </div>

                        <div className="wre-faq-msg right">
                          The possession is scheduled for Dec 2025.
                          <small>10:31 AM</small>
                        </div>

                        <div className="wre-faq-dots">•••</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AIAgentSection;