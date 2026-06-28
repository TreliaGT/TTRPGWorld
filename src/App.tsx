import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import World from "./pages/World";
import Factions from "./pages/Factions";
import Mechanics from "./pages/Mechanics";

export default function App() {
  const [page, setPage] = useState("world");

  const pages = {
    world: <World />,
    factions: <Factions />,
    mechanics: <Mechanics />
  };

  return (
    <>
      <Header />
      <Navbar page={page} setPage={setPage} />
      <main id="app">{pages[page]}</main>
    </>
  );
}
