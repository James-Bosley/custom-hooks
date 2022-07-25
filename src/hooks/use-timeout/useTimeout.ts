import { useEffect, useState } from "react";

/**
 * This function is a wrapper around the javascript built in setTimeout which automatically clears the timeout
 * when the component that calls it is unmounted.
 *
 * @param {Function} cb A callback function to call after the specified delay.
 * @param {Number} delay Minimum duration of delay in ms before callback function is invoked.
 *
 * @return {Number} A reference to the created timeout, which can be passed to the javascript clearTimeout.
 */

function useTimeout(cb: Function, delay: number): number {
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    const timeout = setTimeout(cb, delay);
    setTimer(timeout);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return timer;
}

export default useTimeout;
