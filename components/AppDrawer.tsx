import { Dimensions, Pressable, StyleSheet, Text } from "react-native";
import { View } from "./Themed";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { ArrowRightLeft, Calculator, CalendarDays, CircleGauge, CloudSunRain, FileCode, Pencil, UserRoundSearch } from "lucide-react-native";

const { width, height } = Dimensions.get("screen");
const circleSize = Math.min(width, height) / 7.0;
const radius = Math.min(width, height) / 2.5;
const apps = [
  { color: "#DE3373", icon: <ArrowRightLeft />, link: "/UnitConverter" },
  { color: "#FCCA28", icon: <Pencil />, link: "/NotesOverview" },
  { color: "#08A953", icon: <CalendarDays />, link: "/Calendar" },
  { color: "#F5712A", icon: <Calculator />, link: "/Calculator" },
  { color: "#F59EAF", icon: "", link: "ViVi" },
  { color: "#EE1B3E", icon: "", link: "Kim Lip" },
  { color: "#1E76B8", icon: <CloudSunRain />, link: "/Weather" },
  { color: "#7C2E87", icon: <UserRoundSearch />, link: "/Ai" },
  { color: "#7A0434", icon: <CircleGauge/>, link: "/PhoneSensors" },
  { color: "#F98F81", icon: "", link: "Chuu" },
  { color: "#37BA9B", icon: "", link: "GoWon" },
  { color: "#C0C2C2", icon: <FileCode />, link: "/test" },
];

export default function AppDrawer() {
  const [phi, setPhi] = useState(225); //maybe recorrect to 0

  // useEffect(() => {
  //   let animationFrameId: number;

  //   const updatePhi = () => {
  //     setPhi((prevPhi) => prevPhi + 0.005); // Adjust speed here
  //     animationFrameId = requestAnimationFrame(updatePhi);
  //   };

  //   animationFrameId = requestAnimationFrame(updatePhi);
  //   return () => cancelAnimationFrame(animationFrameId);
  // }, []);

  return (
    <View style={styles.container}>
      {apps.map(({ color, icon, link }, index) => (
        <Pressable
          key={color}
          className="justify-center items-center"
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
        >
          {icon}
        </Pressable>
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
