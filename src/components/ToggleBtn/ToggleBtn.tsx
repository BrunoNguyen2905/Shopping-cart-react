import { ToggleBtnProps } from "../../type";
import {
  CheckboxBall,
  CheckboxInput,
  CheckboxLabel,
  MoonIcon,
  SunIcon,
  Wrapper,
} from "./ToggleBtn.styles";

const ToggleBtn: React.FC<ToggleBtnProps> = ({ theme, toggleTheme }) => {
  return (
    <Wrapper>
      <CheckboxInput type="checkbox" />
      <CheckboxLabel onClick={toggleTheme}>
        <div>{theme === "dark" ? <MoonIcon /> : <></>}</div>
        <div> {theme === "light" ? <SunIcon /> : <></>}</div>
        <CheckboxBall
          isDarkMode={theme === "light" ? true : false}
        ></CheckboxBall>
      </CheckboxLabel>
    </Wrapper>
  );
};

export default ToggleBtn;
