"use client";

export default function Pagination({
  page,
  totalPages,
  onChange,
}: {
  page: number;
  totalPages: number;
  onChange: (p: number) => void;
}) {
  return (
    <div className="flex gap-2 justify-center mt-6">
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i + 1)}
          className={`px-3 py-1 rounded ${
            page === i + 1 ? "bg-black text-white" : "border"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
