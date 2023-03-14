const useDebounce = (cb, delay) => {

  let timer = null;

  const res = () => {
    clearTimeout(timer);
    timer = setTimeout(cb, delay);
  }

  return [res];
}
