import React from 'react';
import {BrowserRouter, Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import './Landing.css';
import GoogleAuth from './GoogleAuth';

const Landing = (props) => {

    if (props.isSignedIn) {
      return <Redirect to="/dashboard" />
    }

    return (
        <div className="relative w-full min-h-screen bg-gray-900 text-white flex flex-col justify-between">
            <main class="w-full max-w-screen-xl mx-auto mb-8 py-4 md:py-8">
      <div class="w-full lg:w-1/2">
        <a
          href="./index.html"
          class="w-full mb-4 lg:mb-16 inline-block px-8 md:px-16lg:pl-8"
        >
          <svg
            class="w-24"
            width="205"
            height="86"
            viewBox="0 0 205 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.336 28.176V41.808H54.968V48.848H33.336V66H25.016V21.2H57.72V28.176H33.336ZM96.1885 49.104C96.1885 49.6587 96.1458 50.448 96.0605 51.472H69.2445C69.7138 53.9893 70.9298 55.9947 72.8925 57.488C74.8978 58.9387 77.3725 59.664 80.3165 59.664C84.0712 59.664 87.1645 58.4267 89.5965 55.952L93.8845 60.88C92.3485 62.7147 90.4072 64.1013 88.0605 65.04C85.7138 65.9787 83.0685 66.448 80.1245 66.448C76.3698 66.448 73.0632 65.7013 70.2045 64.208C67.3458 62.7147 65.1272 60.6453 63.5485 58C62.0125 55.312 61.2445 52.2827 61.2445 48.912C61.2445 45.584 61.9912 42.5973 63.4845 39.952C65.0205 37.264 67.1325 35.1733 69.8205 33.68C72.5085 32.1867 75.5378 31.44 78.9085 31.44C82.2365 31.44 85.2018 32.1867 87.8045 33.68C90.4498 35.1307 92.4978 37.2 93.9485 39.888C95.4418 42.5333 96.1885 45.6053 96.1885 49.104ZM78.9085 37.84C76.3485 37.84 74.1725 38.608 72.3805 40.144C70.6312 41.6373 69.5645 43.6427 69.1805 46.16H88.5725C88.2312 43.6853 87.1858 41.68 85.4365 40.144C83.6872 38.608 81.5112 37.84 78.9085 37.84ZM123.265 31.44C127.574 31.44 131.03 32.6987 133.633 35.216C136.236 37.7333 137.537 41.4667 137.537 46.416V66H129.537V47.44C129.537 44.4533 128.833 42.2133 127.425 40.72C126.017 39.184 124.012 38.416 121.409 38.416C118.465 38.416 116.14 39.312 114.433 41.104C112.726 42.8533 111.873 45.392 111.873 48.72V66H103.873V31.824H111.489V36.24C112.812 34.6613 114.476 33.4667 116.481 32.656C118.486 31.8453 120.748 31.44 123.265 31.44Z"
              fill="currentColor"
            />
            <path
              d="M4 82H198.013L152.21 4H4V82Z"
              stroke="currentColor"
              stroke-width="8"
            />
            <path
              d="M184 21L192 21L165.999 66.0001L158.001 66.0001L184 21Z"
              fill="currentColor"
            />
          </svg>
        </a>

        <div
          class="side-image lg:absolute top-0 right-0 bg-white w-full lg:h-full lg:w-1/2 lg:min-h-screen h-64 mb-8 lg:mb-0"
        ></div>

        <div class="w-full px-8 md:px-16lg:pl-8">
          <h1 class="text-3xl lg:text-5xl leading-snug md:leading-tight font-semibold mb-4">
            A Brand New way to <span class="italic">SEE</span> your money.
          </h1>
          <p
            class="text-gray-500 text-sm lg:text-lg font-normal max-w-md tracking-wide mb-8"
          >
            See your monthly expenses, income and cashflow, all at one place.
          </p>

          <div class="w-full flex">
            <a
              href="#"
              class="flex items-center overflow-hidden rounded-md bg-white text-gray-900"
            >
              <p class="py-2 px-6 md:py-4 font-bold"><GoogleAuth /></p>
              <div class="bg-gray-300 p-4 h-full flex items-center">
                <svg
                  class="h-6 w-6 flex-shrink-0"
                  width="30"
                  height="21"
                  viewBox="0 0 30 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.2066 0.00524901C19.2013 0.0107027 19.2071 0.0195984 19.2142 0.0169399C19.2217 0.0141642 19.2197 0.00310014 19.2117 0.00310014C19.2098 0.00310014 19.2079 0.00387477 19.2066 0.00524901Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.9641 0.052138C10.9315 0.0192885 10.8897 9.9815e-05 10.8434 7.36117e-06C10.4254 -0.00082771 8.18345 0.0668285 5.49311 1.51688C4.27739 2.17213 3.36931 3.25731 2.8125 4.52115C1.89166 6.61127 0.550235 10.2693 0.130503 14.5924C-0.0375823 16.3236 0.430559 18.1119 1.83424 19.139C2.9606 19.9632 4.65655 20.7835 7.05894 20.9664C7.48041 20.9984 7.88395 20.7987 8.14288 20.4646C8.22191 20.3626 8.30997 20.2497 8.40488 20.1293C8.86272 19.5485 8.60374 18.6684 7.93702 18.3483C6.95617 17.8773 6.24705 17.3355 5.7691 16.8906C5.52814 16.6663 5.74741 16.3971 6.03946 16.5489C6.24522 16.6343 6.45178 16.7212 6.65981 16.8087C9.59846 18.0446 12.8329 19.4048 18.3116 18.4958L18.3975 18.4763C19.6078 18.2021 20.8199 17.9275 22.0301 17.383C22.2521 17.2683 22.4884 17.1537 22.7369 17.0331C23.2615 16.7785 23.5904 17.2029 23.1033 17.5233C22.6792 17.8022 22.1726 18.0831 21.5753 18.3369C20.993 18.5844 20.7438 19.3045 21.1372 19.8C21.2947 19.9984 21.4445 20.1824 21.5739 20.3392C21.8433 20.6656 22.2505 20.8495 22.6726 20.8186C26.8731 20.5111 29.004 18.2607 29.7211 17.5034C29.8081 17.4115 29.9991 17.0056 29.9972 16.8791C29.9082 10.7876 27.7136 5.61067 26.7246 3.57892C26.4251 2.96359 25.972 2.43697 25.3958 2.06766C22.5413 0.238 20.0001 0.0557156 19.2771 0.0398258C19.2088 0.0383249 19.145 0.065727 19.0968 0.114171C18.9602 0.251607 19.0206 0.485602 19.2056 0.543311C19.5277 0.643794 19.8364 0.748001 20.1319 0.854682C21.0383 1.18197 20.6887 1.87123 19.7495 1.65522C15.1633 0.600437 10.477 1.01187 6.08015 2.77981C5.79521 2.90432 5.62776 2.6373 5.88955 2.46951C6.91786 1.81047 8.56032 0.963646 10.8771 0.361159C11.0147 0.325359 11.0643 0.153097 10.9641 0.052138ZM19.6176 14.7456C21.0639 14.7456 22.2416 13.4977 22.2416 11.9585C22.2416 10.4309 21.0717 9.18362 19.6207 9.18183C19.619 9.18183 19.6176 9.18322 19.6176 9.18495C19.6176 9.18667 19.6162 9.18807 19.6144 9.18807C18.1757 9.18987 16.9975 10.433 16.9935 11.971C16.9935 13.4977 18.1713 14.7456 19.6176 14.7456ZM12.8478 11.9585C12.8478 13.4977 11.67 14.7456 10.2237 14.7456C8.77745 14.7456 7.59966 13.4977 7.59966 11.971C7.59966 10.4337 8.77465 9.19102 10.2186 9.18807C10.2219 9.18806 10.2252 9.18697 10.2278 9.18495C10.2305 9.18292 10.2337 9.18182 10.237 9.18183C11.681 9.18479 12.8478 10.4316 12.8478 11.9585Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
    <footer class="w-full bg-gray-800">
      <div class="max-w-screen-xl w-full mx-auto">
        <div class="w-full lg:w-1/2 py-8 px-8 md:px-16lg:pl-8">
          <h3
            class="text-base md:text-lg uppercase font-semibold tracking-wide text-gray-500 mb-4"
          >
            Designed & Developed by
          </h3>
          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8"
          >
            <div class="flex flex-col">
              <h6 class="font-medium text-base md:text-lg tracking-wide">
                Tepes Alexandru
              </h6>
              <p class="text-xs md:text-sm text-gray-500">
                Eclipse#0956
              </p>
            </div>
            <div class="flex flex-col">
              <h6 class="font-medium text-base md:text-lg tracking-wide">
                Rishi
              </h6>
              <p class="text-xs md:text-sm text-gray-500">
                Rishi#6304
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn};
}

export default connect(mapStateToProps)(Landing);