import { useCallback, useEffect, useState } from "react";

/**
 * A hook that returns a date object representing the current, or offset, time.
 * @param offsetMs An optional offset from UTC in ms.
 * @returns A Date object that is updated once per second.
 */

const useTime = (offsetMs?: number): Date => {
  const getTime = useCallback(() => {
    if (offsetMs) {
      return new Date(Date.now() + offsetMs);
    }
    return new Date();
  }, [offsetMs]);

  const [time, setTime] = useState<Date>(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [getTime]);

  return time;
};

export default useTime;
