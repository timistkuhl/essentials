import { Dimensions, Pressable, StyleSheet } from "react-native";
import { View } from "./Themed";
import { useEffect, useState } from "react";
import { router } from "expo-router";

const { width, height } = Dimensions.get("screen");
const circleSize = Math.min(width, height) / 7.0;
const radius = Math.min(width, height) / 2.5;
const apps = [
  { color: "#DE3373", link: "/UnitConverter" },
  { color: "#FCCA28", link: "HyunJin" },
  { color: "#08A953", link: "/Calendar" },
  { color: "#F5712A", link: "YeoJin" },
  { color: "#F59EAF", link: "ViVi" },
  { color: "#EE1B3E", link: "Kim Lip" },
  { color: "#1E76B8", link: "JinSoul" },
  { color: "#7C2E87", link: "Choerry" },
  { color: "#7A0434", link: "Yves" },
  { color: "#F98F81", link: "Chuu" },
  { color: "#37BA9B", link: "GoWon" },
  { color: "#C0C2C2", link: "Hyeju" },
];

export default function AppDrawer() {
  const [phi, setPhi] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const updatePhi = () => {
      setPhi((prevPhi) => prevPhi + 0.005); // Adjust speed here
      animationFrameId = requestAnimationFrame(updatePhi);
    };

    animationFrameId = requestAnimationFrame(updatePhi);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <View style={styles.container}>
      {apps.map(({ color, link }, index) => (
        <Pressable
          key={color}
          style={[
            styles.circle,
            {
              backgroundColor: color,
              left:
                (width - circleSize) / 2 +
                radius * Math.cos((2 * Math.PI * (index + phi)) / apps.length),
              top:
                (height - circleSize) / 2 +
                radius * Math.sin((2 * Math.PI * (index + phi)) / apps.length),
            },
          ]}
          onPress={() => router.navigate(link)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  circle: {
    position: "absolute",
    borderRadius: circleSize / 2,
    width: circleSize,
    height: circleSize,
  },
});
