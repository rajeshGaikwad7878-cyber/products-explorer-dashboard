import { Product } from "@/types/product";

const BASE_URL = "https://fakestoreapi.com";

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export async function fetchProductById(id: string): Promise<Product> {
  const numericId = Number(id);

  if (Number.isNaN(numericId)) {
    throw new Error("Invalid product id");
  }

  const res = await fetch(`${BASE_URL}/products/${numericId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Product not found (${res.status})`);
  }

  const text = await res.text();

  if (!text) {
    throw new Error("Empty response from API");
  }

  return JSON.parse(text);
}
