type RGB = [number, number, number];
type Color = { [key: string]: string | RGB };

// Z użyciem satisfies
const palette = {
  red: [255, 0, 0],
  green: '#00ff00',
  blue: [0, 0, 255],
} satisfies Color;

// TypeScript wie, że palette.red jest tablicą, a palette.green jest stringiem
const redComponent = palette.red[0]; // OK
const greenUppercase = palette.green.toUpperCase(); // OK

// Z użyciem as
const paletteAs = {
  red: [255, 0, 0],
  green: '#00ff00',
  blue: [0, 0, 255],
} as Color;

// TypeScript traktuje wszystkie wartości jako string | RGB
const redComponentAs = paletteAs.red[0]; // OK
const greenUppercaseAs = paletteAs.green.toUpperCase(); // Błąd
