import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export function useSwipe(
  onSwipeLeft?: any,
  onSwipeRight?: any,
  onSwipeUp?: any,
  onSwipeDown?: any,
  rangeOffset = 4
) {
  let firstTouchX = 0;
  let firstTouchY = 0;

  // set user touch start position
  function onTouchStart(e: any) {
    firstTouchX = e.nativeEvent.pageX;
    firstTouchY = e.nativeEvent.pageY;
  }

  // when touch ends check for swipe directions
  function onTouchEnd(e: any) {
    // get touch position and screen size
    const positionX = e.nativeEvent.pageX;
    const positionY = e.nativeEvent.pageY;

    const rangeX = windowWidth / rangeOffset;
    const rangeY = windowHeight / rangeOffset;

    // check if position is growing positively and has reached specified rangeX
    if (positionX - firstTouchX > rangeX) {
      onSwipeRight && onSwipeRight();
    }
    // check if position is growing negatively and has reached specified rangeX
    else if (firstTouchX - positionX > rangeX) {
      onSwipeLeft && onSwipeLeft();
    }
    // check if position is growing positively and has reached specified rangeY
    else if (positionY - firstTouchY > rangeY) {
      onSwipeDown && onSwipeDown();
    }
    // check if position is growing negatively and has reached specified rangeY
    else if (firstTouchY - positionY > rangeY) {
      onSwipeUp && onSwipeUp();
    }
  }

  return { onTouchStart, onTouchEnd };
}
