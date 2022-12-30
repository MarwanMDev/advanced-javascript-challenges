export const HERO_IMAGES = [
  "bg-[url('assets/images/slide1.jpg')]",
  "bg-[url('assets/images/slide2.jpg')]",
];

export const FEATURED_PRODUCTS = [
  {
    id: '1',
    title: 'Plus Minus',
    description:
      'Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.',
    note: 'This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10 are acceptable.',
    rating: 1,
    img: require('../../assets/images/positiveNegative.jpeg'),
    execute: function (array) {
      let positveCount = 0,
        negativeCount = 0,
        zeroCount = 0;
      const length = array.numbers.length;
      for (let i = 0; i < length; i++) {
        if (array.numbers[i] > 0) positveCount++;
        else if (array.numbers[i] < 0) negativeCount++;
        else zeroCount++;
      }
      return {
        positveCount: (positveCount / length).toFixed(4),
        negativeCount: (negativeCount / length).toFixed(4),
        zeroCount: (zeroCount / length).toFixed(4),
      };
    },
  },
  {
    id: '2',
    title: 'Mini-Max Sum',
    description:
      'Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.',
    rating: 2,
    img: require('../../assets/images/hackerrank-mini-max-sum-solution.png'),
    execute: function (array) {
      let minValue = 0,
        maxValue = 0;
      const { numbers } = array;
      const length = array.numbers.length;
      numbers.sort(function (a, b) {
        return a - b;
      });

      for (let i = 0, j = length - 1; i < length - 1; i++, j--) {
        minValue += Number(numbers[i]);
        maxValue += Number(numbers[j]);
      }

      return {
        minValue: minValue,
        maxValue: maxValue,
      };
    },
  },
  {
    id: '3',
    title: 'Time Conversion',
    description:
      'Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.',
    rating: 1,
    img: require('../../assets/images/hackerrank-time-conversion-solution.png'),
    execute: function (str) {
      let { date } = str;
      let ampm = date.slice(-2);
      let hours = Number(date.slice(0, 2));
      let time = date.slice(0, -2);

      if (ampm === 'AM') {
        if (hours === 12) {
          return time.replace(date.slice(0, 2), '00');
        }
        return time;
      } else if (ampm === 'PM') {
        if (hours !== 12) {
          return time.replace(date.slice(0, 2), String(hours + 12));
        }
        return time;
      }
    },
  },
  {
    id: '4',
    title: 'Sparse Arrays',
    rating: 3,
    img: require('../../assets/images/img1.jpg'),
    sum: function (a, b) {
      return a + b;
    },
  },
  {
    id: '5',
    title: 'Lonely Integer',
    rating: 4,
    img: require('../../assets/images/img1.jpg'),
    sum: function (a, b) {
      return a + b;
    },
  },
  {
    id: '6',
    title: 'Flipping bits',
    rating: 2,
    img: require('../../assets/images/img1.jpg'),
    sum: function (a, b) {
      return a + b;
    },
  },
];
