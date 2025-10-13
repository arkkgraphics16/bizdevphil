export default function Tabs({ items = [], active, onChange }) {
  return (
    <div className="tab-list" role="tablist" aria-label="Service categories">
      {items.map((item) => (
        <button
          key={item}
          type="button"
          role="tab"
          className="tab-button"
          onClick={() => onChange(item)}
          aria-pressed={active === item}
          aria-current={active === item ? 'true' : undefined}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
