import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./src/integrations";

export default function App() {
  const dimensions = Dimensions.get("screen");
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SafeAreaView
          style={{
            flex: 1,
            width: dimensions.width,
          }}
        ></SafeAreaView>
      </QueryClientProvider>
    </>
  );
}
