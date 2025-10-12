import { Text } from "react-native";

const Title = ({ title }: { title: string | string[] }) => {
  return (
    <Text style={{ textAlign: "center" }}>
      {Array.isArray(title) ? title.join("  ") : title}
    </Text>
  );
};

export default Title;
