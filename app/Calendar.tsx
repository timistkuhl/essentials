import CalendarDay from "@/components/CalendarDay";
import { useSwipe } from "@/components/hooks/useSwipe";
import { Separator } from "@/components/ui/separator";
import Weekdays from "@/components/Weekdays";
import React, { useEffect, useState } from "react";
import { Dimensions, View, Text, ScrollView } from "react-native";

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
  const [calendarData, setCalendarData] = useState({
    prevDays: [] as number[],
    days: [] as number[],
    nextDays: [] as number[],
  });

  function updateCalendar() {
    const prevDays = [];
    const days = [];
    const nextDays = [];

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
      prevDays.push(endDateOfPrevMonth - i);
    }

    for (let i = 1; i < lengthOfMonth + 1; i++) {
      days.push(i);
    }

    for (let i = 1; i < 7 + 1 - ((prevDays.length + days.length) % 7); i++) {
      nextDays.push(i);
    }

    setCalendarData({ prevDays, days, nextDays });
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

  return (
    <ScrollView
      className="flex-1 pl-5 pt-8 bg-background"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <Text className="text-foreground self-center my-5 bold text-3xl">
        {currentDate.toLocaleDateString("de-DE", {
          month: "long",
          year: "numeric",
        })}
      </Text>
      <Weekdays horizontalGap={horizontalGap} />
      <View className="flex-row flex-wrap">
        {calendarData.prevDays.map((day, index) => (
          <CalendarDay
            key={"prevdays" + index}
            day={day}
            verticalGap={verticalGap}
            horizontalGap={horizontalGap}
            className="text-muted-foreground"
          />
        ))}
        {calendarData.days.map((day, index) => (
          <CalendarDay
            key={"days" + index}
            day={day}
            verticalGap={verticalGap}
            horizontalGap={horizontalGap}
          />
        ))}
        {calendarData.nextDays.map((day, index) => (
          <CalendarDay
            key={"nextdays" + index}
            day={day}
            verticalGap={verticalGap}
            horizontalGap={horizontalGap}
            className="text-muted-foreground"
          />
        ))}
      </View>
    </ScrollView>
  );
}
