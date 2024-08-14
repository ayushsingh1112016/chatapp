import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { loading, login } = useLogin();

  const usernameInputRef = useState(null);
  const passwordInputRef = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    await login({ password, username });
  };
  
  return (
    <div className="px-5 sm:px-10 py-8 bg-[#EDEDED] flex flex-col items-center justify-center gap-y-3">
      <h3 className="text-2xl sm:text-3xl mb-5 text-[#075E54]">Login Form</h3>
      <form
        onSubmit={submit}
        className={`flex flex-col gap-y-4 items-center justify-center ${
          loading ? `pointer-events-none opacity-50` : ``
        }`}
      >
        <div>
          <input
            ref={usernameInputRef}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                if (passwordInputRef.current) {
                  passwordInputRef.current.focus();
                }
              }
            }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
            className="input text-black input-bordered border-[#25D366] sm:w-[280px] max-w-xs"
          />
        </div>

        <div>
          <input
            ref={passwordInputRef}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="input text-black input-bordered border-[#25D366] sm:w-[280px] max-w-xs"
            onKeyDown={(e) => {
              if (e.key === "ArrowUp") {
                if (usernameInputRef.current) {
                  usernameInputRef.current.focus();
                }
              }
            }}
          />
        </div>

        {!loading && (
          <button className="bg-[#25D366] font-semibold px-6 py-2 rounded-lg text-white">
            Login
          </button>
        )}
        {loading && (
          <button className="bg-[#25D366] font-semibold px-3 py-2 rounded-lg text-white flex items-center justify-center gap-x-3">
            <span className="loading loading-spinner text-gray"></span>
            Loading
          </button>
        )}
      </form>
      <div className="mt-2 text-sm">
        Don't have an account?{" "}
        <Link to={"/signup"} className="text-[#128C7E]">
          Signup here
        </Link>
      </div>
    </div>
  );
};

export default Login;
