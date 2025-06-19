import { View, Text } from "react-native";
import { Separator } from "./ui/separator";
import React from "react";

export default function Weekdays({
  horizontalGap,
}: {
  horizontalGap?: number;
}) {
  return (
    <View
      className="flex-row justify-start"
      style={{ width: horizontalGap }}
    >
      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
        <React.Fragment key={day}>
          <Text key={day} className="text-foreground w-full ">{day}</Text>
          {index < 6 && <Separator orientation="vertical" />}
        </React.Fragment>
      ))}
    </View>
  );
}
