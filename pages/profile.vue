<template>
  <div >
    <div class="min-h-screen bg-white">
      <div class="mobile-b min-h-screen bg-left-0 bg-gray-100 lg:bg-center-0">
        <div class="max-w-6xl topBanner mx-auto pt-32 lg:pt-32 z-10 px-2 lg:px-0 pb-32">
          <div class="mx-auto flex flex-wrap">
            <div class="flex flex-wrap w-full text-gray-700 body-font">
              <div class="mt-8 w-full flex flex-wrap relative">
                <div class="absolute flex flex-col top-0 text-xs overflow-auto w-full -mt-12">
                  <div class="flex justify-between items-center w-full overflow-hidden w-full lg:px-12">
                    <div class="text-3xl leading-none font-bold tracking-tight text-left capitalize">Profile / &nbsp;<span class="text-teal-300">{{ currentSlide }}</span></div>
                    <dropdown :auto-close="true" class="flex items-center ml-auto" placement="bottom-start">
                      <svg class="cursor-pointer transform hover:scale-105 transition ease-in-out duration-100" width="50" height="50" viewBox="0 0 50 50"  xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 12.5C7.5 11.1193 8.61929 10 10 10H40C41.3807 10 42.5 11.1193 42.5 12.5C42.5 13.8807 41.3807 15 40 15H10C8.61929 15 7.5 13.8807 7.5 12.5Z" fill="inherit"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 25C7.5 23.6193 8.61929 22.5 10 22.5H40C41.3807 22.5 42.5 23.6193 42.5 25C42.5 26.3807 41.3807 27.5 40 27.5H10C8.61929 27.5 7.5 26.3807 7.5 25Z" fill="inherit"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 37.5C7.5 36.1193 8.61929 35 10 35H40C41.3807 35 42.5 36.1193 42.5 37.5C42.5 38.8807 41.3807 40 40 40H10C8.61929 40 7.5 38.8807 7.5 37.5Z" fill="inherit"/>
                      </svg>

                      <div slot="dropdown" class="mt-2 px-4 py-6 w-screen shadow-xl bg-white rounded max-w-custom">
                        <div v-if="$auth.user.owner" @click="toggleTabs(0)" class="flex relative pb-3 mb-2 cursor-pointer">
                          <div class="h-full w-32 absolute inset-0 flex items-center justify-center opacity-25">
                            <div :class="{'bg-gray-300': openTab !== 0, 'bg-teal-300': openTab === 0}" class=" w-32 mt-10 pointer-events-none"></div>
                          </div>
                          <div class="flex-shrink-0 w-10 h-10 inline-flex items-center justify-center text-white relative z-10">
                            <svg :class="{'fill-black': openTab !== 0, 'custom-fill': openTab === 0}" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2496 5.30916C15.3368 4.46427 17.6167 4 20 4C29.9411 4 38 12.0589 38 22C38 23.1046 37.1046 24 36 24C34.8954 24 34 23.1046 34 22C34 14.268 27.732 8 20 8C18.1397 8 16.3689 8.36176 14.7504 9.01691C13.7266 9.43136 12.5606 8.93733 12.1461 7.91346C11.7317 6.8896 12.2257 5.72361 13.2496 5.30916ZM9.32347 9.91722C10.1516 10.6482 10.2304 11.912 9.49948 12.7402C7.32014 15.2093 6 18.4481 6 22C6 23.1046 5.10457 24 4 24C2.89543 24 2 23.1046 2 22C2 17.4364 3.70095 13.2651 6.50052 10.0932C7.23145 9.2651 8.49533 9.18629 9.32347 9.91722Z" fill="inherit"/>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 22C10 16.4772 14.4772 12 20 12C25.5229 12 30 16.4772 30 22C30 23.1046 29.1046 24 28 24C26.8954 24 26 23.1046 26 22C26 18.6863 23.3137 16 20 16C16.6863 16 14 18.6863 14 22C14 25.3543 13.3107 28.5528 12.0641 31.4575C11.6285 32.4726 10.4525 32.9423 9.43748 32.5067C8.42244 32.0711 7.95271 30.8951 8.38833 29.88C9.42495 27.4645 10 24.802 10 22ZM27.8423 26.0247C28.9332 26.1977 29.6773 27.2224 29.5043 28.3133C29.241 29.9734 28.8755 31.5997 28.4145 33.1855C28.1062 34.2462 26.9964 34.8561 25.9357 34.5477C24.875 34.2394 24.2652 33.1296 24.5735 32.0689C24.9881 30.6429 25.3168 29.1802 25.5537 27.6867C25.7267 26.5957 26.7514 25.8517 27.8423 26.0247Z" fill="inherit"/>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M20 20C21.1046 20 22 20.8954 22 22C22 26.4726 21.0813 30.7358 19.4203 34.6071C18.9848 35.6222 17.8088 36.092 16.7937 35.6565C15.7787 35.221 15.3088 34.045 15.7443 33.03C17.1954 29.6478 18 25.9204 18 22C18 20.8954 18.8954 20 20 20Z" fill="inherit"/>
                            </svg>
                          </div>
                          <div class="flex flex-col justify-center pl-4">
                            <h2 class="font-medium title-font text-sm text-gray-900 tracking-wider">Admin</h2>
                          </div>
                        </div>
                        <div @click="toggleTabs(1)" class="flex relative pb-3 mb-2 cursor-pointer">
                          <div class="h-full w-32 absolute inset-0 flex items-center justify-center opacity-25">
                            <div :class="{'bg-gray-300': openTab !== 1, 'bg-teal-300': openTab === 1}" class=" w-32 mt-10 pointer-events-none"></div>
                          </div>
                          <div class="flex-shrink-0 w-10 h-10 inline-flex items-center justify-center text-white relative z-10">
                            <svg :class="{'': openTab !== 1, 'custom-fill': openTab === 1}" width="40" height="40" viewBox="0 0 40 40"  xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.3435 3.82295C13.0576 2.75601 11.9609 2.12285 10.894 2.40873C9.82708 2.69462 9.19392 3.79129 9.4798 4.85822L9.99744 6.79007C10.2833 7.85701 11.38 8.49017 12.4469 8.20429C13.5139 7.9184 14.147 6.82173 13.8611 5.7548L13.3435 3.82295Z" fill="inherit"/>
                              <path d="M4.85822 9.4798C3.79129 9.19392 2.69462 9.82708 2.40873 10.894C2.12285 11.9609 2.75601 13.0576 3.82295 13.3435L5.7548 13.8611C6.82173 14.147 7.9184 13.5139 8.20429 12.4469C8.49017 11.38 7.85701 10.2833 6.79007 9.99744L4.85822 9.4798Z" fill="inherit"/>
                              <path d="M22.4851 8.34299C23.2662 7.56194 23.2662 6.29561 22.4851 5.51456C21.7041 4.73351 20.4377 4.73351 19.6567 5.51456L18.2425 6.92878C17.4614 7.70982 17.4614 8.97615 18.2425 9.7572C19.0235 10.5382 20.2899 10.5382 21.0709 9.7572L22.4851 8.34299Z" fill="inherit"/>
                              <path d="M8.34299 22.4851L9.7572 21.0709C10.5382 20.2899 10.5382 19.0235 9.7572 18.2425C8.97615 17.4614 7.70982 17.4614 6.92877 18.2425L5.51456 19.6567C4.73351 20.4377 4.73351 21.7041 5.51456 22.4851C6.29561 23.2662 7.56194 23.2662 8.34299 22.4851Z" fill="inherit"/>
                              <path d="M14.7428 12.143C14 11.8459 13.1516 12.02 12.5858 12.5858C12.0201 13.1515 11.846 13.9999 12.1431 14.7428L20.1431 34.7428C20.4356 35.474 21.13 35.9655 21.9169 35.9983C22.7038 36.031 23.4367 35.5989 23.7889 34.8944L26.548 29.3763L32.5858 35.4142C33.3669 36.1952 34.6332 36.1952 35.4143 35.4142C36.1953 34.6332 36.1953 33.3668 35.4143 32.5858L29.3764 26.5479L34.8945 23.7888C35.5989 23.4366 36.0311 22.7038 35.9983 21.9169C35.9656 21.13 35.4741 20.4355 34.7428 20.143L14.7428 12.143Z" fill="inherit"/>
                            </svg>
                          </div>
                          <div class="flex flex-col justify-center pl-4">
                            <h2 class="font-medium title-font text-sm text-gray-900 tracking-wider">Orders</h2>
                          </div>
                        </div>
                        <div @click="toggleTabs(2)" class="flex relative pb-3 mb-2 cursor-pointer">
                          <div class="h-full w-32 absolute inset-0 flex items-center justify-center  opacity-25">
                            <div :class="{'bg-gray-300': openTab !== 2, 'bg-teal-300': openTab === 2}" class=" w-32 mt-10 pointer-events-none"></div>
                          </div>
                          <div class="flex-shrink-0 w-10 h-10 inline-flex items-center justify-center text-white relative z-10">
                            <svg :class="{'': openTab !== 2, 'custom-fill': openTab === 2}" width="40" height="40" viewBox="0 0 40 40"  xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M36 20C36 28.8366 28.8366 36 20 36C11.1634 36 4 28.8366 4 20C4 11.1634 11.1634 4 20 4C28.8366 4 36 11.1634 36 20ZM24 14C24 16.2091 22.2091 18 20 18C17.7909 18 16 16.2091 16 14C16 11.7909 17.7909 10 20 10C22.2091 10 24 11.7909 24 14ZM19.9999 22C15.9648 22 12.4879 24.3899 10.9075 27.8314C13.1081 30.3841 16.3653 32 20 32C23.6346 32 26.8917 30.3841 29.0923 27.8316C27.5119 24.39 24.035 22 19.9999 22Z" fill="inherit"/>
                            </svg>
                          </div>
                          <div class="flex flex-col justify-center pl-4">
                            <h2 class="font-medium title-font text-sm text-gray-900 tracking-wider">Profile</h2>
                          </div>
                        </div>
                        <div @click="toggleTabs(3)" class="flex relative pb-3 mb-2 cursor-pointer">
                          <div class="h-full w-32 absolute inset-0 flex items-center justify-center  opacity-25">
                            <div :class="{'bg-gray-300': openTab !== 3, 'bg-teal-300': openTab === 3}" class=" w-32 mt-10 pointer-events-none"></div>
                          </div>
                          <div class="flex-shrink-0 w-10 h-10 inline-flex items-center justify-center text-white relative z-10">
                            <svg :class="{'': openTab !== 3, 'custom-fill': openTab === 3}" width="40" height="40" viewBox="0 0 40 40"  xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4C5.79086 4 4 5.79086 4 8V30C4 33.3137 6.68629 36 10 36C13.3137 36 16 33.3137 16 30V8C16 5.79086 14.2091 4 12 4H8ZM10 32C11.1046 32 12 31.1046 12 30C12 28.8954 11.1046 28 10 28C8.89543 28 8 28.8954 8 30C8 31.1046 8.89543 32 10 32Z" fill="inherit"/>
                              <path d="M20 28.4851L29.799 18.6862C31.3611 17.1241 31.3611 14.5914 29.799 13.0293L26.9705 10.2009C25.4084 8.63877 22.8758 8.63877 21.3137 10.2009L20 11.5146V28.4851Z" fill="inherit"/>
                              <path d="M32.0001 36H18.1421L30.1421 24H32.0001C34.2092 24 36.0001 25.7909 36.0001 28V32C36.0001 34.2091 34.2092 36 32.0001 36Z" fill="inherit"/>
                            </svg>
                          </div>
                          <div class="flex flex-col justify-center pl-4">
                            <h2 class="font-medium title-font text-sm text-gray-900 tracking-wider">Discounts</h2>
                          </div>
                        </div>
                        <div @click="toggleTabs(4)" class="flex relative pb-3 mb-2 cursor-pointer">
                          <div class="h-full w-32 absolute inset-0 flex items-center justify-center  opacity-25">
                            <div :class="{'bg-gray-300': openTab !== 4, 'bg-teal-300': openTab === 4}" class=" w-32 mt-10 pointer-events-none"></div>
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
                            <h2 class="font-medium title-font text-sm text-gray-900 tracking-wider">Support</h2>
                          </div>
                        </div>
                        <div @click="toggleTabs(5)" class="flex relative pb-3 mb-2 cursor-pointer">
                          <div class="h-full w-32 absolute inset-0 flex items-center justify-center  opacity-25">
                            <div :class="{'bg-gray-300': openTab !== 5, 'bg-teal-300': openTab === 5}" class=" w-32 mt-10 pointer-events-none"></div>
                          </div>
                          <div class="flex-shrink-0 w-10 h-10 inline-flex items-center justify-center text-white relative z-10">
                            <svg :class="{'': openTab !== 5, 'custom-fill': openTab === 5}" width="40" height="40" viewBox="0 0 40 40"  xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M8 8C8 5.79086 9.79086 4 12 4H21.1716C22.2324 4 23.2499 4.42143 24 5.17157L30.8284 12C31.5786 12.7501 32 13.7676 32 14.8284V32C32 34.2091 30.2091 36 28 36H12C9.79086 36 8 34.2091 8 32V8ZM12 20C12 18.8954 12.8954 18 14 18H26C27.1046 18 28 18.8954 28 20C28 21.1046 27.1046 22 26 22H14C12.8954 22 12 21.1046 12 20ZM14 26C12.8954 26 12 26.8954 12 28C12 29.1046 12.8954 30 14 30H26C27.1046 30 28 29.1046 28 28C28 26.8954 27.1046 26 26 26H14Z" fill="inherit"/>
                            </svg>
                          </div>
                          <div class="flex flex-col justify-center pl-4">
                            <h2 class="font-medium title-font text-sm text-gray-900 tracking-wider">Invoices</h2>
                          </div>
                        </div>
                      </div>
                    </dropdown>
                  </div>
                </div>
                <div class="w-full mr-auto h-auto">
                  <div class="lg:px-6 py-6">
                    <div :class="{'hidden': openTab !== 0, 'block': openTab === 0 && $auth.user.owner }" class="shadow border-b bg-white border-gray-200 sm:rounded-lg text-gray-900 py-2">
                      <div class="flex flex-col px-4 py-5 bg-white sm:p-6">

                        <div class="flex flex-wrap -m-4 mt-2">
                          <div class="p-4 xl:w-1/4 md:w-1/2 w-full cursor-pointer group">
                            <div class="relative bg-gray-100 shadow-md h-full rounded-lg  transform transition group-hover:bg-gradient-to-r from-teal-300 via-teal-300 to-teal-300 duration-200 ease-in-out flex flex-col relative overflow-hidden">
                              <div class="flex flex-col m-1 px-6 lg:px-4 py-6 bg-white rounded-lg bg-gray-100">
                                <p class="text-2xl w-0 text-left font-light leading-none text-gray-900 flex items-center pb-4 mb-4 ">
                                  All Orders
                                </p>
                                <span class="absolute top-2/3 left-4.5 text-teal-300 font-semibold text-base">{{ totalCount }}</span>
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute right-2.5 opacity-25 group-hover:scale-105 transition transform duration-200 ease-in-out">
                                  <path d="M24 9C24 7.34315 25.3431 6 27 6H33C34.6569 6 36 7.34315 36 9C36 10.6569 34.6569 12 33 12H27C25.3431 12 24 10.6569 24 9Z" fill="#111827"/>
                                  <path d="M18 9C14.6863 9 12 11.6863 12 15V48C12 51.3137 14.6863 54 18 54H42C45.3137 54 48 51.3137 48 48V15C48 11.6863 45.3137 9 42 9C42 13.9706 37.9706 18 33 18H27C22.0294 18 18 13.9706 18 9Z" fill="#111827"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div class="p-4 xl:w-1/4 md:w-1/2 w-full cursor-pointer group">
                            <div class="relative bg-gray-100 shadow-md h-full rounded-lg  transform transition group-hover:bg-gradient-to-r from-teal-300 via-teal-300 to-teal-300 duration-200 ease-in-out flex flex-col relative overflow-hidden">
                              <div class="flex flex-col m-1 px-6 lg:px-4 py-6 bg-white rounded-lg bg-gray-100">
                                <p class="text-2xl w-0 text-left font-light leading-none text-gray-900 flex items-center pb-4 mb-4 ">
                                  Delegated Orders
                                </p>
                                <span class="absolute top-2/3 left-4.5 text-teal-300 font-semibold text-base">{{ delegatedOrders.length }}</span>
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute right-2.5 opacity-25 group-hover:scale-105 transition transform duration-200 ease-in-out">
                                  <path d="M27 6C25.3431 6 24 7.34315 24 9C24 10.6569 25.3431 12 27 12H33C34.6569 12 36 10.6569 36 9C36 7.34315 34.6569 6 33 6H27Z" fill="#111827"/>
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 15C12 11.6863 14.6863 9 18 9C18 13.9706 22.0294 18 27 18H33C37.9706 18 42 13.9706 42 9C45.3137 9 48 11.6863 48 15V48C48 51.3137 45.3137 54 42 54H18C14.6863 54 12 51.3137 12 48V15ZM21 27C19.3431 27 18 28.3431 18 30C18 31.6569 19.3431 33 21 33H21.03C22.6869 33 24.03 31.6569 24.03 30C24.03 28.3431 22.6869 27 21.03 27H21ZM30 27C28.3431 27 27 28.3431 27 30C27 31.6569 28.3431 33 30 33H39C40.6569 33 42 31.6569 42 30C42 28.3431 40.6569 27 39 27H30ZM21 39C19.3431 39 18 40.3431 18 42C18 43.6568 19.3431 45 21 45H21.03C22.6869 45 24.03 43.6568 24.03 42C24.03 40.3431 22.6869 39 21.03 39H21ZM30 39C28.3431 39 27 40.3431 27 42C27 43.6568 28.3431 45 30 45H39C40.6569 45 42 43.6568 42 42C42 40.3431 40.6569 39 39 39H30Z" fill="#111827"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div class="p-4 xl:w-1/4 md:w-1/2 w-full cursor-pointer group">
                            <div class="relative bg-gray-100 shadow-md h-full rounded-lg  transform transition group-hover:bg-gradient-to-r from-teal-300 via-teal-300 to-teal-300 duration-200 ease-in-out flex flex-col relative overflow-hidden">
                              <div class="flex flex-col m-1 px-6 lg:px-4 py-6 bg-white rounded-lg bg-gray-100">
                                <p class="text-2xl w-0 text-left font-light leading-none text-gray-900 flex items-center pb-4 mb-4 ">
                                  Complete Orders
                                </p>
                                <span class="absolute top-2/3 left-4.5 text-teal-300 font-semibold text-base">{{ completeOrders.length }}</span>
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute right-2.5 opacity-25 group-hover:scale-105 transition transform duration-200 ease-in-out" >
                                  <path d="M27 6C25.3431 6 24 7.34315 24 9C24 10.6569 25.3431 12 27 12H33C34.6568 12 36 10.6569 36 9C36 7.34315 34.6568 6 33 6H27Z" fill="#111827"/>
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 15C12 11.6863 14.6863 9 18 9C18 13.9706 22.0294 18 27 18H33C37.9706 18 42 13.9706 42 9C45.3137 9 48 11.6863 48 15V48C48 51.3137 45.3137 54 42 54H18C14.6863 54 12 51.3137 12 48V15ZM41.1213 32.1213C42.2929 30.9498 42.2929 29.0503 41.1213 27.8787C39.9497 26.7071 38.0502 26.7071 36.8787 27.8787L27 37.7574L23.1213 33.8787C21.9497 32.7071 20.0503 32.7071 18.8787 33.8787C17.7071 35.0503 17.7071 36.9498 18.8787 38.1213L24.8787 44.1213C26.0502 45.2929 27.9497 45.2929 29.1213 44.1213L41.1213 32.1213Z" fill="#111827"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div class="p-4 xl:w-1/4 md:w-1/2 w-full cursor-pointer group">
                            <div class="relative bg-gray-100 shadow-md h-full rounded-lg  transform transition group-hover:bg-gradient-to-r from-teal-300 via-teal-300 to-teal-300 duration-200 ease-in-out flex flex-col relative overflow-hidden">
                              <div class="flex flex-col m-1 px-6 lg:px-4 py-6 bg-white rounded-lg bg-gray-100">
                                <p class="text-2xl w-0 text-left font-light leading-none text-gray-900 flex items-center pb-4 mb-4 ">
                                  Disputed Orders
                                </p>
                                <span class="absolute top-2/3 left-4.5 text-teal-300 font-semibold text-base">{{ disputedOrders.length }} </span>
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute right-2.5 opacity-25 group-hover:scale-105 transition transform duration-200 ease-in-out">
                                  <path d="M24 6C22.3431 6 21 7.34315 21 9C21 10.6569 22.3431 12 24 12H30C31.6569 12 33 10.6569 33 9C33 7.34315 31.6569 6 30 6H24Z" fill="#111827"/>
                                  <path d="M9 15C9 11.6863 11.6863 9 15 9C15 13.9706 19.0294 18 24 18H30C34.9706 18 39 13.9706 39 9C42.3137 9 45 11.6863 45 15V33H31.2426L35.1213 29.1213C36.2929 27.9497 36.2929 26.0503 35.1213 24.8787C33.9497 23.7071 32.0503 23.7071 30.8787 24.8787L21.8787 33.8787C20.7071 35.0503 20.7071 36.9497 21.8787 38.1213L30.8787 47.1213C32.0503 48.2929 33.9497 48.2929 35.1213 47.1213C36.2929 45.9497 36.2929 44.0503 35.1213 42.8787L31.2426 39H45V48C45 51.3137 42.3137 54 39 54H15C11.6863 54 9 51.3137 9 48V15Z" fill="#111827"/>
                                  <path d="M45 33H51C52.6569 33 54 34.3431 54 36C54 37.6569 52.6569 39 51 39H45V33Z" fill="#111827"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p class="text-2xl mt-12 leading-none font-bold text-gray-900 tracking-tight text-left">
                          Dashboard<span class="text-teal-300"> / All Orders</span>
                        </p>

                        <section class="rounded-lg bg-gray-100 overflow-x-auto overflow-y-hidden shadow-xl mt-6">
                          <table class="w-full whitespace-no-wrap text-sm">
                            <tr class="text-left">
                              <th class="px-6 pt-6 pb-4">Client</th>
                              <th class="px-6 pt-6 pb-4">Paper</th>
                              <th class="px-6 pt-6 pb-4">Deadline</th>
                              <th class="px-6 pt-6 pb-4">Status</th>
                              <th class="px-6 pt-6 pb-4">Total</th>
                              <th class="px-6 pt-6 pb-4">Options</th>
                            </tr>
                            <tr v-for="(order, index) in orders" :key="order.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
                              <td class="border-t">
                                <nuxt-link
                                  :to="'orders/' + order.id"
                                  tabindex="-1"
                                  class="px-6 py-4 flex items-center"
                                >
                                  <div class="flex flex-col">
                                    <div class="text-sm font-medium text-gray-900">
                                      {{ JSON.parse(order.order_details).name }}
                                    </div>
                                    <div class="text-sm text-gray-500">
                                      {{ JSON.parse(order.order_details).email }}
                                    </div>
                                  </div>
                                </nuxt-link>
                              </td>
                              <td class="border-t">
                                <nuxt-link
                                  :to="'orders/' + order.id"
                                  tabindex="-1"
                                  class="px-6 py-4 flex items-center"
                                >
                                  <div class="flex flex-col">
                                    <div class="text-sm font-medium text-gray-900">
                                      {{ JSON.parse(order.order_details).paper_type }}
                                    </div>
                                    <div class="text-sm text-gray-500">
                                      {{ JSON.parse(order.order_details).subject }}
                                    </div>
                                  </div>
                                </nuxt-link>
                              </td>
                              <td class="border-t">
                                <nuxt-link
                                  :to="'orders/' + order.id"
                                  tabindex="-1"
                                  class="px-6 py-4 flex items-center"
                                >
                                  {{ JSON.parse(order.order_details) ? JSON.parse(order.order_details).duration ? JSON.parse(order.order_details).duration.duration : '' : '' }}
                                </nuxt-link>
                              </td>
                              <td class="border-t">
                                <nuxt-link
                                  :to="'orders/' + order.id"
                                  tabindex="-1"
                                  class="px-6 py-4 flex items-center"
                                >
                                  <span :class="{'bg-red-100 text-red-800': order.status === 'processing', 'bg-green-100 text-green-800': order.status === 'success' }" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">{{ order.status }}</span>
                                </nuxt-link>
                              </td>
                              <td class="border-t">
                                <nuxt-link
                                  :to="'orders/' + order.id"
                                  tabindex="-1"
                                  class="px-6 py-4 flex items-center"
                                >
                                  {{ JSON.parse(order.order_details).amount | dollar }}
                                </nuxt-link>
                              </td>
                              <td class="border-t w-px">
                                <nuxt-link :to="'orders/' + order.id" tabindex="-1" class="px-4 flex items-center"
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  class="block w-6 h-6 fill-gray-400"
                                >
                                  <polygon
                                    points="12.95 10.707 13.657 10 8 4.343 6.586 5.757 10.828 10 6.586 14.243 8 15.657 12.95 10.707"
                                  ></polygon></svg
                                ></nuxt-link>
                              </td>
                            </tr>
                          </table>
                          <pagination class="px-6 pb-4" :links="links" />
                        </section>

                      </div>
                    </div>
                    <div :class="{'hidden': openTab !== 1, 'block': openTab === 1}" class="shadow border-b bg-white border-gray-200 sm:rounded-lg text-gray-900 py-2 overflow-x-scroll">
                      <section v-if="!order_view && orders.length === 0" class="text-gray-600 body-font">
                        <div class="container px-5 py-24 mx-auto">
                          <div class="lg:w-2/3 flex flex-col justify-center sm:flex-row items-center md:items-start mx-auto">
                            <h1 class="flex-grow sm:pr-16 text-4xl font-black title-font tracking-tighter text-gray-900 text-center md:text-left">We are ready if you are. Start your academic journey with us. Get 10% off your first order.</h1>
                            <button @click="$router.push('/order')" type="button" class="flex-shrink-0 text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg mt-10 sm:mt-0">Get Started</button>
                          </div>
                        </div>
                      </section>
                      <table v-else-if="!order_view && orders.length > 0" class="min-w-full divide-y divide-gray-200">
                        <thead class="font-bold">
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
                      <SingleOrder v-else-if="order_view && orders.length > 0" @back="order_view = !order_view" :order="currentOrder" />
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
                                      <label class="block text-sm leading-5 font-medium text-gray-700">
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
                                          <button @click="handleFileUploadClick" type="button" class="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
                                            Change
                                          </button>
                                        </span>
                                      </div>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                      <label for="about" class="block text-sm leading-5 font-medium text-gray-700">
                                        User Type
                                      </label>
                                      <select id="about" v-model="formProfile.type" class="block mt-2 w-2/3 pl-2 form-select w-full py-2 pr-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline focus:bg-gradient-to-rfocus:outline-none focus:shadow-outline focus:bg-gradient-to-r transition duration-150 ease-in-out sm:text-sm sm:leading-5">
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
                                        <label for="first_name" class="block text-sm font-medium leading-5 text-gray-700">First name</label>
                                        <input v-model="formProfile.first_name" id="first_name" class="block form-input mt-1  appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline sm:text-sm sm:leading-5">
                                      </div>

                                      <div class="col-span-6 sm:col-span-3">
                                        <label for="last_name" class="block text-sm font-medium leading-5 text-gray-700">Last name</label>
                                        <input id="last_name" v-model="formProfile.last_name" class="block form-input mt-1  appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline sm:text-sm sm:leading-5">
                                      </div>

                                      <div class="col-span-6 sm:col-span-3">
                                        <label for="country" class="block text-sm font-medium leading-5 text-gray-700 mb-1">Country</label>
                                        <div class="relative">
                                          <div class="absolute inset-y-0 left-0 py-2 pl-3 flex items-center pointer-events-none">
                                          <span class="text-gray-500 sm:text-sm">
                                            <img ref="flag" :src="computedCountry.flag" alt="flag" style="width: 30px;height: 23px;">
                                          </span>
                                          </div>
                                          <select id="country" v-model="formProfile.country" class="block form-select w-full py-2 pl-12 pr-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline focus:bg-gradient-to-rfocus:outline-none focus:shadow-outline focus:bg-gradient-to-r transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                            <option v-for="co in countries" :value="co.name" >{{ co.name }}</option>
                                          </select>
                                        </div>
                                      </div>

                                      <div class="col-span-6 sm:col-span-3">
                                        <label for="phone" class="block text-sm font-medium leading-5 text-gray-700">Phone number</label>
                                        <div class="relative">
                                          <div class="absolute inset-y-0 left-0 py-2 pl-3 pr-2 flex items-center pointer-events-none">
                                            <span class="text-gray-700 sm:text-sm">
                                              +{{ computedCountry.callingCode }}
                                            </span>
                                          </div>
                                          <input id="phone" v-model="formProfile.phone" class="block form-input mt-1 pl-12 appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline sm:text-sm sm:leading-5">
                                        </div>
                                      </div>

                                      <div class="col-span-6 sm:col-span-3">
                                        <label for="email_address" class="block text-sm font-medium leading-5 text-gray-700">Email address</label>
                                        <input id="email_address" v-model="formProfile.email" type="email" class="block form-input mt-1 appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline sm:text-sm sm:leading-5">
                                      </div>

                                      <div class="col-span-6 sm:col-span-3">
                                        <label for="password" class="block text-sm font-medium leading-5 text-gray-700">Password</label>
                                        <div class="relative">
                                          <input id="password" :type="!passwordFieldType ? 'password' : 'text'" v-model="formProfile.password" class="block form-input mt-1 pr-12 appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline sm:text-sm sm:leading-5">
                                          <button type="button" @click="changePasswordFieldType" class="absolute cursor-pointer inset-y-0 right-0 py-2 pl-3 pr-3 flex items-center">
                                            <span class="text-gray-700 sm:text-sm">
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
                                        <label for="adminKey" class="block text-sm font-medium leading-5 text-gray-700">Admin Key</label>
                                        <input id="adminKey" v-model="formProfile.admin_key" type="text" class="block form-input mt-1 appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline sm:text-sm sm:leading-5">
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
                                      <legend class="text-sm leading-6 font-medium text-gray-900">By Email</legend>
                                      <div class="mt-4">
                                        <div class="mt-4">
                                          <div class="flex items-start">
                                            <div class="flex items-center h-5">
                                              <input @change="changer($event)" v-model="formProfile.emailNotifications.onOrderComplete" id="candidates" type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                                            </div>
                                            <div class="ml-3 text-sm leading-5">
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
                                            <div class="ml-3 text-sm leading-5">
                                              <label for="offers" class="font-medium text-gray-700">Offers</label>
                                              <p class="text-gray-500">Get notified when a discount offer is available.</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </fieldset>
                                    <fieldset class="mt-6">
                                      <legend class="text-sm leading-6 font-medium text-gray-900">Push Notifications</legend>
                                      <p class="text-sm leading-5 text-gray-500">These are delivered via SMS to your mobile phone.</p>
                                      <div class="mt-4">
                                        <div class="mt-4 flex items-center">
                                          <input @change="changer($event)" v-model="pushNotificationsState" id="push_email" name="push_same" type="radio" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                                          <label for="push_email" class="ml-3">
                                            <span class="block text-sm leading-5 font-medium text-gray-700">Same as email</span>
                                          </label>
                                        </div>
                                        <div class="mt-4 flex items-center">
                                          <input @change="changer($event)" v-model="pushNotificationsState" id="push_nothing" name="push_same" type="radio" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                                          <label for="push_nothing" class="ml-3">
                                            <span class="block text-sm leading-5 font-medium text-gray-700">No push notifications</span>
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
                          <button class="flex items-center ml-auto bg-black hover:bg-teal-300 text-white hover:text-black py-2 px-4 text-sm font-medium rounded focus:outline-none focus:shadow-outline transform hover:scale-105 transition ease-in-out duration-100">
                            <svg v-if="loading && currentForm === 'personal'" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
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
                            <nuxt-link to="/ticket" class="w-32 cta text-sm font-semibold py-3 px-4 bg-transparent rounded-full transform hover:scale-105 transition ease-in-out duration-100">
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
import Icon from '@/components/Icon'
import { mapState } from 'vuex'
import LoadingButton from "@/components/LoadingButton"
import SingleOrder from '@/components/SingleOrder'
import Dropdown from '@/components/Dropdown'
import Pagination from '@/components/Pagination'

export default {
  components: {
    LoadingButton,
    Icon,
    SingleOrder,
    Dropdown,
    Pagination
  },
  middleware: 'auth',
  async fetch() {
    try {
      await this.doOrdersFetch()
    } catch (e) {
      console.log("Orders couldn't be fetched")
    }
  },
  data() {
    return {
      totalCount: 0,
      links: [],
      openTab: 1,
      currentOrder: null,
      order_view: false,
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
    // await this.$auth.fetchUser()

    if (this.$auth.user.owner) {
      this.openTab = 0
    }

    this.orders.forEach(order => {
      console.log(JSON.parse(order.order_details).duration.duration);
    })
  },
  watch:{
    $route(to) {
      console.log(to)
      const runner = async () => {
        return await this.doOrdersFetch()
      }
      if (runner()) {
        console.log("paginate runner")
      }
    }
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
    },
    currentSlide() {
      switch (this.openTab) {
        case 0:
          return "Admin"
        case 1:
          return "Orders"
        case 2:
          return "Profile"
        case 3:
          return "Discounts"
        case 4:
          return "Support"
        case 5:
          return "Invoices"
      }
    },
    delegatedOrders() {
      return this.orders.filter(order => order.state === "delegated")
    },
    completeOrders() {
      return this.orders.filter(order => order.state === "complete")
    },
    disputedOrders() {
      return this.orders.filter(order => order.state === "disputed")
    }
  },
  methods: {
    async doOrdersFetch() {
      let url =
        (this.$router.currentRoute.query.hasOwnProperty('page')) ?
          `api/orders?page=${this.$router.currentRoute.query.page}` :
          'api/orders?page=1'

      const { data } = await this.$axios.get(url)
      const { orders, links, totalCount } = data
      this.orders = [ ...orders ]
      this.links = [ ...links ]
      this.totalCount = totalCount

      return true
    },
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
      this.order_view = !this.order_view;
      this.currentOrder = order;
    },
    deleteOrder(id) {
      if (confirm('Are you sure you want to delete this order?')) {
        console.log("deleteOrder", id);
        this.$store.dispatch("deleteItem", { uri: 'orders', data: id });
      }
    },
    async sendConfirmation() {

      this.$toast.success("sending confirmation email", {
        theme: "outline",
        position: "bottom-left",
        duration : 5000
      })

      const { data } = await this.$axios.get(`/api/signup?resend=true`)

      this.$toast.success(data.message, {
        theme: "outline",
        position: "bottom-left",
        duration : 12000
      })

      return data
    }
  },
  mounted() {

    this.form.subject = this.subjects[0]

    this.form.duration = {
      duration: Object.entries(this.duration)[0][0],
      price: Object.entries(this.duration)[0][1],
    }

    this.formProfile.email = this.$auth.user ? this.$auth.user.email : null

    this.formProfile.phone = this.$auth.user ?
      this.$auth.user.phone.split(" ")[1] === undefined ?
        this.$auth.user.phone.split(" ")[0]
        : this.$auth.user.phone.split(" ")[1] : null;

    this.formProfile.first_name = this.$auth.user
      && this.$auth.user.name.split(" ")[0]
        ? this.$auth.user.name.split(" ")[0]
        : null;

    this.formProfile.last_name = this.$auth.user && this.$auth.user.name.split(" ")[1]
      ? this.$auth.user.name.split(" ")[1]
      : null;

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

    setTimeout(() => {
      if (this.$auth.user.email_verified_at === null) {
        this.$toast.error("Check mail to verify account", {
          theme: "outline",
          position: "bottom-left",
          duration: 8000,
          action: [
            {
              text: 'Resend',
              onClick: async (e, toastObject) => {
                const data = await this.sendConfirmation()
                console.log("is data resend", data)
                await this.$auth.logout()
                this.$auth.strategy.token.reset()
                toastObject.goAway(0)
              }
            },
          ]
        })
      }
    }, 1000)
  }
}
</script>

<style scoped>
.cta {
  border: 1px solid #0ef884;color:#0ef884;display: flex;align-items: center;
}
.fill-black {
  fill: black;
}
</style>
