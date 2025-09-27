export default function PreviewCard({ title, result, badges = [], link }) {
  return (
    <article className="card stack-md">
      <div className="gradient-thumb" aria-hidden="true"></div>
      <div>
        <h3 style={{ marginBottom: '0.25rem' }}>{title}</h3>
        <p className="text-muted">{result}</p>
      </div>
      {badges?.length ? (
        <div className="badge-group">
          {badges.map((badge) => (
            <span className="badge" key={badge}>
              {badge}
            </span>
          ))}
        </div>
      ) : null}
      {link ? (
        <div>
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-muted">
            View
          </a>
        </div>
      ) : null}
    </article>
  );
}
