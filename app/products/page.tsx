import { fetchProducts } from "@/lib/api";
import ProductsClient from "./productsClient";

export default async function ProductsPage() {
  const products = await fetchProducts();
  return <ProductsClient products={products} />;
}
