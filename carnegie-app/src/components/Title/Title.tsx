import { Text } from "react-native";

const Title = ({ title }: { title: string | string[] }) => {
  return (
    <Text style={{ textAlign: "left", margin: 8 }}>
      {Array.isArray(title) ? title.join("  ") : title}
    </Text>
  );
};

export default Title;
