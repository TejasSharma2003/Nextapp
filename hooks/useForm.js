import { useCallback, useState } from "react";

const useForm = validate => {
  const [input, setInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputValid = validate(input);
  const inputIsInvalid = !inputValid && isTouched;

  const onChangeHandler = event => {
    const { value } = event.target;
    setInput(value);
    setIsTouched(true);
  };

  const onBlurHandler = () => {
    setIsTouched(true);
  };

  const resetInput = () => {
    setInput("");
    setIsTouched(false);
  };

  return {
    onChange: onChangeHandler,
    onBlur: onBlurHandler,
    input,
    inputIsInvalid,
    inputValid,
    resetInput,
  };
};

export default useForm;
