<template>
  <div>
    <div class="absolute top-0 right-0" >

    </div>
    <div class="lg:block absolute top-0 left-0 " >

    </div>
    <div>
      <div class="min-h-screen" style="background: #FBFBFB;">
        <div class="mobile-b min-h-screen relative bg-left-0 lg:bg-center-0">
          <div class="max-w-6xl topBanner mx-auto pt-40 lg:pt-70 z-10 px-8 lg:px-0 pb-56">
            <div>
              <h1 class="text-4xl lg:text-5xl text-white font-bold leading-tight py-2 lg:py-0">
                Professional Essay Writer You've <br>
                Been Looking For!
              </h1>
              <p class="text-white text-lg lg:text-2xl py-6 max-w-4xl leading-normal">
                We write your papers - you get top grades!
              </p>
              <a href="/order" class="button-bg py-3 px-8 text-xl rounded-full text-white font-semibold inline-block mt-4 transform hover:scale-105 transition ease-in-out duration-100">
                Order Now
              </a>
            </div>
          </div>
          <div class="header-main-shape"></div>
          <div class="absolute text-center flex flex-col py-6 text-xl custom-calc md:right-10 md:top-30 lg:top-30 max-w-xs">
            <h2 class="text-2xl font-semibold leading-none pb-1 text-white" data-v-409e2651="">
              Place your order
            </h2>
            <select v-model="form.subject" class="bg-secondary text-vuegreen hover:bg-gradient-to-r mt-2 form-input py-3 px-3 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:shadow-outline-blue focus:bg-gradient-to-r transition duration-150 ease-in-out sm:text-sm sm:leading-5">
              <optgroup label="Subjects">
                <option v-for="subject in subjects" :value="subject">{{ subject }}</option>
              </optgroup>
            </select>
            <select @change="setFirstDuration" v-model="form.level" class="bg-secondary text-vuegreen hover:bg-gradient-to-r mt-2 form-input py-3 px-3 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:shadow-outline-blue focus:bg-gradient-to-r transition duration-150 ease-in-out sm:text-sm sm:leading-5">
              <optgroup label="Academic Levels">
                <option v-for="data in storedata" :key="data.id" :value="data.id" >{{ data.level }}</option>
              </optgroup>
            </select>
            <div class="flex mt-2 sm:text-sm sm:leading-5">
              <select v-model="form.duration" class="w-1/2 bg-secondary hover:bg-gradient-to-r py-3 px-3 text-vuegreen form-input border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:shadow-outline-blue focus:bg-gradient-to-r transition duration-150 ease-in-out ">
                <optgroup label="Deadline">
                  <option v-for="[key, value] of Object.entries(duration)" :value="{duration: key, price: value}" >{{ key }}</option>
                </optgroup>
              </select>
              <div class="flex w-1/2 ml-1 text-vuegreen border border-gray-300 bg-secondary rounded-3xl">
                <button class="w-1/3" @click="form.pages > 0 ? form.pages-- : form.pages = 0">-</button>
                <input class="w-1/3 form-input bg-secondary hover:bg-gradient-to-r text-center" type="number" v-model="form.pages" />
                <button class="w-1/3" @click="form.pages++">+</button>
              </div>
            </div>
            <div class="px-1 py-3 text-white font-bold text-xl">{{ totalPrice | dollar }}</div>
            <div class="flex">
              <nuxt-link to="/order" class="w-1/2  button-bg rounded-full text-base px-3 py-2 text-white font-medium transform hover:scale-105 transition ease-in-out duration-100 mr-1">Continue</nuxt-link>
              <nuxt-link to="/order" class="w-1/2  button-bg rounded-full text-base px-3 py-2 text-white font-medium transform hover:scale-105 transition ease-in-out duration-100 ml-1">10% Discount</nuxt-link>
            </div>
          </div>
        </div>
        <div class="max-w-6xl mx-auto px-4 lg:px-0 mt-4 lg:mt-12 pt-12">
          <h2 class="text-4xl font-semibold leading-none pb-1 text-black text-center">
            Guarantees
          </h2>
          <p class="lg:text-2xl text-secondary text-center">
            We offer quick and transparent support.
          </p>
          <div class="mt-12">
            <div class="flex flex-col md:flex-row lg:flex-row flex-wrap">
              <div class="w-full lg:w-1/3 lg:pr-3 lg:pl-0 group" >
                <a href="/features" class="p-8 h-32 lg:h-64 mb-4 lg:mb-0 rounded-lg flex flex-col-reverse moneyBack bg-right-top transform transition ease-in-out duration-100 group-hover:scale-105 cursor-pointer" >
                  <div >
                    <h2 class="text-white text-2xl font-bold" >100% Money Back
                      <span class="transform inline-block transition ease-in-out duration-150 group-hover:translate-x-3" >
                           →
                           </span>
                    </h2>
                    <p class="text-xl text-white leading-tight opacity-75" >Legitimate claims will be refunded</p>
                  </div>
                </a>
              </div>
              <div class="w-full lg:w-1/3 lg:px-3 group" >
                <a href="/features" class="p-8 h-32 lg:h-64 mb-4 lg:mb-0 rounded-lg flex flex-col-reverse revisions transform transition ease-in-out duration-100 group-hover:scale-105 cursor-pointer" >
                  <div >
                    <h2 class="text-white text-2xl font-bold" >Free Revisions
                      <span class="transform inline-block transition ease-in-out duration-150 group-hover:translate-x-3" >
                           →
                           </span>
                    </h2>
                    <p class="text-xl text-white leading-tight opacity-75" >Get your work revised on request</p>
                  </div>
                </a>
              </div>
              <div class="w-full lg:w-1/3 lg:pl-3 lg:pr-0 group" >
                <a href="/features" class="p-8 h-32 lg:h-64 mb-4 lg:mb-0 rounded-lg flex flex-col-reverse safePayments transform transition ease-in-out duration-100 group-hover:scale-105 cursor-pointer" >
                  <div >
                    <h2 class="text-white text-2xl font-bold" >Safe Payments
                      <span class="transform inline-block transition ease-in-out duration-150 group-hover:translate-x-3" >
                           →
                           </span>
                    </h2>
                    <p class="text-xl text-white leading-tight opacity-75" >Authentic payment processors</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-6xl mx-auto px-4 lg:px-0 mt-4 lg:mt-12 py-16">
          <h2 class="text-4xl font-semibold leading-none pb-4 text-black text-center">
            Why Choose Us
          </h2>
          <p class="lg:text-2xl text-secondary text-center">
            We guide you through your toughest academic huddles as you learn to overcome them from expert writers.
            It is easy to fall victim to unreliable academic help solutions. Our advice is that you
            choose to work with a company that has been in the industry long enough to get recognition in the industry.
            Besides our customer testimonials, we have received a ranking and positive review from Studential for the quality homework help services we
            offer. Sit back and watch your academic performance drastically improve by having one of our
            competent and reliable writers work on your homework and our quality assurance team confirm on
            the quality of your homework before it is handed over to you.
          </p>
          <div class="mt-12" >
            <div class="flex flex-col md:flex-row lg:flex-row flex-wrap -mx-4" >
              <div class="lg:w-1/3 md:w-1/2 sm:w-1/3 w-full flex flex-col group mb-8 px-4" >
                <div class="group-hover:bg-gradient-to-r from-vuergreen to-lightergreen p-1 rounded-lg" >
                  <div class="py-8 px-4 rounded-lg flex-1 md:flex relative hover:shadow-md bg-white shadow" >
                    <div class="items-center absolute w-full top-0 justify-end pr-4 pt-4 left-0 hidden group-hover:flex" >

                    </div>
                    <div class="mx-auto md:mx-0 md:mr-6 py-4" >

                      <svg class="mx-auto transform group-hover:scale-105 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" id="ic_phone_in_talk_48px" width="45.06" height="45.06" viewBox="0 0 45.06 45.06">
                        <path id="Path_5" data-name="Path 5" d="M48.557,37.292a28.556,28.556,0,0,1-8.937-1.427,2.512,2.512,0,0,0-2.541.613L31.572,42a37.764,37.764,0,0,1-16.5-16.484l5.507-5.52a2.512,2.512,0,0,0,.613-2.541A28.634,28.634,0,0,1,19.768,8.5a2.5,2.5,0,0,0-2.5-2.5H8.5A2.5,2.5,0,0,0,6,8.5,42.553,42.553,0,0,0,48.557,51.06a2.5,2.5,0,0,0,2.5-2.5V39.8A2.5,2.5,0,0,0,48.557,37.292Zm-2.5-8.762H51.06A22.532,22.532,0,0,0,28.53,6v5.007A17.527,17.527,0,0,1,46.053,28.53Zm-10.013,0h5.007A12.521,12.521,0,0,0,28.53,16.013V21.02A7.516,7.516,0,0,1,36.04,28.53Z" transform="translate(-6 -6)" fill="#42FBB7"/>
                      </svg>

                    </div>
                    <div class="text-center md:text-left" >
                      <h4 class="text-vuegreen text-xl font-semibold leading-none" >We understand your Style
                      </h4>
                      <p class="text-secondary leading-none py-2" >Our seasoned writers can imitate your desired style</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 md:w-1/2 sm:w-1/3 w-full flex flex-col group mb-8 px-4"  >
                <div class="group-hover:bg-gradient-to-r from-vuergreen to-lightergreen p-1 rounded-lg" >
                  <div class="py-8 px-4 rounded-lg flex-1 md:flex relative hover:shadow-md bg-white shadow" >
                    <div class="items-center absolute w-full top-0 justify-end pr-4 pt-4 left-0 hidden group-hover:flex" >

                    </div>
                    <div class="mx-auto md:mx-0 md:mr-6 py-4" >

                      <svg class="mx-auto transform group-hover:scale-105 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="45.06" height="45.06" viewBox="0 0 45.06 45.06">
                        <g id="archive-paper" transform="translate(-1 -1)">
                          <path id="Path_6" data-name="Path 6" d="M45.08,13H42.142V31.475a.976.976,0,0,1-.98.972h-9.8a.976.976,0,0,0-.98.972v2.917H16.673V33.419a.976.976,0,0,0-.98-.972H5.9a.976.976,0,0,1-.98-.972V13H1.98a.976.976,0,0,0-.98.972v28.2A3.9,3.9,0,0,0,4.918,46.06H42.142a3.9,3.9,0,0,0,3.918-3.889v-28.2A.976.976,0,0,0,45.08,13Z" fill="#42FBB7"/>
                          <path id="Path_7" data-name="Path 7" d="M39.088,1H7.972A.986.986,0,0,0,7,2V30a.986.986,0,0,0,.972,1H39.088a.986.986,0,0,0,.972-1V2A.986.986,0,0,0,39.088,1ZM30.336,20H16.724a1,1,0,0,1,0-2H30.336a1,1,0,0,1,0,2Zm0-8H16.724a1,1,0,0,1,0-2H30.336a1,1,0,0,1,0,2Z" fill="#42FBB7"/>
                        </g>
                      </svg>

                    </div>
                    <div class="text-center md:text-left" >
                      <h4 class="text-vuegreen text-xl font-semibold leading-none" >Young and Ambitious
                      </h4>
                      <p class="text-secondary leading-none py-2" >We break away from huge conglomerates whose interest is in your dollar</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 md:w-1/2 sm:w-1/3 w-full flex flex-col group mb-8 px-4"  >
                <div class="group-hover:bg-gradient-to-r from-vuergreen to-lightergreen p-1 rounded-lg" >
                  <div class="py-8 px-4 rounded-lg flex-1 md:flex relative hover:shadow-md bg-white shadow" >
                    <div class="items-center absolute w-full top-0 justify-end pr-4 pt-4 left-0 hidden group-hover:flex" >

                    </div>
                    <div class="mx-auto md:mx-0 md:mr-6 py-4" >

                      <svg class="mx-auto transform group-hover:scale-105 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="45.06" height="45.06" viewBox="0 0 45.06 45.06">
                        <g id="ic_block_48px" transform="translate(-4 -4)">
                          <path id="Path_8" data-name="Path 8" d="M26.53,4A22.53,22.53,0,1,0,49.06,26.53,22.524,22.524,0,0,0,26.53,4ZM8.506,26.53A18.005,18.005,0,0,1,37.57,12.3L12.3,37.57A17.956,17.956,0,0,1,8.506,26.53ZM26.53,44.554a17.956,17.956,0,0,1-11.04-3.8L40.758,15.49A18.005,18.005,0,0,1,26.53,44.554Z" fill="#42FBB7"/>
                        </g>
                      </svg>

                    </div>
                    <div class="text-center md:text-left" >
                      <h4 class="text-vuegreen text-xl font-semibold leading-none" >We take data privacy seriously
                      </h4>
                      <p class="text-secondary leading-none py-2" >Our seasoned writers can imitate your desired style</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 md:w-1/2 sm:w-1/3 w-full flex flex-col group mb-8 px-4"  >
                <div class="group-hover:bg-gradient-to-r from-vuergreen to-lightergreen p-1 rounded-lg" >
                  <div class="py-8 px-4 rounded-lg flex-1 md:flex relative hover:shadow-md bg-white shadow" >
                    <div class="items-center absolute w-full top-0 justify-end pr-4 pt-4 left-0 hidden group-hover:flex" >

                    </div>
                    <div class="mx-auto md:mx-0 md:mr-6 py-4" >

                      <svg class=" mx-auto transform group-hover:scale-105 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="53.164" height="51.239" viewBox="0 0 53.164 51.239">
                        <g id="handout" transform="translate(-2 -3)">
                          <path id="Path_9" data-name="Path 9" d="M23.394,3a8.394,8.394,0,1,0,8.394,8.394A8.4,8.4,0,0,0,23.394,3Zm2.8,9.327H20.6a.933.933,0,1,1,0-1.865h5.6a.933.933,0,0,1,0,1.865Z" transform="translate(-1.741)" fill="#42FBB7"/>
                          <path id="Path_10" data-name="Path 10" d="M47.394,15a8.394,8.394,0,1,0,8.394,8.394A8.4,8.4,0,0,0,47.394,15Zm2.8,9.327H44.6a.933.933,0,0,1,0-1.865h5.6a.933.933,0,0,1,0,1.865Z" transform="translate(-5.288 -1.62)" fill="#42FBB7"/>
                          <path id="Path_11" data-name="Path 11" d="M51.553,44.049l-21.17,1.938a9.275,9.275,0,0,1-5.633-1.3l-5.835-3.51H32.53a3.391,3.391,0,0,0,3.3-3.475,3.432,3.432,0,0,0-2.693-3.416L20.915,31.872A45.958,45.958,0,0,0,12.007,31H2V49.415l19.875,8.722a11.047,11.047,0,0,0,6.873.261L55.164,47.534h0A3.4,3.4,0,0,0,51.553,44.049Z" transform="translate(0 -4.581)" fill="#42FBB7"/>
                        </g>
                      </svg>

                    </div>
                    <div class="text-center md:text-left" >
                      <h4 class="text-vuegreen text-xl font-semibold leading-none" >High quality for affordable prices
                      </h4>
                      <p class="text-secondary leading-none py-2" >High-quality content for the most affordable prices on the market</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 md:w-1/2 sm:w-1/3 w-full flex flex-col group mb-8 px-4"  >
                <div class="group-hover:bg-gradient-to-r from-vuergreen to-lightergreen p-1 rounded-lg" >
                  <div class="py-8 px-4 rounded-lg flex-1 md:flex relative hover:shadow-md bg-white shadow" >
                    <div class="items-center absolute w-full top-0 justify-end pr-4 pt-4 left-0 hidden group-hover:flex" >

                    </div>
                    <div class="mx-auto md:mx-0 md:mr-6 py-4" >

                      <svg class="mx-auto transform group-hover:scale-105 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="36.06" height="56.666" viewBox="0 0 36.06 56.666">
                        <g id="ic_phone_android_48px" transform="translate(-10 -2)">
                          <path id="Path_12" data-name="Path 12" d="M38.333,2H17.727A7.733,7.733,0,0,0,10,9.727V50.939a7.733,7.733,0,0,0,7.727,7.727H38.333a7.733,7.733,0,0,0,7.727-7.727V9.727A7.733,7.733,0,0,0,38.333,2ZM33.181,53.514h-10.3V50.939h10.3Zm8.371-7.727H14.507V9.727H41.552Z" fill="#42FBB7"/>
                        </g>
                      </svg>

                    </div>
                    <div class="text-center md:text-left" >
                      <h4 class="text-vuegreen text-xl font-semibold leading-none" >Any subject, any deadline
                      </h4>
                      <p class="text-secondary leading-none py-2" >We will meet your expectations, just hire an essay writer and take a look</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 md:w-1/2 sm:w-1/3 w-full flex flex-col group mb-8 px-4"  >
                <div class="group-hover:bg-gradient-to-r from-vuergreen to-lightergreen p-1 rounded-lg" >
                  <div class="py-8 px-4 rounded-lg flex-1 md:flex relative hover:shadow-md bg-white shadow" >
                    <div class="items-center absolute w-full top-0 justify-end pr-4 pt-4 left-0 hidden group-hover:flex" >

                    </div>
                    <div class="mx-auto md:mx-0 md:mr-6 py-4" >

                      <svg class="mx-auto transform group-hover:scale-105 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="50" height="62" viewBox="0 0 50 62">
                        <g id="single-folded-content" transform="translate(-7 -1)">
                          <path id="Path_13" data-name="Path 13" d="M42,2.586V16H55.414Z" fill="#42FBB7"/>
                          <path id="Path_14" data-name="Path 14" d="M40,17V1H9A2,2,0,0,0,7,3V61a2,2,0,0,0,2,2H55a2,2,0,0,0,2-2V18H41A1,1,0,0,1,40,17ZM20,17h8a1,1,0,0,1,0,2H20a1,1,0,0,1,0-2ZM44,49H20a1,1,0,0,1,0-2H44a1,1,0,0,1,0,2Zm0-10H20a1,1,0,0,1,0-2H44a1,1,0,0,1,0,2Zm1-11a1,1,0,0,1-1,1H20a1,1,0,0,1,0-2H44A1,1,0,0,1,45,28Z" fill="#42FBB7"/>
                        </g>
                      </svg>

                    </div>
                    <div class="text-center md:text-left" >
                      <h4 class="text-vuegreen text-xl font-semibold leading-none" >Quality Samples
                      </h4>
                      <p class="text-secondary leading-none py-2" >Some of the best work of our experienced essay writers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-center py-4" >
              <button class="rounded-full text-white font-semibold inline-block mt-4 nuxt-link-exact-active nuxt-link-active transform hover:scale-105 transition ease-in-out duration-100 bg-gradient-to-r from-vuegreen to-lightgreen py-3 px-8 text-xl" >
                Order Now
              </button>
            </div>
          </div>
        </div>
        <div class="max-w-6xl mx-auto px-4 lg:px-0 lg:pt-12 lg:pb-16 pb-16">
          <div class="bg-gradient-to-r from-vuegreen to-lightgreen p-8 rounded-lg">
            <h3 class="font-semibold text-white text-3xl">
              Offers & Updates
            </h3>
            <p class="text-white text-xl -mt-1 pb-2 opacity-75 leading-tight">
              Subscribe to our newsletter for special offers!
            </p>
            <div >
              <div class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-2765519" >
                <div class="ml-form-align-center" >
                  <div class="ml-form-embedWrapper embedForm" >
                    <div class="ml-form-embedBody ml-form-embedBodyDefault row-form" >
                      <div class="ml-form-embedContent" style="margin-bottom: 0" ></div>
                      <form method="post" target="_blank" class="ml-block-form" >
                        <div class="ml-form-formContent" >
                          <div class="ml-form-fieldRow ml-last-item" >
                            <div class="flex items-center w-full lg:w-1/2 ml-field-group ml-field-email ml-validate-email ml-validate-required" >
                              <input type="email" placeholder="Email" class="form-control py-3 px-6 rounded-full bg-secondary text-lg text-secondary rounded-r-none w-1/2 lg:w-full" >
                              <button class="rounded-full text-black font-semibold inline-block transform hover:scale-105 transition ease-in-out duration-100 my-4 rounded-r-full rounded-l-none py-3 -ml-1 whitespace-no-wrap bg-white py-2 px-6 text-lg">
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                        <input type="hidden" name="ml-submit" value="1" >
                        <div class="ml-form-embedSubmit" >
                          <button disabled="disabled" type="button" class="loading" style="display: none" >
                            <div class="ml-form-embedSubmitLoad" >
                              <div ></div>
                              <div ></div>
                              <div ></div>
                              <div ></div>
                            </div>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="ml-form-successBody row-success" style="display: none" >
                      <div class="ml-form-successContent" >
                        <p class="text-xl text-white" >
                          Thank you! You have successfully joined our list.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-6xl mx-auto px-4 lg:px-0 mt-4 lg:mt-12 pb-16">
          <h2 class="text-4xl font-semibold leading-none pb-1 text-black text-center">
            Frequently Asked Questions about Custom Writing.
          </h2>
          <p class="lg:text-2xl text-secondary text-center">
            What to expect in this virtual service?
          </p>
          <div class="flex flex-col lg:flex-row lg:py-12">
            <div class="w-full lg:w-1/3 h-auto">
              <div class="h-full">
                <ul>
                  <li class="mb-3 lg:mb-1">
                    <a @click="toggleTabs(1)" :class="{'text-secondary bg-transparent': openTab !== 1, 'rounded-l-full text-accordion bg-secondary': openTab === 1}"  class="px-2 py-4 transition duration-200 ease-in-out relative block font-medium rounded-l-xl overflow-hidden" href="javascript:void(0);">
                      <div :class="{'bg-transparent': openTab !== 1, 'rounded-l-full bg-accordion': openTab === 1}" class="absolute inset-0 w-6"></div>
                      <div class="ml-8 text-lg">Who are Essay Dons?</div>
                    </a>
                  </li>
                  <li class="mb-3 lg:mb-1">
                    <a @click="toggleTabs(2)" :class="{'text-secondary bg-transparent': openTab !== 2, 'rounded-l-full text-accordion bg-secondary': openTab === 2}"  class="px-2 py-4 transition duration-200 ease-in-out relative block font-medium rounded-l-xl overflow-hidden" href="javascript:void(0);">
                      <div :class="{'bg-transparent': openTab !== 2, 'rounded-l-full bg-accordion': openTab === 2}" class="absolute inset-0 w-6"></div>
                      <div class="ml-8 text-lg">About free inquiry?</div>
                    </a>
                  </li>
                  <li class="mb-3 lg:mb-1">
                    <a @click="toggleTabs(3)" :class="{'text-secondary bg-transparent': openTab !== 3, 'rounded-l-full text-accordion bg-secondary': openTab === 3}"  class="px-2 py-4 transition duration-200 ease-in-out relative block font-medium rounded-l-xl overflow-hidden" href="javascript:void(0);">
                      <div :class="{'bg-transparent': openTab !== 3, 'rounded-l-full bg-accordion': openTab === 3}" class="absolute inset-0 w-6"></div>
                      <div class="ml-8 text-lg">Is your service legal?</div>
                    </a>
                  </li>
                  <li class="mb-3 lg:mb-1">
                    <a @click="toggleTabs(4)" :class="{'text-secondary bg-transparent': openTab !== 4, 'rounded-l-full text-accordion bg-secondary': openTab === 4}" class="px-2 py-4 transition duration-200 ease-in-out relative block font-medium rounded-l-xl overflow-hidden" href="javascript:void(0);">
                      <div :class="{'bg-transparent': openTab !== 4, 'rounded-l-full bg-accordion': openTab === 4}" class="absolute inset-0 w-6"></div>
                      <div class="ml-8 text-lg">Do you have any discounts?</div>
                    </a>
                  </li>
                  <li class="mb-3 lg:mb-1">
                    <a @click="toggleTabs(5)" :class="{'text-secondary bg-transparent': openTab !== 5, 'rounded-l-full text-accordion bg-secondary': openTab === 5}" class="px-2 py-4 transition duration-200 ease-in-out relative block font-medium rounded-l-xl overflow-hidden" href="javascript:void(0);">
                      <div :class="{'bg-transparent': openTab !== 5, 'rounded-l-full bg-accordion': openTab === 5}" class="absolute inset-0 w-6"></div>
                      <div class="ml-8 text-lg">Which formats do you provide?</div>
                    </a>
                  </li>
                  <li class="mb-3 lg:mb-1">
                    <a @click="toggleTabs(6)" :class="{'text-secondary bg-transparent': openTab !== 6, 'rounded-l-full text-accordion bg-secondary': openTab === 6}" class="px-2 py-4 transition duration-200 ease-in-out relative block font-medium rounded-l-xl overflow-hidden" href="javascript:void(0);">
                      <div :class="{'bg-transparent': openTab !== 6, 'rounded-l-full bg-accordion': openTab === 6}" class="absolute inset-0 w-6"></div>
                      <div class="ml-8 text-lg">How will I receive the completed paper?</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-full lg:w-2/3 bg-secondary h-auto md:rounded-r-xl">
              <div class="px-4 lg:px-6 py-2">

                <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}" class="text-white py-2 text-xl">

                  <p class="">In recent years, there has been rising demand among students for online homework help. Owing to
                    this demand, <a href="/">Essaydons.com</a> was established with an aim to offer high quality homework help
                    services to anyone that came knocking our door. We are one of those companies that have been of
                    great help to many students for the past eight years. Over time we have built trust among our clients
                    through continuously providing high-quality homework help services. So far we have served over
                    forty thousand clients in different fields of study. The company has recruited over three hundred
                    professional writers to ensure that you always have a writer to personally attend to any of your
                    homework needs.</p>
                </div>

                <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}" class="text-white py-2 text-xl">

                  <p class="">We're an expert essay writing service that offers a wealth of academic writing experience to students from all over the world. We aim to match the most qualified essay writer to your order, and for that, we hire the most seasoned essay writers from various disciplines.</p>

                  <p class="">Quality is our top priority, so you can rest assured that every order you place via our website will be completed on the highest level possible. To order your first essay with us, simply fill out an order form, pay for the piece, and get in touch with the assigned essay writer.</p>

                </div>

                <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}" class="text-white py-2 text-xl">

                  <p class="">Quality is our top priority, so you can rest assured that every order you place via our website will be completed on the highest level possible. To order your first essay with us, simply fill out an order form, pay for the piece, and get in touch with the assigned essay writer.</p>

                  <p class="">Make sure to familiarize yourselves with our Guarantees should you have any doubts or questions. And feel free to contact us via our 24/7 chat support: our team is working around-the-clock helping you with any issues you might face.</p>

                </div>

                <div v-bind:class="{'hidden': openTab !== 4, 'block': openTab === 4}" class="text-white py-2 text-xl">

                  <p class="">We're an expert essay writing service that offers a wealth of academic writing experience to students from all over the world. We aim to match the most qualified essay writer to your order, and for that, we hire the most seasoned essay writers from various disciplines.</p>

                  <p class="">Make sure to familiarize yourselves with our Guarantees should you have any doubts or questions. And feel free to contact us via our 24/7 chat support: our team is working around-the-clock helping you with any issues you might face.</p>

                </div>

                <div v-bind:class="{'hidden': openTab !== 5, 'block': openTab === 5}" class="text-white py-2 text-xl">

                  <p class="">We're an expert essay writing service that offers a wealth of academic writing experience to students from all over the world. We aim to match the most qualified essay writer to your order, and for that, we hire the most seasoned essay writers from various disciplines.</p>

                </div>

                <div v-bind:class="{'hidden': openTab !== 6, 'block': openTab === 6}" class="text-white py-2 text-xl">

                  <p class="">Expert essay writing service that offers a wealth of academic writing experience to students from all over the world. We aim to match the most qualified essay writer to your order, and for that, we hire the most seasoned essay writers from various disciplines.</p>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-6xl mx-auto px-4 lg:px-0 mt-4 lg:mt-12 pb-16">
          <h2 class="text-4xl font-semibold leading-none pb-1 text-black text-center">
            Do You Need an Essay Writer?
          </h2>
          <p class="lg:text-2xl text-secondary text-center">
            Our Essay Writing Service is Here to Help You Out!
          </p>
          <div class="flex flex-col lg:flex-row lg:py-12">
            <div class="w-full lg:w-1/2 h-auto">
              <div class="lg:pr-4 text-secondary py-2 text-base block">
                <p class="py-2">
                  Can’t remember the last time you went out with your friends for a cup of tea?

                  Do you feel like your tutors are completely oblivious of the fact that you have a life outside of college? Can’t deal with yet another academic piece you have to compose overnight?

                  You are not alone! Thousands of students from all over the world feel the same way about their studying. However, the smartest of them choose to seek our custom essay writing service whenever they get overwhelmed with their education.

                  Just think about it.

                  No more sleepless nights! No more rush and gallons of coffee to keep you awake again and again. Just drop us a line and our essay writers will be on their way to craft an A+ piece for you whenever needed day or night.

                  Your top-notch essay is just one click away. Don't lose your chance for top grades with the help of a professional essay writing service. No matter what subject you need an essay for, we've got it all covered.
                </p>


                <h3 class="font-black text-xl">Our Unique Features</h3>
                <p class="py-2">
                  After years in this business, we know for sure what a student needs from an online essay writing service. We have fine-tuned our services to these needs to stay on top of things. Meet an extensive list of every single feature that makes us unique and outstanding. And believe us, we are not bragging. We are just being realistic
                </p>

                <h4 class="font-bold">1. A massive team of online essay writers.</h4>
                <p class="py-2">We do our best to hire as many talents on our as possible. We scan each resume that comes our way to ensure that not one excellent essay writer is left unnoticed. Our team consists of dozens of experts from various fields and backgrounds. And all this is done to meet the growing demand for quality online ghost writing.

                <h4 class="font-bold">2. Reasonable prices.</h4>
                <p class="py-2">We aim to establish prices that will both motivate the essay writers and not leave our customers wanting. Affordability is at the core of our principles, so be sure you won't have to rob the bank to get your piece written by our experts.</p>

                <h4 class="font-bold">3. 100% originality.</h4>

                <p class="py-2">Yes, we do have a substantial base of ready-made essays. But rest assured: we craft each new essay from scratch. Knowing how bad plagiarism is to your good name at school, we avoid it by all means and check each paper for its instances...</p>

                <h4 class="font-bold">4. Excellent quality-price ratio.</h4>

                <p class="py-2">When you pay us to write your essay, you are practically investing fair money into top college grades. With our help, you get to stretch a buck and meet every single deadline at school without sacrificing your sleep, social life, and sanity</p>

              </div>
            </div>
            <div class="w-full lg:w-1/2 h-auto">
              <div class="lg:pl-4 text-secondary py-2 text-base block">
                <h3 class="font-black text-xl">Why Choose Our EssayDons</h3>
                <p class="py-2">Well, there are multiple reasons for it. The most important among them include but are not limited to:</p>

                <h3 class="font-black text-xl">Plagiarism Free Assignments.</h3>
                <p class="py-2">
                  All our services are 100% original content, expect no trace of plagiarism in any of your assignments
                  handled by our competent homework writers. The company has clear guidelines and rules on
                  plagiarism which our writers have always been keen to adhere to. The level of discipline and
                  commitment our writers have has ensured that essaydons.com never gets to deal with any
                  plagiarism case for all the time we have been in the homework help service industry. With the
                  advancement of plagiarism checking tools, it is even hard for us to submit plagiarised work to you as
                  our quality assurance team pass all your assignments through these plagiarism checking tools before
                  your assignment is uploaded to you.
                </p>

                <h3 class="font-black text-xl">Professional writing team.</h3>
                <p class="py-2">
                  Our team of writers has been hired after a thorough recruitment exercise conducted after every two years.
                  We want to ensure consistency, and for this reason, we like to train and perfect on the writers we have as opposed to having new writers in the company every other month, which will certainly not work in favour of the company’s standards.
                </p>

                <h3 class="font-black text-xl">Timely delivery.</h3>
                <p class="py-2">Your assignment will be delivered on time. We know the implications late assignment submission
                  could have on your academic life, for this reason, we will ensure that you get to submit all your
                  assignments in time by having our writers upload to you your homework in good time to allow you
                  go through your homework and have any necessary corrections made on it by your homework
                  writer. All we ask of you is to simply place your order with us right away for our writers to
                  immediately start working on it. Timely order requests allow our writers to have ample time and less
                  pressure working on your assignments. It is not late, place your order now.
                </p>

                <h3 class="font-black text-xl">High quality.</h3>
                <p class="py-2">
                  Our writers have gained industry
                  experience in their various fields of expertise. Therefore, they not only apply academic knowledge to
                  your homework but also add a professional touch to it. <a href="/">Essaydons.com</a> assures you that your
                  assignment is in the best hands and brains. Our quality assurance team also conducts training and
                  tests on our writers to ensure that <a href="/">essaydons.com</a> homework quality standards are always met by
                  our writers.
                </p>

                <h3 class="font-black text-xl">Round-the-clock support.</h3>
                <p class="py-2">
                  You can always get your homework needs tended to 24/7 regardless of your location.
                  <a href="/">Essaydons.com</a> has hired enough writers and support personnel to ensure that you do not have to
                  wait to get your homework needs attended to. Our response from both our writers and customer
                  support is prompt and comes as soon as you reach out to us. Our 24/7 availability has especially
                  been of great help to students with urgent homework needs. Place your homework order with us
                  anytime you wish. It does not matter how close you are to your deadline; we will effectively work on
                  your assignment and deliver high-quality homework help to you and on time.
                </p>

                <h3 class="font-black text-xl">How It Works</h3>
                <p class="py-2">By now, you might probably be looking for ways to place your first order. If so, then we’ve got fantastic news for you! It will only take a couple of minutes.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-6xl mx-auto px-4 lg:px-0 mt-4 lg:mt-12 pb-16">
          <h2 class="text-4xl font-semibold leading-none pb-1 text-black text-center">
            What You Get in the End
          </h2>
          <p class="lg:text-2xl text-secondary text-center">
            We get you quality grades.
          </p>
          <div class="flex flex-col lg:flex-row lg:py-12">
            <div class="w-full lg:w-1/2 h-auto">
              <div class="lg:pr-4 py-2 block h-auto bg-img" >
                <img class="py-2 mx-auto opacity-75" alt="happy learners" src="~/assets/images/whatyouget.png" />
              </div>
            </div>
            <div class="w-full lg:w-1/2 h-auto">
              <div class="lg:pl-4 text-secondary py-2 text-base block">
                <p class="py-2">Wondering why you should order an essay at our essay writing service? “What’s in it for me?” you might wonder. It’s a fair question! Here are several results of choosing to order a piece online. We are sure, they will speak louder than any of our words:</p>

                <h4 class="text-vuegreen text-xl font-semibold leading-none py-2" >Top grades.</h4>
                <p class="py-2">They are important. After all, we are all striving to achieve the highest grades. They have the potential to directly influence what jobs we get in the future. That is why it's in your best interest to hire a professional essay writing service to compose a decent piece.</p>

                <h4 class="text-vuegreen text-xl font-semibold leading-none py-2" >A happy professor.</h4>
                <p class="py-2">Don't look surprised! Earning a good reputation in the eyes of your college professor is vital, since in many cases your reputation will work for you even when you're far from being the best student.</p>

                <h4 class="text-vuegreen text-xl font-semibold leading-none py-2" >Top-notch paper.</h4>
                <p class="py-2">A decent paper can help you get into a college of your dream, improve your GPA, or even get you a scholarship. No matter which of these you're pursuing, it's always a good idea to have an essay professionally crafted.</p>

                <h4 class="text-vuegreen text-xl font-semibold leading-none py-2" >Good social and academic life balance.</h4>
                <p class="py-2">It is often essential for students to hire essay writing services to craft pieces for them because otherwise, students will have no personal life with all the overwhelming academic tasks they have to deal with daily. Can't help but miss going out with your friends? We're here to help!</p>

                <p class="pb-2">These are but a few benefits you get when ordering an essay online instead of writing it on your own. Look at this list again and if it sounds ike something you'd like to take advantage of right now, drop us a line!</p>
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-6xl mx-auto px-4 lg:px-0 mt-4 lg:mt-12 pb-16">
          <h2 class="text-4xl font-semibold leading-none pb-1 text-black text-center">
            Blog
          </h2>
          <p class="lg:text-2xl text-secondary text-center">
            Read about matters writing.
          </p>
          <div class="flex flex-col lg:flex-row lg:py-12">
            <div class="w-full lg:w-7/12 h-auto">
              <div class="lg:pr-4 py-2 block flex flex-col md:flex-row" >
                <div class="md:block lg:w-auto md:w-full">
                  <img class="h-80" src="~/assets/images/blog_placeholder.png" alt="writing a proposal essay">
                </div>
                <div class="lg:w-1/2 md:w-full text-secondary">
                  <div class="h-full bg-secondary text-secondary px-8 pt-16 pb-8 md:rounded-r-large overflow-hidden flex flex-col justify-center text-center relative">
                    <div class="mx-auto text-center mt-2 leading-none absolute top-0 left-0 w-full py-4 px-6 flex justify-center" >
                      <span class="text-gray-600 mr-auto inline-flex items-center leading-none text-sm pr-3 py-1" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                          <g id="ic_access_time_48px" transform="translate(-4 -4)">
                            <path id="Path_57" data-name="Path 57" d="M13,4a9,9,0,1,0,9,9A8.994,8.994,0,0,0,13,4Zm0,16.2A7.2,7.2,0,1,1,20.2,13,7.2,7.2,0,0,1,13,20.2Zm.45-11.7H12.1v5.4l4.72,2.835.68-1.107-4.05-2.4Z" fill="#42FBB7"/>
                          </g>
                        </svg>
                        <span class="ml-2 mt-1">08.27.2020</span>
                      </span>
                      <span class="text-gray-600 ml-auto inline-flex items-center leading-none text-sm pr-3 py-1" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20.7" height="18" viewBox="0 0 20.7 18">
                          <g id="folder-15" transform="translate(-1 -4)">
                            <path id="Path_58" data-name="Path 58" d="M8.2,5.8,6.4,4H1.9a.9.9,0,0,0-.9.9V20.2A1.8,1.8,0,0,0,2.8,22H19.9a1.8,1.8,0,0,0,1.8-1.8V7.6a1.8,1.8,0,0,0-1.8-1.8Z" fill="#42FBB7"/>
                            <path id="Path_59" data-name="Path 59" d="M21.7,8.5H1V4.9A.9.9,0,0,1,1.9,4H6.4L8.2,5.8H19.9a1.8,1.8,0,0,1,1.8,1.8Z" fill="#0dd48b"/>
                          </g>
                        </svg>
                        <span class="ml-2 mt-1">Guide</span>
                      </span>
                    </div>
                    <h1 class="title-font sm:text-2xl text-xl font-medium text-vuegreen mb-3">Steps Towards Mastering Proposal Essay Writting</h1>
                    <p class="leading-relaxed text-white mb-3">What is a proposal essay?<br>
                      A proposal essay is an essay in which the writer has to identify a problem in a specific area and provide a pro ..</p>
                    <a href="#" class="bg-gradient-to-r from-vuegreen to-lightgreen mx-auto w-40 py-3 px-8 text-xl rounded-full text-white font-semibold inline-block mt-4 transform hover:scale-105 transition ease-in-out duration-100">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-5/12 h-auto">
              <div class="lg:pr-4 py-2 block flex flex-col md:flex-row" >
                <div class="md:block lg:w-1/2 md:w-full">
                  <img src="~/assets/images/blog_placeholder.png" class="md:rounded-l-large" alt="writing a proposal essay">
                </div>
                <div class="lg:w-1/2 md:w-full text-secondary">
                  <div class="h-full bg-secondary text-secondary px-8 pt-16 pb-8 md:rounded-r-large overflow-hidden flex flex-col justify-center text-center relative">
                    <div class="mx-auto text-center mt-2 leading-none absolute top-0 left-0 w-full py-4 px-6 flex justify-center" >
                      <span class="text-gray-600 mr-auto inline-flex items-center leading-none text-sm pr-3 py-1" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                          <g id="ic_access_time_48px" transform="translate(-4 -4)">
                            <path id="Path_57" data-name="Path 57" d="M13,4a9,9,0,1,0,9,9A8.994,8.994,0,0,0,13,4Zm0,16.2A7.2,7.2,0,1,1,20.2,13,7.2,7.2,0,0,1,13,20.2Zm.45-11.7H12.1v5.4l4.72,2.835.68-1.107-4.05-2.4Z" fill="#42FBB7"/>
                          </g>
                        </svg>
                        <span class="ml-2 mt-1">08.27.2020</span>
                      </span>
                      <span class="text-gray-600 ml-auto inline-flex items-center leading-none text-sm pr-3 py-1" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20.7" height="18" viewBox="0 0 20.7 18">
                          <g id="folder-15" transform="translate(-1 -4)">
                            <path id="Path_58" data-name="Path 58" d="M8.2,5.8,6.4,4H1.9a.9.9,0,0,0-.9.9V20.2A1.8,1.8,0,0,0,2.8,22H19.9a1.8,1.8,0,0,0,1.8-1.8V7.6a1.8,1.8,0,0,0-1.8-1.8Z" fill="#42FBB7"/>
                            <path id="Path_59" data-name="Path 59" d="M21.7,8.5H1V4.9A.9.9,0,0,1,1.9,4H6.4L8.2,5.8H19.9a1.8,1.8,0,0,1,1.8,1.8Z" fill="#0dd48b"/>
                          </g>
                        </svg>
                        <span class="ml-2 mt-1">Guide</span>
                      </span>
                    </div>
                    <h1 class="title-font md:text-base lg:text-base font-medium text-vuegreen mb-3">How To Write A Character Analysis Essay?</h1>
                    <a href="#" class="bg-gradient-to-r from-vuegreen to-lightgreen mx-auto w-32 py-2 px-3 text-base rounded-full text-white font-semibold inline-block mt-4 transform hover:scale-105 transition ease-in-out duration-100">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div class="lg:pr-4 py-2 block flex flex-col md:flex-row" >
                <div class="md:block lg:w-1/2 md:w-full">
                  <img src="~/assets/images/blog_placeholder.png" class="md:rounded-l-large" alt="writing a proposal essay">
                </div>
                <div class="lg:w-1/2 md:w-full text-secondary">
                  <div class="h-full bg-secondary text-secondary px-8 pt-16 pb-8 md:rounded-r-large overflow-hidden flex flex-col justify-center text-center relative">
                    <div class="mx-auto text-center mt-2 leading-none absolute top-0 left-0 w-full py-4 px-6 flex justify-center" >
                      <span class="text-gray-600 mr-auto inline-flex items-center leading-none text-sm pr-3 py-1" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                          <g id="ic_access_time_48px" transform="translate(-4 -4)">
                            <path id="Path_57" data-name="Path 57" d="M13,4a9,9,0,1,0,9,9A8.994,8.994,0,0,0,13,4Zm0,16.2A7.2,7.2,0,1,1,20.2,13,7.2,7.2,0,0,1,13,20.2Zm.45-11.7H12.1v5.4l4.72,2.835.68-1.107-4.05-2.4Z" fill="#42FBB7"/>
                          </g>
                        </svg>
                        <span class="ml-2 mt-1">08.27.2020</span>
                      </span>
                      <span class="text-gray-600 ml-auto inline-flex items-center leading-none text-sm pr-3 py-1" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20.7" height="18" viewBox="0 0 20.7 18">
                          <g id="folder-15" transform="translate(-1 -4)">
                            <path id="Path_58" data-name="Path 58" d="M8.2,5.8,6.4,4H1.9a.9.9,0,0,0-.9.9V20.2A1.8,1.8,0,0,0,2.8,22H19.9a1.8,1.8,0,0,0,1.8-1.8V7.6a1.8,1.8,0,0,0-1.8-1.8Z" fill="#42FBB7"/>
                            <path id="Path_59" data-name="Path 59" d="M21.7,8.5H1V4.9A.9.9,0,0,1,1.9,4H6.4L8.2,5.8H19.9a1.8,1.8,0,0,1,1.8,1.8Z" fill="#0dd48b"/>
                          </g>
                        </svg>
                        <span class="ml-2 mt-1">Guide</span>
                      </span>
                    </div>
                    <h1 class="title-font md:text-base lg:text-base font-medium text-vuegreen mb-3">How To Write A Character Analysis Essay?</h1>
                    <a href="#" class="bg-gradient-to-r from-vuegreen to-lightgreen mx-auto w-32 py-2 px-3 text-base rounded-full text-white font-semibold inline-block mt-4 transform hover:scale-105 transition ease-in-out duration-100">
                      Read More
                    </a>
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
import { mapState } from "vuex"
export default {
  auth: false,
  data() {
    return {
      openTab: 1,
      form: {
        level: 1,
        subject: null,
        duration: {
          duration: null,
          price: null
        },
        pages: 1,
      }
    }
  },
  computed: {
    ...mapState(["storedata"]),
    duration() {
      return this.storedata.filter(el => el.id === this.form.level)[0].deadline;
    },
    subjects() {
      return this.storedata.filter(el => el.id === this.form.level)[0].subjects;
    },
    totalPrice() {
      return this.form.duration.price * this.form.pages
    }
  },
  methods: {
    setFirstDuration() {
      this.form.duration = {
        duration: Object.entries(this.duration)[0][0],
        price: Object.entries(this.duration)[0][1] * this.form.pages,
      };
    },
    toggleTabs(tabNumber){
      this.openTab = tabNumber
    }
  },
  mounted() {
    this.form.subject = this.subjects[0];
    console.log(this.duration[Object.keys(this.duration)[0]]);
    console.log(Object.entries(this.duration)[0]);
    this.form.duration = {
      duration: Object.entries(this.duration)[0][0],
      price: Object.entries(this.duration)[0][1],
    };
  }
}
</script>

<style scoped>
.moneyBack {
  background-image: linear-gradient(rgba(66, 251, 183,.3),rgba(78,184,120,.92941)),url(~assets/images/moneyback.png);
  background-position: 85% 33%;
}
.revisions {
  background-image: linear-gradient(rgba(66, 251, 183,.3),rgba(78,184,120,.92941)),url(~assets/images/freerevisions.png);
  background-position: 33% 33%;
}
.safePayments {
  background-image: linear-gradient(rgba(66, 251, 183,.3),rgba(78,184,120,.92941)),url(~assets/images/safe.png);
  background-position: 33% 33%;
}
.bg-img {
  background-image: linear-gradient(rgba(66, 251, 183,.3),rgba(78,184,120,.92941));
}
.mobile-b {
  background-image: linear-gradient(rgba(98, 98, 98, .3),rgba(98, 98, 98, .3)),url(~assets/images/Header_Image.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.custom-calc {
  background: rgb(98,98,98);
  padding: 20px;
  border: 1px solid rgb(66, 251, 183);
  border-radius: 1rem;
}
.header-main-shape {
  z-index: 2!important;
}
.header-main-shape {
  height: 90px;
  position: absolute;
  width: 100%;
  background: #fbfbfb;
  border-radius: 50% 50% 0 0/90px 90px 0px 0px;
  bottom: -1px;
  left: 0;
  z-index: 0;
}
</style>
