import { NavLink, Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle.jsx';
import CTA from './CTA.jsx';

const navItems = [
  { label: 'About', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

export default function Header({ identity }) {
  const location = useLocation();

  return (
    <header>
      <div className="container flex justify-between align-center" style={{ gap: '1.5rem' }}>
        <Link to="/" className="brand" aria-label={`${identity?.name || 'Biz Dev Phil'} home`}>
          <div style={{ display: 'grid', gap: '0.1rem' }}>
            <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.25rem' }}>
              {identity?.name || 'Biz Dev Phil'}
            </span>
            <span className="text-muted" style={{ fontSize: '0.85rem' }}>
              {identity?.subtitle || 'Online Brand Strategist'}
            </span>
          </div>
        </Link>
        <nav className="flex align-center" aria-label="Main navigation" style={{ gap: '1.5rem' }}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link${isActive ? ' active' : ''}`
              }
              aria-current={location.pathname === item.to ? 'page' : undefined}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex align-center" style={{ gap: '1rem' }}>
          <ThemeToggle />
          <CTA label="Let’s Collaborate" to="/contact" />
        </div>
      </div>
    </header>
  );
}
