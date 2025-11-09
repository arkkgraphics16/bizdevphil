import { Link } from 'react-router-dom';

export default function ResearchCard({
  title,
  goal,
  method,
  result,
  period,
  tools,
  planPath,
  ctaLabel = 'View plan',
}) {
  return (
    <article className="card stack-md">
      <h3>{title}</h3>
      <div className="stack-sm">
        <div>
          <strong>Goal:</strong>
          <p className="text-muted">{goal}</p>
        </div>
        <div>
          <strong>Method:</strong>
          <p className="text-muted">{method}</p>
        </div>
        <div>
          <strong>Result:</strong>
          <p className="text-muted">{result}</p>
        </div>
        <div className="flex flex-wrap" style={{ gap: '0.75rem' }}>
          {period ? <span className="badge">Period: {period}</span> : null}
          {tools ? <span className="badge">Tools: {tools}</span> : null}
        </div>
      </div>
      {planPath ? (
        <div>
          <Link to={planPath} className="btn btn-secondary">
            {ctaLabel}
          </Link>
        </div>
      ) : null}
    </article>
  );
}
