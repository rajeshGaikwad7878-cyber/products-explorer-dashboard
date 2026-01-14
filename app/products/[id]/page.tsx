"use client";

import { fetchProductById } from "@/lib/api";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BackButton from "@/components/UI/BackButton";
import { Product } from "@/types/product";
import ProductDetailSkeleton from "../ProductDetailSkeleton";

export default function ProductDetail() {
  const params = useParams();
  const id = params.id as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
        setError("Product not found");
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      loadProduct();
    }
  }, [id]);

  if (loading) {
    return <ProductDetailSkeleton />;
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <p className="text-red-500">{error || "Product not found"}</p>
      </div>
    );
  }

  return (
   <div className="min-h-screen flex items-center justify-center p-6">
  <div className="max-w-4xl w-full">
    <BackButton />
      <div className="border border-primary-200 rounded-lg p-6 shadow-lg bg-white dark:bg-primary-800">
        <div className="grid md:grid-cols-2 gap-6">
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
            className="mx-auto object-contain"
          />
          <div>
          <h1 className="text-2xl font-bold mb-2 text-primary-900 dark:text-primary-100">
            {product.title}
          </h1>
          <p className="font-bold text-primary-100 dark:text-primary-300 mb-2">
            {product.category}
          </p>
          <p className="text-primary-600 dark:text-primary-200 mb-4">
            {product.description}
          </p>
          <p className="text-xl font-bold text-primary-700 dark:text-primary-300">
            ${product.price}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
