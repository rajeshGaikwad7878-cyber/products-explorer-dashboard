"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/products")}
      className="mb-4 inline-flex items-center gap-2 cursor-pointer rounded-md border border-primary-300 px-4 py-2 text-sm font-medium text-primary-700 hover:bg-primary-100 dark:border-primary-600 dark:text-primary-200 dark:hover:bg-primary-700 transition"
    >
      ← Back to Products
    </button>
  );
}
