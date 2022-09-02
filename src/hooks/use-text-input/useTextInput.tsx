import { ChangeEvent, InputHTMLAttributes, useEffect, useRef, useState } from "react";

import { v4 } from "uuid";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

interface InputProperties {
  ref: HTMLInputElement | null;
  hasValue: boolean;
  hasFocus: boolean;
  wasFocussed: boolean;
}

type TextInputReturn = [JSX.Element, string, InputProperties];

/**
 * This hook returns a controlled input component.
 * @param props Accepts an optional object of props to apply to the input. The inlcude all standard HTML input props, plus a required label value.
 * @returns An array of the JSX Element, the current value, and an object containing properties of the input element.
 */

const useTextInput = (props: Props): TextInputReturn => {
  const ref = useRef<HTMLInputElement>(null);

  const initialValue = typeof props.value === "string" ? props.value : "";

  const [value, setValue] = useState<string>(initialValue);
  const [attrs, setAttrs] = useState<InputProperties>({
    hasValue: false,
    ref: null,
    hasFocus: false,
    wasFocussed: false,
  });

  useEffect(() => {
    if (value) {
      setAttrs(prevAttrs => ({ ...prevAttrs, hasValue: true }));
    }
    if (ref.current) {
      setAttrs(prevAttrs => ({ ...prevAttrs, ref: ref.current }));
    }
  }, [value]);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  const id = v4();
  const baseClassName = props.className || "text-input";

  const element = (
    <div className={baseClassName + "__container"} style={{ padding: "5px" }}>
      <label htmlFor={id} className={baseClassName + "__label"} style={{ marginRight: "5px" }}>
        {props.label}
      </label>
      <input
        {...props}
        id={id}
        className={baseClassName + "__input"}
        type="text"
        ref={ref}
        onChange={handleChange}
        onFocusCapture={() =>
          setAttrs(prevAttrs => ({ ...prevAttrs, hasFocus: true, wasFocussed: true }))
        }
        onBlurCapture={() => setAttrs(prevAttrs => ({ ...prevAttrs, hasFocus: false }))}
      />
    </div>
  );

  return [element, value, attrs];
};

export default useTextInput;
