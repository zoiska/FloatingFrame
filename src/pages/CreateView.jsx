import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { CreateViewSchema } from "../data/CreateViewSchema.jsx";
import { createAssetService } from "../services/createAssetService.js";
import { ArrowLeft, Save } from "lucide-react";

const schema = CreateViewSchema;

export default function CreateView() {
  const { type } = useParams();
  const navigate = useNavigate();

  const fields = schema[type] || [];
  const [formData, setFormData] = useState({});

  const [orientation, setOrientation] = useState("portrait");

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleCreate = () => {
    const res = createAssetService(type, formData);
    if (res.ok) {
      navigate("/Assetverwaltung");
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    function handleRotation() {
      setOrientation(screen.orientation.type);
    }
    screen.orientation.addEventListener("change", handleRotation);
    return () => {
      screen.orientation.removeEventListener("change", handleRotation);
    };
  }, []);

  return (
    <div
      className={`mainContainer w-full  ${
        orientation === "portrait" || orientation === "portrait-primary" ? "h-dvh" : "max-h-min"
      }`}
    >
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Create {type}</h1>

        <div className="space-y-3">
          {fields.map((field) => (
            <div key={field} className="flex flex-col">
              <label className="font-bold capitalize">{field.replaceAll("_", " ")}</label>

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
            className="flex items-center gap-2 bg-transparent text-brand-orange border border-brand-orange px-4 py-2 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            <ArrowLeft className="w5 h-5" />
            Zurück
          </button>

          <button
            onClick={handleCreate}
            className="flex items-center gap-2 bg-transparent text-brand-blue border border-brand-blue px-4 py-2 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            <Save className="w-5 h-5" />
            Erstellen
          </button>
        </div>
      </div>
    </div>
  );
}
