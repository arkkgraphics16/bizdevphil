import { useState, useEffect } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header>
      <div className="container header-bar">
        <Link to="/" className="brand" aria-label={`${identity?.name || 'Biz Dev Phil'} home`}>
          <span className="brand-title">{identity?.name || 'Biz Dev Phil'}</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
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

        <div className="header-actions">
          <ThemeToggle />
          <CTA label="Let’s Collaborate" to="/contact" />
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span aria-hidden="true" className={`menu-icon${menuOpen ? ' open' : ''}`}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-nav${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile main navigation">
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `nav-link${isActive ? ' active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mobile-nav-actions">
            <CTA label="Let’s Collaborate" to="/contact" />
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
