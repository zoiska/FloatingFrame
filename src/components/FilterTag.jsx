export default function FilterTag({ label }) {
  return (
    <span className="inline-block px-3 py-1 rounded-full border bg-gray-100 border-slate-300 text-black font-bold text-sm cursor-pointer select-none">
      {label}
    </span>
  );
}
