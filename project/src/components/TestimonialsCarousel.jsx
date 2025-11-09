import { useMemo } from 'react';

export default function TestimonialsCarousel({ testimonials = [] }) {
  const items = useMemo(() => testimonials.filter(Boolean), [testimonials]);

  if (!items.length) {
    return null;
  }

  return (
    <div className="testimonial-carousel" role="list" aria-label="Testimonials">
      {items.map(({ quote, author, role, location }) => (
        <article key={`${author}-${quote.slice(0, 12)}`} className="card testimonial-card" role="listitem">
          <p className="testimonial-quote">“{quote}”</p>
          <div className="testimonial-meta">
            <p className="testimonial-author">{author}</p>
            <p className="testimonial-role">{role}</p>
            <p className="testimonial-location">{location}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
