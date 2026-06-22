import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AssetResponseContext } from "../contexts/AssetResponseContext";

export default function EditView() {
  const { type, id } = useParams();
  const { assetResponseArray, setAssetResponseArray } =
    useContext(AssetResponseContext);

  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  // --- LOAD FROM CONTEXT ---
  useEffect(() => {
    const assetFromContext = assetResponseArray?.find(
      (asset) =>
        asset.id === Number(id) &&
        asset.type?.toLowerCase() === type.toLowerCase(),
    );

    if (assetFromContext) {
      // Nur NULL und undefined entfernen
      const cleanedData = Object.fromEntries(
        Object.entries(assetFromContext).filter(([_, value]) => value != null),
      );

      setFormData(cleanedData);
    }
  }, [assetResponseArray, type, id]);

  // --- INPUT CHANGE ---
  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // --- BACK ---
  const handleBack = () => {
    navigate(-1);
  };

  // --- SAVE ---
  const handleSave = async () => {
    try {
      // Vor dem Speichern NULL-Werte entfernen
      const cleanedData = Object.fromEntries(
        Object.entries(formData).filter(([_, value]) => value != null),
      );

      const response = await fetch(`https://localhost:3000/api/${type}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cleanedData),
      });

      const data = await response.json();
      console.log("Updated:", data);

      // Context aktualisieren
      setAssetResponseArray((prev) =>
        prev.map((asset) =>
          asset.id === Number(id) &&
          asset.type?.toLowerCase() === type.toLowerCase()
            ? cleanedData
            : asset,
        ),
      );
    } catch (error) {
      console.error(error);
    }
  };

  // --- LOADING ---
  if (!formData || !formData.id) {
    return <div className="p-4">Lade Asset...</div>;
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        {formData.type} #{formData.id} bearbeiten
      </h1>

      {/* FORM */}
      <div className="space-y-3">
        {Object.entries(formData).map(([key, value]) => {
          const isDisabled = key === "id" || key === "type";

          return (
            <div key={key} className="flex flex-col">
              <label className="font-bold capitalize">
                {key.replaceAll("_", " ")}
              </label>

              <input
                className="border p-2 rounded"
                value={value ?? ""}
                disabled={isDisabled}
                onChange={(e) => handleChange(key, e.target.value)}
              />
            </div>
          );
        })}
      </div>

      {/* BUTTONS */}
      <div className="flex gap-3 mt-5">
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Speichern
        </button>

        <button
          onClick={handleBack}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Zurück
        </button>
      </div>
    </div>
  );
}
