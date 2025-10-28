import { themes } from "../../constants/themes";
import tokens from "../../constants/tokens";
import { Container, Spacer, StyledText } from "../common/styled";

const TotalOrderSumCard = ({ orderValue }: { orderValue: number }) => {
  return (
    <Container
      height={150}
      justifyContent='center'
      alignItems='center'
      backgroundColor={themes.light.colors.white}
      borderRadius={tokens.BASELINE}
      shadowColor={themes.light.colors.black}
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={0.25}
      shadowRadius={3.84}
      elevation={5}
    >
      <StyledText fontSize={tokens.FONT_SIZE.LARGE}>
        Total order value
      </StyledText>
      <Spacer size={tokens.BASELINE} />
      <StyledText
        color={themes.light.colors.carnegieGreen}
        fontSize={tokens.FONT_SIZE.XLARGE}
        fontWeight='bold'
      >
        {orderValue.toFixed(2)} kr
      </StyledText>
    </Container>
  );
};

export default TotalOrderSumCard;
