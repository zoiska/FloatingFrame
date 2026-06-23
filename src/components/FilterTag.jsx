export default function FilterTag({ label, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`inline-block px-3 py-1 rounded-sm border text-sm cursor-pointer select-none
        ${
          active
            ? "bg-white text-black border-brand-yellow"
            : "bg-brand-grey text-black border-slate-300"
        }`}
    >
      {label}
    </button>
  );
}