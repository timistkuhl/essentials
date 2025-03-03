import React, { useEffect } from "react";
import StartScreen from "./screens/StartScreen";
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import { View } from "@/components/Themed";
import { setBackgroundColorAsync } from "expo-system-ui";
import * as NavigationBar from "expo-navigation-bar";

const { width, height } = Dimensions.get("window");

export default function App() {
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
      <StartScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: width,
    height: height,
  },
});
