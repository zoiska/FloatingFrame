// src/layout/GlobalLayout.jsx
import { useContrast } from "../contexts/ContrastContext";

export default function GlobalLayout({ children }) {
  const { highContrast } = useContrast();

  return (
    <div
      className={`w-full h-dvh transition ${
        highContrast ? "bg-white text-black" : "bg-[#0f172a] text-white"
      }`}
    >
      {children}
    </div>
  );
}
