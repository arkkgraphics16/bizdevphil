import { useState, useMemo } from 'react';
import Tabs from '../components/Tabs.jsx';
import PreviewCard from '../components/PreviewCard.jsx';
import ResearchCard from '../components/ResearchCard.jsx';
import CTA from '../components/CTA.jsx';
import content from '../data/content.json';

const TAB_ORDER = [
  'All',
  'Websites Branding',
  'Apps & Tools',
  'Content',
  'Ads Marketing',
  'Researches',
  'Automations',
];

export default function Services() {
  const services = content.services ?? [];
  const researches = content.researches ?? [];
  const [activeTab, setActiveTab] = useState('All');

  const filteredServices = useMemo(() => {
    if (activeTab === 'All' || activeTab === 'Researches') {
      return activeTab === 'Researches'
        ? []
        : services;
    }
    return services.filter((service) => service.tab === activeTab);
  }, [activeTab, services]);

  const showResearch = activeTab === 'All' || activeTab === 'Researches';

  return (
    <div className="container section stack-lg">
      <div className="stack-md">
        <h1>Services</h1>
        <p className="lead">
          I help businesses get clear results online: websites that load fast, tools that save time, content that earns attention.
        </p>
      </div>
      <Tabs items={TAB_ORDER} active={activeTab} onChange={setActiveTab} />
      <div className="grid grid-cols-3">
        {filteredServices.map((service) => (
          <PreviewCard
            key={service.title}
            title={service.title}
            result={service.result}
            badges={service.badges}
            link={service.link}
            previews={service.previews}
            icons={service.icons}
          />
        ))}
        {showResearch &&
          researches.map((research) => (
            <ResearchCard key={research.title} {...research} />
          ))}
      </div>
      <CTA label="Book a planning call" to="/contact" />
    </div>
  );
}
