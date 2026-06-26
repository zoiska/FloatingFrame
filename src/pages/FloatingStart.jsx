import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Boxes, ScanLine, HelpCircle } from "lucide-react";

export default function FloatingStart() {
  const navigate = useNavigate();
  const [faqOpen, setFaqOpen] = useState(false);

  const [orientation, setOrientation] = useState("portrait");

  // INIT
  useEffect(() => {
    const load = async () => {
      function handleRotation() {
        setOrientation(screen.orientation.type);
      }
      screen.orientation.addEventListener("change", handleRotation);
      return () => {
        screen.orientation.removeEventListener("change", handleRotation);
      };
    };

    load();
  }, []);

  return (
    <div
      className={`mainContainer w-full items-center justify-center flex flex-col relative overflow-hidden  ${
        orientation === "portrait" || orientation === "portrait-primary"
          ? "h-dvh"
          : "max-h-min"
      }`}
    >
      <div
        className="fixed w-screen h-screen rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,165,0,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="fixed translate-y-75 w-screen h-screen rounded-full pointer-events-none "
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
        }}
      />

      <h1 className="text-5xl font-bold mb-4 tracking-tight">FloatingFrame</h1>
      <p className="text-lg opacity-70 mb-12 tracking-widest">
        Netzwerk Visualisierung
      </p>

      <div className="flex flex-col gap-10">
        <button
          onClick={() => navigate("/Scanner")}
          className="flex items-center gap-3 px-6 py-3 border border-b-brand-blue bg-transparent text-brand-blue text-xl rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
        >
          <ScanLine size={28} strokeWidth={2.5} />
          Scanner starten
        </button>

        <button
          onClick={() => navigate("/Assetverwaltung")}
          className="flex items-center gap-3 px-6 py-3 border border-brand-orange bg-transparent text-brand-orange text-xl rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
        >
          <Boxes size={28} strokeWidth={2.5} />
          Assetverwaltung öffnen
        </button>
      </div>
      <button
        onClick={() => setFaqOpen(true)}
        className="absolute bottom-4 left-4 flex items-center gap-3 px-4 py-2 bg-brand-black text-white text-base rounded-lg border border-gray-500 hover:opacity-90 cursor-pointer hover:scale-105 transition-transform duration-200"
      >
        <HelpCircle size={24} strokeWidth={2.5} />
        FAQ
      </button>
      <p className="mt-40 opacity-60 text-sm">© 2026 FloatingFrame</p>

      {faqOpen && (
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-brand-black border border-white rounded-lg p-6 max-w-md w-full mx-4">
            <h2 className="text-xl font-semibold mb-4">FAQ</h2>
            <p className="text-white text-sm leading-relaxed">
              <img
                src="/toothless-dancing.gif"
                alt="DancingDragon"
                className="w-48 h-auto mx-auto mb-4 rounded-lg"
              />
              1. Was ist FloatingFrame?
              <br />
              FloatingFrame ist ein Netzwerk Visualisierungs- und Scanner-Tool.
              <br />
              <br />
              2. Wie verwende ich den Scanner?
              <br />
              Klicke auf "Scanner starten" und halte die Kamera auf einen
              QR-Code.
              <br />
              <br />
              3. Welche Geräte werden unterstützt?
              <br />
              FloatingFrame läuft auf allen modernen Geräten mit einem aktuellen
              Browser.
            </p>

            <button
              onClick={() => setFaqOpen(false)}
              className="mt-6 px-4 py-2 border border-white/20 text-white/70 text-sm rounded hover:opacity-80 transition"
            >
              Schließen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
