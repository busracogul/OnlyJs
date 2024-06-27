import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Photo{
    id:number;
    title:string;
    url:string;
    thumbnailUrl:string;
    userId:number
}

export const useStore = create(
  persist(
    (set) => ({
      favorites: [],
      addFavorite: (photo:Photo) =>
        set((state) => ({ favorites: [...state.favorites, photo] })),
      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((photo) => photo.id !== id),
        })),
    }),
    {
      name: "favorites-storage",
    }
  )
);
