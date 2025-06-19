import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { Pressable, Text, View } from "react-native";

var date = new Date().getDate();

export default function CalendarDay({
  className,
  verticalGap,
  horizontalGap,
  day,
  //   ...props
}: {
  className?: string;
  verticalGap?: number;
  horizontalGap?: number;
  day?: number;
}) {
  return (
    <Pressable
      // className="select-none focus:border-purple-600 hover:border-red-600 border-green-600 border-2 active:border-orange-600"
      className="select-none pt-2" //pr-1 to have space to right side and cool /// effect if only space is needed do pr-1 in calendar.tsx main view 
      onPress={() => console.log("Day pressed")}
      style={{
        height: verticalGap,
        width: horizontalGap,
      }}
    >
      <Separator orientation="horizontal" className="absolute"/>
      <Text className={cn("text-foreground self-center", className)}>{day}</Text>
      {/* <Separator orientation="vertical" className="absolute"/> */}
    </Pressable>
  );
}
