import { render, cleanup } from "@testing-library/react";
import useTextInput from "./useTextInput";

const setup = (hook, ...args) => {
  let returnValue;
  const TestComponent = () => {
    returnValue = hook(...args);
    return null;
  };
  render(<TestComponent />);
  return returnValue;
};

describe("useTextInput", () => {
  afterEach(cleanup);

  const testProps = { label: "Test Label", value: "Test Value" };

  it("Hook called on component render", () => {
    const useTextInput = jest.fn();
    setup(useTextInput);

    expect(useTextInput).toBeCalledTimes(1);
  });

  it("Returns an array of length 3", () => {
    const returnValue = setup(useTextInput, testProps);

    expect(returnValue.length).toBe(3);
  });

  it("Returned element is of correct type", () => {
    const returnValue = setup(useTextInput, testProps);

    expect(returnValue[0].type).toBe("div");
    // eslint-disable-next-line testing-library/no-node-access
    expect(returnValue[0].props.children[0].type).toBe("label");
    // eslint-disable-next-line testing-library/no-node-access
    expect(returnValue[0].props.children[1].type).toBe("input");
  });

  it("Returned value represents input value", () => {
    const returnValue = setup(useTextInput, testProps);

    expect(returnValue[1]).toBe(testProps.value);
  });
});
