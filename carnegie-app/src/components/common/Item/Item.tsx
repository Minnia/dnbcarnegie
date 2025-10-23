import { Container, StyledText } from "../styled";

const Item = ({ item }: { item: any }) => {
  return (
    <Container>
      <StyledText>{item}</StyledText>
    </Container>
  );
};

export default Item;
