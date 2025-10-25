import Ionicons from "@expo/vector-icons/Ionicons";
import { themes } from "../../../core/themes";
import tokens from "../../../core/tokens";
import { Container, StyledText } from "../styled";
import { TouchableOpacity } from "react-native";
import { Instrument } from "../../../api/types";
import { truncateText } from "../../../utils/helpers.utils";

const Item = ({
  item,
  rightIcon,
  leftIcon,
  onPress,
}: {
  item: Instrument;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container
        flexDirection='row'
        borderRadius={tokens.BASELINE}
        justifyContent='space-between'
        alignItems='center'
        width={"100%"}
        height={60}
        backgroundColor={themes.light.colors.white}
        paddingHorizontal={tokens.BASELINE * 2}
        paddingVertical={tokens.BASELINE * 1.5}
        shadowColor={themes.light.colors.black}
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={0.25}
        shadowRadius={3.84}
        elevation={5}
      >
        {leftIcon && (
          <Ionicons
            style={{
              textAlign: "center",
              borderWidth: 1,
              borderColor: themes.light.colors.white,
              borderRadius: tokens.BASELINE * 2,
              height: tokens.ICON.LARGE,
              width: tokens.ICON.LARGE,
              padding: tokens.BASELINE / 2,
              backgroundColor: themes.light.colors.buyGreen,
            }}
            name={leftIcon || "sad-outline"}
            size={tokens.ICON.SMALL}
            color={themes.light.colors.black}
          />
        )}
        <Container
          style={{ flex: 1 }}
          paddingHorizontal={tokens.BASELINE}
          alignItems='flex-start'
        >
          <StyledText>{truncateText(item.name)}</StyledText>
          <StyledText textAlign='center'>{item.ticker}</StyledText>
        </Container>
        {rightIcon && (
          <Ionicons
            style={{
              textAlign: "center",
            }}
            name={rightIcon || "sad-outline"}
            size={tokens.ICON.SMALL}
            color={themes.light.colors.black}
          />
        )}
      </Container>
    </TouchableOpacity>
  );
};

export default Item;
