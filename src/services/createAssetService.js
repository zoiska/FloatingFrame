const API_URL = import.meta.env.VITE_API_URL;

export async function createAssetService(type, formData) {
  try {
    const res = await fetch(`${API_URL}/api/${type}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      const error = await res.json();
      console.log("An error occured trying to create new asset: ", error);
    } else {
      const data = await res.json();
      console.log("Successfully created asset:", data);
    }
  } catch (err) {
    console.error("Create failed:", err);
  }
}
