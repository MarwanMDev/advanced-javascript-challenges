const ANIMATIONS = {
  underLine: {
    initial: {
      width: 0,
    },
    animate: {
      width: '100%',
    },
    exit: {
      width: 0,
    },
    transition: {
      duration: 0.5,
    },
  },
  openContent: {
    initial: {
      height: 0,
    },
    animate: {
      height: 'auto',
      transition: {
        height: {
          duration: 0.4,
        },
      },
    },
    exit: {
      height: 0,
      transition: {
        height: 0,
        transition: {
          height: {
            duration: 0.4,
          },
        },
      },
    },
  },
};

export default ANIMATIONS;
