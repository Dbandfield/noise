declare module "perlin-noise" {
  export interface IGeneratePerlinNoiseOptions {
    octaveCount?: number;
    amplitude?: number;
    persistence?: number;
  }

  export function generatePerlinNoise(
    width: number,
    height: number,
    options?: IGeneratePerlinNoiseOptions
  ): number[];
}
