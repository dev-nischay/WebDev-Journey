import { create } from "zustand";

export const useWishListStore = create((set) => ({
  wishList: [],
  displayItems: async () => {
    try {
      let res = await fetch("https://fakestoreapi.com/products?limit=9");
      let json = await res.json();

      let obj = json.map((e) => ({
        title: e.title,
        price: e.price,
        image: e.image,
        rating: e.rating,
      }));

      set({ wishList: obj });
    } catch (error) {
      console.log("Something went wrong", error);
    }
  },
}));



export const displayItems = useWishListStore.getState();
