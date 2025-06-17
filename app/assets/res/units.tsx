import { Float } from "react-native/Libraries/Types/CodegenTypes";

const units = [
  {
    Major: "Length",
    Minor: [
      {
        Name: "Meter",
        toBase: (x: Float) => x * 1,
        toOther: (x: Float) => x / 1,
      },
      {
        Name: "Kilometer",
        toBase: (x: Float) => x / 1000,
        toOther: (x: Float) => x * 1000,
      },
      {
        Name: "Decimeter",
        toBase: (x: Float) => x * 10,
        toOther: (x: Float) => x / 10,
      },
      {
        Name: "Centimeter",
        toBase: (x: Float) => x * 100,
        toOther: (x: Float) => x / 100,
      },
      {
        Name: "Millimeter",
        toBase: (x: Float) => x * 1000,
        toOther: (x: Float) => x / 1000,
      },
      {
        Name: "Micrometer",
        toBase: (x: Float) => x * 1e6,
        toOther: (x: Float) => x / 1e6,
      },
      {
        Name: "Nanometer",
        toBase: (x: Float) => x * 1e9,
        toOther: (x: Float) => x / 1e9,
      },
      {
        Name: "Picometer",
        toBase: (x: Float) => x * 1e12,
        toOther: (x: Float) => x / 1e12,
      },
      {
        Name: "Astronomical Unit",
        toBase: (x: Float) => x / 149597870700,
        toOther: (x: Float) => x * 149597870700,
      },
      {
        Name: "Light Year",
        toBase: (x: Float) => x / 9460730472580800,
        toOther: (x: Float) => x * 9460730472580800,
      },
      {
        Name: "Parsec",
        toBase: (x: Float) => x / 30856775814913673,
        toOther: (x: Float) => x * 30856775814913673,
      },
      {
        Name: "Yard",
        toBase: (x: Float) => x / 1.09361,
        toOther: (x: Float) => x * 1.09361,
      },
      {
        Name: "Foot",
        toBase: (x: Float) => x / 3.28084,
        toOther: (x: Float) => x * 3.28084,
      },
      {
        Name: "Inch",
        toBase: (x: Float) => x / 39.3701,
        toOther: (x: Float) => x * 39.3701,
      },
      {
        Name: "Mile",
        toBase: (x: Float) => x / 1609.34,
        toOther: (x: Float) => x * 1609.34,
      },
      {
        Name: "Nautical Mile",
        toBase: (x: Float) => x / 1852,
        toOther: (x: Float) => x * 1852,
      },
    ],
  },
  {
    Major: "Time",
    Minor: [
      {
        Name: "Second",
        toBase: (x: Float) => x * 1,
        toOther: (x: Float) => x / 1,
      },
      {
        Name: "Millisecond",
        toBase: (x: Float) => x / 1000,
        toOther: (x: Float) => x * 1000,
      },
      {
        Name: "Microsecond",
        toBase: (x: Float) => x / 1e6,
        toOther: (x: Float) => x * 1e6,
      },
      {
        Name: "Nanosecond",
        toBase: (x: Float) => x / 1e9,
        toOther: (x: Float) => x * 1e9,
      },
      {
        Name: "Minute",
        toBase: (x: Float) => x / 60,
        toOther: (x: Float) => x * 60,
      },
      {
        Name: "Hour",
        toBase: (x: Float) => x / 3600,
        toOther: (x: Float) => x * 3600,
      },
      {
        Name: "Day",
        toBase: (x: Float) => x / 86400,
        toOther: (x: Float) => x * 86400,
      },
      {
        Name: "Week",
        toBase: (x: Float) => x / 604800,
        toOther: (x: Float) => x * 604800,
      },
      {
        Name: "Month",
        toBase: (x: Float) => x / 2592000,
        toOther: (x: Float) => x * 2592000,
      },
      {
        Name: "Year",
        toBase: (x: Float) => x / 31536000,
        toOther: (x: Float) => x * 31536000,
      },
    ],
  },
  {
    Major: "Speed",
    Minor: [
      {
        Name: "Meter/Second",
        toBase: (x: Float) => x * 1,
        toOther: (x: Float) => x / 1,
      },
      {
        Name: "Kilometer/Hour",
        toBase: (x: Float) => x / 3.6,
        toOther: (x: Float) => x * 3.6,
      },
      {
        Name: "Miles/Hour",
        toBase: (x: Float) => x / 2.23694,
        toOther: (x: Float) => x * 2.23694,
      },
      {
        Name: "Feet/Minute",
        toBase: (x: Float) => x / 196.8504,
        toOther: (x: Float) => x * 196.8504,
      },
      {
        Name: "Feet/Second",
        toBase: (x: Float) => x / 3.28084,
        toOther: (x: Float) => x * 3.28084,
      },
      {
        Name: "Knots",
        toBase: (x: Float) => x / 1.94384,
        toOther: (x: Float) => x * 1.94384,
      },
      {
        Name: "Mach",
        toBase: (x: Float) => x / 343.2,
        toOther: (x: Float) => x * 343.2,
      },
    ],
  },
  {
    Major: "Temperature",
    Minor: [
      {
        Name: "Kelvin",
        toBase: (x: Float) => x,
        toOther: (x: Float) => x,
      },
      {
        Name: "Celsius",
        toBase: (x: Float) => x + 273.15,
        toOther: (x: Float) => x - 273.15,
      },
      {
        Name: "Fahrenheit",
        toBase: (x: Float) => (x - 32) * (5 / 9) + 273.15,
        toOther: (x: Float) => (x - 273.15) * (9 / 5) + 32,
      },
      {
        Name: "Rankine",
        toBase: (x: Float) => x * (5 / 9),
        toOther: (x: Float) => x * (9 / 5),
      },
    ],
  },
  {
    Major: "Mass",
    Minor: [
      {
        Name: "Kilogram",
        toBase: (x: Float) => x * 1,
        toOther: (x: Float) => x / 1,
      },
      {
        Name: "Gram",
        toBase: (x: Float) => x / 1000,
        toOther: (x: Float) => x * 1000,
      },
      {
        Name: "Milligram",
        toBase: (x: Float) => x / 1e6,
        toOther: (x: Float) => x * 1e6,
      },
      {
        Name: "Microgram",
        toBase: (x: Float) => x / 1e9,
        toOther: (x: Float) => x * 1e9,
      },
      {
        Name: "Metric Ton",
        toBase: (x: Float) => x / 1000,
        toOther: (x: Float) => x * 1000,
      },
      {
        Name: "Astronomical Unit",
        toBase: (x: Float) => x / 1.989e30,
        toOther: (x: Float) => x * 1.989e30,
      },
      {
        Name: "Pound",
        toBase: (x: Float) => x / 2.20462,
        toOther: (x: Float) => x * 2.20462,
      },
      {
        Name: "Ounce",
        toBase: (x: Float) => x / 35.274,
        toOther: (x: Float) => x * 35.274,
      },
      {
        Name: "Slug",
        toBase: (x: Float) => x / 14.5939,
        toOther: (x: Float) => x * 14.5939,
      },
    ],
  },
  {
    Major: "Energy",
    Minor: [
      {
        Name: "Joule",
        toBase: (x: Float) => x * 1,
        toOther: (x: Float) => x / 1,
      },
      {
        Name: "Kilojoule",
        toBase: (x: Float) => x / 1000,
        toOther: (x: Float) => x * 1000,
      },
      {
        Name: "Calorie",
        toBase: (x: Float) => x / 4.184,
        toOther: (x: Float) => x * 4.184,
      },
      {
        Name: "Kilocalorie",
        toBase: (x: Float) => x / 4184,
        toOther: (x: Float) => x * 4184,
      },
      {
        Name: "Watt-Hour",
        toBase: (x: Float) => x / 3600,
        toOther: (x: Float) => x * 3600,
      },
      {
        Name: "Kilowatt-Hour",
        toBase: (x: Float) => x / 3.6e6,
        toOther: (x: Float) => x * 3.6e6,
      },
      {
        Name: "Electronvolt",
        toBase: (x: Float) => x / 1.60218e-19,
        toOther: (x: Float) => x * 1.60218e-19,
      },
    ],
  },
  {
    Major: "Power",
    Minor: [
      {
        Name: "Watt",
        toBase: (x: Float) => x * 1,
        toOther: (x: Float) => x / 1,
      },
      {
        Name: "Kilowatt",
        toBase: (x: Float) => x / 1000,
        toOther: (x: Float) => x * 1000,
      },
      {
        Name: "English Horsepower",
        toBase: (x: Float) => x / 745.7,
        toOther: (x: Float) => x * 745.7,
      },
      {
        Name: "Metric Horsepower",
        toBase: (x: Float) => x / 735.5,
        toOther: (x: Float) => x * 735.5,
      },
    ],
  },
  {
    Major: "Pressure",
    Minor: [
      {
        Name: "Pascal",
        toBase: (x: Float) => x * 1,
        toOther: (x: Float) => x / 1,
      },
      {
        Name: "Kilopascal",
        toBase: (x: Float) => x / 1000,
        toOther: (x: Float) => x * 1000,
      },
      {
        Name: "Bar",
        toBase: (x: Float) => x / 100000,
        toOther: (x: Float) => x * 100000,
      },
      {
        Name: "Atmosphere",
        toBase: (x: Float) => x / 101325,
        toOther: (x: Float) => x * 101325,
      },
      {
        Name: "Torr",
        toBase: (x: Float) => x / 760,
        toOther: (x: Float) => x * 760,
      },
      {
        Name: "Pound per Square Inch",
        toBase: (x: Float) => x / 6894.76,
        toOther: (x: Float) => x * 6894.76,
      },
      {
        Name: "Millimeter of Mercury",
        toBase: (x: Float) => x / 133.322,
        toOther: (x: Float) => x * 133.322,
      },
      {
        Name: "Millimeter of Water",
        toBase: (x: Float) => x / 9.80665,
        toOther: (x: Float) => x * 9.80665,
      },
    ],
  },
];

export default units;
