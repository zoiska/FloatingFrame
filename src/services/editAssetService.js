const API_URL = import.meta.env.VITE_API_URL;

export async function editAssetService(formData, setAssetResponseArray, type, id) {
  try {
    const cleanedData = Object.fromEntries(
      Object.entries(formData).filter(([_, value]) => value != null),
    );

    const res = await fetch(`${API_URL}/api/${type}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cleanedData),
    });

    if (!res.ok) {
      const error = await res.json();
      console.log("An error occured: ", error);
    } else {
      const data = await res.json();
      console.log("Updated:", data);
    }

    setAssetResponseArray((prev) =>
      prev.map((asset) =>
        asset.id === Number(id) && asset.type?.toLowerCase() === type.toLowerCase()
          ? cleanedData
          : asset,
      ),
    );
  } catch (error) {
    console.error(error);
  }
}
