"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { toggleFavorite } from "@/store/favoritesSlice";

export default function FavoriteButton({ productId }: { productId: number }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.ids);

  const isFavorite = favorites.includes(productId);

  return (
    <button
      aria-label="Toggle Favorite"
      onClick={() => dispatch(toggleFavorite(productId))}
      className={`text-xl ${
        isFavorite ? "text-red-500" : "text-gray-400"
      }`}
    >
      ♥
    </button>
  );
}
