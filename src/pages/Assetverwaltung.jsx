import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AssetCard from "../components/AssetCard";
import FilterTag from "../components/FilterTag";
import Searchbar from "../components/Searchbar";
import CreateAssetMenu from "../components/CreateAssetMenu";
import { AssetResponseContext } from "../contexts/AssetResponseContext";
import { TagResponseContext } from "../contexts/TagResponseContext";
import { assetService } from "../services/assetService";
import { tagService } from "../services/tagService";

export default function Assetverwaltung() {
  const [searchInput, setSearchInput] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);

  const navigate = useNavigate();

  const { tagResponseArray, setTagResponseArray } =
    useContext(TagResponseContext);

  const { assetResponseArray, setAssetResponseArray } =
    useContext(AssetResponseContext);

  const navigateToAsset = (asset) => {
    navigate(`/EditView/${asset.type.toLowerCase()}/${asset.id}`);
  };
  const [orientation, setOrientation] = useState("portrait");

  // INIT
  useEffect(() => {
    const load = async () => {
      await assetService(setAssetResponseArray);
      await tagService(setTagResponseArray);
      function handleRotation() {
        setOrientation(screen.orientation.type);
      }
      screen.orientation.addEventListener("change", handleRotation);
      return () => {
        screen.orientation.removeEventListener("change", handleRotation);
      };
    };

    load();
  }, []);

  // FILTER
  const filteredAssets = assetResponseArray?.filter((asset) => {
    const matchesSearch =
      !searchInput ||
      asset.type?.toLowerCase().includes(searchInput.toLowerCase());

    const matchesTag =
      selectedTag === null ||
      selectedTag === undefined ||
      asset.qr_code_id === selectedTag ||
      (selectedTag === "none" && !asset.qr_code_id);

    return matchesSearch && matchesTag;
  });

  const sortedAssets = [...(filteredAssets || [])].sort((a, b) => {
    const nameA = `${a.type}-${a.id}`.toLowerCase();
    const nameB = `${b.type}-${b.id}`.toLowerCase();

    return nameA.localeCompare(nameB);
  });

  return (
    <div
      className={`mainContainer w-full  ${
        orientation === "portrait" || orientation === "portrait-primary"
          ? "h-dvh"
          : "max-h-min"
      }`}
    >
      <div
        className="fixed w-screen h-screen  rounded-full  pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="p-4">
        <Searchbar value={searchInput} onChange={setSearchInput} />

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
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 p-4">
        {sortedAssets.map((asset) => (
          <AssetCard
            key={`${asset.type}-${asset.id}`}
            asset={asset}
            onClick={() => navigateToAsset(asset, asset.id)}
          />
        ))}
      </div>

      <CreateAssetMenu />
    </div>
  );
}
