"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import FavoriteButton from "./FavoriteButton";

export default function ProductCard({ product }: { product: Product }) {
  
  return (
    <div className="border border-primary-200 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow flex flex-col gap-3 bg-white dark:bg-primary-800">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="mx-auto h-40 object-contain"
        />
      </Link>

      <h3 className="font-semibold text-sm line-clamp-2 text-primary-900 dark:text-primary-100">
        {product.title}
      </h3>

      <p className="text-sm text-primary-600 dark:text-primary-300">{product.category}</p>

      <div className="flex justify-between items-center mt-auto">
        <span className="font-bold text-primary-700 dark:text-primary-300">${product.price}</span>
        <FavoriteButton productId={product.id} />
      </div>
    </div>
  );
}
