// ping backend to get data from a the num provided by scanning a qr code
// GET all assets for Assetverwaltung.jsx
const API_URL = import.meta.env.VITE_API_URL;

export async function assetService(setAssetResponseArray) {
  try {
    const res = await fetch(`${API_URL}/api/assets`);
    if (!res.ok) {
      const error = await res.json();
      console.error("API Error:", res.status, error);
      return;
    } else {
      const data = await res.json();
      console.log("Successfully fetched asssets from server:", data);
      setAssetResponseArray(data);
    }
  } catch (err) {
    console.error("Network error:", err);
  }
}
