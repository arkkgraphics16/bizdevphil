import { Link } from 'react-router-dom';

export default function CTA({ label = 'Let’s Collaborate', to = '/contact', variant = 'primary' }) {
  const className = variant === 'secondary' ? 'btn btn-secondary' : 'btn';
  return (
    <Link to={to} className={className}>
      {label}
    </Link>
  );
}
