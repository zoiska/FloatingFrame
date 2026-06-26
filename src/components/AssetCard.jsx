import { Laptop, Monitor, Network } from "lucide-react";

const icons = {
  computer: Laptop,
  monitor: Monitor,
  switch: Network,
};

export default function AssetCard({ asset, onClick }) {
  const name = asset?.type ? `${asset.type}-${asset.id}` : "Unbekannt";
  const hostname = asset?.hostname || "Unbekannt";
  const Icon = icons[asset?.type?.toLowerCase()];

  return (
    <div
      onClick={onClick}
      className="border border-brand-orange rounded p-4 flex flex-col items-center justify-center h-32 
                 bg-transparent text-brand-orange cursor-pointer 
                 hover:scale-105 transition-transform duration-200"
    >
      {Icon && <Icon className="w-15 h-15 mb-2 text-brand-orange" />}

      <div className="rounded-md w-full text-center">
        <span className="font-bold text-xl text-brand-orange">{name}</span>
        <span className="text-sm text-gray-600 text-center">{hostname}</span>
      </div>
    </div>
  );
}
