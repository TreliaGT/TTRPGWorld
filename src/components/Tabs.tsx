export default function Tabs({ active, setActive, tabs }) {
  return (
    <div className="tabs">
      {tabs.map((t) => (
        <button
          key={t.id}
          className={`tab ${active === t.id ? "on" : ""}`}
          onClick={() => setActive(t.id)}
        >
        
          {t.name}
        </button>
      ))}
    </div>
  );
}
