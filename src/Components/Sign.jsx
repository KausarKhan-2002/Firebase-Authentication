import React, { useRef, useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../AppStore/userSlice";

const Sign = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const mobileNo = useRef(null);
  const image = useRef(null);

  function toggleSignIn() {
    setIsSignIn(!isSignIn);
    if (email.current.value) email.current.value = "";
    if (password.current.value) password.current.value = "";
    setErrMsg("");
  }

  function resetForm() {
    if (name.current.value) name.current.value = "";
    if (email.current.value) email.current.value = "";
    if (password.current.value) password.current.value = "";
    if (mobileNo.current.value) mobileNo.current.value = "";
    setErrMsg("");
    setIsSignIn(true);
  }

  function handleUserRegistration() {
    // If user want to signup
    if (!isSignIn) {
      // SignUp API
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          // Update profile
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: image.current.value,
          })
            .then(() => {
            //   console.log(user);
              const { email, uid, displayName, photoURL } = user;

              dispatch(addUser({ email, uid, displayName, photoURL }));
              resetForm();
              navigate("/browse");
            })
            .catch((err) => {
            //   console.log(err);
            });
        })
        .catch((error) => {
          const errCode = error.code;
          const errMsg = error.message;
          setErrMsg(errCode, errMsg);
        });
    }
    // If user want to signin
    else {
      // SignIn API
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        //   console.log(user);
          setErrMsg("");
          navigate("/browse");
        })
        .catch((error) => {
          const errCode = error.code;
          const errMsg = error.message;
        //   console.log("please signup");

          setErrMsg(`${errCode}, Please Signup`);
        });
    }
  }

  return (
    <div className="bg-slate-800 w-[40%] mx-auto mt-3 py-15 px-8">
      <h2 className="mb-8 text-4xl text-center font-bold">
        {isSignIn ? "Sign In" : "Sign Up"}
      </h2>
      <div id="form" className="flex flex-col gap-4 font-medium">
        {!isSignIn && (
          <input
            ref={name}
            className="outline-none bg-slate-700 py-2 px-2 text-lg rounded-md"
            type="text"
            placeholder="Enter your name"
          />
        )}
        <input
          ref={email}
          className="outline-none bg-slate-700 py-2 px-2 text-lg rounded-md"
          type="text"
          placeholder="Enter your email"
        />
        <input
          ref={password}
          className="outline-none bg-slate-700 py-2 px-2 text-lg rounded-md"
          type="text"
          placeholder="Enter your password"
        />
        {!isSignIn && (
          <input
            ref={mobileNo}
            className="outline-none bg-slate-700 py-2 px-2 text-lg rounded-md"
            type="text"
            placeholder="Enter your mobile number"
          />
        )}
        {!isSignIn && (
          <input
            ref={image}
            className="outline-none bg-slate-700 py-2 px-2 text-lg rounded-md"
            type="text"
            placeholder="Paste any random image URL for your profile"
          />
        )}

        <p className="text-red-700">{errMsg}</p>
        <button
          onClick={handleUserRegistration}
          className="bg-red-800 text-lg py-2 cursor-pointer active:bg-red-900 mt-3 rounded-md"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
      </div>

      <p className="mt-8 text-slate-400">
        <span>{isSignIn ? "You are new" : "Already an user"}</span>?{" "}
        <button
          onClick={toggleSignIn}
          className="text-slate-300 cursor-pointer"
        >
          {isSignIn ? "Sign up now" : "Sign In now"}
        </button>
      </p>
    </div>
  );
};

export default Sign;
