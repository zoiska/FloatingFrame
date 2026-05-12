export default function FAQ({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-slate-800 p-6 rounded-lg w-80 shadow-xl border border-slate-700">
        <h2 className="text-xl font-semibold text-cyan-300 mb-4">
          FAQ
        </h2>

        <ul className="text-sm text-slate-300 space-y-2">
          <li>• Übersicht der PCs</li>
          <li>• Netzwerkdosen anzeigen</li>
          <li>• Klickbare Visualisierung</li>
          <li>• Scanner integriert</li>
        </ul>

        <button
          onClick={onClose}
          className="mt-6 w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition"
        >
          Schließen
        </button>
      </div>
    </div>
  );
}
