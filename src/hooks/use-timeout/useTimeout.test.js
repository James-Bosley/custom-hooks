import { render, cleanup } from "@testing-library/react";
import useTimeout from "./useTimeout";

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

describe("useTimeout", () => {
  afterEach(cleanup);

  it("Hook called on component render", () => {
    const useTimeout = jest.fn();
    setup(useTimeout, jest.fn, 0);

    expect(useTimeout).toBeCalledTimes(1);
    //
  });

  it("Returns a number", () => {
    const returnValue = setup(useTimeout, jest.fn, 0);

    expect(typeof returnValue).toBe("number");
    //
  });

  it("Invokes the callback function", async () => {
    const callback = jest.fn();
    setup(useTimeout, callback, 0);

    await delay(1);
    expect(callback).toBeCalledTimes(1);
  });

  it("Does not invoke the callback before the expected delay", async () => {
    const callback = jest.fn();
    setup(useTimeout, callback, 1000);

    await delay(500);
    expect(callback).not.toBeCalled();

    await delay(500);
    expect(callback).toBeCalledTimes(1);
    //
  });
});
