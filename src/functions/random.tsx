export function random() {
  return {
    interval: (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    },
    elementFromArray: (array: any[]) => {
      return array[Math.floor(Math.random() * array.length)];
    },
  };
}
