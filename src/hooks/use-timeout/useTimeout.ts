import { useEffect, useState } from "react";

/**
 * This function is a wrapper around the javascript built in setTimeout which automatically clears the timeout
 * when the component that calls it is unmounted.
 *
 * @param cb A callback function to call after the specified delay.
 * @param delay Minimum duration of delay in ms before callback function is invoked.
 *
 * @return {number} A reference to the created timeout, which can be passed to the javascript clearTimeout.
 */

function useTimeout(cb: () => any, delay: number): NodeJS.Timeout {
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const timeout = setTimeout(cb, delay);
    setTimer(timeout);

    return () => clearTimeout(timeout);
  }, [cb, delay]);

  return timer as NodeJS.Timeout;
}

export default useTimeout;
