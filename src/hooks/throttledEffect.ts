let timer: NodeJS.Timeout | null;

const throttledEffect = (fn: Function, wait: number) => {
  if (!timer) {
    timer = setTimeout(() => {
      fn();
      timer = null;
    }, wait);
  }
};

export default throttledEffect;
