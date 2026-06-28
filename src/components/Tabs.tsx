type Tab = {
  id: string;
  label: string;
};

type TabsProps = {
  active: string;
  setActive: (id: string) => void;
  tabs: Tab[];
};

export default function Tabs({ active, setActive, tabs }: TabsProps) {
  return (
    <div className="tabs">
      {tabs.map((t) => (
        <button
          key={t.id}
          className={`tab ${active === t.id ? "on" : ""}`}
          onClick={() => setActive(t.id)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
