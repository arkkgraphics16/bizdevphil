import { useMemo, useState } from 'react';
import { Mail, Bot, ClipboardCheck, BarChart, LayoutGrid } from 'lucide-react';
import resolveAssetPath from '../utils/assetPath.js';

const ICON_MAP = {
  'Update Emails': Mail,
  'Automated Chats': Bot,
  'Client Onboarding Automation': ClipboardCheck,
  'Performance Reports': BarChart,
};

export default function PreviewCard({ title, result, badges = [], link, previews = [] }) {
  const normalizedPreviews = useMemo(
    () =>
      (Array.isArray(previews) ? previews : [])
        .map((preview) => ({
          ...preview,
          src: resolveAssetPath(preview?.src || ''),
        }))
        .filter((preview) => Boolean(preview.src)),
    [previews]
  );

  const [activePreviewIndex, setActivePreviewIndex] = useState(0);
  const hasPreviews = normalizedPreviews.length > 0;
  const hasAlternate = normalizedPreviews.length > 1;
  const activePreview = hasPreviews
    ? normalizedPreviews[Math.min(activePreviewIndex, normalizedPreviews.length - 1)]
    : null;
  const IconComponent = ICON_MAP[title] || LayoutGrid;

  const handleToggle = () => {
    if (hasAlternate) {
      setActivePreviewIndex((prev) => (prev === 0 ? 1 : 0));
    }
  };

  const handleEnter = () => {
    if (hasAlternate) {
      setActivePreviewIndex(1);
    }
  };

  const handleLeave = () => {
    if (hasAlternate) {
      setActivePreviewIndex(0);
    }
  };

  const handleKeyDown = (event) => {
    if (!hasAlternate) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
  };

  return (
    <article className="card card--preview">
      {activePreview ? (
        <figure className="preview-media">
          <button
            type="button"
            className="preview-media-button"
            onMouseEnter={handleEnter}
            onFocus={handleEnter}
            onMouseLeave={handleLeave}
            onBlur={handleLeave}
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
            aria-pressed={activePreviewIndex === 1}
            aria-label={
              hasAlternate
                ? `Toggle preview for ${title}`
                : `Preview image for ${title}`
            }
          >
            <img src={activePreview.src} alt={activePreview.alt || title} />
            {hasAlternate ? (
              <span className="visually-hidden">
                {activePreviewIndex === 0
                  ? `Showing ${normalizedPreviews[0]?.label || 'primary'} image. ` +
                    `Hover, focus, or press enter to view ${normalizedPreviews[1]?.label || 'alternate'} image.`
                  : `Showing ${normalizedPreviews[1]?.label || 'alternate'} image. ` +
                    'Hover out or press enter to return to the first image.'}
              </span>
            ) : null}
          </button>
        </figure>
      ) : (
        <div className="preview-icon" aria-hidden="true">
          <IconComponent className="preview-icon-symbol" />
        </div>
      )}
      <div className="preview-card-body stack-md">
        <h3 style={{ marginBottom: '0.25rem' }}>{title}</h3>
        <p className="text-muted">{result}</p>
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
      </div>
    </article>
  );
}
