export const fakeApi = (delay: number, fn?: () => void) => {
  return new Promise((res) => setTimeout(() => res(fn && fn()), delay));
};
