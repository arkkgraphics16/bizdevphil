import scrollToHash from '../utils/scrollToHash.js';
import useActiveSections from '../hooks/useActiveSections.js';

const sections = [
  { id: 'about-top', label: 'About' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'brands', label: 'Brands' },
];

export default function PageSectionNav() {
  const active = useActiveSections(sections.map((section) => section.id));

  return (
    <nav aria-label="About page sections" className="flex flex-wrap" style={{ gap: '0.75rem', marginTop: '2rem' }}>
      {sections.map((section) => (
        <button
          key={section.id}
          type="button"
          onClick={() => scrollToHash(section.id)}
          className="tab-button"
          aria-current={active === section.id ? 'true' : undefined}
          aria-pressed={active === section.id}
        >
          {section.label}
        </button>
      ))}
    </nav>
  );
}
