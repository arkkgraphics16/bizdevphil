export default function resolveAssetPath(path = '') {
  if (!path) {
    return '';
  }

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const base = typeof import.meta !== 'undefined' && import.meta.env && typeof import.meta.env.BASE_URL === 'string'
    ? import.meta.env.BASE_URL
    : '/';

  if (path.startsWith('/')) {
    const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
    return `${normalizedBase}${path}`;
  }

  return `${base}${path}`;
}
