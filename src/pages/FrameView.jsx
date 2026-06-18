import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useContext, useEffect, useState } from "react";
import BoxFrame from "../components/BoxFrame";
import Computerroom from "../components/Computerroom";
import { ScannedCodesContext } from "../contexts/ScannedCodesContext";
import { Patchpanel } from "../react_assets/Patchpanel";
import { LayoutGrid, Monitor, Laptop, Tv, Network, EthernetPort, X, Check } from "lucide-react";

const FILTERS = [
  { label: "Alle",      icon: LayoutGrid,  color: "#FFFFFF", emissive: null },
  { label: "Computer",  icon: Monitor,     color: "#93c5fd", emissive: "#93c5fd" },
  { label: "Notebook",  icon: Laptop,      color: "#facc15", emissive: "#facc15" },
  { label: "Monitore",  icon: Tv,          color: "#fb923c", emissive: "#fb923c" },
  { label: "Switches",  icon: Network,     color: "#f472b6", emissive: "#f472b6" },
  { label: "Kabel",     icon: EthernetPort,color: "#2dd4bf", emissive: "#2dd4bf" },
];

export default function App() {
  const [orientation, setOrientation] = useState("portrait");
  const [isDetailsOpen, setDetailsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scannedCodes } = useContext(ScannedCodesContext);

  useEffect(() => {
    function handleRotation() {
      setOrientation(screen.orientation.type);
    }
    screen.orientation.addEventListener("change", handleRotation);
    return () => {
      screen.orientation.removeEventListener("change", handleRotation);
    };
  }, []);

  const isActive = (name) => activeFilter === name || activeFilter === "Alle";

  const getEmissive = (name) => {
    if (activeFilter === "Alle") return FILTERS.find(f => f.label === name)?.emissive ?? "#000000";
    if (activeFilter === name) return FILTERS.find(f => f.label === name)?.emissive ?? "#000000";
    return "#000000";
  };

  const activeFilterObj = FILTERS.find(f => f.label === activeFilter);

  return (
    <div className="flex justify-center w-full">
      <div
        className={`relative w-full max-w-sm ${
          orientation === "portrait" || orientation === "portrait-primary"
            ? "h-dvh"
            : "max-h-min"
        }`}
      >

{/* Burger Menu Button + aktives Filter-Icon */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="absolute top-15 -translate-y-1/2 right-3 z-50 text-white/60 text-2xl px-2 hover:text-white transition"
>
  ≡
  {activeFilter && !menuOpen && activeFilterObj && (
    <span
      className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#0f172a]"
      style={{ background: activeFilterObj.color }}
    >
      <activeFilterObj.icon size={11} color="#0f172a" strokeWidth={2.5} />
    </span>
  )}
</button>

        {/* Filter Sidebar rechts */}
        <div
          className={`absolute top-0 right-0 h-full w-48 bg-[#0f172a] border-l border-white/10 z-10
            transform transition-all duration-300 ease-out
            ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
        >
          <div className="pt-16 px-4 flex flex-col gap-2">
            <p className="text-white/40 text-xs mb-1 uppercase tracking-widest">Filter</p>
            {FILTERS.map(({ label, icon: Icon, color }) => {
              const active = activeFilter === label;
              return (
                <button
                  key={label}
                  onClick={() => setActiveFilter(active ? null : label)}
                  className={`w-full text-left px-3 py-2.5 text-sm rounded-lg border transition-all flex items-center gap-2 ${
                    active
                      ? "font-semibold"
                      : "border-white/20 text-white/50 hover:border-white/40"
                  }`}
                  style={active ? {
                    borderColor: color,
                    backgroundColor: color + "33",
                    color: color,
                  } : {}}
                >
                  <Icon size={15} strokeWidth={active ? 2.5 : 1.5} style={{ color: active ? color : undefined }} />
                  <span className="flex-1">{label}</span>
                  {active && <Check size={13} />}
                </button>
              );
            })}
            {activeFilter && (
              <button
                onClick={() => setActiveFilter(null)}
                className="mt-2 w-full text-left px-3 py-2 text-xs rounded-lg border border-white/10 text-white/30 hover:border-white/20 transition flex items-center gap-2"
              >
                <X size={13} />
                Filter zurücksetzen
              </button>
            )}
          </div>
        </div>

        {/* Patchpanel */}
        <div className="relative z-50">
          <div
            className={`switchContainer h-1/10 w-full justify-center cursor-pointer
              transform transition-all duration-500 ease-out
              ${isDetailsOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
            onClick={() => setDetailsOpen(false)}
          >
            <Patchpanel />
          </div>
        </div>

        {/* Canvas */}
        <div className={`frameContainer h-4/10 relative ${menuOpen ? "z-0" : "z-10"}`}>
          <Canvas className="canvas">
            <directionalLight position={[2, 2, 2]} intensity={1.5} />
            <ambientLight intensity={1} />
            <OrbitControls
              enableZoom={true}
              enablePan={false}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 1.8}
            />
            <BoxFrame rotation="0.7854" color="grey" />
              {/*  <NotebookModel
              position={[0, -0.6, 2]}
              rotation={[0, -0.7, 0]}
              scale={0.3}
              onClick={() => setDetailsOpen(true)}
              computerEmissive={getEmissive("Computer")}
              computerEmissiveIntensity={isActive("Computer") ? 0.6 : 0}
              notebookEmissive={getEmissive("Notebook")}
              notebookEmissiveIntensity={isActive("Notebook") ? 0.6 : 0}
              switchEmissive={getEmissive("Switches")}
              switchEmissiveIntensity={isActive("Switches") ? 10 : 0}
              cableEmissive={getEmissive("Kabel")}
              cableEmissiveIntensity={isActive("Kabel") ? 10 : 0}
            />*/}
            <Computerroom
              position={[0, -0.6, 2]}
              rotation={[0, -0.7, 0]}
              scale={0.5}
              onClick={() => setDetailsOpen(true)}
              computerEmissive={getEmissive("Computer")}
              computerEmissiveIntensity={isActive("Computer") ? 0.6 : 0}
              notebookEmissive={getEmissive("Notebook")}
              notebookEmissiveIntensity={isActive("Notebook") ? 0.6 : 0}
              switchEmissive={getEmissive("Switches")}
              switchEmissiveIntensity={isActive("Switches") ? 10 : 0}
              cableEmissive={getEmissive("Kabel")}
              cableEmissiveIntensity={isActive("Kabel") ? 10 : 0}
            />
          </Canvas>
        </div>

        <div
          className={`detailsContainer h-5/10 w-full wrap-anywhere overflow-auto
            bottom-0 left-0 right-0
            transform transition-all duration-500 ease-out
            ${isDetailsOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
        >
          {scannedCodes.map((code, index) => (
            <pre key={index} className="whitespace-break-spaces p-2">
              {Object.entries(code).map(([key, value]) => {
                let remUnderscores = key.replaceAll("_", " ");
                let newLabel =
                  remUnderscores.charAt(0).toUpperCase() +
                  remUnderscores.slice(1);
                return (
                  <div key={key}>
                    <span className="font-bold text-brand-blue">{`${newLabel}: `}</span>
                    <span>{`${value}\n`}</span>
                  </div>
                );
              })}
            </pre>
          ))}
        </div>
      </div>
    </div>
  );
}