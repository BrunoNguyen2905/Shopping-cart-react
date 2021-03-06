import { useState, useContext } from "react";
import { useQuery } from "react-query";
import axios from "axios";
//Components
import { ThemeContext } from "./components/ThemeProvider/ThemeProvider";
import ToggleBtn from "./components/ToggleBtn/ToggleBtn";
import Item from "./components/Item/Item";
import Cart from "./components/Cart/Cart";
import {LinearProgress, Grid, Badge, Drawer} from "@material-ui/core";
//styles
import {
  Wrapper,
  StyledButton,
  DarkModeStyledButton,
  StyledAddShoppingCartIcon,
} from "./App.styles";
//Types
import { CartItemType } from "./type";

//create fetch func outside of the App itself cause we dont need to re-create it in its render
const getProducts = async (): Promise<CartItemType[]> => {
  return await (
    await axios.get("https://fakestoreapi.com/products")
  ).data;
};

const App: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      //Is the item already in the cart ?
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      //First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <DarkModeStyledButton>
        <ToggleBtn theme={theme} toggleTheme={toggleTheme} />
      </DarkModeStyledButton>

      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <StyledAddShoppingCartIcon
            isDarkMode={theme === "light" ? false : true}
          />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
