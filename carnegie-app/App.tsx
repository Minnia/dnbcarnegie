import "react-native-gesture-handler";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./src/integrations";
import { MainStack } from "./src/navigation/stacks/MainStack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const dimensions = Dimensions.get("screen");
  return (
    <>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <SafeAreaView
            style={{
              flex: 1,
              width: dimensions.width,
            }}
          >
            <MainStack />
          </SafeAreaView>
        </QueryClientProvider>
      </NavigationContainer>
    </>
  );
}
