import styled from "styled-components";
import { WbSunny, NightsStay } from "@material-ui/icons";

type CheckBoxBallProps = {
    isDarkMode: boolean
}

export const Wrapper = styled.div`
  margin-bottom: 15px;
`;


export const CheckboxBall = styled.div<CheckBoxBallProps>`
  cursor: pointer;
  width: 15px;
  height: 15px;
  background-color: white;
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
  transform: ${props => (props.isDarkMode ? 'translateX(0)' : `translateX(20px)`)};
`;
export const CheckboxLabel = styled.label`
  cursor: pointer;
  width: 30px;
  height: 10px;
  background-color: #111;
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  transform: scale(1.5);

`;
export const CheckboxInput = styled.input.attrs({type: 'checkbox'})`
  opacity: 0;
  position: absolute;

  &:checked + ${CheckboxLabel} {
    transform: translateX(24px);
  }

  &:checked + ${CheckboxBall} {
    transform: translateX(24px);
  }
`;


export const SunIcon = styled(WbSunny)`
  color: yellow;
  font-size: 10px;
`;
export const MoonIcon = styled(NightsStay)`
  color: pink;
  font-size: 10px;
`;
