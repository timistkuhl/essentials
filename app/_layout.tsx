import { PortalHost } from "@rn-primitives/portal";
import * as NavigationBar from "expo-navigation-bar";
import { Stack } from "expo-router/stack";
import { setBackgroundColorAsync } from "expo-system-ui";
import { colorScheme } from "nativewind";
import React, { useEffect, useState } from "react";
import { Dimensions, Platform, Pressable, StatusBar, Text } from "react-native";
import "../global.css";
import { ArrowLeft } from "lucide-react-native";
import { router } from "expo-router";

export default function RootLayout() {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (Platform.OS === "android") {
      NavigationBar.setVisibilityAsync("hidden").catch(console.error);
      NavigationBar.setBehaviorAsync("overlay-swipe").catch(console.error);
      setBackgroundColorAsync("black");
    }
    setCurrentTheme("dark");
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
        className="absolute bottom-20 left-20 border-red-600 border-2 z-[2] p-0.5"
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
      <Pressable
        onPress={router.back}
        className="absolute bottom-16 left-6 z-[2] p-2"
      >
        <ArrowLeft color={"red"} size={40} strokeWidth={2.75}/>
      </Pressable>
      <Stack screenOptions={{ headerShown: false }} />
      <PortalHost />
    </>
  );
}
