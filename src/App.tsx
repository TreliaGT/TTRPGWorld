import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import World from "./pages/World";
import Factions from "./pages/Factions";
import Mechanics from "./pages/Mechanics";

export default function App() {
 type PageKey = "world" | "factions" | "mechanics";

const pages: Record<PageKey, React.ReactNode> = {

    world: <World />,
    factions: <Factions />,
    mechanics: <Mechanics />,
  };

  // wherever you store page:
  const [page, setPage] = useState<PageKey>("world");
  return (
    <>
      <Header />
      <Navbar page={page} setPage={setPage} />
      <main id="app">{pages[page]}</main>
    </>
  );
}
