import * as React from "react";

export default function useCycle(...args) {
  const cycleData = [...args];

  const [valueIndex, setValueIndex] = React.useState(0);

  const cycle = React.useCallback(() => {
    setValueIndex((prevIndex) => (prevIndex + 1) % cycleData.length);
  }, [cycleData]);

  return [cycleData[valueIndex], cycle];
}
