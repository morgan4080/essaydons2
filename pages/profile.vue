<template>
  <div>
    <div class="min-h-screen bg-white">
      <div class="mobile-b min-h-screen bg-left-0 lg:bg-center-0">
        <div class="max-w-6xl topBanner mx-auto pt-32 lg:pt-32 z-10 px-8 lg:px-0 pb-32">
          <div class="mx-auto flex flex-wrap">
            <div class="flex flex-wrap w-full text-gray-700 body-font">
              <div class="w-full md:py-2 relative">
                <div class="mx-auto flex flex-row">
                  <a class="flex title-font font-medium items-center justify-start justify-center text-gray-900">
                    <img v-if="formProfile.profile_image" class="w-12 h-12 rounded-full" :src="formProfile.profile_image[0]" alt="profile-photo">
                    <svg v-else xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50" viewBox="0 0 111 111">
                      <defs>
                        <clipPath id="clip-path">
                          <circle id="Ellipse_10" data-name="Ellipse 10" cx="55.5" cy="55.5" r="55.5" transform="translate(0.153)" fill="#42fbb7"/>
                        </clipPath>
                      </defs>
                      <g id="Mask_Group_10" data-name="Mask Group 10" transform="translate(-0.153)" clip-path="url(#clip-path)">
                        <g id="contact" transform="translate(0 0)">
                          <path id="Path_100" data-name="Path 100" d="M171.074,124.281a9.2,9.2,0,1,0,9.2,9.2A9.215,9.215,0,0,0,171.074,124.281Zm0,0" transform="translate(-115.498 -88.677)" fill="#42fbb7"/>
                          <path id="Path_101" data-name="Path 101" d="M166.948,224.4a13.14,13.14,0,0,0-13.125-13.125H143.779A13.14,13.14,0,0,0,130.655,224.4v10.577a33.856,33.856,0,0,0,36.293,0V224.4Zm0,0" transform="translate(-93.225 -150.75)" fill="#42fbb7"/>
                          <path id="Path_102" data-name="Path 102" d="M109.5,75.58a33.906,33.906,0,0,0-24.66,57.2v-5.2a19.673,19.673,0,0,1,12.889-18.443,15.717,15.717,0,1,1,23.541,0,19.673,19.673,0,0,1,12.889,18.443v5.2a33.907,33.907,0,0,0-24.66-57.2Zm0,0" transform="translate(-53.928 -53.928)" fill="#42fbb7"/>
                          <path id="Path_103" data-name="Path 103" d="M94.875,16.278a55.577,55.577,0,0,0-78.6,78.6,55.577,55.577,0,0,0,78.6-78.6Zm-39.3,79.736A40.437,40.437,0,1,1,96.014,55.576,40.483,40.483,0,0,1,55.576,96.014Zm0,0" transform="translate(0 0)" fill="#42fbb7"/>
                        </g>
                      </g>
                    </svg>
                    <span class="ml-3 text-base">{{ fullName }}</span>
                  </a>
                  <p v-if="$auth.user && $auth.user.owner" class="flex items-center text-base text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mx-2">
                    Admin
                  </p>
                  <p v-else class="flex items-center text-base text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mx-2">
                    {{ formProfile.type }}
                  </p>
                  <span class="flex ml-auto sm:mt-0 justify-center justify-start">
                      <button @click="logout" style="background: #42FBB7;display: flex;align-items: center;" class="uppercase ml-4 text-base font-semibold py-3 px-4 bg-transparent text-white rounded-full transform hover:scale-105 transition ease-in-out duration-100" >
                       Log Out
                      </button>
                  </span>
                </div>
                <div class="absolute h-px w-full mt-4 bg-gray-300 pointer-events-none"></div>
              </div>
              <div class="mt-8 w-full flex flex-wrap">
                <div class="w-full lg:w-1/6 md:pr-10 md:py-6">
                  <div @click="toggleTabs(1)" class="flex relative pb-6 mb-2 cursor-pointer">
                    <div class="h-full w-32 absolute inset-0 flex items-center justify-center bg-gray-200 opacity-25">
                      <div :class="{'bg-gray-300': openTab !== 1, 'bg-teal-300': openTab === 1}" class="h-px w-32 mt-10 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-10 h-10 inline-flex items-center justify-center text-white relative z-10">
                      <svg :class="{'': openTab !== 1, 'custom-fill': openTab === 1}" xmlns="http://www.w3.org/2000/svg" width="55.5" height="65.406" viewBox="0 0 55.5 65.406">
                        <g id="Group_341" data-name="Group 341" transform="translate(130.037 -37.741)">
                          <path id="Path_335" data-name="Path 335" d="M-117.036,66.8q0-12.543,0-25.085c0-2.92,1.013-3.955,3.883-3.956,10.341,0,20.682.012,31.022-.021a3.342,3.342,0,0,1,2.6,1.1q4.058,4.127,8.227,8.144a2.807,2.807,0,0,1,.933,2.2q-.036,21.448-.02,42.9c0,2.584-.979,3.577-3.606,3.583-8.263.02-16.525.009-24.788.009q-6.977,0-13.952,0c-3.526,0-4.3-.766-4.3-4.229Q-117.038,79.122-117.036,66.8Zm1.778-.08q0,12.541-.008,25.081c0,1.174.181,2.046,1.658,2.044q19.886-.024,39.773,0c1.212,0,1.678-.558,1.678-1.721q-.015-20.85.01-41.7c0-.9-.279-1.212-1.189-1.194-2.373.049-4.749-.01-7.123.026-1.074.016-1.518-.409-1.5-1.5.044-2.176-.081-4.359.047-6.528.082-1.379-.428-1.606-1.671-1.6-9.794.048-19.589.026-29.384.028-2.12,0-2.293.173-2.294,2.278Q-115.262,54.332-115.258,66.723Zm41.214-19.277-6-6.227c0,1.895,0,3.648,0,5.4,0,.53.213.832.782.83C-77.505,47.442-75.75,47.446-74.044,47.446Z" transform="translate(-4.171)" />
                          <path id="Path_336" data-name="Path 336" d="M-130.036,77.8q0-12.543,0-25.085c0-2.92,1.013-3.955,3.883-3.956,10.341,0,20.682.012,31.022-.021a3.342,3.342,0,0,1,2.6,1.1q4.058,4.127,8.227,8.144a2.807,2.807,0,0,1,.933,2.2q-.036,21.448-.02,42.9c0,2.584-.979,3.577-3.606,3.583-8.263.02-16.525.009-24.788.009q-6.977,0-13.952,0c-3.526,0-4.3-.766-4.3-4.229Q-130.038,90.122-130.036,77.8Zm1.778-.08q0,12.541-.008,25.081c0,1.174.181,2.046,1.658,2.044q19.886-.024,39.773,0c1.212,0,1.678-.558,1.678-1.721q-.015-20.85.01-41.7c0-.9-.279-1.212-1.189-1.194-2.373.049-4.749-.01-7.123.026-1.074.016-1.518-.409-1.5-1.5.044-2.176-.081-4.359.047-6.528.082-1.379-.428-1.606-1.671-1.6-9.794.048-19.589.026-29.384.028-2.12,0-2.293.173-2.294,2.278Q-128.262,65.332-128.258,77.723Zm41.214-19.277-6-6.227c0,1.895,0,3.648,0,5.4,0,.53.213.832.782.83C-90.505,58.442-88.75,58.446-87.044,58.446Z" transform="translate(0 -3.529)" />
                        </g>
                      </svg>
                    </div>
                    <div class="flex flex-col justify-center pl-4">
                      <h2 class="font-medium title-font text-base text-gray-900 tracking-wider">Orders</h2>
                    </div>
                  </div>
                  <div @click="toggleTabs(2)" class="flex relative pb-6 mb-2 cursor-pointer">
                    <div class="h-full w-32 absolute inset-0 flex items-center justify-center bg-gray-200 opacity-25">
                      <div :class="{'bg-gray-300': openTab !== 2, 'bg-teal-300': openTab === 2}" class="h-px w-32 mt-10 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-10 h-10 inline-flex items-center justify-center text-white relative z-10">
                      <svg :class="{'': openTab !== 2, 'custom-fill': openTab === 2}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="61" height="62" viewBox="0 0 61 62">
                        <g id="Mask_Group_13" data-name="Mask Group 13" transform="translate(-0.154 0.039)" clip-path="">
                          <g id="contact" transform="translate(0.068 0)">
                            <path id="Path_340" data-name="Path 340" d="M166.974,124.281a5.1,5.1,0,1,0,5.1,5.1A5.11,5.11,0,0,0,166.974,124.281Zm0,0" transform="translate(-136.155 -104.538)" />
                            <path id="Path_341" data-name="Path 341" d="M150.781,218.554a7.287,7.287,0,0,0-7.278-7.278h-5.57a7.286,7.286,0,0,0-7.278,7.278v5.865a18.775,18.775,0,0,0,20.126,0v-5.865Zm0,0" transform="translate(-109.899 -177.712)" />
                            <path id="Path_342" data-name="Path 342" d="M94.392,75.58A18.8,18.8,0,0,0,80.717,107.3v-2.882a10.909,10.909,0,0,1,7.147-10.227,8.716,8.716,0,1,1,13.054,0,10.909,10.909,0,0,1,7.147,10.227V107.3A18.8,18.8,0,0,0,94.392,75.58Zm0,0" transform="translate(-63.573 -63.573)" />
                            <path id="Path_343" data-name="Path 343" d="M52.611,9.027A30.819,30.819,0,0,0,9.026,52.611,30.819,30.819,0,0,0,52.611,9.027ZM30.819,53.243A22.424,22.424,0,1,1,53.242,30.819,22.449,22.449,0,0,1,30.819,53.243Zm0,0" transform="translate(0 0)" />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div class="flex flex-col justify-center pl-4">
                      <h2 class="font-medium title-font text-base text-gray-900 tracking-wider">Profile</h2>
                    </div>
                  </div>
                  <div @click="toggleTabs(3)" class="flex relative pb-6 mb-2 cursor-pointer">
                    <div class="h-full w-32 absolute inset-0 flex items-center justify-center bg-gray-200 opacity-25">
                      <div :class="{'bg-gray-300': openTab !== 3, 'bg-teal-300': openTab === 3}" class="h-px w-32 mt-10 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-10 h-10 inline-flex items-center justify-center text-white relative z-10">
                      <svg :class="{'def-stroke': openTab !== 3, 'custom-stroke': openTab === 3}" xmlns="http://www.w3.org/2000/svg" width="62.478" height="59.698" viewBox="0 0 62.478 59.698">
                        <g id="Group_345" data-name="Group 345" transform="translate(-1232.94 -419.886)">
                          <path id="Path_337" data-name="Path 337" d="M1255.52,478.567a1.938,1.938,0,0,1-1.987-1.464c-.9-2.6-1.818-5.189-2.679-7.8a1,1,0,0,0-1.137-.834c-2.715,0-5.43-.085-8.145-.146a2.01,2.01,0,0,1-2.051-2.86c.81-2.667,1.621-5.334,2.452-8a.71.71,0,0,0-.3-.927c-2.227-1.653-4.431-3.335-6.644-5-1.47-1.109-1.451-2.519.033-3.631,2.2-1.651,4.391-3.323,6.6-4.965a.7.7,0,0,0,.308-.921c-.828-2.642-1.628-5.293-2.434-7.942-.538-1.769.287-2.894,2.143-2.931,2.793-.056,5.587-.121,8.38-.161a.591.591,0,0,0,.661-.479c.886-2.623,1.8-5.238,2.7-7.856.632-1.832,1.926-2.26,3.512-1.155,2.259,1.574,4.522,3.142,6.764,4.739a.7.7,0,0,0,.974-.014c2.261-1.6,4.537-3.189,6.813-4.774a2.038,2.038,0,0,1,3.421,1.112c.913,2.635,1.824,5.27,2.714,7.913a.624.624,0,0,0,.694.517c2.794.036,5.587.1,8.38.161,1.849.039,2.654,1.163,2.112,2.948-.811,2.667-1.612,5.338-2.442,8a.589.589,0,0,0,.248.777c2.223,1.659,4.427,3.342,6.646,5,1.54,1.154,1.549,2.538,0,3.7-2.166,1.635-4.322,3.283-6.505,4.9a.806.806,0,0,0-.357,1.06c.848,2.7,1.662,5.4,2.476,8.113a1.975,1.975,0,0,1-.661,2.273,2.394,2.394,0,0,1-1.507.4c-2.793.055-5.587.121-8.381.16a.624.624,0,0,0-.706.5c-.882,2.625-1.8,5.238-2.7,7.856-.615,1.789-1.929,2.23-3.479,1.152-2.276-1.583-4.554-3.166-6.813-4.772a.666.666,0,0,0-.924.012c-2.277,1.616-4.571,3.208-6.859,4.809A2.111,2.111,0,0,1,1255.52,478.567Zm19.429-41.426a1.614,1.614,0,0,0-1.374-1.714,1.719,1.719,0,0,0-1.8.844q-7.738,10.784-15.489,21.558c-.849,1.182-1.715,2.352-2.54,3.55a1.661,1.661,0,0,0,1.177,2.693,1.77,1.77,0,0,0,1.675-.892q8.96-12.484,17.93-24.961A1.813,1.813,0,0,0,1274.949,437.141Zm-18.156-1.025a4.146,4.146,0,0,0-3.077,1.268,7.108,7.108,0,0,0-.7,9.075,4.431,4.431,0,0,0,7.519-.047,7.054,7.054,0,0,0,.432-7.485A4.658,4.658,0,0,0,1256.792,436.116Zm19.851,21.023a7.149,7.149,0,0,0-1.332-4.173,4.39,4.39,0,0,0-6.632-.878,7.085,7.085,0,0,0-.007,10.121,4.187,4.187,0,0,0,5.265.416A6.279,6.279,0,0,0,1276.643,457.139Z" transform="translate(0)" fill="rgba(66,251,183,0)" stroke-width="2"/>
                          <path id="Path_338" data-name="Path 338" d="M1268.555,454.688a4.255,4.255,0,0,1,.821-2.647,1.741,1.741,0,0,1,2.969,0,4.6,4.6,0,0,1,.021,5.243,1.755,1.755,0,0,1-3.038-.046A4.2,4.2,0,0,1,1268.555,454.688Z" transform="translate(-14.103 -12.351)" fill="none" stroke-width="2"/>
                          <path id="Path_339" data-name="Path 339" d="M1298.2,480.2a3.888,3.888,0,0,1-.835,2.156,1.732,1.732,0,0,1-2.965-.024,4.569,4.569,0,0,1-.031-5.19,1.758,1.758,0,0,1,3.071.027A4.8,4.8,0,0,1,1298.2,480.2Z" transform="translate(-24.296 -22.554)" fill="none" stroke-width="2"/>
                        </g>
                      </svg>
                    </div>
                    <div class="flex flex-col justify-center pl-4">
                      <h2 class="font-medium title-font text-base text-gray-900 tracking-wider">Discounts</h2>
                    </div>
                  </div>
                  <div @click="toggleTabs(4)" class="flex relative pb-6 mb-2 cursor-pointer">
                    <div class="h-full w-32 absolute inset-0 flex items-center justify-center bg-gray-200 opacity-25">
                      <div :class="{'bg-gray-300': openTab !== 4, 'bg-teal-300': openTab === 4}" class="h-px w-32 mt-10 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-10 h-10 inline-flex items-center justify-center text-white relative z-10">
                      <svg :class="{'': openTab !== 4, 'custom-fill': openTab === 4}" xmlns="http://www.w3.org/2000/svg" width="62.478" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 448 448" style="enable-background:new 0 0 448 448;" xml:space="preserve">
                        <g>
                          <path d="M384,172.4C384,83.6,312.4,12,224,12S64,83.6,64,172c0,0,0,0,0,0.4C28.4,174.4,0,204,0,240v8c0,37.6,30.4,68,68,68h3.6     l28.4,45.2c20,32,54,50.8,91.6,50.8h5.6c3.6,13.6,16,24,30.8,24c17.6,0,32-14.4,32-32c0-17.6-14.4-32-32-32     c-14.8,0-27.2,10.4-30.8,24h-5.6c-32,0-61.2-16.4-78-43.6L90.4,316H96c8.8,0,16-7.2,16-16V188c0-8.8-7.2-16-16-16H80     c0-79.6,64.4-144,144-144s144,64.4,144,144h-16c-8.8,0-16,7.2-16,16v112c0,8.8,7.2,16,16,16h28c37.6,0,68-30.4,68-68v-8     C448,204,419.6,174.4,384,172.4z M228,388c8.8,0,16,7.2,16,16s-7.2,16-16,16s-16-7.2-16-16S219.2,388,228,388z M96,188v112H68     c-28.8,0-52-23.2-52-52v-8c0-28.8,23.2-52,52-52H96z M432,248c0,28.8-23.2,52-52,52h-28V188h28c28.8,0,52,23.2,52,52V248z"/>
                          <path d="M290.4,72.4c-0.8-0.4-2-1.2-3.2-2c-1.2-0.8-2.4-1.6-3.2-2c-3.6-2.4-8.8-1.2-10.8,2.8S272,79.6,276,82     c0.8,0.4,2,1.2,3.2,2s2.4,1.6,3.6,2c1.2,0.8,2.8,1.2,4,1.2c2.8,0,5.2-1.2,6.8-4C295.6,79.6,294.4,74.8,290.4,72.4z"/>
                          <path d="M224,52c-34,0-66,14.8-88,40.4c-2.8,3.2-2.4,8.4,0.8,11.2c1.6,1.2,3.2,2,5.2,2c2.4,0,4.4-0.8,6-2.8     c19.2-22,46.8-34.8,76-34.8c7.2,0,14.4,0.8,21.6,2.4c4.4,0.8,8.4-2,9.6-6s-2-8.4-6-9.6C240.8,52.8,232.4,52,224,52z"/>
                        </g>
                        </svg>
                    </div>
                    <div class="flex flex-col justify-center pl-4">
                      <h2 class="font-medium title-font text-base text-gray-900 tracking-wider">Support</h2>
                    </div>
                  </div>
                  <div @click="toggleTabs(5)" class="flex relative pb-6 mb-2 cursor-pointer">
                    <div class="h-full w-32 absolute inset-0 flex items-center justify-center bg-gray-200 opacity-25">
                      <div :class="{'bg-gray-300': openTab !== 5, 'bg-teal-300': openTab === 5}" class="h-px w-32 mt-10 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-10 h-10 inline-flex items-center justify-center text-white relative z-10">
                      <svg :class="{'': openTab !== 5, 'custom-fill': openTab === 5}" xmlns="http://www.w3.org/2000/svg" id="Layer_1" enable-background="new 0 0 480 480" height="512" viewBox="0 0 480 480" width="62.478"><path d="m215 164c0 57.897 47.103 105 105 105s105-47.103 105-105-47.103-105-105-105-105 47.103-105 105zm194 0c0 49.075-39.925 89-89 89s-89-39.925-89-89 39.925-89 89-89 89 39.925 89 89zm-89-54c4.418 0 8 3.582 8 8v3.376c9.311 3.303 16 12.195 16 22.624 0 4.418-3.582 8-8 8s-8-3.582-8-8c0-4.411-3.589-8-8-8s-8 3.589-8 8v3.237c0 3.518 2.256 6.586 5.614 7.636l9.544 2.982c10.074 3.149 16.842 12.355 16.842 22.908v3.237c0 11.519-8.159 21.166-19 23.473v2.527c0 4.418-3.582 8-8 8s-8-3.582-8-8v-4.68c-7.714-3.996-13-12.05-13-21.32 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.411 3.589 8 8 8s8-3.589 8-8v-3.237c0-3.518-2.256-6.586-5.614-7.636l-9.544-2.982c-10.074-3.149-16.842-12.355-16.842-22.908v-3.237c0-10.429 6.689-19.321 16-22.624v-3.376c0-4.418 3.582-8 8-8zm130 212v102c0 30.879-25.122 56-56 56h-308c-30.878 0-56-25.121-56-56v-392c0-17.645 14.355-32 32-32h260c17.645 0 32 14.355 32 32 0 4.418-3.582 8-8 8s-8-3.582-8-8c0-8.822-7.178-16-16-16h-260c-8.822 0-16 7.178-16 16v392c0 22.056 17.944 40 40 40h268.862c-10.395-10.172-16.862-24.342-16.862-40v-125c0-4.418 3.582-8 8-8s8 3.582 8 8v125c0 22.056 17.944 40 40 40s40-17.944 40-40v-102c0-8.822-7.178-16-16-16h-34c-4.418 0-8-3.582-8-8s3.582-8 8-8h34c17.645 0 32 14.355 32 32zm-350-107c0-4.418 3.582-8 8-8h68c4.418 0 8 3.582 8 8s-3.582 8-8 8h-68c-4.418 0-8-3.582-8-8zm0-90c0-4.418 3.582-8 8-8h68c4.418 0 8 3.582 8 8s-3.582 8-8 8h-68c-4.418 0-8-3.582-8-8zm184 180c0 4.418-3.582 8-8 8h-168c-4.418 0-8-3.582-8-8s3.582-8 8-8h168c4.418 0 8 3.582 8 8zm0 84c0 4.418-3.582 8-8 8h-168c-4.418 0-8-3.582-8-8s3.582-8 8-8h168c4.418 0 8 3.582 8 8z"/></svg>
                    </div>
                    <div class="flex flex-col justify-center pl-4">
                      <h2 class="font-medium title-font text-base text-gray-900 tracking-wider">Invoices</h2>
                    </div>
                  </div>
                </div>
                <div class="w-full lg:w-5/6 h-auto">
                  <div class="lg:px-6 py-2">
                    <div :class="{'hidden': openTab !== 1, 'block': openTab === 1}" class="shadow border-b bg-white border-gray-200 sm:rounded-lg text-gray-900 py-2 overflow-x-scroll">
                      <section v-if="!orderview && orders.length === 0" class="text-gray-600 body-font">
                        <div class="container px-5 py-24 mx-auto">
                          <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                            <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">We are ready if you are. Start your academic journey with us. Get 10% off your first order.</h1>
                            <button @click="$router.push('/order')" type="button" class="flex-shrink-0 text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg mt-10 sm:mt-0">Get Started</button>
                          </div>
                        </div>
                      </section>
                      <table v-else-if="!orderview && orders.length > 0" class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                          <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Id</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Options</th>
                          </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(order, index) in orders" :key="order.id" class="hover:bg-white focus-within:bg-white">
                          <td class="px-6 py-4 whitespace-nowrap">
                            <a @click="switchOrder(order)" class="text-sm text-gray-900 flex items-center focus:text-indigo-500" href="javascript:void(0);">
                              {{ order.id }}
                            </a>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <a @click="switchOrder(order)" class="text-sm text-gray-900 flex items-center" href="javascript:void(0);" tabindex="-1">
                              {{ JSON.parse(order.order_details).amount | dollar }}
                            </a>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <a @click="switchOrder(order)" class="text-sm text-gray-900 flex items-center" href="javascript:void(0);" tabindex="-1">
                              {{ order.created_at | formatDate }}
                            </a>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <a @click="switchOrder(order)" class="text-sm text-gray-900 flex items-center" href="javascript:void(0);" tabindex="-1">
                              {{ JSON.parse(order.order_details) ? JSON.parse(order.order_details).duration ? JSON.parse(order.order_details).duration.duration : '' : '' }}
                            </a>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <a @click="switchOrder(order)" class="flex items-center" href="javascript:void(0);" tabindex="-1">
                              <span :class="{'bg-red-100 text-red-800': order.status === 'processing', 'bg-green-100 text-green-800': order.status === 'success' }" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">{{ order.status }}</span>
                            </a>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="pr-4 flex items-center" tabindex="-1">
                              <a @click="switchOrder(order)" href="javascript:void(0);" class="mr-auto">
                                <icon :name="'cheveron-right'" class="block w-6 h-6 fill-teal-400" />
                              </a>
                              <a v-if="$auth.user && $auth.user.owner" @click="deleteOrder(order.id)" href="javascript:void(0);" class="ml-auto">
                                <icon :name="'trash'" class="block w-4 h-4 fill-gray-400" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                      <SingleOrder v-else-if="orderview && orders.length > 0" @back="orderview = !orderview" :order="currentOrder" />
                    </div>
                    <div :class="{'hidden': openTab !== 2, 'block': openTab === 2}" class="text-gray-700 py-2 text-xl">
                      <form @submit.prevent="saveProfile('personal')" >
                        <div>
                          <div class="md:grid md:grid-cols-3 md:gap-6">
                            <div class="mt-5 md:mt-0 md:col-span-3">
                              <div class="shadow sm:rounded-md sm:overflow-hidden">
                                <div class="px-4 py-5 bg-white sm:p-6">
                                  <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 sm:col-span-3">
                                      <label class="block text-base leading-5 font-medium text-gray-700">
                                        Photo
                                      </label>
                                      <div class="mt-2 flex items-center">
                                        <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-white">
                                          <img v-if="formProfile.profile_image" class="w-12 h-12 rounded-full" :src="`${formProfile.profile_image[0]}`" alt="profile-photo">
                                          <svg v-else class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                          </svg>
                                        </span>
                                        <span class="ml-5 rounded-md shadow-sm">
                                          <input @change="fileChange" accept="image/jpeg,image/jpeg,image/png" id="fileUploader" class="hidden" type="file">
                                          <button @click="handleFileUploadClick" type="button" class="py-2 px-3 border border-gray-300 rounded-md text-base leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
                                            Change
                                          </button>
                                        </span>
                                      </div>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                      <label for="about" class="block text-base leading-5 font-medium text-gray-700">
                                        User Type
                                      </label>
                                      <select id="about" v-model="formProfile.type" class="block mt-2 w-2/3 pl-2 form-select w-full py-2 pr-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline focus:bg-gradient-to-rfocus:outline-none focus:shadow-outline focus:bg-gradient-to-r transition duration-150 ease-in-out sm:text-base sm:leading-5">
                                        <option v-for="user in userTypes" :value="user" >{{ user }}</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="hidden sm:block">
                          <div class="py-5">
                            <div class="border-t border-gray-200"></div>
                          </div>
                        </div>

                        <div class="mt-10 sm:mt-0">
                          <div class="md:grid md:grid-cols-3 md:gap-6">
                            <div class="mt-5 md:mt-0 md:col-span-3">

                                <div class="shadow overflow-hidden sm:rounded-md">
                                  <div class="px-4 py-5 bg-white sm:p-6">
                                    <div class="grid grid-cols-6 gap-6">
                                      <div class="col-span-6 sm:col-span-3">
                                        <label for="first_name" class="block text-base font-medium leading-5 text-gray-700">First name</label>
                                        <input v-model="formProfile.first_name" id="first_name" class="block form-input mt-1  appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline sm:text-base sm:leading-5">
                                      </div>

                                      <div class="col-span-6 sm:col-span-3">
                                        <label for="last_name" class="block text-base font-medium leading-5 text-gray-700">Last name</label>
                                        <input id="last_name" v-model="formProfile.last_name" class="block form-input mt-1  appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline sm:text-base sm:leading-5">
                                      </div>

                                      <div class="col-span-6 sm:col-span-3">
                                        <label for="country" class="block text-base font-medium leading-5 text-gray-700 mb-1">Country</label>
                                        <div class="relative">
                                          <div class="absolute inset-y-0 left-0 py-2 pl-3 flex items-center pointer-events-none">
                                          <span class="text-gray-500 sm:text-sm">
                                            <img ref="flag" :src="computedCountry.flag" alt="flag" style="width: 30px;height: 23px;">
                                          </span>
                                          </div>
                                          <select id="country" v-model="formProfile.country" class="block form-select w-full py-2 pl-12 pr-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline focus:bg-gradient-to-rfocus:outline-none focus:shadow-outline focus:bg-gradient-to-r transition duration-150 ease-in-out sm:text-base sm:leading-5">
                                            <option v-for="co in countries" :value="co.name" >{{ co.name }}</option>
                                          </select>
                                        </div>
                                      </div>

                                      <div class="col-span-6 sm:col-span-3">
                                        <label for="phone" class="block text-base font-medium leading-5 text-gray-700">Phone number</label>
                                        <div class="relative">
                                          <div class="absolute inset-y-0 left-0 py-2 pl-3 pr-2 flex items-center pointer-events-none">
                                            <span class="text-gray-700 sm:text-base">
                                              +{{ computedCountry.callingCode }}
                                            </span>
                                          </div>
                                          <input id="phone" v-model="formProfile.phone" class="block form-input mt-1 pl-12 appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline sm:text-base sm:leading-5">
                                        </div>
                                      </div>

                                      <div class="col-span-6 sm:col-span-3">
                                        <label for="email_address" class="block text-base font-medium leading-5 text-gray-700">Email address</label>
                                        <input id="email_address" v-model="formProfile.email" type="email" class="block form-input mt-1 appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline sm:text-base sm:leading-5">
                                      </div>

                                      <div class="col-span-6 sm:col-span-3">
                                        <label for="password" class="block text-base font-medium leading-5 text-gray-700">Password</label>
                                        <div class="relative">
                                          <input id="password" :type="!passwordFieldType ? 'password' : 'text'" v-model="formProfile.password" class="block form-input mt-1 pr-12 appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline sm:text-base sm:leading-5">
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
                                        </div>
                                      </div>

                                      <div class="col-span-6 sm:col-span-3">
                                        <label for="adminKey" class="block text-base font-medium leading-5 text-gray-700">Admin Key</label>
                                        <input id="adminKey" v-model="formProfile.admin_key" type="text" class="block form-input mt-1 appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline sm:text-base sm:leading-5">
                                      </div>
                                    </div>
                                  </div>

                                </div>

                            </div>
                          </div>
                        </div>

                        <div class="hidden sm:block">
                          <div class="py-5">
                            <div class="border-t border-gray-200"></div>
                          </div>
                        </div>

                        <div class="mt-10 sm:mt-0">
                          <div class="md:grid md:grid-cols-3 md:gap-6">
                            <div class="mt-5 md:mt-0 md:col-span-3">

                                <div class="shadow overflow-hidden sm:rounded-md">
                                  <div class="px-4 py-5 bg-white sm:p-6">
                                    <fieldset>
                                      <legend class="text-base leading-6 font-medium text-gray-900">By Email</legend>
                                      <div class="mt-4">
                                        <div class="mt-4">
                                          <div class="flex items-start">
                                            <div class="flex items-center h-5">
                                              <input @change="changer($event)" v-model="formProfile.emailNotifications.onOrderComplete" id="candidates" type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                                            </div>
                                            <div class="ml-3 text-base leading-5">
                                              <label for="candidates" class="font-medium text-gray-700">Order Complete</label>
                                              <p class="text-gray-500">Get notified when order is completed.</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="mt-4">
                                          <div class="flex items-start">
                                            <div class="flex items-center h-5">
                                              <input @change="changer($event)" v-model="formProfile.emailNotifications.offers" id="offers" type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                                            </div>
                                            <div class="ml-3 text-base leading-5">
                                              <label for="offers" class="font-medium text-gray-700">Offers</label>
                                              <p class="text-gray-500">Get notified when a discount offer is available.</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </fieldset>
                                    <fieldset class="mt-6">
                                      <legend class="text-base leading-6 font-medium text-gray-900">Push Notifications</legend>
                                      <p class="text-base leading-5 text-gray-500">These are delivered via SMS to your mobile phone.</p>
                                      <div class="mt-4">
                                        <div class="mt-4 flex items-center">
                                          <input @change="changer($event)" v-model="pushNotificationsState" id="push_email" name="push_same" type="radio" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                                          <label for="push_email" class="ml-3">
                                            <span class="block text-base leading-5 font-medium text-gray-700">Same as email</span>
                                          </label>
                                        </div>
                                        <div class="mt-4 flex items-center">
                                          <input @change="changer($event)" v-model="pushNotificationsState" id="push_nothing" name="push_same" type="radio" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                                          <label for="push_nothing" class="ml-3">
                                            <span class="block text-base leading-5 font-medium text-gray-700">No push notifications</span>
                                          </label>
                                        </div>
                                      </div>
                                    </fieldset>
                                  </div>
                                </div>

                            </div>
                          </div>
                        </div>
                        <div class="px-4 py-3 text-right mt-6 sm:px-6">
                          <button class="flex items-center ml-auto bg-black hover:bg-teal-300 text-white hover:text-black py-2 px-4 text-base font-medium rounded focus:outline-none focus:shadow-outline transform hover:scale-105 transition ease-in-out duration-100">
                            <svg v-if="loading && currentForm === 'personal'" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Save Profile
                          </button>
                        </div>
                      </form>
                    </div>
                    <div :class="{'hidden': openTab !== 3, 'block': openTab === 3}" class="text-gray-700 py-2 text-xl">
                      <table class="w-full px-2 overflow-x-auto whitespace-no-wrap table-auto">
                        <thead>
                        <tr class="text-left font-bold">
                          <th class="px-6 pt-6 pb-4">Id</th>
                          <th class="px-6 pt-6 pb-4">Code</th>
                          <th class="px-6 pt-6 pb-4">Percent</th>
                        </tr>
                        </thead>
                        <tbody v-if="discounts.length === 0">
                        <tr>
                          <td class="border-t px-6 py-4" colspan="4">No Discounts found.</td>
                        </tr>
                        </tbody>
                        <tbody v-else>
                        <tr v-for="(discount, index) in discounts" :key="discount.id" class="hover:bg-white focus-within:bg-white">
                          <td class="border-t">
                            <a class="px-6 py-4 flex items-center focus:text-indigo-500" href="javascript:void(0);">
                              {{ discount.id }}
                            </a>
                          </td>
                          <td class="border-t">
                            <a class="px-6 py-4 flex items-center" href="javascript:void(0);" tabindex="-1">
                              {{ discount.code }}
                            </a>
                          </td>
                          <td class="border-t">
                            <a class="px-6 py-4 flex items-center" href="javascript:void(0);" tabindex="-1">
                              {{ discount.percent }}
                            </a>
                          </td>
                          <td class="border-t">
                            <div class="px-4 flex items-center" tabindex="-1">
                              <a href="javascript:void(0);" class="mr-auto">
                                <icon :name="'cheveron-right'" class="block w-6 h-6 fill-gray-400" />
                              </a>
                              <a @click="deleteOrder(discount.id)" href="javascript:void(0);" class="ml-auto">
                                <icon :name="'trash'" class="block w-4 h-4 fill-gray-400" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <div :class="{'hidden': openTab !== 4, 'block': openTab === 4}" class="text-gray-700 py-2 text-xl">
                      <table class="w-full px-2 overflow-x-auto whitespace-no-wrap table-auto">
                        <thead>
                        <tr class="text-left font-bold">
                          <th class="px-6 pt-6 pb-4">Id</th>
                          <th class="px-6 pt-6 pb-4">Details</th>
                          <th class="px-6 pt-6 pb-4">Status</th>
                        </tr>
                        </thead>
                        <tbody v-if="tickets.length === 0">
                        <tr>
                          <td class="border-t px-6 py-4" colspan="4">
                            <nuxt-link to="/ticket" class="w-32 cta text-base font-semibold py-3 px-4 bg-transparent rounded-full transform hover:scale-105 transition ease-in-out duration-100">
                              Create Ticket
                            </nuxt-link>
                          </td>
                        </tr>
                        </tbody>
                        <tbody v-else>
                        <tr v-for="(ticket, index) in tickets" :key="ticket.id" class="hover:bg-white focus-within:bg-white">
                          <td class="border-t">
                            <a class="px-6 py-4 flex items-center focus:text-indigo-500" href="javascript:void(0);">
                              {{ ticket.id }}
                            </a>
                          </td>
                          <td class="border-t">
                            <a class="px-6 py-4 flex items-center" href="javascript:void(0);" tabindex="-1">
                              {{ ticket.details }}
                            </a>
                          </td>
                          <td class="border-t">
                            <a class="px-6 py-4 flex items-center" href="javascript:void(0);" tabindex="-1">
                              {{ ticket.status }}
                            </a>
                          </td>
                          <td class="border-t">
                            <div class="px-4 flex items-center" tabindex="-1">
                              <a href="javascript:void(0);" class="mr-auto">
                                <icon :name="'cheveron-right'" class="block w-6 h-6 fill-gray-400" />
                              </a>
                              <a @click="deleteOrder(ticket.id)" href="javascript:void(0);" class="ml-auto">
                                <icon  :name="'trash'" class="block w-4 h-4 fill-gray-400" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <div :class="{'hidden': openTab !== 5, 'block': openTab === 5}" class="text-gray-700 py-2 text-xl">
                      <table class="w-full px-2 overflow-x-auto whitespace-no-wrap table-auto">
                        <thead>
                        <tr class="text-left font-bold">
                          <th class="px-6 pt-6 pb-4">Id</th>
                          <th class="px-6 pt-6 pb-4">Total</th>
                          <th class="px-6 pt-6 pb-4">Status</th>
                        </tr>
                        </thead>
                        <tbody v-if="invoices.length === 0">
                        <tr>
                          <td class="border-t px-6 py-4" colspan="4">No Invoices found.</td>
                        </tr>
                        </tbody>
                        <tbody v-else>
                        <tr v-for="(invoice, index) in invoices" :key="invoice.id" class="hover:bg-white focus-within:bg-white">
                          <td class="border-t">
                            <a class="px-6 py-4 flex items-center focus:text-indigo-500" href="javascript:void(0);">
                              {{ invoice.id }}
                            </a>
                          </td>
                          <td class="border-t">
                            <a class="px-6 py-4 flex items-center" href="javascript:void(0);" tabindex="-1">
                              {{ invoice.total }}
                            </a>
                          </td>
                          <td class="border-t">
                            <a class="px-6 py-4 flex items-center" href="javascript:void(0);" tabindex="-1">
                              {{ order.status }}
                            </a>
                          </td>
                          <td class="border-t">
                            <div class="px-4 flex items-center" tabindex="-1">
                              <a href="javascript:void(0);" class="mr-auto">
                                <icon :name="'cheveron-right'" class="block w-6 h-6 fill-gray-400" />
                              </a>
                              <a @click="deleteOrder(invoice.id)" href="javascript:void(0);" class="ml-auto">
                                <icon  :name="'trash'" class="block w-4 h-4 fill-gray-400" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon';
import { mapState } from 'vuex';
import LoadingButton from "@/components/LoadingButton";
import SingleOrder from '@/components/SingleOrder'

export default {
  components: {
    LoadingButton,
    Icon,
    SingleOrder
  },
  middleware: 'auth',
  async fetch() {
    const response = await this.$axios.get('api/orders');
    this.orders = [...response.data.orders];
  },
  data() {
    return {
      openTab: 1,
      currentOrder: null,
      orderview: false,
      orders: [],
      invoices: [],
      tickets: [],
      discounts: [],
      form: {
        level: 1,
        subject: null,
        duration: {
          duration: null,
          price: null
        },
        pages: 1,
      },
      formProfile: {
        first_name: null,
        last_name: null,
        profile_image: null,
        country: 'United States of America',
        type: 'Student',
        email: null,
        phone: null,
        emailNotifications: {
          onOrderComplete: true,
          offers: true
        },
        pushNotifications: {
          sameAsEmail: true,
          none: false
        },
        password: null,
        admin_key: null,
      },
      pushNotificationsState: null,
      loading: false,
      currentForm: '',
      passwordFieldType: false,
      profileChanged: false,
      notificationsChanged: false,
    }
  },
  created() {
    this.orders.forEach(order => {
      console.log(JSON.parse(order.order_details).duration.duration);
    });
  },
  computed: {
    ...mapState(["storedata","countries","userTypes"]),
    fullName() {
      return this.$auth.user ? this.$auth.user.name : null;
    },
    duration() {
      return this.storedata.filter(el => el.id === this.form.level)[0].deadline;
    },
    subjects() {
      return this.storedata.filter(el => el.id === this.form.level)[0].subjects;
    },
    totalPrice() {
      return this.form.duration.price * this.form.pages
    },
    computedCountry() {
      return this.formProfile.country ? { flag: this.countries.find(x => x.name === this.formProfile.country).flag, callingCode: this.countries.find(x => x.name === this.formProfile.country).callingCode } : ''
    }
  },
  methods: {
    changer(e) {
      console.log(e);
      this.notificationsChanged = true;
      if (e.target.id === "push_nothing") {
        console.log("push nothing");
        this.formProfile.pushNotifications.none = true;
        this.formProfile.pushNotifications.sameAsEmail = false;
      } else if (e.target.id === "push_email") {
        console.log("push email");
        this.formProfile.pushNotifications.none = false;
        this.formProfile.pushNotifications.sameAsEmail = true;
      }
    },
    changePasswordFieldType() {
      this.passwordFieldType = !this.passwordFieldType
    },
    async saveProfile(section) {
      this.loading = true;
      this.currentForm = section;
      let uploadInstance = this.loadMetaData();
      let payload = {};
      if (uploadInstance.profile.profile_image && uploadInstance.profile.profile_image[0].slice(0,4) === "http") {
        uploadInstance.profile.profile_image = this.$auth.user.metadata.profile.profile_image
      } else {
        try {
          if (section === 'personal') {
            this.profileChanged = true;
            let public_id = 'profile_photo_' + Math.random().toString(36).substr(2, 16);
            uploadInstance.profile.profile_image = await this.$cloudinary.upload(uploadInstance.profile.profile_image[0], {
              public_id: public_id,
              folder: "profile",
              upload_preset: 'ybfqkqyu'
            });
          }
        } catch (e) {
          console.log(e, 'error uploading image')
        }
      }
      payload.name = uploadInstance.personalInformation.first_name + ' ' + uploadInstance.personalInformation.last_name;
      payload.email = uploadInstance.personalInformation.email;
      payload.password = this.formProfile.password;
      payload.phone = uploadInstance.personalInformation.phone;
      payload.admin_key = this.formProfile.admin_key;
      payload.owner = !!(this.formProfile.admin_key);

      (this.$auth.user.metadata && this.$auth.user.metadata.hasOwnProperty('profile') && !this.profileChanged) ? payload.metadata = {
        ...this.$auth.user.metadata,
        country: this.formProfile.country
      } : payload.metadata = {
        ...this.$auth.user.metadata,
        country: this.formProfile.country,
        profile: {
          userType: uploadInstance.profile.userType,
          profile_image: uploadInstance.profile.profile_image
        }
      };

      (this.$auth.user.metadata && this.$auth.user.metadata.hasOwnProperty('notifications') && !this.notificationsChanged) ? payload.metadata = {
        ...payload.metadata,
      } : payload.metadata = {
        ...payload.metadata,
        notifications: {
          emailNotifications: uploadInstance.notifications.emailNotifications,
          pushNotifications: uploadInstance.notifications.pushNotifications
        }
      };

      (this.$auth.user.phone === uploadInstance.personalInformation.phone) ? delete payload.phone : null;
      (this.formProfile.password === null || this.formProfile.password === "" ) ? delete payload.password : null;
      (this.formProfile.admin_key === null || this.formProfile.admin_key === "") ? delete payload.admin_key : null;

      try {
        const response = await this.$axios.put('api/users?data=' + section, {
          ...payload
        });
        console.log('response', response);
        this.$toast.success(section + ' Information Updated', {
          theme: 'outline',
          position: 'bottom-right',
          duration: 5000
        });
        this.loading = false;
        this.$nuxt.refresh();
      } catch (e) {
        this.loading = false;
        if (e.response && e.response.data.message) {
          this.$toast.error(e.response.data.message, {
            theme: "outline",
            position: "bottom-right",
            duration: 5000
          });
        } else {
          this.$toast.error("Network Error", {
            theme: "outline",
            position: "bottom-right",
            duration: 5000
          });
        }
      }
    },
    loadMetaData() {
      return {
        profile: {
          profile_image: this.formProfile.profile_image,
          userType: this.formProfile.type
        },
        personalInformation: {
          first_name: this.formProfile.first_name,
          last_name: this.formProfile.last_name,
          email: this.formProfile.email,
          phone: "+" + this.computedCountry.callingCode + " " + this.formProfile.phone,
        },
        notifications: {
          emailNotifications: {
            onOrderComplete: this.formProfile.emailNotifications.onOrderComplete,
            offers: this.formProfile.emailNotifications.offers
          },
          pushNotifications: {
            none: this.formProfile.pushNotifications.none,
            sameAsEmail : this.formProfile.pushNotifications.sameAsEmail,
          }
        }
      }
    },
    async readFileUrl(input) {

      if (input.files && input.files[0]) {

        function getBase64(file) {
          const reader = new FileReader()
          return new Promise(resolve => {
            reader.onload = ev => {
              resolve(ev.target.result)
            }
            reader.readAsDataURL(file)
          })
        }

        const promises = [];

        for (let i = 0; i < input.files.length; i++) {
          promises.push(getBase64(input.files[i]));
        }

        return await Promise.all(promises);
      }

    },
    async fileChange(e) {
      let fileArr = await this.readFileUrl(e.target);
      this.formProfile.profile_image = fileArr;
      console.log(fileArr)
    },
    handleFileUploadClick() {
      let fileElem = document.getElementById("fileUploader");
      if (fileElem) {
        fileElem.click();
      }
    },
    setFirstDuration() {
      this.form.duration = {
        duration: Object.entries(this.duration)[0][0],
        price: Object.entries(this.duration)[0][1] * this.form.pages,
      };
    },
    toggleTabs(tabNumber) {
      console.log({ tabNumber });
      this.openTab = tabNumber;
    },
    switchOrder(order) {
      this.orderview = !this.orderview;
      this.currentOrder = order;
    },
    deleteOrder(id) {
      if (confirm('Are you sure you want to delete this order?')) {
        console.log("deleteOrder", id);
        this.$store.dispatch("deleteItem", { uri: 'orders', data: id });
      }
    },
    async logout() {
      await this.$auth.logout();
      this.$store.commit('setAuth', null);
    }
  },
  mounted() {
    console.log("auth", this.$auth);
    this.form.subject = this.subjects[0];
    this.form.duration = {
      duration: Object.entries(this.duration)[0][0],
      price: Object.entries(this.duration)[0][1],
    };
    this.formProfile.email = this.$auth.user ? this.$auth.user.email : null;
    this.formProfile.phone = this.$auth.user ? this.$auth.user.phone.split(" ")[1] === undefined ? this.$auth.user.phone.split(" ")[0] : this.$auth.user.phone.split(" ")[1] : null;
    this.formProfile.first_name = this.$auth.user && this.$auth.user.name.split(" ")[0] ? this.$auth.user.name.split(" ")[0] : null;
    this.formProfile.last_name = this.$auth.user && this.$auth.user.name.split(" ")[1] ? this.$auth.user.name.split(" ")[1] : null;
    let metadata = this.$auth.user.metadata;
    if (typeof metadata === "object" && metadata ) {
      (metadata.hasOwnProperty("country")) ? this.formProfile.country = metadata.country : null;
      (metadata.hasOwnProperty("emailNotifications")) ? this.formProfile.emailNotifications = metadata.emailNotifications : null;
      (metadata.hasOwnProperty("pushNotifications")) ? this.formProfile.pushNotifications = metadata.pushNotifications : null;
      this.formProfile.profile_image = [];
      if (metadata.hasOwnProperty("profile")) {
        this.formProfile.type = metadata.profile.userType;
        this.formProfile.profile_image.push(metadata.profile.profile_image.secure_url)
      }
    }

    if (this.$auth.user.email_verified_at === null) {
      this.$toast.error("Verify you account please", {
        theme: "outline",
        position: "bottom-center",
        duration: 8000
      });
    }

    console.log(this.orders);
  }
}
</script>

<style scoped>
.cta {
  border: 1px solid #42FBB7;color:#42FBB7;display: flex;align-items: center;
}
</style>
