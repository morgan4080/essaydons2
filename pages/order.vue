<template>
  <div>
    <div class="min-h-screen" style="background: #FBFBFB;">
      <div class="mobile-b min-h-screen bg-left-0 lg:bg-center-0">
        <div class="max-w-6xl mx-auto pt-32 lg:pt-32 z-10 px-8 lg:px-0 sm:pb-12 md:pb-24 lg:pb-32 lg:grid lg:grid-cols-4 lg:gap-6">
          <div class="grid grid-rows-orders mb-12 col-span-3">
            <div class="mx-auto w-full">
              <div class="flex text-base content-center text-center py-2">
                <div class="w-1/4">
                  Authorize
                </div>

                <div class="w-1/4">
                  Paper details
                </div>

                <div class="w-1/4">
                  Options
                </div>

                <div class="w-1/4">
                  Checkout
                </div>
              </div>
              <div class="flex pb-3">
                <div class="flex-1">
                </div>

                <div class="flex-1 cursor-pointer" >
                  <div :class="{'bg-white border-2 border-grey-light text-gray-700': openTab === 1, 'bg-teal-300 border-0 text-white': openTab >= 1}" class="w-10 h-10 mx-auto rounded-full text-lg flex items-center">
                    <span class="flex items-center justify-center w-full">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2C7.23858 2 5 4.23858 5 7V9C3.89543 9 3 9.89543 3 11V16C3 17.1046 3.89543 18 5 18H15C16.1046 18 17 17.1046 17 16V11C17 9.89543 16.1046 9 15 9H7V7C7 5.34315 8.34315 4 10 4C11.3965 4 12.5725 4.95512 12.9055 6.24926C13.0432 6.78411 13.5884 7.1061 14.1232 6.96844C14.6581 6.83078 14.9801 6.28559 14.8424 5.75074C14.2874 3.59442 12.3312 2 10 2Z" fill="#111827"></path>
                      </svg>
                    </span>
                  </div>
                </div>


                <div class="w-1/6 align-center items-center align-middle content-center flex">
                  <div class="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
                    <div class="bg-teal-300 text-xs leading-none py-1 text-center text-grey-darkest rounded " :class="{'w-full': openTab === 2, 'w-0': openTab < 2}"></div>
                  </div>
                </div>


                <div class="flex-1 cursor-pointer" @click="toggleTabs(2)">
                  <div :class="{'bg-white border-2 border-grey-light text-gray-700': openTab <= 2, 'bg-teal-300 border-0 text-white': openTab >= 2}" class="w-10 h-10 mx-auto rounded-full text-lg flex items-center">
                    <span class="flex items-center justify-center w-full">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3939 2.08085C10.1424 1.97305 9.85763 1.97305 9.60608 2.08085L2.60608 5.08085C2.2384 5.23843 2 5.59997 2 6C2 6.40003 2.2384 6.76157 2.60608 6.91915L5.25037 8.05241C5.34653 7.94347 5.46706 7.85473 5.60608 7.79515L9.60608 6.08087C10.1137 5.86331 10.7016 6.09846 10.9191 6.60609C11.1367 7.11372 10.9015 7.7016 10.3939 7.91916L7.66668 9.08797L9.60608 9.91915C9.85763 10.027 10.1424 10.027 10.3939 9.91915L17.3939 6.91915C17.7616 6.76157 18 6.40003 18 6C18 5.59997 17.7616 5.23843 17.3939 5.08085L10.3939 2.08085Z" fill="#111827"/>
                        <path d="M3.31004 9.39673L5 10.121V14.2226C4.65723 14.1449 4.30705 14.0867 3.95071 14.0494C3.48094 14.0001 3.1097 13.6289 3.06044 13.1591C3.02046 12.7778 3 12.391 3 11.9998C3 11.1033 3.10741 10.2315 3.31004 9.39673Z" fill="#111827"/>
                        <path d="M9.29996 16.5725C8.62708 15.9129 7.85167 15.3584 7 14.9351V10.9781L8.81824 11.7574C9.57289 12.0808 10.4271 12.0808 11.1818 11.7574L16.69 9.39673C16.8926 10.2315 17 11.1033 17 11.9998C17 12.391 16.9795 12.7778 16.9396 13.1591C16.8903 13.6289 16.5191 14.0001 16.0493 14.0494C13.9765 14.2667 12.1124 15.188 10.7 16.5725C10.3112 16.9537 9.68881 16.9537 9.29996 16.5725Z" fill="#111827"/>
                        <path d="M6 18C6.55228 18 7 17.5523 7 17V14.9351C6.37136 14.6227 5.70117 14.3817 5 14.2226V17C5 17.5523 5.44772 18 6 18Z" fill="#111827"/>
                      </svg>
                    </span>
                  </div>
                </div>

                <div class="w-1/6 align-center items-center align-middle content-center flex">
                  <div class="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
                    <div class="bg-teal-300 text-xs leading-none py-1 text-center text-grey-darkest rounded " :class="{'w-full': openTab === 3, 'w-0': openTab < 3}"></div>
                  </div>
                </div>

                <div class="flex-1 cursor-pointer" @click="toggleTabs(3)">
                  <div :class="{'bg-white border-2 border-grey-light text-gray-700': openTab <= 3, 'bg-teal-300 border-0 text-white': openTab >= 3}" class="w-10 h-10 mx-auto rounded-full text-lg flex items-center">
                    <span class="flex items-center justify-center w-full">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 2C8.44772 2 8 2.44772 8 3C8 3.55228 8.44772 4 9 4H11C11.5523 4 12 3.55228 12 3C12 2.44772 11.5523 2 11 2H9Z" fill="#111827"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C4 3.89543 4.89543 3 6 3C6 4.65685 7.34315 6 9 6H11C12.6569 6 14 4.65685 14 3C15.1046 3 16 3.89543 16 5V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V5ZM7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H7.01C7.56228 11 8.01 10.5523 8.01 10C8.01 9.44772 7.56228 9 7.01 9H7ZM10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H10ZM7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15H7.01C7.56228 15 8.01 14.5523 8.01 14C8.01 13.4477 7.56228 13 7.01 13H7ZM10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15H13C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13H10Z" fill="#111827"/>
                      </svg>
                    </span>
                  </div>
                </div>

                <div class="w-1/6 align-center items-center align-middle content-center flex">
                  <div class="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
                    <div class="bg-teal-300 text-xs leading-none py-1 text-center text-grey-darkest rounded" :class="{'w-full': openTab === 4, 'w-0': openTab < 4}"></div>
                  </div>
                </div>

                <div class="flex-1 cursor-pointer" @click="toggleTabs(4)">
                  <div :class="{'bg-white border-2 border-grey-light text-gray-700': openTab <= 4, 'bg-teal-300 border-0 text-white': openTab >= 4}" class="w-10 h-10 mx-auto rounded-full text-lg flex items-center">
                    <span class="flex items-center justify-center w-full">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4C2.89543 4 2 4.89543 2 6V7H18V6C18 4.89543 17.1046 4 16 4H4Z" fill="#111827"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 9H2V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V9ZM4 13C4 12.4477 4.44772 12 5 12H6C6.55228 12 7 12.4477 7 13C7 13.5523 6.55228 14 6 14H5C4.44772 14 4 13.5523 4 13ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H10C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12H9Z" fill="#111827"/>
                      </svg>
                    </span>
                  </div>
                </div>

                <div class="flex-1">
                </div>
              </div>
            </div>
            <div :class="{'hidden': openTab !== 1 , 'block': openTab === 1}" class="flex flex-col text-left w-full py-8">
              <div :class="{'hidden': openTab0 !== 1 , 'block': openTab0 === 1}" class="w-full max-w-xs mx-auto" >
                <form @submit.prevent="userLogin" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" style="border: 1px solid rgba(66, 251, 183, 0.8);">
                  <div class="mb-4">
                    <label class="block text-left text-gray-700 text-sm font-bold mb-2" for="username">
                      Email
                    </label>
                    <input name="email" required v-model="login.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                  </div>
                  <div class="mb-6">
                    <label class="block text-left text-gray-700 text-sm font-bold mb-2" for="password">
                      Password
                    </label>
                    <!--border-red-500-->
                    <div class="relative">
                      <input required name="password" v-model="login.password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" :type="!passwordFieldType ? 'password' : 'text'" placeholder="******************">
                      <button type="button" @click="changePasswordFieldType" class="absolute cursor-pointer inset-y-0 right-0 py-2 pl-3 pr-3 flex items-center">
                        <span class="text-gray-700 sm:text-base">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 512 512" class="w-6" enable-background="new 0 0 512 512">
                            <g>
                              <g fill="#231F20">
                                <path d="m34,256l26.2,26.2c108,108 283.7,108 391.7,0l26.1-26.2-26.2-26.2c-108-108-283.7-108-391.7,0l-26.1,26.2zm222,126.2c-75.8,0-151.6-28.9-209.3-86.6l-32.9-32.9c-3.7-3.7-3.7-9.7 0-13.5l32.9-32.9c115.4-115.4 303.2-115.4 418.6,0l32.9,32.9c3.7,3.7 3.7,9.7 0,13.5l-32.9,32.9c-57.7,57.7-133.5,86.6-209.3,86.6z"/>
                                <path d="m256,183.5c-40,0-72.5,32.5-72.5,72.5s32.5,72.5 72.5,72.5c40,0 72.5-32.5 72.5-72.5s-32.5-72.5-72.5-72.5zm0,164c-50.5,0-91.5-41.1-91.5-91.5 0-50.5 41.1-91.5 91.5-91.5s91.5,41.1 91.5,91.5c0,50.5-41,91.5-91.5,91.5z"/>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </button>
                      <p class="hidden text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                  </div>
                  <div class="flex items-center justify-between pt-3">
                    <button class="flex items-center bg-black hover:bg-teal-300 text-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform hover:scale-105 transition ease-in-out duration-100" type="submit">
                      <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Login
                    </button>
                    <span class="flex flex-col flex-wrap text-right align-baseline font-light text-xs text-black">
                      <span class="flex-1">Forgot Password? <nuxt-link to="/reset/email-confirmation" class="underline text-teal-600">Reset</nuxt-link></span>
                      <a @click="toggleTabs0(2)" href="javascript:void(0)" class="flex-1 underline text-teal-600">Signup</a>
                    </span>
                  </div>
                </form>
                <div class="flex flex-row justify-center flex-no-wrap w-full space-x-2 relative" style="border-top: 1px solid #f1f1f1;padding-top: 10px;padding-bottom: 10px;">
                  <span class="absolute" style="top: -9px;font-size: 14px;color: #777;background: #fbfbfb;">Or</span>
                  <div class="w-1/2 rounded focus:outline-none focus:shadow-outline transform hover:scale-105 transition ease-in-out duration-100">
                    <div class="w-full abcRioButton abcRioButtonBlue" style="height: 40px; background-color: rgb(59, 89, 152) !important;">
                      <div class="abcRioButtonContentWrapper flex items-center" style="height: 40px;">
                        <div class="abcRioButtonIcon" style="padding: 16px; background-color: rgb(46 69 117) !important;">
                          <div class="abcRioButtonSvgImageWithFallback abcRioButtonIconImage abcRioButtonIconImage18" style="width: 18px; height: 18px;">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 310 310" xml:space="preserve"><g id="XMLID_834_"><path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z" fill="#ffffff"></path></g></svg>
                          </div>
                        </div>
                        <span class="abcRioButtonContents w-full text-center">
                            <span class="text-white w-full text-left text-xs md:text-base pr-1">Facebook</span>
                          </span>
                      </div>
                    </div>
                  </div>
                  <div class="w-1/2 rounded focus:outline-none focus:shadow-outline transform hover:scale-105 transition ease-in-out duration-100">
                    <div class="w-full abcRioButton abcRioButtonBlue" style="height: 40px;">
                      <div class="abcRioButtonContentWrapper flex items-center" style="height: 40px;">
                        <div class="abcRioButtonIcon" style="padding: 16px;">
                          <div class="abcRioButtonSvgImageWithFallback abcRioButtonIconImage abcRioButtonIconImage18" style="width: 18px; height: 18px;">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48" class="abcRioButtonSvg"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path> <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path> <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path> <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path> <path fill="none" d="M0 0h48v48H0z"></path></g></svg>
                          </div>
                        </div>
                        <div class="abcRioButtonContents w-full text-center">
                          <span class="text-white w-full text-left text-xs md:text-base pr-1">Google</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div :class="{'hidden': openTab0 !== 2 , 'block': openTab0 === 2}" class="w-full max-w-xs mx-auto" >
                <form @submit.prevent="register" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" style="border: 1px solid rgba(66, 251, 183, 0.8);">
                  <div class="mb-4">
                    <label class="block text-left text-gray-700 text-sm font-bold mb-2" for="username0">
                      Name
                    </label>
                    <input required name="names" v-model="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username0" type="text" placeholder="Username">
                  </div>
                  <div class="mb-4">
                    <label class="block text-left text-gray-700 text-sm font-bold mb-2" for="email0">
                      Email
                    </label>
                    <input required name="email" v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email0" type="email" placeholder="Email">
                  </div>
                  <div class="mb-4">
                    <label class="block text-left text-gray-700 text-sm font-bold mb-2" for="phone0">
                      Phone
                    </label>
                    <input required name="phone" v-model="phone" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone0" type="tel" placeholder="cell number">
                  </div>
                  <div class="mb-6">
                    <label class="block text-left text-gray-700 text-sm font-bold mb-2" for="password0">
                      Password
                    </label>
                    <!--border-red-500-->
                    <div class="relative">
                      <input required name="password" v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password0" :type="!passwordFieldType ? 'password' : 'text'" placeholder="******************">
                      <button type="button" @click="changePasswordFieldType" class="absolute cursor-pointer inset-y-0 right-0 py-2 pl-3 pr-3 flex items-center">
                        <span class="text-gray-700 sm:text-base">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 512 512" class="w-6" enable-background="new 0 0 512 512">
                            <g>
                              <g fill="#231F20">
                                <path d="m34,256l26.2,26.2c108,108 283.7,108 391.7,0l26.1-26.2-26.2-26.2c-108-108-283.7-108-391.7,0l-26.1,26.2zm222,126.2c-75.8,0-151.6-28.9-209.3-86.6l-32.9-32.9c-3.7-3.7-3.7-9.7 0-13.5l32.9-32.9c115.4-115.4 303.2-115.4 418.6,0l32.9,32.9c3.7,3.7 3.7,9.7 0,13.5l-32.9,32.9c-57.7,57.7-133.5,86.6-209.3,86.6z"/>
                                <path d="m256,183.5c-40,0-72.5,32.5-72.5,72.5s32.5,72.5 72.5,72.5c40,0 72.5-32.5 72.5-72.5s-32.5-72.5-72.5-72.5zm0,164c-50.5,0-91.5-41.1-91.5-91.5 0-50.5 41.1-91.5 91.5-91.5s91.5,41.1 91.5,91.5c0,50.5-41,91.5-91.5,91.5z"/>
                              </g>
                            </g>
                          </svg>
                        </span>
                      </button>
                      <p class="hidden text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                  </div>
                  <div class="flex items-center justify-between pt-3">
                    <button class="flex items-center bg-black hover:bg-teal-300 text-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform hover:scale-105 transition ease-in-out duration-100" type="submit">
                      <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signup
                    </button>
                    <span class="flex flex-col flex-wrap text-right align-baseline font-light text-xs text-black">
                        <span class="flex flex-col flex-wrap text-right align-baseline font-light text-xs text-black">
                          Already have an account? <a @click="toggleTabs0(1)" href="javascript:void(0)" class="flex-1 underline text-teal-600">Login</a>
                        </span>
                      </span>
                  </div>
                </form>
              </div>
            </div>
            <div :class="{'hidden': openTab !== 2 , 'block': openTab === 2}" class="flex flex-col text-left w-full py-8">
              <div class="px-5 py-6 w-full sm:rounded-md sm:overflow-hidden mx-auto" >
                <div class="md:grid md:grid-cols-2 md:gap-3">
                  <div class="flex flex-col">
                    <label for="duration" class="block text-gray-700 text-base font-bold mb-1">
                      Duration
                    </label>
                    <select id="duration" v-model="form.duration" class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4">
                      <optgroup label="Deadline">
                        <option v-for="[key, value] of Object.entries(duration)" :value="{duration: key, price: value}" >{{ key }}</option>
                      </optgroup>
                    </select>
                    <label for="paperType" class="block text-gray-700 text-base font-bold mb-1">
                      Type of paper
                    </label>
                    <select id="paperType" v-model="form.paper_type" class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4">
                      <optgroup label="Paper">
                        <option v-for="subject in subjects" :value="subject">{{ subject }}</option>
                      </optgroup>
                    </select>
                    <label for="academic" class="block text-gray-700 text-base font-bold mb-1">
                      Academic level
                    </label>
                    <select id="academic" @change="setFirstDuration" v-model="form.level" class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4">
                      <optgroup label="Academic Levels">
                        <option v-for="data in storedata" :key="data.id" :value="data.id" >{{ data.level }}</option>
                      </optgroup>
                    </select>
                    <label for="subjects" class="block text-gray-700 text-base font-bold mb-1">
                      Subject, Discipline
                    </label>
                    <select id="subjects" v-model="form.subject" class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4">
                      <optgroup label="Subject, Discipline">
                        <option v-for="subject in subjects0" :value="subject">{{ subject }}</option>
                      </optgroup>
                    </select>
                    <label for="topic" class="block text-gray-700 text-base font-bold mb-1">
                      Topic
                    </label>
                    <input id="topic" v-model="form.topic" class="w-full rounded hover:bg-gradient-to-r py-3 px-3 form-input border border-gray-300 shadow-sm focus:outline-none focus:shadow-outline focus:bg-gradient-to-r transition duration-150 ease-in-out" placeholder="Writers Choice" type="text">
                  </div>
                  <div class="flex flex-col">
                    <div class="md:grid md:grid-cols-2 mb-2 sm:text-base sm:leading-5">
                      <div class="mr-1">
                        <label for="sources" class="block text-gray-700 text-base font-bold mb-1 text-center">
                          Sources
                        </label>
                        <div class="flex ml-1 border border-gray-300 rounded-3xl h-10">
                          <button class="w-1/3 bg-gray-400 rounded-l-3xl" @click="form.sources > 0 ? form.sources-- : form.sources = 0">-</button>
                          <input id="sources" class="w-1/3 form-input bg-white hover:bg-gradient-to-r text-center" type="number" v-model="form.sources" />
                          <button class="w-1/3 bg-gray-400 rounded-r-3xl" @click="form.sources++">+</button>
                        </div>
                      </div>
                      <div class="ml-1">
                        <label for="format" class="block text-gray-700 text-base font-bold mb-1">
                          Paper Format
                        </label>
                        <select id="format" v-model="form.format" class="w-full rounded hover:bg-gradient-to-r py-3 px-3 form-input border border-gray-300 shadow-sm focus:outline-none focus:shadow-outline focus:bg-gradient-to-r transition duration-150 ease-in-out">
                          <optgroup label="Paper Format">
                            <option v-for="value of formats" :value="value" >{{ value }}</option>
                          </optgroup>
                        </select>
                      </div>
                    </div>

                    <label for="details" class="block text-gray-700 text-base font-bold mb-1">
                      Paper details
                    </label>
                    <textarea id="details" v-model="form.details" class="mb-8 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" placeholder="Add details" type="text" style="min-height: 85px;">
                    </textarea>

                    <div id="dragBox" @drop="dropHandler" @dragover="handleDragOver" @dragleave="handleDragLeave" @dragenter="handleDragEnter">
                      <input id="fileUploader" @change="change" accept="text/plain,image/jpeg,image/jpeg,image/png,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/x-iwork-pages-sffpages" multiple="" type="file" autocomplete="off" tabindex="-1" class="hidden h-full w-full" style="z-index: 2;">
                      <span class="flex items-center">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M403.002 217.001C388.998 148.002 328.998 96 256 96c-57.998 0-107.998 32.998-132.998 81.001C63.002 183.002 16 233.998 16 296c0 65.996 53.999 120 120 120h260c55 0 100-45 100-100 0-52.998-40.996-96.001-92.998-98.999zM288 276v76h-64v-76h-68l100-100 100 100h-68z"></path>
                        </svg>
                        <span>Drop files here or click</span>
                      </span>
                    </div>
                    <ul class="mt-2 previewImgTab">
                      <li v-for="upload in form.uploads">{{ upload.name }} - {{ upload.size }} bytes<svg @click="removeFile(upload)" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path></svg></li>
                    </ul>
                  </div>
                </div>
                <button @click="toggleTabs(3)" type="button" class="mt-8 bg-black hover:bg-teal-300 text-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform hover:scale-105 transition ease-in-out duration-100">Proceed to options</button>
              </div>
            </div>
            <div :class="{'hidden': openTab !== 3 , 'block': openTab === 3}" class="flex flex-col text-left w-full py-8">
              <div class="px-5 py-6 w-full sm:rounded-md sm:overflow-hidden mx-auto" >
                <div class="md:grid md:grid-cols-2 md:gap-3">
                  <div class="flex flex-col">
                    <div class="md:grid md:grid-cols-2 mb-2 sm:text-base sm:leading-5">
                      <div class="">
                        <label for="username" class="block text-gray-700 text-base font-bold mb-1 text-center">
                          No. of Pages <span class="font-light">({{ (form.spacing === 'Double') ? '275 Words' : '550 Words' }})</span>
                        </label>
                        <div class="flex ml-1 border border-gray-300 rounded-3xl h-10">
                          <button class="w-1/3 bg-gray-400 rounded-l-3xl" @click="form.pages > 0 ? form.pages-- : form.pages = 0">-</button>
                          <input class="w-1/3 form-input bg-white hover:bg-gradient-to-r text-center" type="number" v-model="form.pages" />
                          <button class="w-1/3 bg-gray-400 rounded-r-3xl" @click="form.pages++">+</button>
                        </div>
                      </div>
                      <div class="">
                        <label for="spacing" class="block text-gray-700 text-base font-bold mb-1 text-center">
                          Spacing <span class="font-light">({{ (form.spacing === 'Double') ? '275 Words' : '550 Words' }})</span>
                        </label>
                        <div class="flex ml-1 border border-gray-300 rounded-3xl h-10">
                          <button class="w-1/2" :class="{'bg-gray-400 rounded-l-3xl': form.spacing === 'Single'}" @click="form.spacing = 'Single'">Single</button>
                          <input id="spacing" class="hidden" type="text" v-model="form.spacing" />
                          <button class="w-1/2" :class="{'bg-gray-400 rounded-r-3xl': form.spacing === 'Double'}" @click="form.spacing = 'Double'">Double</button>
                        </div>
                      </div>
                    </div>
                    <div class="mt-2 mb-4">

                      <div class="flex items-center hidden">
                        <input id="advanced" type="checkbox" v-model="form.advanced_writer" class="form-radio h-4 w-4 transition duration-150 ease-in-out">
                        <label for="advanced" class="ml-3">
                          <span class="block mt-1 text-gray-700 font-normal text-base text-left">Advanced Writer (+25%)</span>
                        </label>
                      </div>

                      <div class="mt-4 flex items-center hidden">
                        <input id="editing" type="checkbox" v-model="form.additional_editing" class="form-radio h-4 w-4 transition duration-150 ease-in-out">
                        <label for="editing" class="ml-3">
                          <span class="block mt-1 text-gray-700 font-normal text-base text-left">Additional editing (+15%)</span>
                        </label>
                      </div>

                    </div>
                    <label for="names" class="block text-gray-700 text-base font-bold mb-1">
                      Name
                    </label>
                    <input v-model="form.name" id="names" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" placeholder="John Doe" type="text">
                    <label for="phone" class="block text-gray-700 text-base font-bold mb-1">
                      Phone
                    </label>
                    <input v-model="form.phone" id="phone" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" placeholder="cell number" type="text">

                  </div>
                  <div class="flex flex-col">
                    <div class="md:grid md:grid-cols-2 mb-2 sm:text-base sm:leading-5">
                      <div class="">
                        <label for="username" class="block text-gray-700 text-base font-bold mb-1 text-center">
                          Number of slides
                        </label>
                        <div class="flex ml-1 border border-gray-300 rounded-3xl h-10">
                          <button class="w-1/3 bg-gray-400 rounded-l-3xl" @click="form.slides > 0 ? form.slides-- : form.slides = 0">-</button>
                          <input class="w-1/3 form-input bg-white hover:bg-gradient-to-r text-center" type="number" v-model="form.slides" />
                          <button class="w-1/3 bg-gray-400 rounded-r-3xl" @click="form.slides++">+</button>
                        </div>
                      </div>
                      <div class="">
                        <label for="charts" class="block text-gray-700 text-base font-bold mb-1 text-center">
                          Number of charts
                        </label>
                        <div class="flex ml-1 border border-gray-300 rounded-3xl h-10">
                          <button class="w-1/3 bg-gray-400 rounded-l-3xl" @click="form.charts > 0 ? form.charts-- : form.charts = 0">-</button>
                          <input id="charts" class="w-1/3 form-input bg-white hover:bg-gradient-to-r text-center" type="number" v-model="form.charts" />
                          <button class="w-1/3 bg-gray-400 rounded-r-3xl" @click="form.charts++">+</button>
                        </div>
                      </div>
                    </div>
                    <div class="mt-2 mb-4">

                      <div class="flex items-center">
                        <input id="dCopies" type="checkbox" v-model="form.digital_copies" class="form-radio h-4 w-4 transition duration-150 ease-in-out">
                        <label for="dCopies" class="ml-3">
                          <span class="block mt-1 text-gray-700 font-normal text-base text-left">Digital copies of sources used ($9.99)</span>
                        </label>
                      </div>

                      <div class="mt-4 flex items-center">
                        <input id="draft" type="checkbox" v-model="form.initial_draft" class="form-radio h-4 w-4 transition duration-150 ease-in-out">
                        <label for="draft" class="ml-3">
                          <span class="block mt-1 text-gray-700 font-normal text-base text-left">Initial Draft (+10%)</span>
                        </label>
                      </div>

                      <div class="mt-4 flex items-center">
                        <input id="summary" type="checkbox" v-model="form.one_page_summary" class="form-radio h-4 w-4 transition duration-150 ease-in-out">
                        <label for="summary" class="ml-3">
                          <span class="block mt-1 text-gray-700 font-normal text-base text-left">One-page summary ($17.99)</span>
                        </label>
                      </div>

                      <div class="mt-4 flex items-center">
                        <input id="report" type="checkbox" v-model="form.plagiarism_report" class="form-radio h-4 w-4 transition duration-150 ease-in-out">
                        <label for="report" class="ml-3">
                          <span class="block mt-1 text-gray-700 font-normal text-base text-left">Plagiarism report ($7.99)</span>
                        </label>
                      </div>

                    </div>
                    <div class="md:grid md:grid-cols-2 mb-2 sm:text-base sm:leading-5">
                      <div class="">
                        <label for="writer" class="block text-gray-700 text-base font-bold mb-1">
                          Preferred writer
                        </label>
                        <input v-model="form.writer_id" id="writer" class="w-full mr-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" placeholder="Writer's ID" type="text">
                      </div>
                      <div class="">
                        <label for="discount" class="block text-gray-700 text-base font-bold mb-1">
                          Discount code
                        </label>
                        <input v-model="form.discount_code" id="discount" class="w-full ml-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" placeholder="Discount code" type="text">
                      </div>
                    </div>
                  </div>
                </div>
                <button @click="toggleTabs(4)" type="button" class="mt-8 bg-black hover:bg-teal-300 text-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform hover:scale-105 transition ease-in-out duration-100">Proceed to checkout</button>
              </div>
            </div>
            <div :class="{'hidden': openTab !== 4 , 'block': openTab === 4}" class="flex flex-col text-left w-full py-8">
              <div class="w-full sm:rounded-md sm:overflow-hidden mx-auto" >
                <Notification :message="error" v-if="error"/>
                <div v-if="cartUIStatus === 'idle'">
                  <div class="flex flex-col justify-center items-center">
                    <div class="w-full md:w-11/12 mb-4">
                      <div class="flex items-center border-2 border-gray-200 p-6 rounded-lg" :class="{'border-teal-200' : paymentMethod === 'stripe'}">
                        <div>
                          <h2 class="text-2xl text-gray-900 font-bold title-font mb-2">Stripe <span class="opacity-75 text-sm text-gray-500">{{ totalPrice | dollar }}</span></h2>
                          <p class="leading-relaxed font-medium text-base"><span class="opacity-75 text-sm text-gray-500">{{ form.paper_type }} / {{ form.pages }} Pages / {{ levelName }} / Deadline {{ form.duration.duration }}</span></p>
                        </div>
                        <input v-model="paymentMethod" class="ml-auto w-5 h-5" name="payment_method" value="stripe" type="radio" />
                      </div>
                      <div v-show="paymentMethod === 'stripe'" class="px-5 rounded-lg border-2 border-teal-200 mt-2 py-6">
                        <h3 class="font-bold text-lg mb-4">Please enter your payment details:</h3>
                        <label for="email" class="font-semibold text-base mt-2 mb-2">Email</label>
                        <br />
                        <input id="email" type="email" v-model="stripeEmail" class="mt-2 mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="name@host.tld" />
                        <br />
                        <label for="card" class="font-semibold text-base mt-2">Credit Card</label>
                        <br />
                        <small class="font-light hidden">
                          Test using these Stripe test credit card numbers with any CVC, postal code, and expiration date in the future:
                          <ul>
                            <li>
                              <span class="cc-number">4242 4242 4242 4242</span>
                            </li>
                            <li>
                              <span class="cc-number">4000 0027 6000 3184</span> (requires authentication, will trigger a pop-up)
                            </li>
                            <li>
                              <span class="cc-number">4000 0000 0000 9995</span> (will decline with a decline code of insufficient funds)
                            </li>
                          </ul>
                        </small>
                        <card
                          class="font-mono mt-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="card"
                          :class="{ complete }"
                          stripe="pk_live_nUyynGrCMSH1QglZbmMexhMX"
                          :options="stripeOptions"
                          @change="complete = $event.complete"
                        />
                        <small class="text-red-600">{{error}}</small>
                        <button
                          type="button"
                          tabindex="0"
                          role="button"
                          aria-pressed="false"
                          class="flex items-center mt-8 bg-black hover:bg-teal-300 text-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform hover:scale-105 transition ease-in-out duration-100"
                          @click="pay"
                          :disabled="!complete || !stripeEmail || loading"
                        >
                          <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Pay with credit card
                        </button>
                      </div>
                    </div>
                    <div class="w-full md:w-11/12">
                      <div class="flex items-center border-2 border-gray-200 p-6 rounded-lg" :class="{'border-teal-200' : paymentMethod === 'paypal'}">
                        <div>
                          <h2 class="text-2xl text-gray-900 font-bold title-font mb-2">Paypal <span class="opacity-75 text-sm text-gray-500">{{ totalPrice | dollar }}</span></h2>
                          <p class="leading-relaxed font-medium text-base"><span class="opacity-75 text-sm text-gray-500">{{ form.paper_type }} / {{ form.pages }} Pages / {{ levelName }} / Deadline {{ form.duration.duration }}</span></p>
                        </div>
                        <input v-model="paymentMethod" class="ml-auto w-5 h-5" name="payment_method" value="paypal" type="radio" />
                      </div>
                      <div v-show="paymentMethod === 'paypal'" class="px-5 rounded-lg border-2 border-teal-200 mt-2 py-6">
                        <div id="smart-button-container">
                          <div style="text-align: center;">
                            <div id="paypal-button-container" :class="{'animate-pulse': paymentLoading }"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else-if="cartUIStatus === 'success'" class="flex flex-col justify-center items-center h-64">
                  <svg class="animate-pulse green-tick -ml-1 mr-3 h-24 w-24 text-green-600" xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 48 48" aria-hidden="true">
                    <circle class="circle" fill="currentColor" cx="24" cy="24" r="22"/>
                    <path class="tick" fill="none" stroke="#FFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14 27l5.917 4.917L34 17"/>
                  </svg>
                  <h2 class="text-gray-700 mb-2 mt-5 font-bold -ml-6 text-center">Payment<br>Complete</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="md:ml-auto col-span-1 mt-6 mb-12 relative h-full">
            <div class="flex px-4 from-green-400 to-cyan-500 pt-5 border pb-3 flex-col no-wrap w-full lg:w-64 shadow-xl rounded-lg sm:overflow-hidden md:sticky md:top-10">
              <h2 class="text-2xl font-bold leading-tight mb-4 text-gray-700">
                Order Information
              </h2>
              <div class="grid pb-2 text-lg font-semibold text-gray-700" style="grid-row-gap: 5px;">
                <div class="grid innerGrid">
                  <div class="h-full flex flex-col">
                    <span>Paper</span>
                  </div>
                  <ul class="font-normal text-base text-right">
                    <li>{{ form.paper_type }}</li>
                  </ul>
                </div>
                <div class="grid innerGrid">
                  <div class="h-full flex flex-col">
                    <span>Level</span>
                  </div>
                  <ul class="font-normal text-base text-right">
                    <li>{{ levelName }}</li>
                  </ul>
                </div>
                <div class="grid innerGrid">
                  <div class="h-full flex flex-col">
                    <span>Deadline</span>
                  </div>
                  <ul class="font-normal text-base text-right">
                    <li>{{ form.duration.duration }}</li>
                  </ul>
                </div>
                <div class="grid innerGrid">
                  <div class="h-full flex flex-col">
                    <span>Pages</span>
                  </div>
                  <ul class="font-normal text-base text-right">
                    <li>{{ form.pages }} ({{ form.spacing }})</li>
                  </ul>
                </div>
                <div class="grid innerGrid">
                  <div class="h-full flex flex-col">
                    <span>Paper format</span>
                  </div>
                  <ul class="font-normal text-base text-right">
                    <li>{{ form.format }}</li>
                  </ul>
                </div>
                <div class="grid innerGrid">
                  <div class="h-full flex flex-col">
                    <span>Sources</span>
                  </div>
                  <ul class="font-normal text-base text-right">
                    <li>{{ form.sources }}</li>
                  </ul>
                </div>
                <div class="grid innerGrid">
                  <div class="h-full flex flex-col">
                    <span>Slides</span>
                  </div>
                  <ul class="font-normal text-base text-right">
                    <li>{{ form.slides }}</li>
                  </ul>
                </div>
                <div class="grid innerGrid">
                  <div class="h-full flex flex-col">
                    <span>Charts</span>
                  </div>
                  <ul class="font-normal text-base text-right">
                    <li>{{ form.charts }}</li>
                  </ul>
                </div>
                <div class="grid innerGrid">
                  <div class="h-full flex flex-col">
                    <span>Discount</span>
                  </div>
                  <ul class="font-normal text-base text-right">
                    <li>{{ form.discount_code }}</li>
                  </ul>
                </div>
                <div class="grid innerGrid">
                  <div class="h-full flex flex-col">
                    <span>Extra options:</span>
                  </div>
                  <ul class="font-normal text-base text-right">
                    <li v-if="advancedWriter">Advanced writer</li>
                    <li v-if="additionalEditing">Additional editing</li>
                    <li v-if="digitalCopies">Digital copies of sources</li>
                    <li v-if="initialDraft">Initial draft</li>
                    <li v-if="onePageSummary">Page summary</li>
                    <li v-if="plagiarismReport">Plagiarism report</li>
                  </ul>
                </div>
              </div>
              <div class="border-t px-1 py-3 text-gray-700 font-medium text-2xl flex">
                <span class="mr-auto font-bold">Total</span>
                <span class="ml-auto font-bold">{{ totalPrice | dollar }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions, mapMutations } from 'vuex'
import Notification from '@/components/Notification';
import { Card, handleCardPayment } from "vue-stripe-elements-plus";
export default {
  auth: false,
  head() {
    return {
      title: "Place Order",
      script: [
        { src: 'https://js.stripe.com/v3/' },
        { src: 'https://www.paypal.com/sdk/js?client-id=AYHrUgvtxhEEASQqu_wD-xzk4kk7jAlXuPnqc5oEiDy_WhfRHn5o3GkSrI013WBMZIwh1ue3Zn8YXLlw&currency=USD', 'data-sdk-integration-source': 'button-factory' }
      ],
    }
  },
  components: {
    Notification,
    Card
  },
  mounted() {
    if (this.$auth.loggedIn) {
      this.toggleTabs(2);
      this.form.name = this.$auth.user.name;
      this.form.phone = this.$auth.user.phone;
      this.form.email = this.$auth.user.email;
      this.stripeEmail = this.$auth.user.email;
    } else {
      this.toggleTabs(1)
    }
    this.form.paper_type = this.subjects[0];
    this.form.subject = this.subjects0[0];
    this.form.format = this.formats[0];
    this.form.duration = {
      duration: Object.entries(this.duration)[Object.entries(this.duration).length - 1][0],
      price: Object.entries(this.duration)[Object.entries(this.duration).length - 1][1],
    };
    this.handleFileUploadClick();

    this.form = {
      ...this.form,
      ...this.currentFormData
    }
  },
  data() {
    return {
      paypalRendered: false,
      paymentMethod: 'stripe',
      paymentLoading: false,
      username: '',
      account_id: 1,
      email: '',
      password: '',
      phone: '',
      complete: false,
      stripeEmail: null,
      stripeOptions: {
      },
      loading: false,
      openTab: 1,
      openTab0: 1,
      form: {
        uploads: [],
            level: 1,
        topic: null,
            subject: null,
        paper_type: null,
        sources: 0,
        format: null,
            duration: {
              duration: null,
              price: null
            },
            pages: 1,
        details: null,
        spacing: 'Double',
        charts: 0,
        slides: 0,
        phone: null,
        name: null,
        advanced_writer: false,
        additional_editing: false,
        digital_copies: false,
        initial_draft: false,
        one_page_summary: false,
        plagiarism_report: false,
        writer_id: null,
        discount_code: null,
      },
      login: {
        username: '',
        password: ''
      },
      error: null,
      passwordFieldType: false,
      dbID: null,
    }
  },
  computed: {
    ...mapState(["storedata", "cartUIStatus"]),
    ...mapGetters(["currentToken","clientSecret", "currentFormData"]),
    advancedWriter() {
      return this.form.advanced_writer
    },
    additionalEditing() {
      return this.form.additional_editing
    },
    digitalCopies() {
      return this.form.digital_copies
    },
    initialDraft() {
      return this.form.initial_draft
    },
    onePageSummary() {
      return this.form.one_page_summary
    },
    plagiarismReport() {
      return this.form.plagiarism_report
    },
    duration() {
      return this.storedata.filter(el => el.id === this.form.level)[0].deadline;
    },
    subjects() {
      return this.storedata.filter(el => el.id === this.form.level)[0].subjects;
    },
    subjects0() {
      return this.storedata.filter(el => el.id === this.form.level)[0].subjects0;
    },
    formats() {
      return this.storedata.filter(el => el.id === this.form.level)[0].format;
    },
    levelName() {
      return this.storedata.filter(el => el.id === this.form.level)[0].level;
    },
    totalPrice() {
      let doubleSpacing = (this.form.spacing === "Double") ? 1 : 2;
      let slidesPricing = this.form.slides * 6.5;
      let chartsPricing = this.form.charts * 5;
      let priceBeforeExtras = (this.form.duration.price * this.form.pages) * doubleSpacing + slidesPricing + chartsPricing;
      let additionalEditPrice = (!this.form.additional_editing) ? 0 : 15/100 * priceBeforeExtras;
      let advancedWriterPrice = (!this.form.advanced_writer) ? 0 : 25/100 * priceBeforeExtras;
      let initialDraftPrice = (!this.form.initial_draft) ? 0 : 10/100 * priceBeforeExtras;
      let onePageSummaryPrice = (!this.form.one_page_summary) ? 0 : 10.00;
      let plagiarismReportPrice = (!this.form.plagiarism_report) ? 0 : 5;
      let digitalCopiesPrice = (!this.form.digital_copies) ? 0 : 9.99;
      return (this.form.pages === 0) ? 0 : priceBeforeExtras + additionalEditPrice + advancedWriterPrice + initialDraftPrice + onePageSummaryPrice + digitalCopiesPrice + plagiarismReportPrice
    }
  },
  watch: {
    'paymentMethod': {
      handler() {
        if (this.paymentMethod === 'paypal' && !this.paypalRendered) this.initPayPalButton()

        console.log("Payment method changed", this.paymentMethod);
      }
    },
  },
  methods: {
    ...mapActions(['sendAdminMail', 'createPaymentIntent']),
    ...mapMutations(['setToken','updateCartUI']),
    initPayPalButton() {
      this.paypalRendered = true;
      setTimeout(() => {
        paypal.Buttons({
          style: {
            shape: 'rect',
            color: 'gold',
            layout: 'vertical',
            label: 'paypal',
          },
          createOrder: async () => {
            //start animation animation overlay
            this.paymentLoading = true;
            const files = await this.toBase64(this.form.uploads);
            let filesFile = this.form.uploads;
            this.form.uploads = [];
            for (let i = 0; i < files.length; i++) {
              let public_id = 'ordersdoc' + Math.random().toString(36).substr(2, 16);
              this.form.uploads.push(await this.$cloudinary.upload(files[i], {
                public_id: public_id,
                folder: "orders",
                upload_preset: 'ybfqkqyu'
              }));
            }
            let order = {
              amount: this.totalPrice,
              ...this.form
            };

            let response;

            try {
              response = await this.$axios.post('/api/transactions?paypal_intent=true', {
                  order: order
              });
            } catch (e) {
              console.log("create order error", e);
            }

            this.dbID = response.data.dbID;
            // end animation overlay


            setTimeout(async () => {
              try {

                let formData0 = new FormData();
                if (filesFile.length > 0) {
                  for (let i = 0; i < filesFile.length; i++) {
                    formData0.append('attachments[]', filesFile[i]);
                  }
                }
                formData0.append('order', JSON.stringify(order));

                await this.sendAdminMail(formData0);
              } catch (e) {
                console.log("send mail error", e);
              }

              this.paymentLoading = false;

            },3500);

            return response.data.orderID
          },
          onApprove: async (data) => {
            // start animation overlay
            try {
              const response = await this.$axios.post('/api/transactions?paypal_capture_intent=true', {
                orderID: data.orderID,
                dbID: (data.dbID !== null && data.dbID !== undefined) ? data.dbID : this.dbID,
              });
              this.$toast.success(response.data.result.status, {
                theme: "outline",
                position: "bottom-left",
                duration : 5000
              });
              alert('Transaction funds captured from ' + response.data.result.payer.name.given_name + response.data.result.payer.name.surname);
            } catch (e) {
              console.log("on approve error", e)
            }
            // end animation overlay
          },
          onError: (err) => {
            console.log(err);
          }
        }).render('#paypal-button-container');
      }, 500);
    },
    changePasswordFieldType() {
      this.passwordFieldType = !this.passwordFieldType
    },
    removeFile(file) {
      let index = this.form.uploads.findIndex(file0 => file0 === file);
      this.form.uploads.splice(index, 1);
    },
    change(e) {
      this.readFileUrl(e.target);
    },
    async readFileUrl(input) {
      if (input.files && input.files[0]) {
        for (let i = 0; i < input.files.length; i++) {
          this.form.uploads.push(input.files[i]);
        }
      }
    },
    async toBase64(arr) {
      function getBase64(file) {
        const reader = new FileReader();
        return new Promise(resolve => {
          reader.onload = ev => {
            resolve(ev.target.result)
          }
          reader.readAsDataURL(file)
        })
      }
      const promises = [];
      for (let i = 0; i < arr.length; i++) {
        promises.push(getBase64(arr[i]));
      }
      return await Promise.all(promises);
    },
    dropHandler(ev) {
      ev.preventDefault();
      if (ev.dataTransfer.items) {
        for (let i = 0; i < ev.dataTransfer.items.length; i++) {
          if (ev.dataTransfer.items[i].kind === 'file') {
            let file = ev.dataTransfer.items[i].getAsFile();
            this.form.uploads.push(file);
            document.querySelector('#dragBox > span > span').innerText = 'Drop files here or click';
            document.querySelector('#dragBox').style.borderColor = '2px dashed var(--inputBorderColor)';
          }
        }
      } else {
        for (let i = 0; i < ev.dataTransfer.files.length; i++) {
          this.form.uploads.push(ev.dataTransfer.files[i]);
          document.querySelector('#dragBox > span > span').innerText = 'Drop files here or click';
          document.querySelector('#dragBox').style.borderColor = '2px dashed var(--inputBorderColor)';
        }
      }
    },
    handleFileUploadClick() {
      const fileSelect = document.getElementById("dragBox"),
        fileElem = document.getElementById("fileUploader");
      fileSelect.addEventListener("click", function (e) {
        if (fileElem) {
          fileElem.click();
        }
      }, false);
    },
    handleDragOver(ev) {
      ev.preventDefault();
      console.log('File(s) in drop zone');
      document.querySelector('#dragBox').style.borderColor = 'rgb(66, 251, 183)';
      document.querySelector('#dragBox > span > span').innerText = 'Drop it like its hot';
    },
    handleDragEnter(ev) {
      ev.preventDefault();
    },
    handleDragLeave(ev) {
      ev.preventDefault();
      document.querySelector('#dragBox > span > span').innerText = 'Drop files here or click';
      document.querySelector('#dragBox').style.borderColor = '2px dashed var(--inputBorderColor)';
    },
    setFirstDuration() {
      this.form.duration = {
        duration: Object.entries(this.duration)[Object.entries(this.duration).length - 1][0],
        price: Object.entries(this.duration)[Object.entries(this.duration).length - 1][1] * this.form.pages,
      };
    },
    toggleTabs(tabNumber){
      if (this.$auth.loggedIn) {
        this.openTab = tabNumber
        return
      }

      this.$toast.show('Kindly Login to continue', {
        theme: "outline",
        position: "bottom-center",
        duration : 5000
      })
    },
    toggleTabs0(tabNumber){
      this.openTab0 = tabNumber
    },
    async userLogin() {
      try {
        this.loading = true;
        let response = await this.$auth.loginWith('local', { data: this.login });
        this.loading = false;
        this.setToken(response.data.token);
        this.toggleTabs(2)
        this.$toast.success('Logged In!', {
          theme: "outline",
          position: "bottom-left",
          duration : 5000
        });
        if (this.$auth.loggedIn) {
          this.toggleTabs(2);
          this.form.name = this.$auth.user.name;
          this.form.phone = this.$auth.user.phone;
          this.form.email = this.$auth.user.email;
          this.stripeEmail = this.$auth.user.email;
        } else {
          this.toggleTabs(1)
        }
      } catch (e) {
        this.loading = false;
        if (e.response.data.message) {
          this.$toast.error(e.response.data.message, {
            theme: "outline",
            position: "bottom-left",
            duration: 5000
          });
        }
      }
    },
    async register() {
      this.loading = true;
      try {
        let signupRes = await this.$axios.post('api/signup', {
          name: this.username,
          email: this.email,
          phone: this.phone,
          password: this.password,
          account_id: this.account_id
        })
        this.loading = false;
        this.$toast.success('Registered!', {
          theme: "outline",
          position: "bottom-left",
          duration : 5000
        });
        let result = await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          },
        });
        this.toggleTabs(2)
        this.$toast.success('Logged In!', {
          theme: "outline",
          position: "bottom-left",
          duration : 5000
        });
        if (this.$auth.loggedIn) {
          this.toggleTabs(2);
          this.form.name = this.$auth.user.name;
          this.form.phone = this.$auth.user.phone;
          this.form.email = this.$auth.user.email;
          this.stripeEmail = this.$auth.user.email;
        } else {
          this.toggleTabs(1)
        }
      } catch (e) {
        this.loading = false;
        console.log(e.response.data)
        if (e.response.data.message) {
          this.$toast.error(e.response.data.message, {
            theme: "outline",
            position: "bottom-left",
            duration: 5000
          });
        } else {
          this.$toast.error(e.response.data.error.meta.target, {
            theme: "outline",
            position: "bottom-left",
            duration: 5000
          });
        }
      }
    },
    async pay() {
      this.loading = true;
      const files = await this.toBase64(this.form.uploads);
      let filesFile = this.form.uploads;
      this.form.uploads = [];
      for (let i = 0; i < files.length; i++) {
        let public_id = 'ordersdoc' + Math.random().toString(36).substr(2, 16);
        this.form.uploads.push(await this.$cloudinary.upload(files[i], {
          public_id: public_id,
          folder: "orders",
          upload_preset: 'ybfqkqyu'
        }));
      }
      let order = {
        amount: Math.round((this.totalPrice + Number.EPSILON) * 100) / 100,
        ...this.form
      };
      let formData0 = new FormData();
      if (filesFile.length > 0) {
        for (let i = 0; i < filesFile.length; i++) {
          formData0.append('attachments[]', filesFile[i]);
        }
      }

      formData0.append('order', JSON.stringify(order));
      this.createPaymentIntent({order}).then(result => {
        handleCardPayment(this.clientSecret, {
          receipt_email: this.stripeEmail
        }).then(result => {
          this.loading = false;
          if (result.error) {
            this.error = result.error.message;
            this.$toast.error(this.error, {
              theme: "outline",
              position: "bottom-left",
              duration: 5000
            });
            setTimeout(() => (this.error = ""), 3000);
          } else if (
            result.paymentIntent &&
            result.paymentIntent.status === "succeeded"
          ) {
            this.updateCartUI("success");
            this.$toast.success("Payment" + result.paymentIntent.status, {
              theme: "outline",
              position: "bottom-left",
              duration : 5000
            });
            this.sendAdminMail(formData0);
            setTimeout(this.clearCart, 5000);
          } else {
            this.error = "Some unknown error occurred";
            this.$toast.error(this.error, {
              theme: "outline",
              position: "bottom-left",
              duration: 5000
            });
            setTimeout(() => (this.error = ""), 3000);
          }
        });
      }).catch(e => {
        console.log(e);
        this.$toast.error(e.response.data.message, {
          theme: "outline",
          position: "bottom-left",
          duration: 5000
        });
      })
    },
  }
}
</script>

<style scoped>
.abcRioButtonBlue {
  background-color: #ea4335 !important;
  border: none;
  color: #fff;
}
.abcRioButton {
  -webkit-border-radius: 1px;
  border-radius: 1px;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.25);
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.25);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: background-color .218s,border-color .218s,box-shadow .218s;
  transition: background-color .218s,border-color .218s,box-shadow .218s;
  -webkit-user-select: none;
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  color: #262626;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  position: relative;
  vertical-align: middle;
  white-space: nowrap;
}
img {
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
}
.abcRioButtonBlue .abcRioButtonContentWrapper {
}
.abcRioButtonBlue .abcRioButtonIcon {
  background-color: #fef2f1;
  -webkit-border-radius: 1px;
  border-radius: 1px;
}
.abcRioButtonIcon {
  float: left;
}
.abcRioButtonContents {
  margin-left: 6px;
  margin-right: 6px;
  vertical-align: top;
}
.abcRioButtonSvg {
  display: block;
}
.innerGrid{
  grid-auto-flow: column;
  grid-column-gap: 5px;
  grid-template-columns: auto 1fr;
  align-items: center;
  justify-items: end;
}
.bg-grey-light {
  background-color: #dae4e9;
}
.text-grey-darkest {
  color: #364349;
}
#dragBox {
  color: var(--textColor);
  border-radius: var(--borderRadius);
  background-color: #f7f7f7;
  border: 2px dashed var(--inputBorderColor);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: 700;
  text-align: center;
  font-size: 14px;
  height: 70px;
  width: 100%;
}
.previewImgTab li{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
  background-color: #f7f7f7;
  color: var(--textColor);
  padding: 10px 15px;
  margin-top: 5px;
}
</style>
