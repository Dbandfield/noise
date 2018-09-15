import Simplex from "simplex-noise";

export const mapValue = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

export const getNoise = (
  generator: Simplex,
  width: number,
  height: number,
  time: number
) => {
  const noiseArr = new Array(width * height);
  for (let i = 0; i < noiseArr.length; i++) {
    const x = i % width;
    const y = Math.floor(i / width);
    noiseArr[i] = generator.noise3D(x / 100, y / 100, time);
  }

  const constrained = noiseArr.map((el: number) => mapValue(el, -1, 1, 0, 1));

  return constrained;
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
  height: number,
  time: number,
  generator: Simplex
) => {
  const context = canvas.getContext("2d");

  if (context) {
    const imageData = getImageData(context, width, height);
    const dat = imageData.data;
    const noiseData = getNoise(generator, width, height, time / 1000);

    for (let i = 0, j = 0; i < noiseData.length; i++, j += 4) {
      dat[j + 0] = noiseData[i] * 255;
      dat[j + 1] = noiseData[i] * 255;
      dat[j + 2] = noiseData[i] * 255;
      dat[j + 3] = 255;
    }
    context.putImageData(imageData, 0, 0);
  }
};
