import { useEffect, useRef } from "react";
import { Animated, StyleSheet, View, Image } from "react-native";
import * as SplashScreen from "expo-splash-screen";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const AnimatedSplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const scaleAnim1 = useRef(new Animated.Value(1)).current;
  const scaleAnim2 = useRef(new Animated.Value(1)).current;
  const scaleAnim3 = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Hide the native splash screen
    SplashScreen.hideAsync();

    // Start animations
    const animateRectangles = Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(scaleAnim1, {
            toValue: 1.3,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim1, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.timing(scaleAnim2, {
            toValue: 0.7,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim2, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.timing(scaleAnim3, {
            toValue: 1.2,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim3, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),
        ]),
      ])
    );

    animateRectangles.start();

    // After 2 seconds, fade out and finish
    const timeout = setTimeout(() => {
      animateRectangles.stop();
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        onFinish();
      });
    }, 2000);

    return () => {
      clearTimeout(timeout);
      animateRectangles.stop();
    };
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      {/* Your splash screen background/logo */}
      <Image
        source={require("../../../assets/frame.png")}
        style={styles.splashImage}
        resizeMode='contain'
      />

      {/* Animated rectangles overlay */}
      <View style={styles.rectanglesContainer}>
        <Animated.View
          style={[styles.rectangle, { transform: [{ scaleY: scaleAnim1 }] }]}
        />
        <Animated.View
          style={[styles.rectangle, { transform: [{ scaleY: scaleAnim2 }] }]}
        />
        <Animated.View
          style={[styles.rectangle, { transform: [{ scaleY: scaleAnim3 }] }]}
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff", // Match your splash background
  },
  splashImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  rectanglesContainer: {
    flexDirection: "row",
    gap: 10,
  },
  rectangle: {
    width: 40,
    height: 80,
    backgroundColor: "#000", // Your rectangle color
    borderRadius: 4,
  },
});

export default AnimatedSplashScreen;
