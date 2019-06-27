export const plusOrMinus = () => (Math.random() < 0.5 ? -1 : 1)
export const map = (value, start1, stop1, start2, stop2) =>
  start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1))

export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export const randomFloat = (min, max) => Math.random() * (max - min) + min

export const lerp = (a, b, n) => (1 - n) * a + n * b

//prettier-ignore
export const clamp = (value, min, max) => {
  return min < max
    ? (value < min ? min : value > max ? max : value)
    : (value < max ? max : value > min ? min : value);
}
