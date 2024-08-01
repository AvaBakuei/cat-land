export const simulateLoading = (
  setLoading: (value: boolean) => void,
  delay = 500
) => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, delay);
};
