import { authenticatePassword, getUserDetails, pb } from "../utils/pocketbase";
import { useEffect, useState } from "react";

const LoginFormPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (pb.authStore.isValid) {
      window.location.href = "/";
    }
  }, []);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-dark">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              for="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                for="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-accent transition-all hover:opacity-75"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={async (e) => {
                e.preventDefault();
                const result = await authenticatePassword(email, password);
                // redirect to home page
                if (result) {
                  window.location.href = "/";
                }
              }}
              type="submit"
              className="flex w-full justify-center rounded-md bg-accent px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm transition-all hover:opacity-65 focus-visible:opacity-65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-lg text-gray-500">
          Not a member?{" "}
          <a
            href="#"
            className="font-semibold leading-6 text-red-600  transition-all hover:text-red-400"
          >
            Sign up now
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginFormPage;
