import { useEffect, useState } from "react";

/**
 * This function is a wrapper around the javascript built in setInterval which automatically clears the interval
 * when the component that calls it is unmounted.
 *
 * @param cb A callback function to call after each interval.
 * @param delay Interval between function invocations.
 *
 * @return {number} A reference to the created interval, which can be passed to the javascript clearInterval.
 */

function useInterval(cb: () => any, delay: number): NodeJS.Timer {
  const [timer, setTimer] = useState<NodeJS.Timer | null>(null);

  useEffect(() => {
    const timeout = setInterval(cb, delay);
    setTimer(timeout);

    return () => clearInterval(timeout);
  }, [cb, delay]);

  return timer as NodeJS.Timer;
}

export default useInterval;
