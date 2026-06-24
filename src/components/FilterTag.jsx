export default function FilterTag({ label, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`inline-block px-3 py-1 rounded-sm border text-sm cursor-pointer select-none
        ${
          active
            ?  "bg-brand-blue text-black border-brand-grey hover:scale-105"
            : "bg-brand-orange text-black hover:scale-105"
        }`}
    >
      {label}
    </button>
  );
}