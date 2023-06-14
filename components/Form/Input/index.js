import { useState } from 'react';
import * as classes from './input.module.css';

import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx';
import InputErrorMessage from './InputErrorMessage';

const Input = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const onTogglePassword = () => {
    setShowPassword((pre) => !pre);
  };

  let content = '';
  if (props.name === 'password') {
    content = showPassword ? (
      <RxEyeOpen
        className="absolute right-5 z-30 cursor-pointer text-4xl  text-white/[.5]"
        onClick={onTogglePassword}
      />
    ) : (
      <RxEyeClosed
        className="absolute right-5 z-30 cursor-pointer text-4xl  text-white/[.5]"
        onClick={onTogglePassword}
      />
    );
  }

  //Rendering error icon to diff field which are not correct it returns a boolean for each field which is not valid react then render diff error icon for each field
  const inputIsInValid = `${props.name}IsInvalid`;

  return (
    <div
      tabIndex="0"
      className={`${
        props.wrapperClassName || ''
      } rounded-fulltransition-colors relative mb-7 flex items-center `}
    >
      {props?.icon && (
        <span className="absolute left-5 z-30 inline-block text-white-100">
          {<props.icon />}
        </span>
      )}

      <input
        className={`${classes.input} ${props.className} relative z-20 rounded-full  border-2  border-transparent bg-black-100 py-4 pl-[45px] pr-3 transition-colors placeholder:text-white-100 hover:border-2 hover:border-primary focus:border-primary`}
        type={
          props.name === 'password'
            ? showPassword
              ? 'text'
              : 'password'
            : props.type
        }
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange || null}
        onBlur={props.onBlur || null}
      />
      {content}

      <InputErrorMessage inputIsInvalid={props[inputIsInValid]} />
    </div>
  );
};

export default Input;
