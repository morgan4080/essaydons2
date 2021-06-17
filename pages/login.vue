<template>
  <div>
    <transition
      enter-active-class="transition ease-in-out duration-500"
      leave-active-class="transition ease-in-out duration-200"
      enter-class="transform -translate-y-6"
      enter-to-class="transform translate-y-0"
      leave-class="transform translate-y-0"
      leave-to-class="transform -translate-y-6"
    >
    <div v-show="!showLoader">
      <div class="absolute top-0 right-0 opacity-25 " >
        <svg class="mt-3" width="846" height="741" viewBox="0 0 846 741" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <g opacity="0.2" >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M874 -14H587V294.32C598.516 225.471 658.38 173 730.5 173C802.62 173 862.484 225.471 874 294.32V-14ZM587 318.5C587 319.335 587.007 320.168 587.021 321H647C647 274.608 684.608 237 731 237C777.392 237 815 274.608 815 321H873.979C873.993 320.168 874 319.335 874 318.5C874 239.247 809.753 175 730.5 175C651.247 175 587 239.247 587 318.5ZM813 321C813 275.713 776.287 239 731 239C685.713 239 649 275.713 649 321H813ZM649.024 323H812.976C811.914 367.363 775.619 403 731 403C686.381 403 650.086 367.363 649.024 323ZM647.023 323C648.086 368.468 685.277 405 731 405C776.723 405 813.914 368.468 814.977 323H873.931C871.554 400.171 808.247 462 730.5 462C652.753 462 589.446 400.171 587.069 323H647.023ZM585 321V318.5V-14V-16H587H874H876V-14V318.5V321V323H875.932C873.554 401.275 809.352 464 730.5 464C651.648 464 587.446 401.275 585.068 323H585V321Z" fill="rgba(66, 251, 183, 0.8)" ></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M874 -14H587V294.32C598.516 225.471 658.38 173 730.5 173C802.62 173 862.484 225.471 874 294.32V-14ZM587 318.5C587 319.335 587.007 320.168 587.021 321H647C647 274.608 684.608 237 731 237C777.392 237 815 274.608 815 321H873.979C873.993 320.168 874 319.335 874 318.5C874 239.247 809.753 175 730.5 175C651.247 175 587 239.247 587 318.5ZM813 321C813 275.713 776.287 239 731 239C685.713 239 649 275.713 649 321H813ZM649.024 323H812.976C811.914 367.363 775.619 403 731 403C686.381 403 650.086 367.363 649.024 323ZM647.023 323C648.086 368.468 685.277 405 731 405C776.723 405 813.914 368.468 814.977 323H873.931C871.554 400.171 808.247 462 730.5 462C652.753 462 589.446 400.171 587.069 323H647.023ZM585 321V318.5V-14V-16H587H874H876V-14V318.5V321V323H875.932C873.554 401.275 809.352 464 730.5 464C651.648 464 587.446 401.275 585.068 323H585V321Z" fill="url(#paint0_linear)" ></path>
          </g>
          <g opacity="0.2" >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M984.966 321.153H403.671L826.996 -102.172L1242.54 313.372L817.74 738.172L402.721 323.153H984.966V321.153ZM401.368 320.628V-54.6132H399.368L399.368 321.93L0.818787 720.479L2.233 721.893L239.215 484.912L239.215 720.479H241.215L241.215 484.528H239.598L399.368 324.759L399.368 702.141H401.368V324.628L816.326 739.586L817.74 741L819.154 739.586L1243.95 314.786L1245.37 313.372L1243.95 311.958L828.41 -103.586L826.996 -105L825.581 -103.586L401.368 320.628Z" fill="rgba(66, 251, 183, 0.8)" ></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M984.966 321.153H403.671L826.996 -102.172L1242.54 313.372L817.74 738.172L402.721 323.153H984.966V321.153ZM401.368 320.628V-54.6132H399.368L399.368 321.93L0.818787 720.479L2.233 721.893L239.215 484.912L239.215 720.479H241.215L241.215 484.528H239.598L399.368 324.759L399.368 702.141H401.368V324.628L816.326 739.586L817.74 741L819.154 739.586L1243.95 314.786L1245.37 313.372L1243.95 311.958L828.41 -103.586L826.996 -105L825.581 -103.586L401.368 320.628Z" fill="url(#paint1_linear)" ></path>
          </g>
          <defs >
            <linearGradient id="paint0_linear" x1="730.5" y1="-16" x2="730.5" y2="464" gradientUnits="userSpaceOnUse" >
              <stop offset="0.354167" stop-color="rgba(66, 251, 183, 0.8)" ></stop>
              <stop offset="1" stop-color="rgba(66, 251, 183, 0.8)" ></stop>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="623.093" y1="-105" x2="623.093" y2="741" gradientUnits="userSpaceOnUse" >
              <stop offset="0.354167" stop-color="rgba(66, 251, 183, 0.8)" ></stop>
              <stop offset="1" stop-color="rgba(66, 251, 183, 0.8)" ></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="lg:block hidden absolute top-0 left-0 opacity-75" >
        <svg class="mt-12 ml-6" width="576" height="600" viewBox="0 0 576 600" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <g opacity="0.2" >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M232.215 -205L232.215 269.601L-113.172 -75.7853L226.215 -415.172L573.172 -68.2147L234.215 270.742L234.215 -205L232.215 -205ZM231.785 272L-74.7853 272L-74.7853 274L233.215 274L559.215 600L560.629 598.586L367.043 405L559.215 405L559.215 403L366.215 403L366.215 404.172L236.043 274L544.215 274L544.215 272L235.785 272L574.586 -66.8005L576 -68.2147L574.586 -69.6289L227.629 -416.586L226.215 -418L224.8 -416.586L-114.586 -77.1995L-116 -75.7853L-114.586 -74.3711L231.785 272Z" fill="rgba(66, 251, 183, 0.8)" ></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M232.215 -205L232.215 269.601L-113.172 -75.7853L226.215 -415.172L573.172 -68.2147L234.215 270.742L234.215 -205L232.215 -205ZM231.785 272L-74.7853 272L-74.7853 274L233.215 274L559.215 600L560.629 598.586L367.043 405L559.215 405L559.215 403L366.215 403L366.215 404.172L236.043 274L544.215 274L544.215 272L235.785 272L574.586 -66.8005L576 -68.2147L574.586 -69.6289L227.629 -416.586L226.215 -418L224.8 -416.586L-114.586 -77.1995L-116 -75.7853L-114.586 -74.3711L231.785 272Z" fill="url(#paint0_linear)" ></path>
          </g>
          <defs >
            <linearGradient id="paint0_linear" x1="-116" y1="91" x2="576" y2="91" gradientUnits="userSpaceOnUse" >
              <stop offset="0.354167" stop-color="rgba(66, 251, 183, 0.8)" ></stop>
              <stop offset="1" stop-color="rgba(66, 251, 183, 0.8)" ></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div>
        <div class="min-h-screen" style="background: #FBFBFB;">
          <div class="max-w-6xl mx-auto pt-40 lg:pt-60 z-10 relative px-8 lg:px-0 pb-24">
            <div class="text-gray-700 body-font lg:grid lg:grid-cols-6 lg:gap-6">
              <div class="col-span-3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <div class="w-full max-w-xs mx-auto lg:ml-0">
                  <Notification :message="error" v-if="error"/>
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
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" class="w-6 text-gray-700 sm:text-base" enable-background="new 0 0 512 512">
                            <g>
                              <g fill="#231F20">
                                <path d="m34,256l26.2,26.2c108,108 283.7,108 391.7,0l26.1-26.2-26.2-26.2c-108-108-283.7-108-391.7,0l-26.1,26.2zm222,126.2c-75.8,0-151.6-28.9-209.3-86.6l-32.9-32.9c-3.7-3.7-3.7-9.7 0-13.5l32.9-32.9c115.4-115.4 303.2-115.4 418.6,0l32.9,32.9c3.7,3.7 3.7,9.7 0,13.5l-32.9,32.9c-57.7,57.7-133.5,86.6-209.3,86.6z"/>
                                <path d="m256,183.5c-40,0-72.5,32.5-72.5,72.5s32.5,72.5 72.5,72.5c40,0 72.5-32.5 72.5-72.5s-32.5-72.5-72.5-72.5zm0,164c-50.5,0-91.5-41.1-91.5-91.5 0-50.5 41.1-91.5 91.5-91.5s91.5,41.1 91.5,91.5c0,50.5-41,91.5-91.5,91.5z"/>
                              </g>
                            </g>
                          </svg>
                        </button>
                        <p class="hidden text-red-500 text-xs italic">Please choose a password.</p>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <button class="flex items-center bg-black hover:bg-teal-300 text-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform hover:scale-105 transition ease-in-out duration-100" type="submit">
                        <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Login
                      </button>
                      <div class="flex flex-col flex-wrap text-right align-baseline font-light text-xs text-black">
                        <span class="flex-1">Forgot Password? <nuxt-link to="/reset/email-confirmation" class="underline text-black">Reset</nuxt-link></span>
                        <nuxt-link to="/register" class="flex-1 underline text-black">Signup</nuxt-link>
                      </div>
                    </div>
                  </form>
                  <div class="flex flex-row justify-center flex-no-wrap w-full space-x-2 relative" style="border-top: 1px solid #f1f1f1;padding-top: 10px;padding-bottom: 10px;">
                    <div @click="$auth.loginWith('facebook')" class="w-1/2 rounded-lg overflow-hidden shadow-lg focus:outline-none focus:shadow-outline transform hover:scale-105 transition ease-in-out duration-100">
                      <div class="w-full abcRioButton abcRioButtonBlue" style="height: 40px; background-color: rgb(59, 89, 152) !important;">
                        <div class="abcRioButtonContentWrapper flex items-center" style="height: 40px;">
                          <div class="abcRioButtonIcon" style="padding: 16px; background-color: rgb(46 69 117) !important;">
                            <div class="abcRioButtonSvgImageWithFallback abcRioButtonIconImage abcRioButtonIconImage18" style="width: 18px; height: 18px;">
                              <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 310 310" xml:space="preserve"><g id="XMLID_834_"><path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z" fill="#ffffff"></path></g></svg>
                            </div>
                          </div>
                          <span class="abcRioButtonContents w-full text-center">
                            <span class="text-white w-full text-left text-xs md:text-sm pr-1">Facebook</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div @click="$auth.loginWith('google')" class="w-1/2 rounded-lg overflow-hidden shadow-lg focus:outline-none focus:shadow-outline transform hover:scale-105 transition ease-in-out duration-100">
                      <div class="w-full abcRioButton abcRioButtonBlue" style="height: 40px;">
                        <div class="abcRioButtonContentWrapper flex items-center" style="height: 40px;">
                          <div class="abcRioButtonIcon" style="padding: 16px;">
                            <div class="abcRioButtonSvgImageWithFallback abcRioButtonIconImage abcRioButtonIconImage18" style="width: 18px; height: 18px;">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48" class="abcRioButtonSvg"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path> <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path> <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path> <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path> <path fill="none" d="M0 0h48v48H0z"></path></g></svg>
                            </div>
                          </div>
                          <div class="abcRioButtonContents w-full text-center">
                            <span class="text-white w-full text-left text-xs md:text-sm pr-1">Google</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="text-center text-gray-500 font-medium text-sm">
                    &copy;2020 EssayDons. All rights reserved.
                  </p>
                </div>
              </div>
              <div class="col-span-3 w-full">
                <svg class="object-cover object-center rounded mx-auto" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 165.72 130.57"><defs><linearGradient id="linear-gradient" x1="112.39" y1="84.59" x2="115.37" y2="48.83" gradientUnits="userSpaceOnUse"><stop offset="0.01"/><stop offset="0.08" stop-opacity="0.69"/><stop offset="0.21" stop-opacity="0.32"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="linear-gradient-2" x1="102.11" y1="70.71" x2="112.72" y2="37.22" xlink:href="#linear-gradient"/><linearGradient id="linear-gradient-3" x1="-58.18" y1="334.05" x2="-85.23" y2="311.44" gradientTransform="translate(215.85 -254.06) rotate(5.04)" xlink:href="#linear-gradient"/><linearGradient id="linear-gradient-4" x1="30.19" y1="52.82" x2="124.07" y2="71.49" gradientUnits="userSpaceOnUse"><stop offset="0.01"/><stop offset="0.13" stop-opacity="0.69"/><stop offset="0.25" stop-opacity="0.32"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="linear-gradient-5" x1="70.48" y1="49.47" x2="64.78" y2="95.84" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-6" x1="25.44" y1="64.52" x2="109.06" y2="231.77" xlink:href="#linear-gradient"/><linearGradient id="linear-gradient-7" x1="70.72" y1="93.7" x2="136.2" y2="81.86" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-8" x1="152.97" y1="92.09" x2="74.08" y2="81.05" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-9" x1="362.8" y1="-151.94" x2="370" y2="-154.28" gradientTransform="translate(-274.08 254.53) rotate(-9.52)" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-10" x1="360.02" y1="-149.42" x2="374.22" y2="-151.35" gradientTransform="translate(-283.46 239.87) rotate(-9.52)" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-11" x1="356.46" y1="-142.2" x2="375.1" y2="-138.08" gradientTransform="translate(-274.08 254.53) rotate(-9.52)" xlink:href="#linear-gradient-4"/><linearGradient id="linear-gradient-12" x1="369.53" y1="-155.48" x2="381.05" y2="-151.93" gradientTransform="translate(-274.08 254.53) rotate(-9.52)" xlink:href="#linear-gradient-4"/></defs><title>14</title><path d="M33.54,23.71c-7.89,4.46-14.88,10.87-18.87,19S10,59.88,9.58,68.8c-.42,10-.37,20,2.08,29.7,2.27,8.93,6.54,17.23,11.33,25.1,3.52,5.78,7.49,11.54,13.17,15.23a38.4,38.4,0,0,0,13.57,5,75,75,0,0,0,47.77-6.54c11-5.52,20.56-13.75,32.17-17.66,10.19-3.43,21.63-3.44,30.81-9,11.44-7,16.68-21.94,13.88-35.05s-12.65-24-24.59-30.12C143,42,135.68,40,128.86,36.77s-13.05-7.65-19.7-11.24C85.4,12.68,57.48,10.17,33.54,23.71Z" transform="translate(-9.38 -14.66)" fill="#0ef884" opacity="0.18" style="isolation:isolate"/><path d="M115,60l1.33.56a2,2,0,0,1,1.17.87,2,2,0,0,1-.07,1.37c-.18.59-.39,1.18-.62,1.76-.3.77-.65,1.53-.88,2.32a16.81,16.81,0,0,0-.24,6.09c0,.66-.84,1-1.49,1.09a7.22,7.22,0,0,1-3.69-.19.79.79,0,0,1-.3-.16.68.68,0,0,1-.14-.49C110,72.13,110,71,109.85,70a8.85,8.85,0,0,0-.33-1.61,15.38,15.38,0,0,1-.26-1.56c-.09-.42-.22-.83-.29-1.25a2.37,2.37,0,0,1,.09-1.27c.18-.44.43-.85.65-1.27a12.57,12.57,0,0,0,.62-1.41,3.89,3.89,0,0,1,.43-1,2.53,2.53,0,0,1,1.95-.9A5.37,5.37,0,0,1,115,60Z" transform="translate(-9.38 -14.66)" fill="#ffbbab"/><path d="M106.81,54.83a6.18,6.18,0,0,1-.91-1.57,8.67,8.67,0,0,1-.46-2.24,1.88,1.88,0,0,1,.06-.82c.13-.36.45-.63.55-1a.17.17,0,0,0,0-.12S106,49,105.92,49l-.42-.11a1.43,1.43,0,0,0-.16-1,.62.62,0,0,0-.58-.36c-.26,0-.39.33-.61.48s-.46.17-.65.32a1.2,1.2,0,0,0-.32.8,6.38,6.38,0,0,0,.32,2.12,19.34,19.34,0,0,0,.58,2.36,19.16,19.16,0,0,0,3.62,6.51c.62.73,3,3.61,3.94,2.87,1.33-1,.46-2.65-.46-3.44A26.38,26.38,0,0,1,106.81,54.83Z" transform="translate(-9.38 -14.66)" fill="#ffbbab"/><path d="M112.4,59.52c-.45.69-.89,1.4-1.3,2.12a1,1,0,0,0-.18.75.74.74,0,0,0,.38.38,2.27,2.27,0,0,0,2.18-.18A7.49,7.49,0,0,0,115.13,61a3.38,3.38,0,0,1,.92-.85,1.17,1.17,0,0,1,1.2,0,.73.73,0,0,1,.17,1.08c0-.32-.39-.52-.7-.44a1.44,1.44,0,0,0-.71.63,10.59,10.59,0,0,0-.66,1.07,3.11,3.11,0,0,0-.35.87,2.84,2.84,0,0,0,.75,2.08,2.68,2.68,0,0,1,.44.74,2.59,2.59,0,0,1-.1,1.29,17.5,17.5,0,0,0-.27,5.36,1.12,1.12,0,0,1-.21,1,1,1,0,0,1-.68.21c-1.15,0-2.29-.26-3.45-.23a19.17,19.17,0,0,1-2.14.11.31.31,0,0,1-.33-.41,22.3,22.3,0,0,0,.15-6,13.78,13.78,0,0,1-.44-2.77,1.36,1.36,0,0,1,.11-.6,2.15,2.15,0,0,1,.35-.5,7.92,7.92,0,0,0,1.58-3.11" transform="translate(-9.38 -14.66)" fill="#fff"/><path d="M115.31,68.77a1.08,1.08,0,0,1-.39.88,1.83,1.83,0,0,0-.24.13c-.15.14-.13.38-.16.58a3.06,3.06,0,0,1-.58,1,.89.89,0,0,0,0,1.09c.18.18.48.21.63.42s0,.89.31,1.1a.46.46,0,0,0,.57-.18,1.31,1.31,0,0,0,.17-.62q.35-3.37.64-6.77a.73.73,0,0,0-.19-.67c-.15-.21-.35-.61-.57-.72-.25.37-.06,1.17-.06,1.6C115.4,67.34,115.37,68.06,115.31,68.77Z" transform="translate(-9.38 -14.66)" fill="#020202" opacity="0.1"/><path d="M109.83,55.62a1.26,1.26,0,0,0-.25.58,1.14,1.14,0,0,0,.16.42,2.83,2.83,0,0,1,.25,1,1.36,1.36,0,0,0,.19.74,1.14,1.14,0,0,0,.88.31h.74a.5.5,0,0,1,.27,0,.44.44,0,0,1,.19.19,5.3,5.3,0,0,1,.41,1.7.62.62,0,0,0,.13.27A.52.52,0,0,0,113,61a2.21,2.21,0,0,0,1.62,0,.62.62,0,0,0,.33-.24.68.68,0,0,0,0-.45,8.15,8.15,0,0,0-.26-1.19,4.32,4.32,0,0,1-.32-1.61c0-.49.27-.94.35-1.42a2.39,2.39,0,0,0-1.41-2.46,2.84,2.84,0,0,0-2.46.18c-.27.14-.49.21-.62.5S110.07,55.21,109.83,55.62Z" transform="translate(-9.38 -14.66)" fill="#ffbbab"/><path d="M109.9,52.64a2.6,2.6,0,0,1-.07-.56c0-.64.37-1.37,1-1.39.45,0,.85.34,1.31.34a3.73,3.73,0,0,0,.56-.12,3.27,3.27,0,0,1,1.46,0,4.05,4.05,0,0,1,2.58,1.62,2.74,2.74,0,0,1,.1,3c-.33.5-.84.86-1.19,1.35a10.13,10.13,0,0,1-.55.89c-.18.21-.6.55-.9.4s-.32-.64-.53-.85a7.31,7.31,0,0,0,.59-.52.7.7,0,0,0,.16-.72c-.12-.24-.53-.29-.63,0a2.2,2.2,0,0,0-.7-1.82.9.9,0,0,0-.26-.22.91.91,0,0,0-.33,0c-.31,0-.61,0-.92,0-.53,0-.79.15-1.17-.3A2.42,2.42,0,0,1,109.9,52.64Z" transform="translate(-9.38 -14.66)" fill="#fc682d"/><path d="M112.9,58.77a.32.32,0,0,1,.23.07.38.38,0,0,1,.08.24,7.39,7.39,0,0,1,0,1.33,1.07,1.07,0,0,1-.09.34.35.35,0,0,1-.29.18c-.13,0-.24-.11-.38-.14a.5.5,0,0,0-.42.1,1.87,1.87,0,0,0-.3.33A6.56,6.56,0,0,1,111,62a6.22,6.22,0,0,1,.8-1.71.81.81,0,0,1,.36-.35c.12,0,.27,0,.35-.13s0-.38-.09-.55-.32-.41-.18-.53S112.78,58.76,112.9,58.77Z" transform="translate(-9.38 -14.66)" fill="#e0a194"/><path d="M122.54,56.41a11.24,11.24,0,0,0,1.1-1.19,6.84,6.84,0,0,0,1.5-4.25,1.25,1.25,0,0,1,0-.51.43.43,0,0,1,.35-.32.81.81,0,0,0,.22,0c.11,0,.16-.15.25-.23a.47.47,0,0,1,.5,0,1.38,1.38,0,0,1,.39.37c.16.22.32.45.46.68a1.19,1.19,0,0,1,.22.6,1.36,1.36,0,0,1-.49.89c-.31,0-.55.83-.63,1-.16.45-.34.9-.54,1.33a19,19,0,0,1-5.16,6.72c-.74.61-3.54,3-4.38,2.15-1.15-1.22,0-2.69,1-3.32A26,26,0,0,0,122.54,56.41Z" transform="translate(-9.38 -14.66)" fill="#ffbbab"/><path d="M110.45,56.66a3.37,3.37,0,0,1,.55,0,.08.08,0,0,1,.07,0,.05.05,0,0,1,0,0,1.3,1.3,0,0,1,0,.87.67.67,0,0,1-.19.28.29.29,0,0,1-.32,0,.51.51,0,0,1-.16-.24,1.7,1.7,0,0,1-.17-.91.06.06,0,0,1,0,0l0,0a.78.78,0,0,1,.34,0" transform="translate(-9.38 -14.66)" fill="#fff"/><path d="M109.27,57.34l-.09,0A.06.06,0,0,1,109.27,57.34Z" transform="translate(-9.38 -14.66)" fill="#0ef884"/><path d="M125.93,54.89a3.6,3.6,0,0,1-.45,1.54A15.76,15.76,0,0,1,117.77,64a1.23,1.23,0,0,0-.51.32,1.26,1.26,0,0,0-.21.47c-.77,3-.6,6.06-1.15,9.06a1.18,1.18,0,0,1-.31.72,1.23,1.23,0,0,1-.91.21l-.65,0a44.76,44.76,0,0,1-4.61-.49,1.07,1.07,0,0,1-.71-.32,1.09,1.09,0,0,1-.1-.78,41,41,0,0,0-.25-6.17,17.68,17.68,0,0,1,0-3,3.12,3.12,0,0,0,0-1.52,1.42,1.42,0,0,0-.24-.4,15.5,15.5,0,0,0-1.38-1.17,6.28,6.28,0,0,1-1.38-2.63c-.46-1.38-.94-2.75-1.38-4.13-.33-1,.19-1.47.94-1.85.27-.14.57-.27.88-.41A15,15,0,0,0,106.94,55a5.1,5.1,0,0,0,2.24,2.26.06.06,0,0,0-.06.06.23.23,0,0,0,.1.19c.67.62,1.35,1.23,2,1.86a1.16,1.16,0,0,0,.45.29c.2,0,.89-.18.86.19a.13.13,0,0,1,0,.06c0,.13-.12.23-.14.36a.4.4,0,0,0,.23.38.81.81,0,0,0,.46.08,1.72,1.72,0,0,0,.51-.11c.27-.11.49-.3.75-.43a2.09,2.09,0,0,1,1.24-.07,5,5,0,0,0,1.34-.08,7.76,7.76,0,0,0,3.43-1.79,39.06,39.06,0,0,0,3.78-4.24,1.38,1.38,0,0,1,.49-.41.9.9,0,0,1,.94.24A1.34,1.34,0,0,1,125.93,54.89Z" transform="translate(-9.38 -14.66)" fill="#fff"/><path d="M125.93,54.89a3.6,3.6,0,0,1-.45,1.54A15.76,15.76,0,0,1,117.77,64a1.23,1.23,0,0,0-.51.32,1.26,1.26,0,0,0-.21.47c-.77,3-.6,6.06-1.15,9.06a1.18,1.18,0,0,1-.31.72,1.23,1.23,0,0,1-.91.21l-.65,0a44.76,44.76,0,0,1-4.61-.49,1.07,1.07,0,0,1-.71-.32,1.09,1.09,0,0,1-.1-.78,41,41,0,0,0-.25-6.17,17.68,17.68,0,0,1,0-3,3.12,3.12,0,0,0,0-1.52,1.42,1.42,0,0,0-.24-.4,15.5,15.5,0,0,0-1.38-1.17,6.28,6.28,0,0,1-1.38-2.63c-.46-1.38-.94-2.75-1.38-4.13-.33-1,.19-1.47.94-1.85.27-.14.57-.27.88-.41A15,15,0,0,0,106.94,55a5.1,5.1,0,0,0,2.24,2.26.06.06,0,0,0-.06.06.23.23,0,0,0,.1.19c.67.62,1.35,1.23,2,1.86a1.16,1.16,0,0,0,.45.29c.2,0,.89-.18.86.19a.13.13,0,0,1,0,.06c0,.13-.12.23-.14.36a.4.4,0,0,0,.23.38.81.81,0,0,0,.46.08,1.72,1.72,0,0,0,.51-.11c.27-.11.49-.3.75-.43a2.09,2.09,0,0,1,1.24-.07,5,5,0,0,0,1.34-.08,7.76,7.76,0,0,0,3.43-1.79,39.06,39.06,0,0,0,3.78-4.24,1.38,1.38,0,0,1,.49-.41.9.9,0,0,1,.94.24A1.34,1.34,0,0,1,125.93,54.89Z" transform="translate(-9.38 -14.66)" fill="url(#linear-gradient)"/><path d="M108.38,62.46c-.08-.12-.15-.25-.24-.36a15.5,15.5,0,0,0-1.38-1.17,6.28,6.28,0,0,1-1.38-2.63c-.46-1.38-.94-2.75-1.38-4.13-.33-1,.19-1.47.94-1.85a1.53,1.53,0,0,1,.36.51,6.45,6.45,0,0,1,.33,1.31A8.83,8.83,0,0,0,106.89,57c.59.94,1.15,1.9,1.74,2.84a.65.65,0,0,1,.08.17.55.55,0,0,1,0,.28,4.89,4.89,0,0,0-.22,1.14C108.44,61.67,108.57,62.33,108.38,62.46Z" transform="translate(-9.38 -14.66)" fill="url(#linear-gradient-2)"/><path d="M125.93,54.89a3.6,3.6,0,0,1-.45,1.54A15.76,15.76,0,0,1,117.77,64a1.23,1.23,0,0,0-.51.32,1.26,1.26,0,0,0-.21.47c-.77,3-.6,6.06-1.15,9.06a1.18,1.18,0,0,1-.31.72,1.23,1.23,0,0,1-.91.21l-.65,0h0a1,1,0,0,1-.52-.19.86.86,0,0,1-.26-.52,22.86,22.86,0,0,1-.15-3.42,3.63,3.63,0,0,0-1.4-3,2.51,2.51,0,0,1-.63-.43.49.49,0,0,1,0-.68.6.6,0,0,1,.32-.1,15.6,15.6,0,0,0,1.94-.26,2.6,2.6,0,0,0,1.61-1c.33-.5.4-1.14.76-1.62a3.69,3.69,0,0,1,1.79-1,15,15,0,0,0,6.06-4.36c.72-.87,1.27-2.44,2.16-3.09A1.08,1.08,0,0,1,125.93,54.89Z" transform="translate(-9.38 -14.66)" fill="url(#linear-gradient-3)"/><g id="lYf0vm"><path d="M75.45,93.56a87.51,87.51,0,0,1-13.1,7.82l-.65.08-.18,0A1.21,1.21,0,0,1,60.39,100a9.36,9.36,0,0,1,.19-1.08q.87-4.08,1.75-8.15a.46.46,0,0,0-.2-.54L51.66,82.1a.42.42,0,0,0-.51-.06c-.62.32-1.26.61-1.9.9C47,84,44.83,85,42.61,86A1.16,1.16,0,0,1,41,85.37l-.13-.3s0-.11,0-.16a23.88,23.88,0,0,1,.42-2.39A104.76,104.76,0,0,1,45.4,70.31a9.75,9.75,0,0,1,4.19-5.12,12.81,12.81,0,0,1,4.8-1.57,34.71,34.71,0,0,1,3.94-.34c.41,0,.83,0,1.25,0a.66.66,0,0,0,.44-.26c1-1.46,1.94-3,3-4.4a71.83,71.83,0,0,1,4.76-6.07,75.09,75.09,0,0,1,5.56-5.12,44.77,44.77,0,0,1,6.3-4.66,44,44,0,0,1,10.68-4.39c.72-.22,1.45-.41,2.18-.61L94,37.61l.27,0a1.85,1.85,0,0,1,1.54,1.26.59.59,0,0,1,0,.13,7.93,7.93,0,0,1,.14,1,25.78,25.78,0,0,1-.1,5.27A37.12,37.12,0,0,1,94,54.55a64.93,64.93,0,0,1-3.6,8.14,41.68,41.68,0,0,1-3.86,6.4A108.54,108.54,0,0,1,79,77.94a.56.56,0,0,0-.15.61c.18.78.35,1.56.49,2.34a18.14,18.14,0,0,1,.4,4.93A9.82,9.82,0,0,1,75.45,93.56Z" transform="translate(-9.38 -14.66)" fill="#fff"/></g><path d="M58,86.26,51.7,81.35S54.41,73,58.33,63.28c.41,0,.83,0,1.25,0a.66.66,0,0,0,.44-.26c1-1.46,1.94-3,3-4.4a71.83,71.83,0,0,1,4.76-6.07,75.09,75.09,0,0,1,5.56-5.12,44.77,44.77,0,0,1,6.3-4.66,44,44,0,0,1,10.68-4.39c.72-.22,1.45-.41,2.18-.61L94,37.61l.27,0a1.85,1.85,0,0,1,1.54,1.26.59.59,0,0,1,0,.13C92.24,41.9,66.45,63.21,58,86.26Z" transform="translate(-9.38 -14.66)" fill="url(#linear-gradient-4)"/><path d="M65.23,67.65A7.52,7.52,0,0,0,67.34,66c1.23,1.63,1.66,3.71,2.49,5.57a2.2,2.2,0,0,0,.86,1.12,2.43,2.43,0,0,0,1.14.18c.77,0,1.54,0,2.31,0a5.69,5.69,0,0,0,2.38-.51c.41-.2.81-.6.69-1s-.7-.58-1.17-.58a5.75,5.75,0,0,1-1.76-.16A3.08,3.08,0,0,1,72.67,69a12.9,12.9,0,0,1-.78-2.1,24.27,24.27,0,0,0-1.52-3.56A6.68,6.68,0,0,0,69,61.43a2.87,2.87,0,0,0-2.14-.8c-1.42.15-2.34,1.59-3.66,2.13a10.16,10.16,0,0,0-1.83.64,3.71,3.71,0,0,0-.94,1A10.8,10.8,0,0,0,58.76,68,9.65,9.65,0,0,0,65.23,67.65Z" transform="translate(-9.38 -14.66)" fill="url(#linear-gradient-5)"/><path d="M67.36,59.79s2-.18,2.74.55A10.59,10.59,0,0,1,72.43,65c.18.66.4,1.3.55,2a6.61,6.61,0,0,0,.54,1.79,1.44,1.44,0,0,0,.77.69,2.68,2.68,0,0,0,.8.06,6.33,6.33,0,0,1,1,.07.39.39,0,0,1,.18.06.36.36,0,0,1,.07.17,1,1,0,0,1-.39.91,4.18,4.18,0,0,1-2.72.31c-1.1-.37-1.45-2.41-1.85-3.36-.58-1.39-1.2-2.75-1.86-4.1a1.27,1.27,0,0,0-.32-.47,1.37,1.37,0,0,0-.55-.21l-2.41-.52C66.47,61.53,67.11,60.65,67.36,59.79Z" transform="translate(-9.38 -14.66)" fill="#ffbbab"/><circle cx="68.74" cy="45.81" r="5.91" fill="#0ef884"/><circle cx="68.74" cy="45.81" r="3.93" fill="#473f47"/><path d="M60.69,63.63,51.32,82.19l-8.89,4s-1.73,1.15-1.56-1.21S45.63,69.36,47,67.52,52.54,62.32,60.69,63.63Z" transform="translate(-9.38 -14.66)" fill="#0ef884"/><path d="M78.77,78.15,62.33,90.77l-2.4,11.14a2.57,2.57,0,0,0,3.18.76c2.25-.75,13.88-8.5,15.33-10.25S82.07,85.71,78.77,78.15Z" transform="translate(-9.38 -14.66)" fill="#0ef884"/><path d="M87.9,39.16l7.92,6.12s.41-6.34,0-7.67S87.9,39.16,87.9,39.16Z" transform="translate(-9.38 -14.66)" fill="#0ef884"/><polygon points="42.33 66.7 40.76 69.49 51.31 77.59 53.74 75.51 42.33 66.7" fill="#0ef884"/><path d="M50.14,84.14s-30.46,32.44-10.48,47.34,43.07,5.08,43.07,5.08-33,7.29-37.81-11.22c-2.81-10.83,15.77-33.09,15.77-33.09Z" transform="translate(-9.38 -14.66)" opacity="0.36" fill="url(#linear-gradient-6)"/><path d="M114.74,113l7.42,4.51H103.32l7.42-4.8v-3.91l-1.24-1.47v-4.66c-12.14-4.2-11.85-30.24-11.85-30.24h30.18s0,.1,0,.31c.18,2.86,1.19,24.78-10.18,29.56a10.21,10.21,0,0,1-1.38.48v4l-1,1.29-.53.67Z" transform="translate(-9.38 -14.66)" fill="#0ef884"/><path d="M98.93,95a2.79,2.79,0,0,1-2-.75,2.55,2.55,0,0,1-.49-2.66l1.38.4A1.21,1.21,0,0,0,98,93.24a1.61,1.61,0,0,0,1.52.25,1.17,1.17,0,0,0,.85-.68c-.12-.42-2-2-3.46-3.33-4-3.5-9-7.85-7.37-11.35a3.73,3.73,0,0,1,2.6-2.22c3.2-.74,7.44,2.7,7.62,2.85l-.91,1.11c-1.07-.88-4.31-3-6.39-2.56a2.33,2.33,0,0,0-1.62,1.43c-1.18,2.52,3.75,6.81,7,9.65,2.9,2.53,4.17,3.69,3.92,4.76a2.52,2.52,0,0,1-1.86,1.73A4,4,0,0,1,98.93,95Z" transform="translate(-9.38 -14.66)" fill="#0ef884"/><path d="M127.49,95a3.45,3.45,0,0,1-.95-.13,2.52,2.52,0,0,1-1.87-1.73c-.25-1.07,1-2.23,3.92-4.76,3.26-2.84,8.19-7.13,7-9.65a2.19,2.19,0,0,0-1.52-1.32c-2.27-.5-6,2-7.21,3L126,79.29c.21-.16,5-4,8.44-3.27a3.57,3.57,0,0,1,2.51,2.11c1.64,3.5-3.36,7.85-7.37,11.35-1.49,1.3-3.34,2.91-3.46,3.43.08.25.49.48.85.58a1.56,1.56,0,0,0,1.51-.25,1.21,1.21,0,0,0,.13-1.24l1.39-.4a2.54,2.54,0,0,1-.5,2.66A2.78,2.78,0,0,1,127.49,95Z" transform="translate(-9.38 -14.66)" fill="#0ef884"/><path d="M117.67,102.31a10.21,10.21,0,0,1-1.38.48v.1H109.5v-.22c-12.14-4.2-11.85-30.24-11.85-30.24h7.4s-3.28,17.25,7.75,27.7C115.15,102.37,116,101.81,117.67,102.31Z" transform="translate(-9.38 -14.66)" fill="#fff" opacity="0.28"/><path d="M121.71,102.88a4.76,4.76,0,0,1-1.38,0Z" transform="translate(-9.38 -14.66)" fill="#0ef884"/><polygon points="102.34 88.23 102.34 92.58 103.42 94.03 103.42 98.06 100.5 102.87 94.88 102.87 102.16 98.33 102.16 94.12 100.72 92.36 100.72 87.98 102.34 88.23" fill="#fff" opacity="0.28"/><path d="M109.5,102.9v-.22c-12.14-4.2-11.85-30.24-11.85-30.24H99.8s-1.32,22.93,10.3,30.2l.4.26Z" transform="translate(-9.38 -14.66)" fill="url(#linear-gradient-7)"/><path d="M116.29,102.79v4l-1,1.29C113.17,107.35,112.84,105.79,116.29,102.79Z" transform="translate(-9.38 -14.66)" fill="#0ef884"/><path d="M117.67,102.31a10.21,10.21,0,0,1-1.38.48c11.24-9.75,5.42-30.35,5.42-30.35l6.14.31C128,75.61,129,97.53,117.67,102.31Z" transform="translate(-9.38 -14.66)" fill="url(#linear-gradient-8)"/><path d="M61.76,46.06l.7-1.43a28.4,28.4,0,0,1,2.29-4.06c1.81-2.49,2.75-5.5,4.31-8.16a1,1,0,0,0,.18-.49c0-.39-.46-.61-.85-.71a3.19,3.19,0,0,0-1.59-.11,1.4,1.4,0,0,0-1.09,1.06,4.65,4.65,0,0,0,.07.91,4.13,4.13,0,0,1-.84,2.35L61,41.8a5.11,5.11,0,0,0-1,2.45A1.91,1.91,0,0,0,61.76,46.06Z" transform="translate(-9.38 -14.66)" fill="#ffbbab"/><path d="M61.76,46.06a2.25,2.25,0,0,0,.33-1.65,7.52,7.52,0,0,1,0-2.27,4.29,4.29,0,0,0,.12-2.24s0-.07-.06-.09a.15.15,0,0,0-.16,0,1.16,1.16,0,0,0-.51.65c-.42,1-1.7,2.69-1.52,3.78A1.91,1.91,0,0,0,61.76,46.06Z" transform="translate(-9.38 -14.66)" fill="url(#linear-gradient-9)"/><polygon points="49.11 32.05 51.17 29.44 53.62 31.68 51.31 33.76 49.11 32.05" fill="#0ef884"/><polygon points="49.11 32.05 51.17 29.44 53.62 31.68 51.31 33.76 49.11 32.05" fill="url(#linear-gradient-10)"/><path d="M63.76,49.93l.95.33c.33.11,1,.55,1.31.25s0-1.21,0-1.54a16.6,16.6,0,0,0-.85-3.47A2.2,2.2,0,0,1,65,43.72a1,1,0,0,1,.86-.51,1.06,1.06,0,0,1,.87.48,4.44,4.44,0,0,1,.29,1,1.33,1.33,0,0,1,.12.72,2.44,2.44,0,0,0-.14.34.83.83,0,0,0,.07.38l1.25,3.29a4,4,0,0,1,.38,2.27A2.39,2.39,0,0,1,66.2,53.3a7.63,7.63,0,0,1-3.35-1.16c-.11-.06-.24-.17-.2-.29a.3.3,0,0,1,.13-.12,2.24,2.24,0,0,0,.79-.77A1.18,1.18,0,0,0,63.76,49.93Z" transform="translate(-9.38 -14.66)" fill="#ffbbab"/><path d="M60.94,44.58a.66.66,0,0,1-.19.36,1.14,1.14,0,0,1-.51.17,1,1,0,0,0-.51.21.28.28,0,0,0,0,.27L60,46.74A.39.39,0,0,1,60,47a.44.44,0,0,1-.25.21c-.4.19-.91.36-1.26.09a1.14,1.14,0,0,1-.35-.6,13.1,13.1,0,0,1-.92-4,2.89,2.89,0,0,1,.8-2.27,2.78,2.78,0,0,1,2-.61,1,1,0,0,1,.8.47c.11.2,0,.41.07.63a6.1,6.1,0,0,0,.17.95,3.81,3.81,0,0,0,.15.44,1.24,1.24,0,0,1,.14.38,1.63,1.63,0,0,1-.16.71,4,4,0,0,0-.21.84C61,44.38,61,44.48,60.94,44.58Z" transform="translate(-9.38 -14.66)" fill="#ffbbab"/><path d="M61.25,39.69a1.57,1.57,0,0,1-.89,1.18c-1.08.51-2.62.44-2.21,2a4.24,4.24,0,0,1-.34,3.75c-.25.37-.56.69-.78,1.08-.36.6-.47,1.33-.86,1.91C55.39,50.76,53.81,51,52.43,51a3.8,3.8,0,0,0-1.54.29c-1.13.56-1.64,2.22-2.89,2.28S46.32,52,45.62,51.2a3.37,3.37,0,0,1-.69-3.74c1.29-2.64,5.5-2.48,7.09-5C53,41,53,39,54.7,38.06a6.37,6.37,0,0,1,5.91.28A1.28,1.28,0,0,1,61.25,39.69Z" transform="translate(-9.38 -14.66)" fill="#473f47"/><path d="M63.1,58.45a1.23,1.23,0,0,0,.41.22,4.09,4.09,0,0,0,1.6.07,22.26,22.26,0,0,1,2.31,0,.9.9,0,0,1,.53.14c.26.22.18.63.07.95a42.62,42.62,0,0,1-1.67,4.28,3.58,3.58,0,0,1-1.1,1.56,3.34,3.34,0,0,1-1.3.47,22.08,22.08,0,0,1-2.81.39,5,5,0,0,1-2.71-.36,4.24,4.24,0,0,1-1.88-2.44,5.53,5.53,0,0,1-.27-3.09c.25-1.1.75-1.42.44-2.6a27.34,27.34,0,0,1-.86-4.47,11,11,0,0,1,.38-4.08A5.43,5.43,0,0,1,57,47.77a2.71,2.71,0,0,1,1.49-1.06,1.77,1.77,0,0,1,1.7.47c1.17,1.27,2.77,1.34,4.1,2.43a.43.43,0,0,1,.17.21.39.39,0,0,1,0,.28l-.87,2.09a3.23,3.23,0,0,1-.33.64c-.12.17-.27.31-.38.48A3.17,3.17,0,0,0,62.44,55C62.43,56,62.19,57.74,63.1,58.45Z" transform="translate(-9.38 -14.66)" fill="#0ef884"/><path d="M61.83,59.79a1,1,0,0,1-1-.07c-.7-.52-.16-.88,0-1.42A5.65,5.65,0,0,0,61,56c-.11-1.49-.23-3-.34-4.48.06.37,1.82.89,2.51,1.36-.12.17-.27.31-.38.48-.78,1.14-.37,3.42-.35,4.71C62.49,58.69,62.41,59.47,61.83,59.79Z" transform="translate(-9.38 -14.66)" fill="url(#linear-gradient-11)"/><path d="M69.94,40.55a6.89,6.89,0,0,1,0,3.48.5.5,0,0,1-.19.12.26.26,0,0,1-.17,0c-.45-.09-3-1.76-6-.71a1.1,1.1,0,1,1-.36-2.13S67.15,40,68,37.67c.11-.35.33-.48.58-.44a1,1,0,0,1,.43.2h0A8.8,8.8,0,0,1,69.94,40.55Z" transform="translate(-9.38 -14.66)" fill="#0ef884"/><path d="M69.94,40.55a6.89,6.89,0,0,1,0,3.48.22.22,0,0,1-.15.12h0c-.4,0-1-1.5-1.28-3.35s-.26-3.3.07-3.57l.08,0c.11,0,.22.07.35.24h0A8.8,8.8,0,0,1,69.94,40.55Z" transform="translate(-9.38 -14.66)" fill="url(#linear-gradient-12)"/><path d="M75.77,69.38a.58.58,0,0,0-.41.65c0,.16.19.32.12.47a.31.31,0,0,1-.23.15,4,4,0,0,1-2.84-.19.46.46,0,0,0,.12.45,1.57,1.57,0,0,0,.59.61,1.5,1.5,0,0,0,.52.1,6.63,6.63,0,0,0,3.87-1.31,1.12,1.12,0,0,0,.28-.25.34.34,0,0,0,0-.36c-.06-.15-.24-.2-.4-.23a8,8,0,0,0-.84-.08A1.94,1.94,0,0,0,75.77,69.38Z" transform="translate(-9.38 -14.66)" fill="#0ef884"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </transition>
    <transition
      enter-active-class="transition ease-in-out duration-500"
      leave-active-class="transition ease-in-out duration-200"
      enter-class="transform -translate-y-6"
      enter-to-class="transform translate-y-0"
      leave-class="transform translate-y-0"
      leave-to-class="transform -translate-y-6"
    >
    <div v-show="showLoader" class="min-h-screen flex flex-col justify-center gb-nav">
      <div class="btn-spinner mx-auto" style="font-size: 55px;" />
      <div class="text-2xl text-white my-3 font-black mx-auto">Logging in</div>
    </div>
    </transition>
    <transition
      enter-active-class="transition ease-in-out duration-500"
      leave-active-class="transition ease-in-out duration-200"
      enter-class="transform -translate-y-6"
      enter-to-class="transform translate-y-0"
      leave-class="transform translate-y-0"
      leave-to-class="transform -translate-y-6"
    >
      <div v-show="showLoader0" class="min-h-screen flex flex-col justify-center gb-nav">
        <div class="btn-spinner mx-auto" style="font-size: 55px;" />
        <div class="text-2xl text-white my-3 font-black mx-auto">{{ emailVerified ? 'Email Verified' : 'Verifying Email' }}</div>
      </div>
    </transition>
  </div>
</template>

<script>
import Notification from '~/components/Notification'

export default {
  head: {
    title: 'Login',
  },
  auth: 'guest',
  components: {
    Notification,
  },
  data() {
    return {
      login: {
        email: '',
        password: ''
      },
      showLoader: false,
      showLoader0: false,
      error: null,
      loading: false,
      passwordFieldType: false,
      emailVerified: false
    }
  },
  beforeCreate() {
    if (this.$auth.loggedIn) this.$router.push('/profile')
  },
  created() {
    if (this.$router.currentRoute.query.hasOwnProperty('code')) {
      this.showLoader = true
    }

    if (this.$router.currentRoute.query.hasOwnProperty('token')) {
      // check for token param
      // set the token globally and on request header
      // make request to backend to update users.email_verified_at
      const verifyMe = async () => {
          this.showLoader0 = true
          // set new token
          this.$auth.strategy.token.set(this.$router.currentRoute.query.token)
          return await this.$axios.post('api/signup?verify=true', {
            token: this.$router.currentRoute.query.token,
          })
      }

      verifyMe().then((data)=> {
        console.log("verify response", data)
        // set token
        this.emailVerified = true

        this.$toast.success(data.message, {
          theme: "outline",
          position: "bottom-left",
          duration : 5000
        })

        this.showLoader0 = false

      }).catch((e) => {
        console.log(e)
      })

    }
  },
  methods: {
    changePasswordFieldType() {
      this.passwordFieldType = !this.passwordFieldType
    },
    async userLogin() {
      try {
        this.loading = true;
        let response = await this.$auth.loginWith('local', { data: this.login });
        this.loading = false;
        console.log(response);
        this.$store.commit('setToken', response.data.token);
        this.$toast.success('Logged In!', {
            theme: "outline",
            position: "bottom-left",
            duration : 5000
        });
        await this.$router.push('/profile');
      } catch (e) {
        console.log(e.response.data)
        this.loading = false;
        if (e.response.data.message) {
          this.$toast.error(e.response.data.message, {
            theme: "outline",
            position: "bottom-left",
            duration: 5000
          });
        }
      }
    }
  }
}
</script>

<style scoped>
.btn-spinner,
.btn-spinner:after {
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
}

.btn-spinner {
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: .2em solid white;
  border-right: .2em solid white;
  border-bottom: .2em solid white;
  border-left: .2em solid transparent;
  transform: translateZ(0);
  animation: spinning 1s infinite linear;
}

@keyframes spinning {
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
}

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
</style>
