import { useState } from "react";
import { useNavigate } from "react-router";
import { Boxes, ScanLine, HelpCircle } from "lucide-react";
import { useContrast } from "../contexts/ContrastContext";
import ContrastToggleButton from "../components/ContrastToggleButton";

export default function FloatingStart() {
  const navigate = useNavigate();
  const [faqOpen, setFaqOpen] = useState(false);

  // GLOBALER KONTRAST-STATE
  const { highContrast } = useContrast();

  return (
    <div className="h-dvh flex flex-col items-center justify-center relative overflow-hidden w-full">

      {/* Hintergrundkreise */}
      <div
        className="absolute w-96 h-96 rounded-full top-10 left-5 pointer-events-none"
        style={{
          background: highContrast
            ? "radial-gradient(circle, rgba(0,0,0,0.12) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)"
        }}
      />
      <div
        className="absolute w-72 h-72 rounded-full bottom-16 right-8 pointer-events-none"
        style={{
          background: highContrast
            ? "radial-gradient(circle, rgba(0,0,0,0.10) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(34,197,94,0.10) 0%, transparent 70%)"
        }}
      />

      {/* Titel */}
      <h1 className="text-5xl font-bold mb-4 tracking-tight">FloatingFrame</h1>
      <p className="text-lg mb-12 tracking-widest opacity-80">
        Netzwerk Visualisierung
      </p>

      {/* Buttons */}
      <div className="flex flex-col gap-10">

        {/* Scanner */}
        <button
          onClick={() => navigate("/Scanner")}
          className={`flex items-center gap-3 px-6 py-3 text-xl rounded-lg shadow-lg hover:opacity-90 transition ${
            highContrast ? "bg-gray-300 text-black" : "bg-brand-grey text-black"
          }`}
        >
          <ScanLine size={28} strokeWidth={2.5} />
          Scanner starten
        </button>

        {/* Assetverwaltung */}
        <button
          onClick={() => navigate("/Assetverwaltung")}
          className={`flex items-center gap-3 px-6 py-3 text-xl rounded-lg shadow-lg hover:opacity-90 transition ${
            highContrast ? "bg-yellow-300 text-black" : "bg-brand-yellow text-black"
          }`}
        >
          <Boxes size={28} strokeWidth={2.5} />
          Assetverwaltung öffnen
        </button>

      </div>

      <p className="mt-40 text-sm opacity-60">© 2026 FloatingFrame</p>

      {/* FAQ + Kontrast */}
      <div className="absolute bottom-4 left-4 flex items-center gap-4">

        {/* FAQ Button */}
        <button
          onClick={() => setFaqOpen(true)}
          className={`flex items-center gap-3 px-4 py-2 text-base rounded-lg border hover:opacity-90 transition ${
            highContrast
              ? "bg-gray-200 text-black border-gray-600"
              : "bg-[#1e293b] text-white border-gray-500"
          }`}
        >
          <HelpCircle size={24} strokeWidth={2.5} />
          FAQ
        </button>

        {/* GLOBALER KONTRAST BUTTON */}
        <ContrastToggleButton />
      </div>

      {/* FAQ Modal */}
      {faqOpen && (
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-50">
          <div
            className={`border rounded-lg p-6 max-w-md w-full mx-4 ${
              highContrast
                ? "bg-white text-black border-gray-700"
                : "bg-[#1e293b] text-white border-gray-500"
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">FAQ</h2>
            <p className="text-base leading-relaxed opacity-90">
              1. Was ist FloatingFrame?
              <br />
              FloatingFrame ist ein Netzwerk Visualisierungs- und Scanner-Tool.
              <br /><br />
              2. Wie verwende ich den Scanner?
              <br />
              Klicke auf "Scanner starten" und halte die Kamera auf einen QR-Code.
              <br /><br />
              3. Welche Geräte werden unterstützt?
              <br />
              FloatingFrame läuft auf allen modernen Geräten mit einem aktuellen Browser.
            </p>

            <button
              onClick={() => setFaqOpen(false)}
              className={`mt-6 px-4 py-2 rounded-lg hover:opacity-90 transition ${
                highContrast ? "bg-gray-300 text-black" : "bg-brand-grey text-black"
              }`}
            >
              Schließen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
