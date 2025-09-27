import { Link } from 'react-router-dom';
import content from '../data/content.json';

export default function Privacy() {
  return (
    <div className="container section stack-lg">
      <div className="stack-md">
        <h1>Privacy Policy</h1>
        <p className="text-muted">
          {content.identity.name} collects only the details you choose to share through the contact form.
        </p>
      </div>
      <div className="stack-md">
        <section>
          <h2>Information use</h2>
          <p>
            Your name, email, and message are used to understand your business goals and to reply with relevant brand strategy suggestions.
            Data is not sold or shared with third parties.
          </p>
        </section>
        <section>
          <h2>Storage</h2>
          <p>
            Messages are stored in a secure inbox that is reviewed by Phil only. You can request removal of your data at any time by emailing
            <a href={`mailto:${content.contact.email}`}> {content.contact.email}</a>.
          </p>
        </section>
        <section>
          <h2>Your choices</h2>
          <p>
            You may opt out of further emails or ask for a summary of any notes kept about your project. No automated marketing is sent without consent.
          </p>
        </section>
      </div>
      <Link to="/contact" className="btn btn-secondary" style={{ width: 'fit-content' }}>
        Back to Contact
      </Link>
    </div>
  );
}
