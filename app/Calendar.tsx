import CalendarDay from "@/components/CalendarDay";
import { useSwipe } from "@/components/hooks/useSwipe";
import Weekdays from "@/components/Weekdays";
import { Plus } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { Dimensions, Pressable, ScrollView, Text, View } from "react-native";

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

  // useEffect(() => {
  //   setCurrentDate(dayContent)
  // }, [dayContent]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  function updateCalendar() {
    let days = [];
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

  /////// Day Menu ///////
  const [open, setOpen] = useState(false);

  function handleDayPress(index: number) {
    setOpen(!open);
    setCurrentDate(new Date(year, month, calendarData[index].Number));
  }

  /////// Change on Swipe ///////
  const {
    onTouchStart: onTouchStartHorizontal,
    onTouchEnd: onTouchEndHorizontal,
  } = useSwipe(onSwipeLeft, onSwipeRight, 6);

  const { onTouchStart: onTouchStartVertical, onTouchEnd: onTouchEndVertical } =
    useSwipe(onSwipeUp, onSwipeDown, 6);

  function onSwipeLeft() {
    console.log("Swipe Left");

    if (open) {
      setCurrentDate(
        new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - 1,
          currentDate.getDate() + 1
        )
      );
    }

    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  }

  function onSwipeRight() {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  }

  function onSwipeUp() {
    setOpen(false);
  }

  function onSwipeDown() {
    setOpen(false);
  }

  return (
    <View className="flex-1 pl-5 pt-8 bg-background">
      <ScrollView
        onTouchStart={onTouchStartHorizontal}
        onTouchEnd={onTouchEndHorizontal}
      >
        <Pressable onPress={() => setCurrentDate(new Date())}>
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
        <ScrollView
          onTouchStart={onTouchStartVertical}
          onTouchEnd={onTouchEndVertical}
          className="w-screen h-full absolute z-10 flex-row flex-wrap"
        >
          <Pressable
            className="border-red-600 border-2 w-screen h-1/5"
            onPress={() => setOpen(false)}
          />
          <View className="flex w-fit h-4/5 bg-background rounded-t-3xl border-2 flex-shrink mx-2 px-4 pt-4 items-center border-b-0 border-secondary">
            <View className="flex flex-row items-center justify-center w-full relative">
              <Text className="text-foreground text-2xl">
                {currentDate.toLocaleDateString("de-DE", {
                  month: "long",
                  day: "numeric",
                  weekday: "long",
                })}
              </Text>
              <Pressable
                className="absolute right-0 flex items-center justify-center p-2"
                onPress={() => null}
              >
                <Plus color={"#FF0000"} strokeWidth={3} size={32} />
              </Pressable>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
}
