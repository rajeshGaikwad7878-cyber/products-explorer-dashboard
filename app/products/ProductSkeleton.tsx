export default function ProductSkeleton() {
  return (
    <div className="animate-pulse border rounded-lg p-4 space-y-3">
      <div className="h-40 bg-gray-300 rounded" />
      <div className="h-4 bg-gray-300 rounded w-3/4" />
      <div className="h-4 bg-gray-300 rounded w-1/2" />
    </div>
  );
}
