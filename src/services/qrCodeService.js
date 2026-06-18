// ping backend to get data from a the num provided by scanning a qr code
const API_URL = import.meta.env.VITE_API_URL;

export async function qrCodeService(setScannedCodesArray, code) {
  try {
    const res = await fetch(`${API_URL}/api/qr/${code}`);
    if (!res.ok) {
      //TODO: user über error berichten undso
      console.log(res.status);
      const error = await res.json();
      console.log("An error occured: ", error);
    } else {
      const data = await res.json();
      setScannedCodesArray(data);
    }
  } catch (err) {
    console.log("An error occured: ", err);
  }
}
