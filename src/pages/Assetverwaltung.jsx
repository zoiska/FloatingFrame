// --- IMPORTS ---
import { useContext, useEffect, useState } from "react";
import AssetCard from "../components/AssetCard";
import FilterTag from "../components/FilterTag";
import Searchbar from "../components/Searchbar";
import { AssetResponseContext } from "../contexts/AssetResponseContext";
import { TagResponseContext } from "../contexts/TagResponseContext";
import { assetService } from "../services/assetService";
import { tagService } from "../services/tagService";
import { useNavigate } from "react-router-dom";

export default function Assetverwaltung() {
  const [searchInput, setSearchInput] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const { tagResponseArray, setTagResponseArray } =
    useContext(TagResponseContext);
  const { assetResponseArray, setAssetResponseArray } =
    useContext(AssetResponseContext);
  const navigate = useNavigate();

  // --- INITIAL LOAD ---
  useEffect(() => {
    assetService(setAssetResponseArray);
    tagService(setTagResponseArray);
  }, []);

  // --- SEARCHBAR & TAGS ---
  // Shows all assets, if the input is empty
  // compares the input with "asset.type"
  const filteredAssets = assetResponseArray?.filter((asset) => {
    // Suchfilter
    const matchesSearch =
      !searchInput ||
      asset.type?.toLowerCase().includes(searchInput.toLowerCase());

    // Tagfilter
    const matchesTag = !selectedTag || asset.qr_code_id === selectedTag;

    return matchesSearch && matchesTag;
  });

  // Navigate to Assetmanagement
  const navigateToAsset = (asset) => {
    navigate(`/EditView/${asset.type.toLowerCase()}/${asset.id}`);
  };

  // Called by the searchbar, if the user taps something
  // Saves the current input in "searchInput"
  const setSearchbarInput = (value) => {
    setSearchInput(value);
  };

  // --- OUTPUT ---
  return (
    <div className="p-4">
      {/* searchInput */}
      <Searchbar value={searchInput} onChange={setSearchbarInput} />

      {/* FILTERTAGS */}
      <div className="flex flex-wrap gap-2 mt-2 justify-center">
        <FilterTag
          label="Alle"
          active={selectedTag === null}
          onClick={() => setSelectedTag(null)}
        />

        {tagResponseArray?.map((tag) => (
          <FilterTag
            key={tag.id}
            label={tag.room_name}
            active={selectedTag === tag.id}
            onClick={() => setSelectedTag(tag.id)}
          />
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {filteredAssets?.map((asset, index) => (
          <AssetCard
            key={index}
            asset={asset}
            onClick={() => navigateToAsset(asset, index)}
          />
        ))}
      </div>
    </div>
  );
}
