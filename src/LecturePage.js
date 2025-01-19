import React from "react";
import "./LecturePage.css";

const LecturePage = () => {
  return (
    <div className="lecture-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>The Future of Marketing</h1>
        <p>Exploring well-being, sustainability, and innovation in marketing.</p>
      </section>

      {/* Key Insights Section */}
      <section className="insights-section">
        <h2>Key Insights</h2>
        <div className="insights-container">
          <div className="insight-card">
            <h3>Mindful Consumption</h3>
            <p>
              Marketing should focus on creating sustainable, durable, and
              repairable products, discouraging overconsumption, and fostering
              long-term value.
            </p>
          </div>
          <div className="insight-card">
            <h3>Happiness & Well-being</h3>
            <p>
              While consumption can create short-term happiness, long-term
              well-being requires a shift from materialism to meaningful
              experiences and relationships.
            </p>
          </div>
          <div className="insight-card">
            <h3>Pro-Environmental Behavior</h3>
            <p>
              Marketing can drive eco-friendly choices by using tangible
              incentives, clear eco-labeling, and emphasizing the immediate
              benefits of sustainability.
            </p>
          </div>
          <div className="insight-card">
            <h3>Challenging the Status Quo</h3>
            <p>
              Courageous brands must lead by challenging unsustainable norms and
              promoting ethical and moral alternatives through impactful
              campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
<section className="timeline-section">
  <h2>Marketing Evolution</h2>
  <div className="timeline">
    <div className="timeline-item">
      <h4>1900s - Early 1920s</h4>
      <p>Mass Production & Print Advertising</p>
      <p>
        - Industrial revolution enables mass production.<br />
        - Marketing focuses on basic awareness through print media like newspapers and posters.<br />
        - Slogans and logos become prominent (e.g., Coca-Cola’s iconic script logo).
      </p>
    </div>
    <div className="timeline-item">
      <h4>1930s - 1940s</h4>
      <p>Radio Advertising & Emotional Appeals</p>
      <p>
        - Marketing evolves to incorporate emotional storytelling.<br />
        - Radio becomes a dominant medium for reaching mass audiences.<br />
        - Rise of jingles and celebrity endorsements.
      </p>
    </div>
    <div className="timeline-item">
      <h4>1950s - 1960s</h4>
      <p>Television Advertising & Aspirational Marketing</p>
      <p>
        - Television emerges as the primary medium for reaching consumers.<br />
        - Advertisers target aspirations, emphasizing lifestyle improvements (e.g., the American Dream).<br />
        - Iconic campaigns like “Marlboro Man” and "Think Small" by Volkswagen.
      </p>
    </div>
    <div className="timeline-item">
      <h4>1970s - 1980s</h4>
      <p>Data-Driven Marketing & Branding</p>
      <p>
        - Introduction of direct mail and basic consumer segmentation.<br />
        - Branding becomes a central strategy, with companies focusing on brand identity and loyalty.<br />
        - First use of market research technologies to understand consumer behavior.
      </p>
    </div>
    <div className="timeline-item">
      <h4>1990s</h4>
      <p>The Rise of Digital Marketing</p>
      <p>
        - The internet changes everything: email marketing and banner ads emerge.<br />
        - Search engines and early websites enable direct interaction with brands.<br />
        - Guerrilla marketing techniques gain popularity for disruptive campaigns.
      </p>
    </div>
    <div className="timeline-item">
      <h4>2000s</h4>
      <p>Personalization & Social Media</p>
      <p>
        - Search engine marketing (SEM) and optimization (SEO) explode.<br />
        - Social media platforms like Facebook, Twitter, and YouTube become marketing powerhouses.<br />
        - Early adoption of personalization in email campaigns and e-commerce.
      </p>
    </div>
    <div className="timeline-item">
      <h4>2010s</h4>
      <p>Big Data, Influencers, & Mobile Marketing</p>
      <p>
        - Data analytics revolutionizes targeting and consumer insights.<br />
        - Influencer marketing takes off, driving product recommendations.<br />
        - Mobile-first strategies dominate, with apps and SMS marketing growing rapidly.
      </p>
    </div>
    <div className="timeline-item">
      <h4>2020s</h4>
      <p>Sustainability, AI, & Experiential Marketing</p>
      <p>
        - Companies embrace sustainability and ethical marketing as core values.<br />
        - AI-powered tools drive hyper-personalized content and recommendations.<br />
        - Immersive experiences like AR/VR redefine engagement (e.g., virtual shopping).</p>
    </div>
  </div>
</section>


      {/* Actionable Ideas Section */}
      <section className="actionable-section">
        <h2>Actionable Ideas</h2>
        <ul>
          <li>
            Encourage mindful consumption by offering repair services, recycling
            programs, and buyback options.
          </li>
          <li>
            Promote long-term happiness through experiences, not just
            possessions.
          </li>
          <li>
            Use social influence to normalize eco-friendly behaviors and habits.
          </li>
          <li>
            Shift the marketing narrative towards collective well-being and
            environmental responsibility.
          </li>
        </ul>
      </section>

      {/* Call to Reflect Section */}
      <section className="reflection-section">
        <h2>Reflection</h2>
        <p>
          The future of marketing is not just about selling products; it's about creating a positive impact on society and the environment. 
          This course has challenged me to think critically about the role of marketing in shaping consumer behavior and societal values. 
          I now see marketing as a powerful tool for shaping our generation's future, and I am excited to explore how I can contribute to a more sustainable and ethical marketing landscape.
        </p>
      </section>
    </div>
  );
};

export default LecturePage;
