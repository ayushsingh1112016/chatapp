import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const { loading, signup } = useSignup();

  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const fullNameRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const submit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="px-5 sm:px-10 py-8 bg-[#EDEDED] flex flex-col items-center justify-center gap-y-3">
      <h3 className="text-2xl sm:text-3xl mb-5 text-[#075E54]">Signup Form</h3>
      <form
        onSubmit={submit}
        className={`flex flex-col gap-y-4 items-center justify-center ${
          loading ? `pointer-events-none opacity-50` : ``
        }`}
      >
        <div>
          <input
            ref={fullNameRef}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                if (usernameRef.current) {
                  usernameRef.current.focus();
                }
              }
            }}
            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            type="text"
            placeholder="Full Name"
            value={inputs.fullName}
            className="input input-bordered border-[#25D366] sm:w-[280px] max-w-xs"
          />
        </div>

        <div>
          <input
            ref={usernameRef}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                if (passwordRef.current) {
                  passwordRef.current.focus();
                }
              } else if (e.key === "ArrowUp") {
                if (fullNameRef.current) {
                  fullNameRef.current.focus();
                }
              }
            }}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            type="text"
            placeholder="Choose a username"
            value={inputs.username}
            className="input input-bordered border-[#25D366] sm:w-[280px] max-w-xs"
          />
        </div>

        <div>
          <input
            ref={passwordRef}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                if (confirmPasswordRef.current) {
                  confirmPasswordRef.current.focus();
                }
              } else if (e.key === "ArrowUp") {
                if (usernameRef.current) {
                  usernameRef.current.focus();
                }
              }
            }}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            type="password"
            value={inputs.password}
            placeholder="Choose a password"
            className="input input-bordered border-[#25D366] sm:w-[280px] max-w-xs"
          />
        </div>

        <div>
          <input
            ref={confirmPasswordRef}
            onKeyDown={(e) => {
              if (e.key === "ArrowUp") {
                if (passwordRef.current) {
                  passwordRef.current.focus();
                }
              }
            }}
            onChange={(e) =>
              setInputs({ ...inputs, confirmPassword: e.target.value })
            }
            type="password"
            value={inputs.confirmPassword}
            placeholder="Confirm your password"
            className="input input-bordered border-[#25D366] sm:w-[280px] max-w-xs"
          />
        </div>

        <div className="flex items-center justify-center gap-x-10">
          <div className="flex items-center gap-x-2">
            <input
              onClick={(e) => setInputs({ ...inputs, gender: e.target.value })}
              id="male"
              type="radio"
              name="gender"
              className="radio radio-primary checked:bg-[#25D366]"
              value={"male"}
            />
            <label
              htmlFor="male"
              onClick={(e) => setInputs({ ...inputs, gender: "male" })}
              className="text-[#075E54]"
            >
              Male
            </label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              onClick={(e) => setInputs({ ...inputs, gender: e.target.value })}
              id="female"
              value={"female"}
              type="radio"
              name="gender"
              className="radio radio-accent checked:bg-[#25D366]"
            />
            <label
              htmlFor="female"
              onClick={(e) => setInputs({ ...inputs, gender: "female" })}
              className="text-[#075E54]"
            >
              Female
            </label>
          </div>
        </div>

        {!loading && (
          <button className="bg-[#25D366] font-semibold px-6 py-2 rounded-lg text-white">
            Signup
          </button>
        )}
        {loading && (
          <button className="bg-[#25D366] font-semibold px-3 py-2 rounded-lg text-white flex items-center justify-center gap-x-3">
            <span className="loading loading-spinner text-white"></span>
            Loading
          </button>
        )}
      </form>
      <div className="mt-2 text-sm">
        Already have an account?{" "}
        <Link to={"/login"} className="text-[#128C7E]">
          Login here
        </Link>
      </div>
    </div>
  );
};

export default Signup;
