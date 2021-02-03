export const fakeDelay = (maxDelay = 3000): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, Math.random() * maxDelay));
};
