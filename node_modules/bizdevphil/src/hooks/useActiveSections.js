import { useEffect, useState } from 'react';

export default function useActiveSections(ids = []) {
  const [activeId, setActiveId] = useState(ids[0] ?? null);

  useEffect(() => {
    if (!ids.length) return undefined;
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el) => Boolean(el));

    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
          return;
        }

        entries.forEach((entry) => {
          if (entry.boundingClientRect.top >= 0) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [ids.join(',')]);

  return activeId;
}
