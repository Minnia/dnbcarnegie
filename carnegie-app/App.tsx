import "react-native-gesture-handler";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./src/integrations";
import { MainStack } from "./src/navigation/stacks/MainStack";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <MainStack />
        </QueryClientProvider>
      </NavigationContainer>
      <Toast />
    </>
  );
}
