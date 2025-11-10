import "react-native-gesture-handler";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./src/integrations";
import { MainStack } from "./src/navigation/stacks/MainStack";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { useState } from "react";
import AnimatedSplashScreen from "./src/navigation/screens/AnimatedSplashScreen";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <AnimatedSplashScreen onFinish={() => setShowSplash(false)} />;
  }
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
