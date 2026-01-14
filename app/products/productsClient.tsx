"use client";

import { Product } from "@/types/product";
import { useMemo, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import SearchInput from "@/components/filters/SearchInput";
import CategoryFilter from "@/components/filters/CategoryFilter";
import SortSelect from "@/components/filters/SortSelect";
import Pagination from "@/components/filters/Pagination";
import ThemeToggle from "@/components/UI/ThemeToggle";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
const PAGE_SIZE = 8;

export default function ProductsClient({ products }: { products: Product[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    setPage(1);
  }, [search, category, sort, showFavorites]);
  const favoriteIds = useSelector((state: RootState) => state.favorites.ids);
  const categories = Array.from(new Set(products.map((p) => p.category)));

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

    if (showFavorites) {
      data = data.filter((p) => favoriteIds.includes(p.id));
    }

    if (sort === "asc") {
      data.sort((a, b) => a.price - b.price);
    }

    if (sort === "desc") {
      data.sort((a, b) => b.price - a.price);
    }

    return data;
  }, [products, search, category, sort, showFavorites, favoriteIds]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div
      className="p-6 min-h-screen"
    >
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <SearchInput value={search} onChange={setSearch} />
        <div className="flex items-center gap-3">
  <label className="flex items-center cursor-pointer">
    
    <input
      type="checkbox"
      checked={showFavorites}
      onChange={(e) => {
        setShowFavorites(e.target.checked);
        setPage(1);
      }}
      className="sr-only"
    />
    
    <div className="w-6 h-6 flex items-center justify-center border-1 border-primary-200  bg-white dark:bg-primary-800 transition-colors duration-300">
      {showFavorites && (
        <svg
          className="w-5 h-5 text-primary-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      )}
    </div>
    <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-200">
      Favorites only
    </span>
  </label>
</div>


        <CategoryFilter
          categories={categories}
          value={category}
          onChange={setCategory}
        />
        <SortSelect value={sort} onChange={setSort} />
        <ThemeToggle />
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

      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </div>
  );
}
