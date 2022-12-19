export const HERO_IMAGES = [
  "bg-[url('assets/images/slide1.jpg')]",
  "bg-[url('assets/images/slide2.jpg')]",
];

export const FEATURED_PRODUCTS = [
  {
    id: '1',
    title: 'Plus Minus',
    description:
      'Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.',
    rating: 1,
    img: require('../../assets/images/img1.jpg'),
    excute: function (a, b) {
      // return a + b;
      let c = a + b;
      console.log(c);
    },
  },
  {
    id: '2',
    title: 'Mini-Max Sum',
    rating: 3,
    img: require('../../assets/images/img1.jpg'),
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
