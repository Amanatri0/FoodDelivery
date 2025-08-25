import { createContext, useState, type ReactNode } from "react";
import type { Product } from "../../components/main/card"; // import the type

// Extend Product to include quantity & weight
export interface CartItem extends Product {
  quantity: number;
  selectedWeight: string;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number, weight: string) => void;
  updateQuantity: (id: number, weight: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find(
        (i) => i.id === item.id && i.selectedWeight === item.selectedWeight
      );
      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.selectedWeight === item.selectedWeight
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: number, weight: string) => {
    setCart((prev) =>
      prev.filter((i) => !(i.id === id && i.selectedWeight === weight))
    );
  };

  const updateQuantity = (id: number, weight: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id, weight);
    } else {
      setCart((prev) =>
        prev.map((i) =>
          i.id === id && i.selectedWeight === weight ? { ...i, quantity } : i
        )
      );
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
