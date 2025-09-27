import { Link } from 'react-router-dom';
import content from '../data/content.json';

export default function Terms() {
  return (
    <div className="container section stack-lg">
      <div className="stack-md">
        <h1>Terms of Service</h1>
        <p className="text-muted">
          These terms outline how {content.identity.name} collaborates with business owners on brand, web, and automation projects.
        </p>
      </div>
      <div className="stack-md">
        <section>
          <h2>Engagement</h2>
          <p>
            Every engagement begins with a discovery call to confirm fit and outline the scope. Deliverables, timelines, and fees are
            documented in a written proposal before work begins.
          </p>
        </section>
        <section>
          <h2>Approvals & feedback</h2>
          <p>
            Projects move forward with timely feedback from your team. Two rounds of revisions are included for each major deliverable unless
            stated otherwise in the proposal.
          </p>
        </section>
        <section>
          <h2>Payments</h2>
          <p>
            Payments are typically split between an initial deposit and milestone completions. Work pauses if invoices become overdue. All fees
            are quoted in PHP unless agreed otherwise.
          </p>
        </section>
        <section>
          <h2>Confidentiality</h2>
          <p>
            Your business information, strategies, and research remain confidential. Case studies will only reference your company with written permission.
          </p>
        </section>
      </div>
      <Link to="/contact" className="btn btn-secondary" style={{ width: 'fit-content' }}>
        Discuss Your Project
      </Link>
    </div>
  );
}
