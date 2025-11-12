import CTA from '../components/CTA.jsx';

const steps = [
  {
    title: 'Kickoff & Inputs',
    description:
      'Clarify goals, target audiences, and offers to make sure each hook test is anchored to business outcomes.',
    items: [
      'Collect current offers, promos, and must-mention talking points.',
      'Map the top three customer segments and their core pains.',
      'Review past top-performing posts and paid campaigns.',
    ],
  },
  {
    title: 'Market Scan & Hook Library',
    description: 'Audit competitor hooks, trend reports, and creator content to build a vetted list of angle ideas.',
    items: [
      'Review 30 competitor and adjacent brand posts to identify winning angles.',
      'Document proven hooks into a shared spreadsheet with links and notes.',
      'Highlight opportunities the brand can uniquely own.',
    ],
  },
  {
    title: 'Script & Asset Drafting',
    description: 'Translate shortlisted hooks into ready-to-record scripts with supporting visuals or references.',
    items: [
      'Write 5–7 short-form scripts with intros, CTAs, and shot suggestions.',
      'Outline carousel or static post structures where relevant.',
      'Prep thumbnail or cover concepts that reinforce the hook.',
    ],
  },
  {
    title: 'Publishing Calendar & Tracking',
    description: 'Plan the rollout cadence and ensure every post is tracked against the agreed metrics.',
    items: [
      'Schedule posts on the preferred publishing suite with owners and due dates.',
      'Configure the tracker to log views, watch time, CTR, and inquiries.',
      'Add review checkpoints for weekly performance huddles.',
    ],
  },
  {
    title: 'Insights & Iteration',
    description: 'Synthesize results, double down on winning hooks, and queue the next batch of tests.',
    items: [
      'Summarize weekly learnings with highlights, risks, and next actions.',
      'Recommend hooks to scale with paid support or remix into new formats.',
      'Refresh the backlog with new angles informed by the data.',
    ],
  },
];

export default function ViralHookResearch() {
  return (
    <div className="container section stack-lg">
      <div className="stack-md">
        <h1>Content Viral Hook Research</h1>
        <p className="lead">
          A four-week sprint to identify, script, and launch the hooks that drive watch time, engagement, and inquiries for
          your brand.
        </p>
      </div>

      <section className="stack-lg">
        <div className="stack-md">
          <h2 style={{ margin: 0 }}>Step-by-step workflow</h2>
          <p className="text-muted" style={{ margin: 0 }}>
            Each phase includes specific deliverables so your team knows what to expect and how to keep momentum.
          </p>
        </div>
        <ol className="plan-step-list">
          {steps.map((step, index) => (
            <li key={step.title} className="card stack-md">
              <div className="flex align-center" style={{ gap: '1rem' }}>
                <span className="plan-step-number">{String(index + 1).padStart(2, '0')}</span>
                <h3 style={{ margin: 0 }}>{step.title}</h3>
              </div>
              <p className="text-muted" style={{ margin: 0 }}>{step.description}</p>
              {step.items?.length ? (
                <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', margin: 0 }} className="text-muted">
                  {step.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      <CTA label="Book this research sprint" to="/contact" />
    </div>
  );
}
