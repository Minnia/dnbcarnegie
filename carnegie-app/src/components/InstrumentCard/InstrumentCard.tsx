import { Dimensions, View } from "react-native";
import { themes } from "../../core/themes";
import tokens from "../../core/tokens";
import { Container, StyledText } from "../common/styled";
import { Instrument } from "../../api/types";

const InstrumentCard = ({ instrument }: { instrument: Instrument }) => {
  return (
    <Container
      height={Dimensions.get("window").height * 0.1}
      backgroundColor={themes.light.colors.buyGreen}
      paddingHorizontal={tokens.BASELINE * 2}
      paddingVertical={tokens.BASELINE * 2}
      justifyContent='center'
      alignItems='center'
      borderRadius={tokens.BASELINE}
      shadowColor={themes.light.colors.black}
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={0.25}
      shadowRadius={3.84}
      elevation={5}
    >
      <View>
        <StyledText fontWeight='bold' textAlign='center'>
          {instrument?.name}
        </StyledText>
        <StyledText textAlign='center'>{instrument?.ticker}</StyledText>
      </View>
    </Container>
  );
};

export default InstrumentCard;
