const debouncedEffect = (fn: Function, wait: number) => {
  let timer: NodeJS.Timeout;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, wait);
  };
};

export default debouncedEffect;
