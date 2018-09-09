import perlin from "perlin-noise";
import { ReactInstance } from "react";

export const getNoise = (width: number, height: number) => {
  return perlin.generatePerlinNoise(width, height);
};

export const getContext = (id: string): CanvasRenderingContext2D => {
  const el: HTMLCanvasElement = document.getElementById(
    id
  ) as HTMLCanvasElement;

  return el && el.getContext ? el.getContext("2d") : null;
};

export const getImageData = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number
) => {
  return context.createImageData(width, height);
};

export const renderNoise = (
  canvas: HTMLCanvasElement,
  width: number,
  height: number
) => {
  const context = canvas.getContext("2d");

  if (context) {
    const imageData = getImageData(context, width, height);
    const dat = imageData.data;
    const noiseData = getNoise(width, height);

    for (let i = 0, j = 0; i < noiseData.length; i++, j += 4) {
      dat[j + 0] = noiseData[i] * 255;
      dat[j + 1] = noiseData[i] * 255;
      dat[j + 2] = noiseData[i] * 255;
      dat[j + 3] = 255;
    }
    context.putImageData(imageData, 0, 0);
    console.log(dat);
  }
};
