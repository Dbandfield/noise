import React from "react";

export interface ISliderProps {
  onInput: (sliderValue: number) => void;
}

export const SliderElement = (props: ISliderProps) => {
  function parseScale(event: any) {
    props.onInput(parseInt(event.target.value, 10));
  }

  return (
    <input
      type="range"
      min="1"
      max="10"
      defaultValue="1"
      className="slider"
      onInput={parseScale}
    />
  );
};
