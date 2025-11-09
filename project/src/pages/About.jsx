import AboutSidebar from '../components/AboutSidebar.jsx';
import CTA from '../components/CTA.jsx';
import PageSectionNav from '../components/PageSectionNav.jsx';
import TestimonialsCarousel from '../components/TestimonialsCarousel.jsx';
import content from '../data/content.json';

export default function About() {
  const { identity, brands, contact, testimonials } = content;

  return (
    <div className="container about-container">
      <div className="about-layout">
        <AboutSidebar identity={identity} contact={contact} />

        <div className="about-content">
          <section id="about-top" data-section className="section about-hero">
            <div className="stack-lg">
              <div className="stack-md">
                <div className="stack-sm">
                  <h1>Jezrel Phil Nacar</h1>
                  <PageSectionNav className="hero-nav" />
                </div>
                <p className="lead">{identity.value}</p>
                <div className="stack-sm">
                  <CTA label="View my services" to="/services" variant="secondary" />
                  <CTA />
                </div>
              </div>
              <div className="stack-md">
                <div className="stack-sm">
                  <h2 style={{ fontSize: '1.5rem' }}>{identity.subtitle}</h2>
                  <p className="text-muted">
                    I help growing brands remove friction online so more guests book, buy, and inquire. From websites to automation
                    and full-funnel marketing systems, every project is built to deliver measurable outcomes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="testimonials" data-section className="section about-section">
            <div className="stack-md">
              <div className="stack-sm">
                <h2>Testimonials</h2>
                <p className="text-muted">What collaborators say about our work together.</p>
              </div>
              <TestimonialsCarousel testimonials={testimonials} />
            </div>
          </section>

          <section id="brands" data-section className="section about-section">
            <div className="stack-md">
              <h2>Brands I’ve partnered with</h2>
              <ul className="stack-sm">
                {brands.map((brand) => (
                  <li key={brand} className="card" style={{ fontWeight: 600 }}>
                    {brand}
                  </li>
                ))}
              </ul>
              <CTA label="Plan the next win" to="/contact" variant="secondary" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
