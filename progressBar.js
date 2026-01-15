// https://www.greatfrontend.com/questions/user-interface/progress-bars?practice=practice&tab=coding

import { useState, useEffect } from "react";

export default function App() {
  const [showProgress, setShowProgress] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!showProgress) return;
    const step = 1;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + step;
      });
    }, 20);
    return () => clearInterval(timer);
  }, [showProgress]);

  const handleAddButtonClick = () => {
    console.log("add btn click");
    setShowProgress(!showProgress);
  };

  console.log(showProgress, "pro");

  return (
    <div>
      <button onClick={handleAddButtonClick}>Add</button>
      {showProgress && (
        <div class="progressbars">
          <progress id="test1" value={progress} max="100">
            40
          </progress>
          <progress id="test2" value={progress} max="100">
            40
          </progress>
        </div>
      )}
    </div>
  );
}
