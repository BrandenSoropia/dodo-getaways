import styled from "styled-components";
import {
  space,
  color,
  layout,
  background,
  border,
  position,
  shadow,
  typography,
  flex,
} from "styled-system";

const Button = styled.button.attrs({
  fontSize: { _: "buttonMobile", phone: "button" },
  paddingX: "two",
  paddingY: "one",
})`
  cursor: pointer;
  
  ${space}
  ${color}
  ${layout}
  ${background}
  ${border}
  ${position}
  ${shadow}
  ${typography}
  ${flex}
`;

export default Button;
