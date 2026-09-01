// https://www.greatfrontend.com/questions/javascript/use-query?practice=practice&tab=coding

import * as React from "react";

export default function useQuery(fn, deps = []) {
  const [status, setStatus] = React.useState("idle");
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    let cancelled = false;
    setStatus("loading");
    setData(null);
    setError(null);

    fn()
      .then((data) => {
        if (cancelled) return;
        setStatus("success");
        setData(data);
      })
      .catch((error) => {
        if (cancelled) return;
        setStatus("error");
        setError(error);
      });
    return () => {
      cancelled = true;
    };
  }, deps);

  return {
    status,
    ...(data !== null && { data }),
    ...(error !== null && { error }),
  };
}
