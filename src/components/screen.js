"use client";
import React, { useState, useEffect } from "react";
import DigitalClock from "../services/clock-service-provider";
import WeatherService from "../services/weather-service-provider";
import Welcome from "../services/welcome-service-provider";

const Screen = () => {
  const tileWidthInPixels = 160; // Width of each tile in pixels
  const gapInPixels = 16; // Gap between tiles in pixels
  const paddingInPixels = 16; // Padding for the screen in pixels

  // State to store the number of rows and columns based on screen size
  let leftPaddingInPixels = paddingInPixels;
  let topPaddingInPixels = paddingInPixels;
  const [widgets, setWidgets] = useState([
    {
      key: "clock",
      width: 1,
      height: 1,
      targetX: 1,
      targetY: 1,
      type: DigitalClock,
    },
    {
      key: "welcome",
      width: 2,
      height: 1,
      targetX: 0,
      targetY: 0,
      type: Welcome,
    },
    {
      key: "weather",
      width: 1,
      height: 1,
      targetX: -1,
      targetY: -1,
      type: WeatherService,
    },
  ]);

  function distributeWidgets(gridWidth, gridHeight, widgetList) {
    let isChanged = false;

    // Initialize the grid with empty cells
    const grid = Array.from({ length: gridHeight }, () =>
      Array(gridWidth).fill(null)
    );

    // Sort the widget list by priority (higher priority first)
    widgetList.sort((a, b) => b.priority - a.priority);
    const newWidgets = [...widgetList];

    // Function to check if a given location is available for a widget
    function isLocationAvailable(x, y, width, height) {
      for (let i = y; i < y + height; i++) {
        for (let j = x; j < x + width; j++) {
          if (
            i < 0 ||
            i >= gridHeight ||
            j < 0 ||
            j >= gridWidth ||
            grid[i][j]
          ) {
            return false;
          }
        }
      }
      return true;
    }

    function spiralLoopTillYouFindASpot(
      startX,
      startY,
      width,
      height,
      widget,
      index
    ) {
      let left = startX;
      let right = startX;
      let top = startY;
      let bottom = startY;
      let direction = "right";
      let trial = 1;

      while (left <= right && top <= bottom && trial < 50) {
        trial++;
        if (direction === "right") {
          for (let i = left; i <= right; i++) {
            if (isFound(i, top, width, height, widget, index)) return true;
          }
          top--;
          direction = "down";
        } else if (direction === "down") {
          for (let i = top; i <= bottom; i++) {
            if (isFound(right, i, width, height, widget, index)) return true;
          }
          right++;
          direction = "left";
        } else if (direction === "left") {
          for (let i = right; i >= left; i--) {
            if (isFound(i, bottom, width, height, widget, index)) return true;
          }
          bottom++;
          direction = "up";
        } else if (direction === "up") {
          for (let i = bottom; i >= top; i--) {
            if (isFound(left, i, width, height, widget, index)) return true;
          }
          left--;
          direction = "right";
        }
      }

      return false;
    }

    function isFound(x, y, width, height, widget, index) {
      if (isLocationAvailable(x, y, width, height)) {
        // Place the widget on the grid
        for (let i = y; i < y + height; i++) {
          for (let j = x; j < x + width; j++) {
            grid[i][j] = widget;
          }
        }

        if (widget.x != x || widget.y != y) {
          isChanged = true;
          let newWidget = { ...widget };
          newWidget.x = x;
          newWidget.y = y;
          newWidget.style = {
            transform: `translate(${
              leftPaddingInPixels + x * tileWidthInPixels + x * gapInPixels
            }px,${
              topPaddingInPixels + y * tileWidthInPixels + y * gapInPixels
            }px)`,
            width:
              tileWidthInPixels * widget.width +
              (widget.width - 1) * gapInPixels,
            height:
              tileWidthInPixels * widget.height +
              (widget.height - 1) * gapInPixels,
          };

          newWidgets[index] = newWidget;
        }

        return true;
      } else {
        return false;
      }
    }

    // Place widgets on the grid
    for (let i = 0; i < widgetList.length; i++) {
      const widget = widgetList[i];
      const { width, height, targetX, targetY } = widget;

      // Try to find a suitable location around the target
      const startX = Math.round(
        (targetX * gridWidth) / 2 + gridWidth / 2 - width / 2
      );
      const startY = Math.round(
        (targetY * gridHeight) / 2 + gridHeight / 2 - height / 2
      );
      spiralLoopTillYouFindASpot(startX, startY, width, height, widget, i);
    }
    if (isChanged) {
      setWidgets(newWidgets);
    }
  }

  useEffect(() => {
    // Function to recalculate grid layout based on screen size
    const recalculateGrid = () => {
      const screenWidth = Math.floor(window.innerWidth - paddingInPixels); // Adjust for padding
      const screenHeight = Math.floor(window.innerHeight - paddingInPixels); // Adjust for padding

      const calculatedColumns = Math.floor(
        screenWidth / (tileWidthInPixels + gapInPixels)
      );
      const calculatedRows = Math.floor(
        screenHeight / (tileWidthInPixels + gapInPixels)
      );

      leftPaddingInPixels = Math.floor(
        (screenWidth -
          (calculatedColumns * tileWidthInPixels +
            (calculatedColumns - 1) * gapInPixels)) /
          2
      );
      topPaddingInPixels = Math.floor(
        (screenHeight -
          (calculatedRows * tileWidthInPixels +
            (calculatedRows - 1) * gapInPixels)) /
          2
      );
      distributeWidgets(calculatedColumns, calculatedRows, widgets);
    };

    // Initial calculation on component mount
    recalculateGrid();

    // Attach event listener to recalculate on screen size changes
    window.addEventListener("resize", recalculateGrid);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", recalculateGrid);
    };
  }, []);

  return (
    <div className="bg-gray-100">
      <div>
        {widgets.map((widget) => React.createElement(widget.type, widget))}
      </div>
    </div>
  );
};

export default Screen;
