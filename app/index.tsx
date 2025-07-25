import AppDrawer from "@/components/AppDrawer";
import Light from "@/components/Light";
import { colorScheme } from "nativewind";
import React from "react";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Dimensions,
  StatusBar,
  Pressable,
} from "react-native";

const { width, height } = Dimensions.get("window");

const LIGHT_SIZE = Math.min(width, height) * 2.5;

export default function StartScreen() {

  return (
    <SafeAreaView style={styles.safeArea}>
      <Light
        color={"rgb(255, 0, 0)"}
        size={LIGHT_SIZE}
        location={"top-right"}
      />
      <Light
        color={"rgb(0, 90, 255)"}
        size={LIGHT_SIZE}
        location={"bottom-left"}
      />

      <View style={styles.main}>
        <View style={styles.clock} />
        <AppDrawer />
      </View>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "black",
    flex: 1,
    width: "100%",
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    zIndex: 1,
  },
  clock: {
    width: width - 200,
    height: width - 200,
    borderRadius: 200,
    borderColor: "gray",
    borderWidth: 2,
  },
});
