import CTA from '../components/CTA.jsx';
import PageSectionNav from '../components/PageSectionNav.jsx';
import content from '../data/content.json';

const socialIcons = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.81 0-2.09 1.41-2.09 2.86v5.49H9.46V9h3.41v1.56h.05c.47-.89 1.62-1.83 3.34-1.83 3.57 0 4.23 2.35 4.23 5.4v6.32ZM5.34 7.39a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9H7.12v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z"
      />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M22 12a10 10 0 1 0-11.56 9.88v-7h-2.3V12h2.3V9.79c0-2.27 1.35-3.53 3.42-3.53.99 0 2.03.18 2.03.18v2.22h-1.14c-1.12 0-1.47.7-1.47 1.41V12h2.5l-.4 2.88h-2.1v7A10 10 0 0 0 22 12Z"
      />
    </svg>
  ),
  X: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M20.98 3.5h-3.1l-4.31 5.72L9.86 3.5H3.02l7.41 10.38L3.36 20.5h3.1l4.58-6.07 3.93 6.07h6.84l-7.68-10.46 7.85-6.54Z"
      />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2A3.2 3.2 0 1 1 15.2 12 3.21 3.21 0 0 1 12 15.2ZM17.75 6.46a1.17 1.17 0 1 1 1.17-1.17 1.17 1.17 0 0 1-1.17 1.17ZM21.6 7a5.86 5.86 0 0 0-1.6-4.15A5.86 5.86 0 0 0 15.85 1.2h-7.7A5.86 5.86 0 0 0 4 2.85 5.86 5.86 0 0 0 2.4 7v7.7A5.86 5.86 0 0 0 4 18.85 5.86 5.86 0 0 0 8.15 20.4h7.7a5.86 5.86 0 0 0 4.15-1.55 5.86 5.86 0 0 0 1.55-4.15Zm-2 7.76a3.91 3.91 0 0 1-1 2.58 3.91 3.91 0 0 1-2.58 1h-7.7a3.91 3.91 0 0 1-2.58-1 3.91 3.91 0 0 1-1-2.58V7a3.91 3.91 0 0 1 1-2.58 3.91 3.91 0 0 1 2.58-1h7.7a3.91 3.91 0 0 1 2.58 1A3.91 3.91 0 0 1 19.6 7Z"
      />
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M21.58 7.2a2.61 2.61 0 0 0-1.84-1.85C17.87 5 12 5 12 5s-5.87 0-7.74.35A2.61 2.61 0 0 0 2.42 7.2 27.32 27.32 0 0 0 2 12a27.32 27.32 0 0 0 .42 4.8 2.61 2.61 0 0 0 1.84 1.85C6.13 19 12 19 12 19s5.87 0 7.74-.35a2.61 2.61 0 0 0 1.84-1.85A27.32 27.32 0 0 0 22 12a27.32 27.32 0 0 0-.42-4.8ZM10 15V9l5.2 3Z"
      />
    </svg>
  ),
  TikTok: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M19.5 7.61a4.6 4.6 0 0 1-2.88-1V14a5.86 5.86 0 1 1-5.88-5.83 6 6 0 0 1 .91.07V10a3.84 3.84 0 0 0-.91-.11 3.67 3.67 0 1 0 3.67 3.66V2h2.2a4.51 4.51 0 0 0 3.23 3.17Z"
      />
    </svg>
  ),
};

const contactIcons = {
  phone: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M20.85 15.54 18 14.9a1.7 1.7 0 0 0-1.61.49l-1.76 1.81a13.3 13.3 0 0 1-5.83-5.83l1.8-1.77a1.7 1.7 0 0 0 .49-1.61L10.45 5.2a1.7 1.7 0 0 0-1.92-1.31l-2.9.58a1.7 1.7 0 0 0-1.35 1.66 15.95 15.95 0 0 0 15.95 15.95 1.7 1.7 0 0 0 1.66-1.35l.58-2.9a1.7 1.7 0 0 0-1.32-1.9Z"
      />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M20.5 4h-17A1.5 1.5 0 0 0 2 5.5v13A1.5 1.5 0 0 0 3.5 20h17a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 20.5 4Zm-.32 2-7.68 6.08L3.82 6ZM4 18v-8.35l8 6.34 8-6.34V18Z"
      />
    </svg>
  ),
  location: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5Z"
      />
    </svg>
  ),
};

const getSocialIcon = (label) => socialIcons[label] ?? (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <circle cx="12" cy="12" r="10" fill="currentColor" />
  </svg>
);

export default function About() {
  const { identity, brands, contact } = content;

  const contactItems = [
    {
      icon: contactIcons.phone,
      label: 'Phone',
      value: contact.phone,
      href: `tel:${contact.phone.replace(/[^\d+]/g, '')}`,
    },
    {
      icon: contactIcons.email,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: contactIcons.location,
      label: 'Location',
      value: contact.address,
      href: contact.mapLink,
    },
  ];

  return (
    <div className="container">
      <div className="about-layout">
        <aside className="about-sidebar" aria-label="Profile overview">
          <div className="about-photo" aria-hidden="true" />
          <div className="stack-sm">
            <h2 className="about-name">{identity.name}</h2>
            <p className="about-role">{identity.subtitle}</p>
          </div>
          <div className="about-contact">
            <h3>Contact</h3>
            <ul>
              {contactItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} target={item.label === 'Location' ? '_blank' : undefined} rel={item.label === 'Location' ? 'noopener noreferrer' : undefined}>
                    <span className="about-icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    <span>
                      <span className="about-contact-label">{item.label}</span>
                      <span className="about-contact-value">{item.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="about-socials">
            <h3>Connect</h3>
            <ul>
              {identity.socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <span className="about-icon" aria-hidden="true">
                      {getSocialIcon(social.label)}
                    </span>
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="about-content">
          <div className="about-section-nav">
            <PageSectionNav />
          </div>

          <section id="about-top" data-section className="section about-hero">
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
              </div>
            </div>
          </section>

          <section id="testimonials" data-section className="section about-section">
            <div className="stack-md">
              <h2>Testimonials</h2>
              <div className="notice">Testimonials coming soon.</div>
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
