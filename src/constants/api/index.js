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
    excute: function (array) {
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
    rating: 2,
    img: require('../../assets/images/hackerrank-mini-max-sum-solution.png'),
    sum: function (a, b) {
      return a + b;
    },
  },
  {
    id: '3',
    title: 'Time Conversion',
    rating: 1,
    img: require('../../assets/images/img1.jpg'),
    sum: function (a, b) {
      return a + b;
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
