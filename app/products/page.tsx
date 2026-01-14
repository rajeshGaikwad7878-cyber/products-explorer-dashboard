import { fetchProducts } from "@/lib/api";
import ProductsClient from "./productsClient";

export default async function ProductsPage() {
  let products: any[] = [];
  try {
    products = await fetchProducts();
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
  return <ProductsClient products={products} />;
}
