import { Link } from 'react-router-dom';

export default function Footer({ identity }) {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container stack-md footer-content">
        <nav aria-label="Footer navigation" className="flex flex-wrap" style={{ gap: '1rem' }}>
          <Link to="/">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </nav>
        <p className="text-muted">
          © {year} {identity?.name || 'Biz Dev Phil'}. Helping businesses develop their brand online.
        </p>
      </div>
    </footer>
  );
}
