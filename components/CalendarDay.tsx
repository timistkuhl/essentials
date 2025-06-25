import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { Pressable, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";

var date = new Date().getDate();

export default function CalendarDay({
  className,
  day,
  //   ...props
}: {
  className?: string;
  verticalGap?: number;
  horizontalGap?: number;
  day?: number;
}) {
  return (
    <View>
      <Separator orientation="horizontal" className="absolute" />
      <Text
        className={cn(
          "select-none text-foreground self-center pt-2",
          className
        )}
      >
        {day}
      </Text>
    </View>
  );
}
