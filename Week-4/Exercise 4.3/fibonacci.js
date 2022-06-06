const Fibb = (num) => ({
    [Symbol.iterator]: () => {
      let itr = 1;
      let one = 0;
      let two = 0;
      return {
        next: () => {
          if (itr++ <= num) {
            [one, two] = [two, one + two || 1];
            return { value: one, done: false };
          } else {
            return { done: true };
          }
        },
      };
    },
  });
  console.log(...Fibb(6));