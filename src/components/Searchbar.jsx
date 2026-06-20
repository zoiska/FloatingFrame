export default function Searchbar({ value, onChange }) {
  return (
    <div className="flex justify-center py-4">
      <input
        className="w-full max-w-xl px-4 py-2 border rounded bg-white text-black"
        type="text"
        placeholder="Search for assets ..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
