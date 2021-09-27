import { useContext } from "react";
//Types
import { ItemProps } from "../../type";
import { ThemeContext } from "../ThemeProvider/ThemeProvider";
//styles
import { Wrapper, StyledBtn } from "./Item.style";

const Item: React.FC<ItemProps> = ({ item, handleAddToCart }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <StyledBtn
        onClick={() => handleAddToCart(item)}
        isDarkMode={theme === "light" ? false : true}
      >
        Add to cart
      </StyledBtn>
    </Wrapper>
  );
};
export default Item;
