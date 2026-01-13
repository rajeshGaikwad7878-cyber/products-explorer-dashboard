"use client";

export default function DarkModeToggle() {
  const toggle = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button onClick={toggle} className="border px-3 py-1 rounded">
      Toggle Dark Mode
    </button>
  );
}
