export async function deleteAssetService(type, id) {
  try {
    const res = await fetch(`/api/${type}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      const err = await res.json();
      console.log("An error occurred trying to delete asset of type ", type + ": ", err);
    } else {
      const data = await res.json();
      console.log("Successfully deleted asset: ", data);
    }
  } catch (err) {
    console.log("An error occurred trying to fetch from the server: ", err);
  }
}
