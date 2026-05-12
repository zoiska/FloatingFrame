import { useNavigate } from "react-router";

export default function ThemeTest() {
  const navigate = useNavigate();

  return (
<div className="h-dvh flex flex-col items-center justify-center relative overflow-hidden w-full">

      <h1 className="text-4xl font-bold">Theme Test</h1>

      <div className="flex gap-4">
        <div className="w-16 h-16 rounded bg-brand-blue" />
        <div className="w-16 h-16 rounded bg-brand-green" />
        <div className="w-16 h-16 rounded bg-brand-red" />
        <div className="w-16 h-16 rounded bg-brand-yellow" />
        <div className="w-16 h-16 rounded border-2 border-white opacity-20" />
      </div>

      <div className="flex flex-col gap-2 text-center">
        <p className="text-brand-blue">text-brand-blue ✓</p>
        <p className="text-brand-green">text-brand-green ✓</p>
        <p className="text-brand-red">text-brand-red ✓</p>
        <p className="text-brand-yellow">text-brand-yellow ✓</p>
      </div>

      <button
        onClick={() => navigate("/start")}
        className="px-6 py-3 border-2 border-brand-blue text-brand-blue rounded hover:opacity-80 transition"
      >
        Zurück zu FloatingStart
      </button>
    </div>
  );
}