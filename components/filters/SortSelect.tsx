"use client";

export default function SortSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border px-3 py-2 rounded"
    >
      <option value="">Sort by Price</option>
      <option value="asc">Low to High</option>
      <option value="desc">High to Low</option>
    </select>
  );
}
