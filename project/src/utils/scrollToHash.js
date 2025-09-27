export default function scrollToHash(id) {
  if (typeof window === 'undefined') return;
  const element = document.getElementById(id);
  if (!element) return;
  const root = document.documentElement;
  const headerHeight = parseInt(
    getComputedStyle(root).getPropertyValue('--header-height'),
    10,
  );
  const offset = Number.isNaN(headerHeight) ? 72 : headerHeight + 12;
  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: top < 0 ? 0 : top, behavior: 'smooth' });
  if (history.replaceState) {
    history.replaceState(null, '', `#${id}`);
  }
}
