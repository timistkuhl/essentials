// app/_layout.tsx
import React, { useEffect } from "react";
import {
  Dimensions,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
import { View } from "@/components/Themed";
import { setBackgroundColorAsync } from "expo-system-ui";
import * as NavigationBar from "expo-navigation-bar";
import { Stack } from "expo-router/stack";
import "../global.css"

const { width, height } = Dimensions.get("window");

export default function RootLayout() {
  useEffect(() => {
    if (Platform.OS === "android") {
      NavigationBar.setVisibilityAsync("hidden").catch(console.error);
      NavigationBar.setBehaviorAsync("overlay-swipe").catch(console.error);
      setBackgroundColorAsync("black");
    }
  }, []);

  return (
    <View style={styles.screen}>
      <StatusBar
        hidden
        barStyle={"dark-content"}
      />
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: "black",
  },
});