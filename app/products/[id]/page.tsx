import { fetchProductById } from "@/lib/api";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // ✅ REQUIRED IN NEXT 15

  console.log("Route param ID:", id); // SERVER LOG

  let product;

  try {
    product = await fetchProductById(id);
  } catch {
    notFound();
  }

  if (!product) {
    notFound();
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="mx-auto object-contain"
        />
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-500 mb-2">{product.category}</p>
          <p className="mb-4">{product.description}</p>
          <p className="text-xl font-bold">${product.price}</p>
        </div>
      </div>
    </div>
  );
}
