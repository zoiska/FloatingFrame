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
      className="border rounded p-4 flex flex-col items-center justify-center h-32 bg-white text-black cursor-pointer"
    >
      {Icon && <Icon className="w-10 h-10 mb-2 text-black" />}

      {/* NAME */}
      <span className="font-bold text-center text-xl">{name}</span>

      {/* HOSTNAME */}
      <span className="text-sm text-gray-600 text-center">{hostname}</span>
    </div>
  );
}
