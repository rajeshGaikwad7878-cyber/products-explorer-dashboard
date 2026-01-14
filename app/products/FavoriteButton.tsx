"use client";

import { useState, useEffect } from "react";

export default function FavoriteButton({ productId }: { productId: number }) {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  const isFavorite = favorites.includes(productId);

  const toggleFavorite = () => {
    const newFavorites = isFavorite
      ? favorites.filter((id) => id !== productId)
      : [...favorites, productId];
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    window.dispatchEvent(new CustomEvent('favoritesUpdated', { detail: newFavorites }));
  };

  return (
    <button
      aria-label="Toggle Favorite"
      onClick={toggleFavorite}
      className={`text-xl ${
        isFavorite ? "text-red-500" : "text-gray-400"
      }`}
    >
      ♥
    </button>
  );
}
