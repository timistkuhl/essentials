import { Separator } from "@/components/ui/separator";
import React from "react";
import {
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
  View,
} from "react-native";

export default function NotesOverview() {
  return (
    <View className="flex-1 bg-background w-full h-full items-center">
      <Text className="relative text-foreground mt-14 mb-2 text-5xl font-bold">
        Notes
      </Text>
      <View className="mx-10 w-full h-2">
        <Separator />
      </View>
      <ScrollView className="flex-1 p-4 mt-8 bg-background w-full"></ScrollView>
    </View>
  );
}
