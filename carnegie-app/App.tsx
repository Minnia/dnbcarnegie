import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const dimensions = Dimensions.get("screen");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: dimensions.width,
      }}
    ></SafeAreaView>
  );
}
