import { Laptop, Monitor, Network } from "lucide-react";

const icons = {
  computer: Laptop,
  monitor: Monitor,
  switch: Network,
};

export default function AssetCard({ asset }) {
  console.log("DEBUG:", asset);
  const name = asset?.type ? `${asset.type}-${asset.id}` : "Unbekannt";
  const Icon = icons[asset?.type];

  return (
    <div className="border rounded p-4 flex flex-col items-center justify-center h-32 bg-white text-black cursor-pointer">
      {/* ICON */}
      {Icon && <Icon className="w-15 h-15 mb-2 text-black" />}

      {/* TEXT */}
      <span className="font-bold text-center text-xl">{name}</span>
    </div>
  );
}
