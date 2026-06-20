import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AssetResponseContext = createContext({
  assetResponseArray: [],
  setAssetResponseArray: () => {},
});

export function AssetResponseProvider({ children }) {
  const [assetResponseArray, setAssetResponseArray] = useState([]);

  return (
    <AssetResponseContext value={{ assetResponseArray, setAssetResponseArray }}>
      {children}
    </AssetResponseContext>
  );
}
