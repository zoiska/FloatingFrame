import { X, Check, LayoutGrid, Monitor, Laptop, Tv, Network, EthernetPort } from "lucide-react";
import { useContrast } from "../contexts/ContrastContext";

export default function FilterMenu({
  menuOpen,
  setMenuOpen,
  activeFilter,
  setActiveFilter
}) {

  const { highContrast } = useContrast();

  const FILTERS = [
    { label: "Alle",      icon: LayoutGrid,   color: "#333333", emissive: null },
    { label: "Computer",  icon: Monitor,      color: "#60a5fa", emissive: "#60a5fa" },
    { label: "Notebook",  icon: Laptop,       color: "#eab308", emissive: "#eab308" },
    { label: "Monitore",  icon: Tv,           color: "#f97316", emissive: "#f97316" },
    { label: "Switches",  icon: Network,      color: "#ec4899", emissive: "#ec4899" },
    { label: "Kabel",     icon: EthernetPort, color: "#06b6d4", emissive: "#06b6d4" },
  ];

  const activeFilterObj = FILTERS.find(f => f.label === activeFilter);

  return (
    <>
      {/* Burger Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`absolute top-15 -translate-y-1/2 right-3 z-50 text-3xl px-2 transition
          ${highContrast ? "text-black hover:text-gray-700" : "text-gray-200 hover:text-white"}`}
      >
        ≡
        {activeFilter && !menuOpen && activeFilterObj && (
          <span
            className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center border-2
              ${highContrast ? "border-black" : "border-brand-bg"}`}
            style={{ background: activeFilterObj.color }}
          >
            <activeFilterObj.icon
              size={13}
              color={highContrast ? "black" : "#0f172a"}
              strokeWidth={2.5}
            />
          </span>
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`absolute top-0 right-0 h-full w-48 z-10 border-l transform transition-all duration-300 ease-out
          ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
          ${
            highContrast
              ? "bg-white text-black border-gray-700"
              : "bg-brand-bg text-white border-gray-600"
          }`}
      >
        <div className="pt-16 px-4 flex flex-col gap-2">
          
          {/* FILTER TITEL */}
          <p className={`text-xs mb-1 uppercase tracking-widest
            ${highContrast ? "text-gray-700" : "text-gray-400"}`}>
            Filter
          </p>

          {/* FILTER BUTTONS */}
          {FILTERS.map(({ label, icon: Icon, color }) => {
            const active = activeFilter === label;

            return (
              <button
                key={label}
                onClick={() => setActiveFilter(active ? null : label)}
                className={`w-full text-left px-3 py-2.5 text-sm rounded-lg border transition-all flex items-center gap-2
                  ${
                    active
                      ? "font-semibold"
                      : highContrast
                        ? "border-gray-500 text-gray-700 hover:border-gray-600"
                        : "border-gray-500 text-gray-300 hover:border-gray-400"
                  }`}
                style={
                  active
                    ? {
                        borderColor: color,
                        backgroundColor: color + "55",
                        color: color
                      }
                    : {}
                }
              >
                <Icon
                  size={18}
                  strokeWidth={active ? 2.5 : 2}
                  className={active ? "" : highContrast ? "text-gray-700" : "text-gray-300"}
                  style={active ? { color } : {}}
                />
                <span className="flex-1">{label}</span>
                {active && <Check size={14} className={highContrast ? "text-black" : "text-white"} />}
              </button>
            );
          })}

          {/* RESET BUTTON */}
          {activeFilter && (
            <button
              onClick={() => setActiveFilter(null)}
              className={`mt-2 w-full text-left px-3 py-2 text-xs rounded-lg border transition flex items-center gap-2
                ${
                  highContrast
                    ? "border-gray-600 text-gray-700 hover:border-gray-700"
                    : "border-gray-600 text-gray-400 hover:border-gray-500"
                }`}
            >
              <X size={14} className={highContrast ? "text-gray-700" : "text-gray-300"} /> 
              Filter zurücksetzen
            </button>
          )}

          {/* FARBENLEGENDE */}
          <div className={`mt-6 border-t pt-3
            ${highContrast ? "border-gray-500" : "border-gray-700"}`}>
            <p className={`text-xs uppercase tracking-widest mb-2
              ${highContrast ? "text-gray-700" : "text-gray-400"}`}>
              Farbenlegende -
              Wenn Filter aktiv
            </p>

            <div className="flex flex-col gap-3">
              {FILTERS.map(({ label, icon: Icon, color }) => {

                const colorNames = {
                  "#333333": "Dunkelgrau",
                  "#60a5fa": "Blau",
                  "#eab308": "Gelb",
                  "#f97316": "Orange",
                  "#ec4899": "Pink",
                  "#06b6d4": "Cyan"
                };

                const colorName = colorNames[color] || "Farbe";

                return (
                  <div key={label} className="flex items-center gap-3">
                    <Icon 
                      size={22} 
                      strokeWidth={2.8} 
                      style={{ color }} 
                    />
                    <span className={`text-sm font-medium
                      ${highContrast ? "text-gray-800" : "text-gray-200"}`}>
                      {label} ({colorName})
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}