import * as React from "react";

export default function useCounter(initialValue) {
  const [count, setCountState] = React.useState(initialValue || 0);

  const increment = React.useCallback(() => {
    setCountState((prev) => prev + 1);
  }, []);

  const decrement = React.useCallback(() => {
    setCountState((prev) => prev - 1);
  }, []);

  const reset = React.useCallback(() => {
    setCountState(initialValue || 0);
  }, [initialValue]);

  const setCount = React.useCallback((value) => {
    setCountState(value);
  }, []);

  return { count, increment, decrement, reset, setCount };
}
