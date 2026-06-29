// ping backend to get data from a the num provided by scanning a qr code
export async function qrCodeService(setScannedCodesArray, code) {
  try {
    const res = await fetch(`/api/assets/${code}`);
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
    console.log("An error occured trying to fetch from the server: ", err);
  }
}
