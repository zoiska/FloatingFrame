// ping backend to get data from a the num provided by scanning a qr code
// GET all assets for Assetverwaltung.jsx

export async function assetService(setAssetResponseArray) {
  try {
    const res = await fetch("/api/assets");

    if (!res.ok) {
      const error = await res.json();
      console.error("API Error:", res.status, error);
      return;
    }

    const data = await res.json();
    console.log("PASSED:", data);

    setAssetResponseArray(data);
  } catch (err) {
    console.error("Network error:", err);
  }
}
