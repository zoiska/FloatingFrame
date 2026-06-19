import { useState } from "react";
import FilterMenu from "../components/FilterMenu";

export default function FilterMenuTest() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);

  const FILTERS = [
    { label: "Option A" },
    { label: "Option B" },
    { label: "Option C" }
  ];

  return (
    <div className="h-dvh w-full flex items-center justify-center relative transition">
      <h1 className="text-3xl font-bold">FilterMenu Test</h1>

      <FilterMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        FILTERS={FILTERS}
      />
    </div>
  );
}
