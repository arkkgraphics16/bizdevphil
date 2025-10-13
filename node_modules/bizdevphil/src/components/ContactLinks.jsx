export default function ContactLinks({ contact }) {
  if (!contact) return null;
  const { phone, email, mapLink, address } = contact;

  return (
    <div className="stack-lg">
      <div className="stack-md">
        <div>
          <h3>Talk to Phil</h3>
          <p className="text-muted">Reach out using the channel that works best for you.</p>
        </div>
        <div className="stack-sm">
          <div>
            <strong>Phone / WhatsApp</strong>
            <div className="stack-sm">
              <a href={`tel:${phone}`} className="text-muted">Call {phone}</a>
              <a href={`https://wa.me/${phone.replace(/[^\d]/g, '')}`} className="text-muted">
                Message on WhatsApp
              </a>
            </div>
          </div>
          <div>
            <strong>Email</strong>
            <div>
              <a href={`mailto:${email}`} className="text-muted">
                {email}
              </a>
            </div>
          </div>
          <div className="stack-sm">
            <strong>Visit</strong>
            <a href={mapLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: 'fit-content' }}>
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
      <div className="map-placeholder" role="img" aria-label={`Map placeholder for ${address}`}>
        {address}
      </div>
    </div>
  );
}
