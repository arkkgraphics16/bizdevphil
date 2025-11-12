import CTA from '../components/CTA.jsx';

const steps = [
  {
    title: 'Identify Your Competitors (3 Types)',
    description:
      'Map the landscape on every platform so your benchmarks reflect who is actually winning your audience’s attention.',
    sections: [
      {
        title: 'Direct Competitors',
        items: ['Same service/product, same audience (your main rivals).'],
      },
      {
        title: 'Indirect Competitors',
        items: ['Different service, overlapping audience (stealing attention).'],
      },
      {
        title: 'Aspirational Competitors',
        items: ['Bigger brands with superior content (learn from the best).'],
      },
    ],
    callouts: [
      { label: 'Action', text: 'List 50+ accounts per platform (TikTok list ≠ LinkedIn list).' },
      {
        label: 'Pro Tip',
        text: 'Use platform search + Google "[your service] + [your location]" to surface accounts you may miss.',
      },
    ],
  },
  {
    title: 'Build Your Tracking System',
    description: 'Centralize every signal so you can compare winners and weak spots at a glance.',
    sections: [
      {
        title: 'Track for every competitor',
        items: [
          'Competitor name & profile link',
          'Platform (TikTok/IG/LinkedIn/etc.)',
          'Posting frequency (posts per week)',
          'Content formats used (video/carousel/static/reels)',
          'Top 5 performing posts (with engagement numbers)',
          'Bottom 5 performing posts (with engagement numbers)',
          'Content themes/topics',
          'Average engagement rate',
          'Follower count & growth rate',
          "What they don't post about (gaps)",
        ],
      },
    ],
    callouts: [
      {
        label: 'Why This Matters',
        text: 'Quantifies “what works” with real numbers, not feelings.',
      },
    ],
  },
  {
    title: 'Analyze Content Performance Patterns',
    description: 'Look for repeatable behaviors across multiple competitors, not one-off virality.',
    sections: [
      {
        title: "What's Working (High Engagement)",
        items: [
          'Which content formats perform best (video vs carousel vs static)?',
          'What topics get the most comments/shares/saves?',
          'What posting times generate peak engagement?',
          'Which hooks/captions drive clicks?',
          'What hashtags actually work?',
        ],
      },
      {
        title: "What's Failing (Low Engagement)",
        items: [
          'Which content formats consistently flop?',
          'What topics get ignored by their audience?',
          'What mistakes kill engagement? (poor formatting, generic messaging)',
        ],
      },
    ],
    callouts: [
      {
        label: 'Action',
        text: 'Document 10–15 specific examples of wins and losses with screenshots.',
      },
    ],
  },
  {
    title: 'Find the Gaps (Your Biggest Opportunity)',
    description: 'Translate the audit into white space your brand can own first.',
    sections: [
      {
        title: 'Common blind spots',
        items: [
          "Content formats nobody's using (ex: all static posts, zero video)",
          "Topics the audience needs but nobody covers",
          "Platforms they're ignoring",
          'Audience questions left unanswered in comments',
          "Problems they mention but don't solve",
        ],
      },
    ],
    callouts: [
      {
        label: 'Action',
        text: 'Create a “Gap Opportunities” list—these become your unique angles.',
      },
      {
        label: 'Why This Matters',
        text: 'Gaps = less competition for attention = faster growth.',
      },
    ],
  },
  {
    title: 'Benchmark Your Current Performance',
    description: 'Hold your brand against the market averages to spotlight the biggest lift areas.',
    sections: [
      {
        title: 'Compare your metrics to theirs',
        items: [
          'Engagement rate vs their average',
          'Posting frequency vs theirs',
          'Content formats vs what’s working for them',
          'Follower growth rate vs theirs',
        ],
      },
    ],
    callouts: [
      {
        label: 'Action',
        text: 'Identify your top 3 performance gaps to fix first.',
      },
    ],
  },
  {
    title: 'Apply Insights to Your Content Strategy',
    description: 'Turn research into production-ready direction for your next calendar.',
    sections: [
      {
        title: 'Copy what works (with your unique twist)',
        items: [
          'Adopt high-performing content formats.',
          'Cover trending topics competitors validated.',
          'Use proven posting schedules.',
          'Apply successful hook/caption structures.',
        ],
      },
      {
        title: "Improve what doesn't work",
        items: [
          'Fix formatting mistakes you spotted.',
          'Avoid topics that consistently underperform.',
          'Skip content formats audiences ignore.',
        ],
      },
      {
        title: 'Own the gaps',
        items: [
          "Create content competitors aren't making.",
          'Target underserved audience segments.',
          "Answer questions they're leaving unanswered.",
        ],
      },
    ],
    callouts: [
      {
        label: 'Action',
        text: 'Build a monthly content calendar based on this intel.',
      },
    ],
  },
  {
    title: 'Test, Measure, Repeat',
    description: 'Stay agile as platforms, competitors, and audiences evolve.',
    sections: [
      {
        title: 'Track post-launch shifts',
        items: [
          'Did engagement improve after adopting winning formats?',
          'Are gap-focused posts outperforming standard content?',
          'Which competitor-inspired strategies worked (or flopped) for you?',
        ],
      },
    ],
    callouts: [
      {
        label: 'Action',
        text: 'Review competitor activity monthly—trends shift fast.',
      },
      {
        label: 'Re-run the audit',
        text: 'Re-analyze every 30 days as new competitors emerge and algorithms update.',
      },
    ],
  },
];

const metrics = [
  {
    name: 'Engagement Rate',
    detail: '(Likes + comments + shares) ÷ followers × 100',
    target: 'Target: 2–5% = strong performance.',
  },
  {
    name: 'Watch Time (Video)',
    detail: 'Average percentage of video viewed.',
    target: 'Target: 50%+ watch time.',
  },
  {
    name: 'Follower Growth Rate',
    detail: 'Monthly follower increase.',
    target: 'Track acceleration or slowdowns after each sprint.',
  },
  {
    name: 'Posting Frequency',
    detail: 'Posts per week that maintain engagement without drop-off.',
    target: 'Balance volume with quality to avoid fatigue.',
  },
];

export default function ResearchPlan() {
  return (
    <div className="container section stack-lg">
      <div className="stack-md">
        <h1>Content Research Sprint Plan</h1>
        <p className="lead">
          A seven-step process to mine competitor data, surface gaps, and turn insights into a monthly content calendar that
          earns attention.
        </p>
        <p className="text-muted" style={{ margin: 0 }}>
          <strong>What This Does:</strong> Identifies winning content patterns from 50+ competitors, reveals market gaps
          they&apos;re missing, and turns insights into actionable content strategy.
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
              {step.sections?.map((section) => (
                <div key={section.title} className="stack-sm">
                  <p className="text-muted" style={{ margin: 0 }}>
                    <strong>{section.title}</strong>
                  </p>
                  {section.items?.length ? (
                    <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', margin: 0 }} className="text-muted">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.note ? (
                    <p className="text-muted" style={{ margin: 0 }}>
                      {section.note}
                    </p>
                  ) : null}
                </div>
              ))}
              {step.callouts?.length ? (
                <div className="stack-sm">
                  {step.callouts.map((callout) => (
                    <p key={callout.label} className="text-muted" style={{ margin: 0 }}>
                      <strong>{callout.label}:</strong> {callout.text}
                    </p>
                  ))}
                </div>
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      <section className="stack-lg">
        <div className="stack-md">
          <h2 style={{ margin: 0 }}>Key metrics to track throughout</h2>
          <p className="text-muted" style={{ margin: 0 }}>
            Monitor the impact of every sprint by pairing leading indicators with the actions you took.
          </p>
        </div>
        <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
          {metrics.map((metric) => (
            <div key={metric.name} className="card stack-sm">
              <h3 style={{ margin: 0 }}>{metric.name}</h3>
              <p className="text-muted" style={{ margin: 0 }}>{metric.detail}</p>
              <p className="text-muted" style={{ margin: 0 }}>{metric.target}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA label="Book this research sprint" to="/contact" />
    </div>
  );
}
