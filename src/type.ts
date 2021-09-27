
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

export type ItemProps = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

export type CartProps = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

export type CartItemProps = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

//Theme toggle
export type Theme = "light" | "dark" | string ;
export type ThemeContextProps = { 
  theme: Theme | string; 
  toggleTheme: () => void 
};

export type ToggleBtnProps = {
  theme: string;
  toggleTheme: () => void;
};

export type DarkModeProps = {
  isDarkMode: boolean;
};