import { useState } from "react";
import { useNavigate } from "react-router";

export default function FloatingStart() {
  const navigate = useNavigate();
  const [faqOpen, setFaqOpen] = useState(false);

  return (
    <div className="h-dvh flex flex-col items-center justify-center relative overflow-hidden w-full">
      <div
        className="absolute w-96 h-96 rounded-full top-10 left-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute w-72 h-72 rounded-full bottom-16 right-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.10) 0%, transparent 70%)" }}
      />

      <h1 className="text-5xl font-bold mb-4 tracking-tight">FloatingFrame</h1>
      <p className="text-lg opacity-70 mb-12 tracking-widest">Netzwerk Visualisierung</p>

      <div className="flex flex-col gap-10">
        <button
          onClick={() => navigate("/Scanner")}
          className="px-6 py-3 border-2 border-brand-blue text-brand-blue text-xl rounded hover:opacity-80 transition"
        >
          Scanner starten
        </button>
        <button
          onClick={() => navigate("/Assetverwaltung")}
          className="px-6 py-3 border-2 border-brand-green text-brand-green text-xl rounded hover:opacity-80 transition"
        >
          Assetverwaltung
        </button>
      </div>

      <p className="mt-40 opacity-60 text-sm">© 2026 FloatingFrame</p>

      {/* FAQ Button unten links */}
      <button
        onClick={() => setFaqOpen(true)}
        className="absolute bottom-4 left-4 px-4 py-2 border border-white/20 text-white/70 text-sm rounded hover:opacity-80 transition"
      >
        FAQ
      </button>

      {faqOpen && (
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#1e293b] border border-white/10 rounded-lg p-6 max-w-md w-full mx-4">
            <h2 className="text-xl font-semibold mb-4">FAQ</h2>
            <p className="text-white/70 text-sm leading-relaxed">
              1. Was ist FloatingFrame?
              <br />
              FloatingFrame ist ein Netzwerk Visualisierungs- und Scanner-Tool.
              <br />
              <br />
              2. Wie verwende ich den Scanner?
              <br />
              Klicke auf "Scanner starten" und halte die Kamera auf einen QR-Code.
              <br />
              <br />
              3. Welche Geräte werden unterstützt?
              <br />
              FloatingFrame läuft auf allen modernen Geräten mit einem aktuellen Browser.
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
