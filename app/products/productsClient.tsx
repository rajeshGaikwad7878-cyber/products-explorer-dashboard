"use client";

import { Product } from "@/types/product";
import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import SearchInput from "@/components/filters/SearchInput";
import CategoryFilter from "@/components/filters/CategoryFilter";
import SortSelect from "@/components/filters/SortSelect";
import Pagination from "@/components/filters/Pagination";

const PAGE_SIZE = 8;

export default function ProductsClient({ products }: { products: Product[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);

  const categories = Array.from(
    new Set(products.map((p) => p.category))
  );

  const filtered = useMemo(() => {
    let data = [...products];

    if (search) {
      data = data.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      data = data.filter((p) => p.category === category);
    }

    if (sort === "asc") {
      data.sort((a, b) => a.price - b.price);
    }

    if (sort === "desc") {
      data.sort((a, b) => b.price - a.price);
    }

    return data;
  }, [products, search, category, sort]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <SearchInput value={search} onChange={setSearch} />
        <CategoryFilter
          categories={categories}
          value={category}
          onChange={setCategory}
        />
        <SortSelect value={sort} onChange={setSort} />
      </div>

      {paginated.length === 0 ? (
        <p className="text-center">No products found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginated.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}

      <Pagination
        page={page}
        totalPages={totalPages}
        onChange={setPage}
      />
    </div>
  );
}
