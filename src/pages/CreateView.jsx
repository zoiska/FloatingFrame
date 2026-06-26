import { useParams, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AssetResponseContext } from "../contexts/AssetResponseContext";
import { assetService } from "../services/assetService";

// Schema
const schema = {
  computer: [
    "manufacturer",
    "hostname",
    "ip_address",
    "mac_address",
    "cpu_name",
    "ram_size",
    "storage_size",
  ],
  switch: ["hostname", "port", "room", "qr_code_id"],
  monitor: [
    "manufacturer",
    "screen_diagonal",
    "screen_resolution",
    "refresh_rate",
    "qr_code_id",
  ],
};

export default function CreateView() {
  const { type } = useParams();
  const navigate = useNavigate();

  const { setAssetResponseArray } = useContext(AssetResponseContext);

  const fields = schema[type] || [];
  const [formData, setFormData] = useState({});

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // CREATE
  const handleCreate = async () => {
    try {
      const res = await fetch(`https://localhost:3000/api/${type}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Create failed");
      }

      navigate("/Assetverwaltung"); // einfach zurück
    } catch (err) {
      console.error("Create failed:", err);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create {type}</h1>

      <div className="space-y-3">
        {fields.map((field) => (
          <div key={field} className="flex flex-col">
            <label className="font-bold capitalize">
              {field.replaceAll("_", " ")}
            </label>

            <input
              className="border p-2 rounded"
              onChange={(e) => handleChange(field, e.target.value)}
            />
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-red-400 text-white rounded hover:bg-red-500 transition"
        >
          Zurück
        </button>

        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Erstellen
        </button>
      </div>
    </div>
  );
}
