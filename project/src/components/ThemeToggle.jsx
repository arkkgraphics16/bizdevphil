import useTheme from '../hooks/useTheme.js';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Activate ${theme === 'dark' ? 'light' : 'dark'} theme`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      style={{
        borderRadius: '999px',
        border: '1px solid rgba(124, 58, 237, 0.4)',
        padding: '0.5rem 0.85rem',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        background: 'var(--surface-2)',
      }}
    >
      <span aria-hidden="true">{theme === 'dark' ? '🌙' : '🌞'}</span>
      <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>{theme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
  );
}
