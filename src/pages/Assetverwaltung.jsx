import { useContext, useEffect, useState } from "react";
import AssetCard from "../components/AssetCard";
import FilterTag from "../components/FilterTag";
import Searchbar from "../components/Searchbar";
import { AssetResponseContext } from "../contexts/AssetResponseContext";
import { TagResponseContext } from "../contexts/TagResponseContext";
import { assetService } from "../services/assetService";
import { tagService } from "../services/tagService";

export default function Assetverwaltung() {
  const [search, setSearch] = useState("");
  const { tagResponseArray, setTagResponseArray } =
    useContext(TagResponseContext);
  const { assetResponseArray, setAssetResponseArray } =
    useContext(AssetResponseContext);

  // Load assets & tags
  useEffect(() => {
    assetService(setAssetResponseArray);
    console.log("useEffectAsset:", assetResponseArray);
    tagService(setTagResponseArray);
    console.log("useEffectTag:", tagResponseArray);
  }, []);

  // Searchbar
  /*const filteredAssets = assetResponseArray.filter((asset) => {
    const text = search.toLowerCase();

    return (
      asset.hostname?.toLowerCase().includes(text) ||
      asset.type?.toLowerCase().includes(text)
    );
  });
  */

  return (
    <div className="p-4">
      {/* SEARCH */}
      <Searchbar value={search} onChange={setSearch} />

      {/* FILTERTAGS */}
      <div className="flex flex-wrap gap-2 mt-2">
        {tagResponseArray?.map((tag) => (
          <FilterTag key={tag.id} label={tag.room_name} />
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {assetResponseArray?.map((asset, index) => (
          <AssetCard key={index} asset={asset} />
        ))}
      </div>
    </div>
  );
}
