type PageKey = "world" | "factions" | "mechanics";

type NavbarProps = {
  page: PageKey;
  setPage: (p: PageKey) => void;
};

export default function Navbar({ page, setPage }: NavbarProps) {
  return (
    <nav className="nav">
      <button
        className={page === "world" ? "active" : ""}
        onClick={() => setPage("world")}
      >
        World
      </button>
      <button
        className={page === "factions" ? "active" : ""}
        onClick={() => setPage("factions")}
      >
        Factions
      </button>
      <button
        className={page === "mechanics" ? "active" : ""}
        onClick={() => setPage("mechanics")}
      >
        Mechanics
      </button>
    </nav>
  );
}
