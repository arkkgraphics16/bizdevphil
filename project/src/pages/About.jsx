import CTA from '../components/CTA.jsx';
import PageSectionNav from '../components/PageSectionNav.jsx';
import content from '../data/content.json';

export default function About() {
  const { identity, brands } = content;

  return (
    <div className="container stack-lg">
      <section id="about-top" data-section className="section" style={{ paddingBottom: '3rem' }}>
        <div className="stack-lg">
          <div className="stack-md">
            <h1>{identity.name}</h1>
            <p className="lead">{identity.value}</p>
            <CTA />
          </div>
          <div className="stack-md">
            <div className="stack-sm">
              <h2 style={{ fontSize: '1.5rem' }}>{identity.subtitle}</h2>
              <p className="text-muted">
                I help growing brands remove friction online so more guests book, buy, and inquire. From websites to automation,
                every project is built to deliver measurable outcomes.
              </p>
            </div>
            <div className="social-links" aria-label="Social links">
              {identity.socials.map((social) => (
                <a key={social.label} href={social.href}>
                  <span aria-hidden="true">⬈</span>
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <PageSectionNav />
      </section>

      <section id="testimonials" data-section className="section" style={{ paddingTop: '3rem' }}>
        <div className="stack-md">
          <h2>Testimonials</h2>
          <div className="notice">Testimonials coming soon.</div>
        </div>
      </section>

      <section id="brands" data-section className="section" style={{ paddingTop: '3rem' }}>
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
  );
}
