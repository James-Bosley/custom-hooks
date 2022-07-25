import { useEffect, useState } from "react";

/**
 * This function is a wrapper around the javascript built in setInterval which automatically clears the interval
 * when the component that calls it is unmounted.
 *
 * @param {Function} cb A callback function to call after each interval.
 * @param {Number} delay Interval between function invocations.
 *
 * @return {Number} A reference to the created interval, which can be passed to the javascript clearInterval.
 */

function useInterval(cb: Function, delay: number): number {
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    const timeout = setInterval(cb, delay);
    setTimer(timeout);

    return () => clearInterval(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return timer;
}

export default useInterval;
