import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";
import { Dimensions, StyleSheet } from "react-native";
import { useEffect } from "react";
import { useSharedValue, withTiming } from "react-native-reanimated";

const { width } = Dimensions.get("window");

export default function Light(props) {
  let position = {};

  switch (props.location) {
    case "top-right": {
      position = {
        top: -props.size / 2,
        right: -props.size / 2,
      };
      break;
    }
    case "top-left": {
      position = {
        top: -props.size / 2,
        left: -props.size / 2,
      };
      break;
    }
    case "bottom-right": {
      position = {
        right: -props.size / 2,
        bottom: -props.size / 2,
      };
      break;
    }
    case "bottom-left": {
      position = {
        bottom: -props.size / 2,
        left: -props.size / 2,
      };
      break;
    }
    case "center": {
      position = {
        top: width / 2 - props.size / 2,
        left: width / 2 - props.size / 2,
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
      width={props.size}
      height={props.size}
      style={[styles.light, position]}
    >
      <Defs>
        <RadialGradient id="grad" cx="50%" cy="50%" r="50%">
          <Stop offset="0%" stopColor={`${props.color}`} stopOpacity="0.5" />
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
