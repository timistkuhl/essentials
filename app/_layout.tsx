import { PortalHost } from "@rn-primitives/portal";
import * as NavigationBar from "expo-navigation-bar";
import { Stack } from "expo-router/stack";
import { setBackgroundColorAsync } from "expo-system-ui";
import { colorScheme } from "nativewind";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Platform,
  Pressable,
  StatusBar, Text
} from "react-native";
import "../global.css";

const { width, height } = Dimensions.get("window");

export default function RootLayout() {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (Platform.OS === "android") {
      NavigationBar.setVisibilityAsync("hidden").catch(console.error);
      NavigationBar.setBehaviorAsync("overlay-swipe").catch(console.error);
      setBackgroundColorAsync("black");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    colorScheme.set(newTheme);
  };

  return (
    <>
      <StatusBar hidden barStyle={"dark-content"} />
      <Pressable
        onPress={toggleTheme}
        className="absolute bottom-20 left-10 border-red-600 border-2 z-[2] p-0.5"
      >
        <Text
          className={
            currentTheme === "dark" ? "text-gray-100" : "text-gray-900"
          }
          style={{ fontSize: 16, fontWeight: "bold" }}
        >
          {currentTheme === "dark" ? "Dark" : "Light"}
        </Text>
      </Pressable>
      <Stack screenOptions={{ headerShown: false }} />
      <PortalHost />
    </>
  );
}
