"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import FavoriteButton from "./FavoriteButton";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className="
        flex flex-col gap-3 p-4 rounded-lg bg-white dark:bg-primary-900 border border-primary-200 dark:border-gray-700
        shadow-lg hover:shadow-xl transition-colors transition-shadow">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product?.image}
          alt={product?.title || "Product image"}
          width={200}
          height={200}
          className="mx-auto h-40 object-contain bg-white dark:bg-gray-800 p-2 rounded"
        />
      </Link>

      <h3 className="font-semibold text-sm line-clamp-2 text-primary-900 dark:text-primary-600">
        {product?.title}
      </h3>

      <p className="text-sm text-primary-600 dark:text-gray-300">
        {product?.category}
      </p>

      <div className="flex justify-between items-center mt-auto">
        <span className="font-bold text-primary-700 dark:text-primary-300">
          ${product?.price}
        </span>
        <FavoriteButton productId={product?.id} />
      </div>
    </div>
  );
}
