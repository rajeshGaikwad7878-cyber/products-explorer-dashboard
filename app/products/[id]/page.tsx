import { fetchProductById } from "@/lib/api";
import Image from "next/image";
import { notFound } from "next/navigation";
import BackButton from "@/components/UI/BackButton";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

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
   <div className="min-h-screen flex items-center justify-center p-6">
  <div className="max-w-4xl w-full">
    <BackButton />
      <div className="border border-primary-200 rounded-lg p-6 shadow-lg bg-white dark:bg-primary-800">
        <div className="grid md:grid-cols-2 gap-6">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
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
