import React from "react";
import "../assets/tailwind.css";

class SideBar extends React.Component {
  render() {
      return (
        <div className="fixed w-full top-0 right-0 h-screen">
          <div className="fixed w-full h-full bg-black bg-opacity-50 z-10"></div>

          <div className="fixed max-w-xs w-full top-0 right-0 h-screen bg-gray-900 p-8 z-20 flex flex-col justify-between items-center">
            <div className="relative w-full flex flex-col">
              <svg
                className="h-8 w-8 absolute top-0 left-0 text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6L18 18M6 18L18 6L6 18Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div className="mt-24 w-32 h-32 bg-white rounded-full overflow-hidden mx-auto mb-4"></div>
              <p className="textbase md:text-xl text-white mx-auto mb-8 lg:mb-16">
                Tepes Alexandru
              </p>
              <div className="w-full grid grid-cols-1 gap-4 text-white text-left text-lg md:text-2xl font-semibold pl-1">
                <a href="#" className="flex">
                    <svg
                    className="h-8 w-8 text-gray-500 mt-1 mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12L11 14L15 10M20.618 5.984C17.4561 6.15192 14.3567 5.05861 12 2.944C9.64327 5.05861 6.5439 6.15192 3.382 5.984C3.12753 6.96911 2.99917 7.98255 3 9C3 14.591 6.824 19.29 12 20.622C17.176 19.29 21 14.592 21 9C21 7.958 20.867 6.948 20.618 5.984Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Your Vault
                </a>
              </div>
            </div>

            <a
              href="#"
              className="text-red-500 font-semibold text-base md:text-xl"
            >
              Log Out
            </a>
          </div>
        </div>
      );
  }
}

export default SideBar;
