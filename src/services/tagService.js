// ping backend to get data from a the num provided by scanning a qr code
// GET all filterTags for Assetverwaltung.jsx
export async function tagService(setTagResponseArray) {
  try {
    const res = await fetch("/api/qr");

    if (!res.ok) {
      const error = await res.json();
      console.error("API Error:", res.status, error);
    } else {
      const data = await res.json();
      console.log("Successfully loaded tags:", data);
      setTagResponseArray(data);
    }
  } catch (err) {
    console.error("Network error:", err);
  }
}
