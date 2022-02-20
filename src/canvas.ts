export const canvas = <HTMLCanvasElement>document.getElementById('canvas');

export const ctx = <CanvasRenderingContext2D>canvas.getContext('2d', {
  alpha: false,
});
