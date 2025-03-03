import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";
import { Dimensions, StyleSheet } from "react-native";
import { useEffect } from "react";
import { useSharedValue, withTiming } from "react-native-reanimated";

const { width } = Dimensions.get("window");

export default function Light({ location, size, color }) {
  let position = {};

  switch (location) {
    case "top-right": {
      position = {
        top: -size / 2,
        right: -size / 2,
      };
      break;
    }
    case "top-left": {
      position = {
        top: -size / 2,
        left: -size / 2,
      };
      break;
    }
    case "bottom-right": {
      position = {
        right: -size / 2,
        bottom: -size / 2,
      };
      break;
    }
    case "bottom-left": {
      position = {
        bottom: -size / 2,
        left: -size / 2,
      };
      break;
    }
    case "center": {
      position = {
        top: width / 2 - size / 2,
        left: width / 2 - size / 2,
      };
      break;
    }
  }

  // const opacity = useSharedValue(0);

  // useEffect(() => {
  //   opacity.value = withTiming(1, { duration: 1000 }); // 1-second fade-in
  // }, []);

  //, { opacity }

  return (
    <Svg
      width={size}
      height={size}
      style={[styles.light, position]}
    >
      <Defs>
        <RadialGradient id="grad" cx="50%" cy="50%" r="50%">
          <Stop offset="0%" stopColor={`${color}`} stopOpacity="0.5" />
          <Stop offset="100%" stopColor="rgba(255, 0, 0, 0)" stopOpacity="0" />
        </RadialGradient>
      </Defs>
      <Rect width="100%" height="100%" fill="url(#grad)" />
    </Svg>
  );
}

const styles = StyleSheet.create({
  light: {
    position: "absolute",
    zIndex: 0,
  },
});
