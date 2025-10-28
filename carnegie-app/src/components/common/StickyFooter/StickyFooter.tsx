import { View, ViewStyle } from "react-native";
import { ReactNode } from "react";
import { Container } from "../styled";
import { themes } from "../../../constants/themes";

interface StickyFooterProps {
  children: ReactNode;
  style?: ViewStyle;
}

const StickyFooter = ({ children, style }: StickyFooterProps) => {
  return (
    <Container
      backgroundColor='transparent'
      justifyContent='center'
      alignItems='flex-end'
      flexDirection='row'
      style={{
        ...style,
      }}
    >
      {children}
    </Container>
  );
};

export default StickyFooter;
