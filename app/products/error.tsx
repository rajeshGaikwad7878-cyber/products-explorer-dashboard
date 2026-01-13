"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-6 text-center">
      <p className="text-red-500 mb-4">{error.message}</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Retry
      </button>
    </div>
  );
}
