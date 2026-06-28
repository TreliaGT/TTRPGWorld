type PageKey = "world" | "factions" | "mechanics";

type NavbarProps = {
  page: PageKey;
  setPage: (p: PageKey) => void;
};

export default function Navbar({ page, setPage }: NavbarProps) {
  return (
    <nav className="tabs">
      <button
        className={page === "world" ? "on tab" : "tab"}
        onClick={() => setPage("world")}
      >
        World
      </button>
      <button
        className={page === "factions" ? "on tab" : "tab"}
        onClick={() => setPage("factions")}
      >
        Factions
      </button>
      <button
        className={page === "mechanics" ? "on tab" : "tab"}
        onClick={() => setPage("mechanics")}
      >
        Mechanics
      </button>
    </nav>
  );
}
