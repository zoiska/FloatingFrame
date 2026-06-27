import { Search } from "lucide-react";

export default function Searchbar({ value, onChange }) {
  return (
    <div className="flex justify-center py-4">
      <div className="relative w-full max-w-xl">
        {/* ICON */}
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

        {/* INPUT */}
        <input
          className="w-full pl-10 pr-4 py-2 border rounded-full bg-white text-black"
          type="text"
          placeholder="Suche nach Assets ..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
