import { render, cleanup } from "@testing-library/react";
import useInterval from "./useInterval";

const setup = (hook, ...args) => {
  let returnValue;
  const TestComponent = () => {
    returnValue = hook(...args);
    return null;
  };
  render(<TestComponent />);
  return returnValue;
};

const delay = duration => {
  return new Promise((resolve, _reject) => {
    setTimeout(resolve, duration);
  });
};

describe("useInterval", () => {
  afterEach(cleanup);

  it("Hook called on component render", () => {
    const useInterval = jest.fn();
    setup(useInterval, jest.fn, 0);

    expect(useInterval).toBeCalledTimes(1);
    //
  });

  it("Returns a number", () => {
    const returnValue = setup(useInterval, jest.fn, 0);

    expect(typeof returnValue).toBe("number");
    //
  });

  it("Invokes the callback function", async () => {
    const callback = jest.fn();
    setup(useInterval, callback, 0);

    await delay(1);
    expect(callback).toBeCalledTimes(1);
  });

  it("Does not invoke the callback before the expected initial delay", async () => {
    const callback = jest.fn();
    setup(useInterval, callback, 1000);

    await delay(500);
    expect(callback).not.toBeCalled();

    await delay(500);
    expect(callback).toBeCalledTimes(1);
    //
  });

  it("Invokes the callback once after each delay period", async () => {
    const callback = jest.fn();
    setup(useInterval, callback, 500);

    await delay(500);
    expect(callback).toBeCalledTimes(1);
    await delay(500);
    expect(callback).toBeCalledTimes(2);
    await delay(500);
    expect(callback).toBeCalledTimes(3);
  });
});
