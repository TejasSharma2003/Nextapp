import { useEffect, useState } from "react";
import * as classes from "./auth.module.css";

import Input from "../Form/Input";

import Button from "@/elements/Button";
import CrossButton from "@/elements/CrossButton";

import EmailIcon from "@/ui/EmailIcon";
import PasswordIcon from "@/ui/PasswordIcon";
import UserIcon from "@/ui/UserIcon";

import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

import createUser from "@/helpers/auth/createUser";

import showAlert from "../AlertContainer";

import { getSession, signIn } from "next-auth/react";

import { AnimatePresence, motion } from "framer-motion";
import SmallSpinner from "../SmallSpinner";

import useForm from "@/hooks/useForm";

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+\.[a-zA-Z]{2,63}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d_\-@#$%^&*()!+=]{8,}$/;
const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9_ ]{3,19}$/;

const modelContainerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const modelVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      y: {
        ease: [0.42, 0.71, 0.09, 0.86],
        duration: 0.3,
      },
      opacity: {
        ease: [0.42, 0.71, 0.09, 0.86],
        duration: 0.2,
      },
    },
  },
  exit: {
    y: 100,
    opacity: 0,
    transition: {
      ease: [0.42, 0.71, 0.09, 0.86],
      duration: 0.2,
    },
  },
};

const Auth = props => {
  const [showSpinner, setShowSpinner] = useState(false);

  const [isLoginMounted, setIsLoginMounted] = useState(
    props.modelFor === "login" ? true : false
  );

  const {
    input: email,
    inputValid: emailIsValid,
    inputIsInvalid: emailIsInvalid,
    onChange: onChangeEmailInput,
    onBlur: onBlurEmailInput,
    resetInput: resetEmail,
  } = useForm(val => EMAIL_REGEX.test(val));

  const {
    input: password,
    inputValid: passwordIsValid,
    inputIsInvalid: passwordIsInvalid,
    onChange: onChangePasswordInput,
    onBlur: onBlurPasswordInput,
    resetInput: resetPassword,
  } = useForm(val => PASSWORD_REGEX.test(val));

  const {
    input: name,
    inputValid: nameIsValid,
    inputIsInvalid: nameIsInvalid,
    onChange: onChangeNameInput,
    onBlur: onBlurNameInput,
    resetInput: resetName,
  } = useForm(val => USERNAME_REGEX.test(val));

  let loginFormIsValid = false;
  if (emailIsValid && passwordIsValid) {
    loginFormIsValid = true;
  }

  const onChangeAuthMethod = () => {
    setIsLoginMounted(pre => !pre);
  };

  const onSubmitHandler = async e => {
    e.preventDefault();

    //Validation....
    const emailTest = EMAIL_REGEX.test(email);
    const passwordTest = PASSWORD_REGEX.test(password);

    if (!emailTest) {
      showAlert({
        status: "error",
        message: "Entered Email address is not valid.",
      });
      return;
    }

    if (!passwordTest) {
      showAlert({
        status: "error",
        message: "Entered password is not valid.",
      });
      return;
    }

    //for login / signin
    if (isLoginMounted) {
      //when setting redirect property signIn will returns a promise and it will never be rejected..
      setShowSpinner(true);
      const result = await signIn("credentials", {
        redirect: false,
        name,
        email,
        password,
      });

      if (result?.ok) {
        const session = await getSession();
        const { name } = session?.user;

        showAlert({
          status: "success",
          message: `You\'re successfully logged in as ${name.toUpperCase()} :)`,
        });
        props.onCloseModelHandler();
      } else {
        showAlert({
          status: "error",
          message: `${result?.error}`,
        });
      }
    }

    //for sign up
    else {
      //Name validation for signup
      const nameTest = USERNAME_REGEX.test(name);

      if (!nameTest) {
        showAlert({
          status: "error",
          message: "Entered name is not valid.",
        });
        return;
      }

      try {
        setShowSpinner(true);
        await createUser({ name, password, email });
        showAlert({
          status: "success",
          message:
            "Please login with the same credentials you've used to signup:)",
        });
        setIsLoginMounted(true);
      } catch (err) {
        if (err?.response?.data?.message) {
          showAlert({
            status: "error",
            message: err?.response?.data?.message,
          });
        } else {
          showAlert({
            status: "error",
            message: "Something went wrong. Please try again later!",
          });
        }
      }
    }
    setShowSpinner(false);
  };

  const onChangeHandler = e => {
    const { name, value } = e.target;
    setFormInput(pre => {
      return { ...pre, [name]: value };
    });
  };

  const onSignInWithGoogle = () => {
    signIn("google");
  };

  const onSignInWithGithub = () => {
    signIn("github");
  };
  return (
    <>
      {/* backdrop */}
      <motion.div
        key="backdrop"
        variants={modelContainerVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        className="fixed top-0  z-40 flex min-h-screen w-screen justify-center bg-black/[.8] py-5 transition-colors"
      ></motion.div>

      {/* modal wrapper */}
      <motion.div
        variants={modelVariants}
        initial="hidden"
        animate="show"
        key="model"
        exit="exit"
        className="fixed inset-x-0 inset-y-0 z-50 "
      >
        <div className="absolute inset-x-0 inset-y-0 flex items-center justify-center overflow-y-auto pt-10">
          <div
            className={`relative flex  max-w-5xl  flex-1 justify-center self-start rounded-2xl  bg-black-200 py-32 text-center  text-white ${
              classes.container
            } ${props.modelIsVisible ? classes["animate-line"] : ""}`}
          >
            <div className="max-w-3xl flex-1 px-16">
              <CrossButton
                className="!absolute !right-5 !top-5"
                onClick={props.onCloseModelHandler}
              />

              <h1 className="mb-20 font-primary  text-6xl  leading-snug">
                {isLoginMounted ? (
                  <span>
                    Don't miss a beat.
                    <br /> Login now...
                  </span>
                ) : (
                  <span>
                    Ready to get started? <br /> Sign up now!
                  </span>
                )}
              </h1>

              <form onSubmit={onSubmitHandler}>
                {/* Name */}
                {!isLoginMounted && (
                  <Input
                    type="text"
                    placeholder="Name"
                    icon={UserIcon}
                    name="name"
                    value={name}
                    onChange={onChangeNameInput}
                    onBlur={onBlurNameInput}
                    nameIsInvalid={nameIsInvalid}
                  />
                )}
                {/* Email */}

                <Input
                  type="email"
                  placeholder="Email"
                  icon={EmailIcon}
                  name="email"
                  value={email}
                  onChange={onChangeEmailInput}
                  onBlur={onBlurEmailInput}
                  emailIsInvalid={emailIsInvalid}
                />

                {/* Password */}
                <Input
                  type="password"
                  placeholder="Password"
                  icon={PasswordIcon}
                  name="password"
                  value={password}
                  onChange={onChangePasswordInput}
                  onBlur={onBlurPasswordInput}
                  passwordIsInvalid={passwordIsInvalid}
                />

                <Button
                  type="fill"
                  className="relative mb-7 flex items-center justify-center disabled:bg-primary/[.8]"
                  onClick={null}
                  disabled={showSpinner || !loginFormIsValid}
                >
                  <AnimatePresence>
                    {showSpinner && (
                      <motion.span
                        key="spinner"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute left-2/4 -translate-x-[60px]"
                      >
                        <SmallSpinner />
                      </motion.span>
                    )}
                  </AnimatePresence>
                  Continue
                </Button>
              </form>

              <span className={`${classes.divider} text-white/[.5]`}>OR</span>

              <Button
                className="my-7 flex items-center justify-center bg-black-100"
                onClick={onSignInWithGoogle}
              >
                <FcGoogle className="mr-5 inline-block text-4xl" />
                <span className="mr-2">
                  {isLoginMounted ? "Login" : "Signup"}
                </span>{" "}
                with Google
              </Button>

              <Button
                className="mb-10 flex items-center justify-center  bg-black-100"
                onClick={onSignInWithGithub}
              >
                <BsGithub className="mr-5 inline-block text-4xl" />
                <span className="mr-2">
                  {isLoginMounted ? "Login" : "Signup"}
                </span>{" "}
                with Github
              </Button>

              <div>
                {isLoginMounted ? (
                  <span className="text-2xl">
                    Don't have a account?
                    <span
                      onClick={onChangeAuthMethod}
                      className="ml-1 cursor-pointer text-blue-500"
                    >
                      Signup
                    </span>
                  </span>
                ) : (
                  <span className="text-2xl">
                    Already have an account?
                    <span
                      onClick={onChangeAuthMethod}
                      className="ml-1 cursor-pointer text-blue-500"
                    >
                      Login
                    </span>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Auth;