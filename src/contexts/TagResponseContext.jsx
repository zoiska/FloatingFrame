import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const TagResponseContext = createContext({
  tagResponseArray: [],
  setTagResponseArray: () => {},
});

export function TagResponseProvider({ children }) {
  const [tagResponseArray, setTagResponseArray] = useState([]);

  return (
    <TagResponseContext value={{ tagResponseArray, setTagResponseArray }}>
      {children}
    </TagResponseContext>
  );
}
