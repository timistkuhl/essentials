import CalendarDay from "@/components/CalendarDay";
import { useSwipe } from "@/components/hooks/useSwipe";
import Weekdays from "@/components/Weekdays";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { logger } from "react-native-reanimated/lib/typescript/logger";

// const [currentDate, setCurrentDate] = useState(new Date());
//   console.log("Current Date:", currentDate);
//   const offset = currentDate.getTimezoneOffset();
//   const localDate = new Date(currentDate.getTime() - offset * 60 * 1000);
//   console.log("Local Date:", localDate);

// const test1 = new Date(2025, 5, 19, 15, 41, 0);
//   console.log(test1) //UTC
//   console.log(test1.toString()); //Local
//   console.log(test1.getHours()); //Local

const { width, height } = Dimensions.get("screen");

const verticalGap = (height * (1 - 1 / 3)) / 6; //h * %cut / collumns
const horizontalGap = (width - 20) / 7;

export default function Calendar() {
  /////// Calendar Data ///////
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarData, setCalendarData] = useState<
    {
      Number: number;
      Color: string;
    }[]
  >([]);

  function updateCalendar() {
    let days = [];
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const startOfMonth =
      new Date(year, month, 1).getDay() === 0
        ? 7
        : new Date(year, month, 1).getDay();
    const startDateOfMonth = new Date(year, month, 1).getDate();
    const endDateOfMonth = new Date(year, month + 1, 0).getDate();
    const lengthOfMonth = endDateOfMonth - startDateOfMonth + 1;
    const endDateOfPrevMonth = new Date(year, month, 0).getDate();

    for (let i = startOfMonth - 1; i > 0; i--) {
      days.push({
        Number: endDateOfPrevMonth - i,
        Color: "text-muted-foreground",
      });
    }

    for (let i = 1; i < lengthOfMonth + 1; i++) {
      days.push({ Number: i, Color: "" });
    }

    const maxForCurrentDays = 7 + 1 - (days.length % 7);
    for (let i = 1; i < maxForCurrentDays; i++) {
      days.push({ Number: i, Color: "text-muted-foreground" });
    }

    setCalendarData(days);
  }

  useEffect(() => {
    updateCalendar();
  }, [currentDate]);

  /////// Change Monnth on Swipe ///////
  const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6);

  function onSwipeLeft() {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  }

  function onSwipeRight() {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  }

  /////// Day Menu ///////
  const [open, setOpen] = useState(false);
  const [dayContent, setDayContent] = useState<number>();

  function handleDayPress(index: number) {
    setOpen(!open);
    setDayContent(calendarData[index].Number);
  }

  return (
    <View className="flex-1 pl-5 pt-8 bg-background">
      <ScrollView onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <Pressable onPress={() => setCurrentDate(new Date())}>
          {/* Temporary */}
          <Text className="text-foreground self-center my-5 bold text-3xl">
            {currentDate.toLocaleDateString("de-DE", {
              month: "long",
              year: "numeric",
            })}
          </Text>
        </Pressable>
        <Weekdays horizontalGap={horizontalGap} />

        <View className="flex-row flex-wrap">
          {calendarData.map(({ Number, Color }, index) => (
            <Pressable
              key={"day" + index}
              className="active:opacity-50 active:border-2 active:border-secondary rounded-lg"
              style={{
                height: verticalGap,
                width: horizontalGap,
              }}
              onPress={() => handleDayPress(index)}
            >
              <CalendarDay day={Number} className={Color} />
            </Pressable>
          ))}
        </View>
      </ScrollView>
      {open && (
        <TouchableWithoutFeedback onPress={() => setOpen(false)}>
          <View className="flex-1 items-center justify-center bottom-0 left-0 w-screen h-4/5 absolute bg-[#CFF0CC] z-10 rounded-t-3xl">
            <Text className="text-red-600">{dayContent} "Hallo"</Text>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}
