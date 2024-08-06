import React from "react";
import { useEffect } from "react";
import { getUserDetails, pb } from "../utils/pocketbase";

const Navigation = ({ title, image, description }) => {
  // get the current tab from the URL and set it as the active tab in the navigation
  const [tab, setTab] = React.useState("main");
  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/") {
      setTab("main");
    } else if (path === "/recipes") {
      setTab("recipes");
    }
  });

  return (
    <nav class="w-100 md:px-auto bg-[#ffedc7] px-8 py-1  shadow-gray-300 ">
      <div class="container mx-auto flex h-28 flex-wrap items-center justify-between md:h-16 md:flex-nowrap md:px-4">
        <div class="md:order-1">
          <a href="#" class="font-sans text-2xl font-bold text-dark">
            🍕
          </a>
        </div>
        <div class="order-3 w-full text-gray-500 md:order-2 md:w-auto">
          <ul class="flex justify-between font-semibold">
            <li
              class={
                "hover:text-accent hover:opacity-80 md:px-4 md:py-2 " +
                (tab == "main" ? "text-accent" : "")
              }
            >
              <a href="/">Main</a>
            </li>
            <li
              class={
                "hover:text-accent hover:opacity-80 md:px-4 md:py-2 " +
                (tab == "recipes" ? "text-accent" : "")
              }
            >
              <a href="recipes">Recipes</a>
            </li>
          </ul>
        </div>
        <div class="order-2 md:order-3">
          {!pb.authStore.isValid ? (
            <a
              href="login"
              class="flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-gray-50 transition-all hover:brightness-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Login</span>
            </a>
          ) : (
            <>
              <div className="flex items-center">
                <img
                  src={pb.getFileUrl(
                    pb.authStore.model,
                    pb.authStore.model.avatar
                  )}
                  alt="Profile Picture"
                  class="my-10 h-12 w-12 cursor-pointer rounded-full outline-4 outline-white transition-all hover:outline"
                />
                {/* logoutbutton */}
                <button
                  onClick={() => {
                    pb.authStore.clear();
                    window.location.reload();
                  }}
                  class="ml-2 rounded-full bg-accent px-4 py-2 text-gray-50 hover:brightness-90"
                >
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
