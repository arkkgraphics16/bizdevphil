import scrollToHash from '../utils/scrollToHash.js';
import useActiveSections from '../hooks/useActiveSections.js';

const sections = [
  { id: 'about-top', label: 'Info' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'brands', label: 'Brands' },
];

export default function PageSectionNav({ className = '' }) {
  const active = useActiveSections(sections.map((section) => section.id));

  return (
    <nav aria-label="About page sections" className={`page-section-nav flex flex-wrap ${className}`.trim()}>
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
