import { Laptop, Monitor, Network } from "lucide-react";

const icons = {
  computer: Laptop,
  monitor: Monitor,
  switch: Network,
};

export default function AssetCard({ asset, onClick }) {
  const name = asset?.type ? `${asset.type}-${asset.id}` : "Unbekannt";
  const Icon = icons[asset?.type?.toLowerCase()];

  return (
    <div
      onClick={onClick}
      className="border rounded p-4 flex flex-col items-center justify-center h-32 bg-brand-yellow text-brand-black cursor-pointer hover:scale-105 transition-transform duration-200"
    >
      {Icon && <Icon className="w-15 h-15 mb-2 text-brand-black" />}

      <span className="font-bold text-center text-xl">{name}</span>
    </div>
  );
}
