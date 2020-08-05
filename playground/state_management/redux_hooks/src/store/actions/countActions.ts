export const useCountAction = () => {
  const increment = () => {
    return { type: "INCREMENT" };
  };
  const decrement = () => {
    return { type: "DECREMENT" };
  };
  return { increment, decrement };
};
