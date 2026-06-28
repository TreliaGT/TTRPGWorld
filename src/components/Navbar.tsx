export default function Navbar({ page, setPage }) {
  const tabs = [
    ["world", "Overview"],
    ["factions", "Factions"],
    ["mechanics", "Mechanics"]
  ];

  return (
    <nav id="nav">
      <div id="nav-inner">
        {tabs.map(([id, label]) => (
          <button
            key={id}
            className={`ntab ${page === id ? "on" : ""}`}
            onClick={() => setPage(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
