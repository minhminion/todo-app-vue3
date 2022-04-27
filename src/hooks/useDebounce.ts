export const useDebounce = () => {
  let timer: number | null | undefined = null;

  function debounce(fn: () => void | unknown, delay: number) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(fn, delay);
  }

  return { debounce };
};
