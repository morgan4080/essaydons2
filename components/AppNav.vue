<template>
  <div>
    <div class="absolute top-0 w-full z-20" :class="{ 'border-b bg-teal-300 border-teal-300' : !som, 'bg-transparent border-0' : som }">
      <div class="max-w-6xl mx-auto" >
        <div class="w-full h-auto" >
          <div class="flex items-center justify-between" >
            <div class="px-6 md:px-0 py-2 w-auto" >
              <nuxt-link to="/" aria-current="page" class="nuxt-link-exact-active nuxt-link-active" >
                <div>
                  <Logo />
                </div>
              </nuxt-link>
            </div>
            <div class="hidden lg:block relative" >
              <nuxt-link to="/about" class="uppercase mx-2 text-secondary tracking-wide font-semibold py-3 px-4 hover:text-white" >
                About us
              </nuxt-link>
              <nuxt-link to="/papers" class="uppercase mx-2 text-secondary tracking-wide font-semibold py-3 px-4 hover:text-white" >
                Sample papers
              </nuxt-link>
              <nuxt-link to="/blogs" class="uppercase mx-2 text-secondary tracking-wide font-semibold py-3 px-4 hover:text-white" >
                Blog
              </nuxt-link>
              <nuxt-link to="/services" class="group uppercase mx-2 text-base tracking-wide text-secondary font-semibold py-3 px-4 hover:text-white inline-block" >
                <span @mouseover="showSubMenu0 = true" @mouseleave="checkMousePos($event)" class="flex flex-row items-center">
                  Services
                  <svg class="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </span>

                <transition
                  enter-active-class="transition ease-out duration-200"
                  leave-active-class="transition ease-in duration-150"
                  enter-class="transform opacity-0 translate-y-1"
                  enter-to-class="transform opacity-100 translate-y-0"
                  leave-class="transform opacity-100 translate-y-0"
                  leave-to-class="transform opacity-0 translate-y-1"
                >
                  <div id="evOfInt" @mouseleave="showSubMenu0 = false" v-if="showSubMenu" class="absolute right-0 -mr-3 pt-5 transform px-2 w-screen lg:mt-2 sm:px-0 lg:ml-0 lg:left-1/2 capitalize" style="max-width: 15rem;">
                    <div class="rounded-lg shadow-lg">
                      <div class="rounded-lg shadow-xs">
                        <div class="rounded-lg z-20 relative grid gap-6 px-5 sm:gap-8 sm:p-6" style="background-color: #42fbb7;">
                          <a href="javascript:void(0)" class="group -m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                            <div class="flex-1 space-y-1">
                              <p @mouseover="showSubMenu2 = false;showSubMenu1 = true;showSubMenu3 = false;" class="transform hover:translate-x-2 hover:text-white leading-6 text-secondary flex flex-row items-center text-lg -mb-1 transition ease-in-out duration-150">
                                Academic Writing
                                <svg class="ml-auto h-5 w-5 transform -rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                              </p>
                            </div>
                            <transition
                              enter-active-class="transition ease-out duration-200"
                              leave-active-class="transition ease-in duration-150"
                              enter-class="opacity-0 translate-y-1"
                              enter-to-class="opacity-100 translate-y-0"
                              leave-class="opacity-100 translate-y-0"
                              leave-to-class="opacity-0 translate-y-1"
                            >
                            <div @mouseleave="showSubMenu1 = false" v-if="showSubMenu1" class="absolute right-0 -mr-3 pt-0 transform px-2 w-screen lg:mt-0 sm:px-0 lg:ml-0 lg:translate-x-full capitalize" style="max-width: 15rem;">
                              <div class="rounded-lg shadow-lg">
                                <div class="rounded-lg shadow-xs overflow-hidden">
                                  <div class="z-20 relative grid gap-6 px-5 sm:gap-8 sm:p-6" style="background-color: #42fbb7;">
                                    <nuxt-link to="/service/academic/college-papers" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-white leading-6 text-secondary text-lg -mb-1 transition ease-in-out duration-150">
                                          College Papers
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/academic/articles" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-white leading-6 text-secondary text-lg -mb-1 transition ease-in-out duration-150">
                                          Articles
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/academic/personal-statement" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-white leading-6 text-secondary text-lg -mb-1 transition ease-in-out duration-150">
                                          Personal statement
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/academic/literature-review" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-white leading-6 text-secondary text-lg -mb-1 transition ease-in-out duration-150">
                                          Literature review
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/academic/coursework" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-white leading-6 text-secondary text-lg -mb-1 transition ease-in-out duration-150">
                                          Coursework
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/academic/case-study" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-white leading-6 text-secondary text-lg -mb-1 transition ease-in-out duration-150">
                                          Case study
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/academic/term-papers" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-white leading-6 text-secondary text-lg -mb-1 transition ease-in-out duration-150">
                                          Term Paper
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/academic/speech" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-white leading-6 text-secondary text-lg -mb-1 transition ease-in-out duration-150">
                                          Speech
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/academic/presentation" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-white leading-6 text-secondary text-lg -mb-1 transition ease-in-out duration-150">
                                          Presentation
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/academic/lab-reports" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-white leading-6 text-secondary text-lg -mb-1 transition ease-in-out duration-150">
                                          Lab report
                                        </p>
                                      </div>
                                    </nuxt-link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </transition>
                          </a>
                          <a href="javascript:void(0)" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                            <div class="flex-1 space-y-1">
                              <p @mouseover="showSubMenu2 = true;showSubMenu1 = false;showSubMenu3 = false;" class="transform hover:translate-x-2 hover:text-white flex flex-row items-center leading-6 text-secondary text-lg -mb-1 transition ease-in-out duration-150">
                                Essay writing
                                <svg class="ml-auto h-5 w-5 transform -rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                              </p>
                            </div>
                            <transition
                              enter-active-class="transition ease-out duration-200"
                              leave-active-class="transition ease-in duration-150"
                              enter-class="opacity-0 translate-y-1"
                              enter-to-class="opacity-100 translate-y-0"
                              leave-class="opacity-100 translate-y-0"
                              leave-to-class="opacity-0 translate-y-1"
                            >
                            <div @mouseleave="showSubMenu2 = false" v-if="showSubMenu2" class="absolute right-0 -mr-3 pt-0 transform px-2 w-screen lg:mt-0 sm:px-0 lg:ml-0 lg:translate-x-full capitalize" style="max-width: 15rem;">
                              <div class="rounded-lg shadow-lg">
                                <div class="rounded-lg shadow-xs overflow-hidden">
                                  <div class="z-20 relative grid gap-6 px-5 sm:gap-8 sm:p-6" style="background-color: #42fbb7;">
                                    <nuxt-link to="/service/essay/argumentative" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-white leading-6 text-secondary text-lg -mb-1 transition ease-in-out duration-150">
                                          Argumentative Essay
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/essay/descriptive" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-white leading-6 text-secondary text-lg -mb-1 transition ease-in-out duration-150">
                                          Descriptive Essay
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/essay/narrative" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-white leading-6 text-secondary text-lg -mb-1 transition ease-in-out duration-150">
                                          Narrative Essay
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/essay/scholarship" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-white leading-6 text-secondary text-lg -mb-1 transition ease-in-out duration-150">
                                          Scholarship Essay
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/essay/mba" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-white leading-6 text-secondary text-lg -mb-1 transition ease-in-out duration-150">
                                          MBA Essay
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/essay/persuasive" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-white leading-6 text-secondary text-lg -mb-1 transition ease-in-out duration-150">
                                          Persuasive Essay
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/essay/admission" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-white leading-6 text-secondary text-lg -mb-1 transition ease-in-out duration-150">
                                          Admission Essay
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/essay/literature" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-white leading-6 text-secondary text-lg -mb-1 transition ease-in-out duration-150">
                                          Literature Essay
                                        </p>
                                      </div>
                                    </nuxt-link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </transition>
                          </a>
                          <nuxt-link to="/service/thesis" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                            <div class="flex-1 space-y-1">
                              <p @mouseover="showSubMenu1 = false;showSubMenu2 = false;showSubMenu3 = false;" class="transform hover:translate-x-2 hover:text-white leading-6 text-secondary text-lg -mb-1 transition ease-in-out duration-150">
                                Thesis writing
                              </p>
                            </div>
                          </nuxt-link>
                          <nuxt-link to="/service/research-paper" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                            <div class="flex-1 space-y-1">
                              <p @mouseover="showSubMenu1 = false;showSubMenu2 = false;showSubMenu3 = false;" class="transform hover:translate-x-2 hover:text-white leading-6 text-secondary text-lg -mb-1 transition ease-in-out duration-150">
                                Research paper writing
                              </p>
                            </div>
                          </nuxt-link>
                          <nuxt-link to="/service/dissertation" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                            <div class="flex-1 space-y-1">
                              <p @mouseover="showSubMenu1 = false;showSubMenu2 = false;showSubMenu3 = false;" class="transform hover:translate-x-2 hover:text-white leading-6 text-secondary text-lg -mb-1 transition ease-in-out duration-150">
                                Dissertation writing
                              </p>
                            </div>
                          </nuxt-link>
                          <a href="javascript:void(0)" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                            <div class="flex-1 space-y-1">
                              <p @mouseover="showSubMenu2 = false;showSubMenu1 = false;showSubMenu3 = true;" class="transform hover:translate-x-2 hover:text-white flex flex-row items-center leading-6 text-secondary text-lg -mb-1 transition ease-in-out duration-150">
                                Editing work
                                <svg class="ml-auto h-5 w-5 transform -rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                              </p>
                            </div>
                            <transition
                              enter-active-class="transition ease-out duration-200"
                              leave-active-class="transition ease-in duration-150"
                              enter-class="opacity-0 translate-y-1"
                              enter-to-class="opacity-100 translate-y-0"
                              leave-class="opacity-100 translate-y-0"
                              leave-to-class="opacity-0 translate-y-1"
                            >
                            <div @mouseleave="showSubMenu3 = false" v-if="showSubMenu3" class="absolute right-0 -mr-3 pt-0 transform px-2 w-screen lg:mt-0 sm:px-0 lg:ml-0 lg:translate-x-full capitalize" style="max-width: 15rem;">
                              <div class="rounded-lg shadow-lg">
                                <div class="rounded-lg shadow-xs overflow-hidden">
                                  <div class="z-20 relative grid gap-6 px-5 sm:gap-8 sm:p-6" style="background-color: #42fbb7;">
                                    <nuxt-link to="/service/editing/essay" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-white leading-6 text-secondary text-lg -mb-1 transition ease-in-out duration-150">
                                          Essay editing
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/editing/thesis" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-white leading-6 text-secondary text-lg -mb-1 transition ease-in-out duration-150">
                                          Thesis editing
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/editing/dissertation" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-white leading-6 text-secondary text-lg -mb-1 transition ease-in-out duration-150">
                                          Dissertation editing
                                        </p>
                                      </div>
                                    </nuxt-link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </transition>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                </transition>

              </nuxt-link>

              <nuxt-link to="/order" class="uppercase bg-black inline-block mx-2 text-base tracking-wide font-semibold py-3 px-4 bg-transparent text-white rounded-full transform hover:scale-105 transition ease-in-out duration-100" style="border-color: #49544e;">
                New Order
              </nuxt-link>

              <div v-show="!$auth.loggedIn" class="relative inline-block text-left">
                <button @click="showDropdown" class="uppercase inline-flex items-center mx-2 text-secondary tracking-wide font-semibold py-3 px-4 bg-white text-black rounded-full transform hover:scale-105 transition ease-in-out duration-100">
                  <span>My Account</span>
                  <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
                <transition
                  enter-active-class="transition ease-out duration-200"
                  leave-active-class="transition ease-in duration-150"
                  enter-class="transform opacity-0 translate-y-1"
                  enter-to-class="transform opacity-100 translate-y-0"
                  leave-class="transform opacity-100 translate-y-0"
                  leave-to-class="transform opacity-0 translate-y-1"
                >
                  <div v-show="dropDownOpen" @mouseleave="showDropdown" class="absolute right-0 -mr-3 pt-2 transform px-2 w-screen lg:mt-2 sm:px-0 lg:ml-0 capitalize" style="max-width: 15rem;">
                    <div class="rounded-lg shadow-lg">
                      <div class="rounded-lg shadow-xs">
                        <div class="rounded-lg z-20 relative grid gap-6 px-5 sm:gap-8 sm:p-6" style="background-color: #42fbb7;">
                          <nuxt-link to="/login" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150" role="menuitem">
                            <div class="flex-1 space-y-1">
                              <p class="transform font-semibold hover:translate-x-2 hover:text-white leading-6 text-secondary text-lg -mb-1 transition ease-in-out duration-150">
                                Log In
                              </p>
                            </div>
                          </nuxt-link>
                          <nuxt-link to="/register" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150" role="menuitem">
                            <div class="flex-1 space-y-1">
                              <p class="transform font-semibold hover:translate-x-2 hover:text-white leading-6 text-secondary text-lg -mb-1 transition ease-in-out duration-150">
                                Register
                              </p>
                            </div>
                          </nuxt-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
              <div v-show="$auth.loggedIn" class="relative inline-block text-left">
                <button v-on:click="$router.push('/profile')" type="button" class="uppercase inline-flex items-center mx-2 text-base font-semibold py-3 px-4 bg-white text-black rounded-full transform hover:scale-105 transition ease-in-out duration-100">
                  My Account
                </button>
              </div>
            </div>
            <div class="lg:hidden mx-8 absolute z-20 right-0" >
              <button @click="showMobileMenu = !showMobileMenu" class="block lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:text-white" >
                <svg v-if="!showMobileMenu" stroke="#000000" fill="none" viewBox="0 0 24 24" class="h-6 w-6" >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" ></path>
                </svg>
                <svg v-if="showMobileMenu" stroke="currentColor" fill="none" viewBox="0 0 24 24" class="h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <transition
              enter-active-class="transition ease-out duration-200"
              leave-active-class="transition ease-in duration-150"
              enter-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div v-if="showMobileMenu" class="absolute block flex flex-col px-4 pt-12 top-0 w-full pb-12 shadow-2xl" style="background: rgba(66, 251, 183, 1);">
                <nuxt-link @click="turnOff" to="/about" class="text-secondary font-semibold py-3 px-5">
                  <span class="w-full block" @click="turnOff">About Us</span>
                </nuxt-link>
                <nuxt-link @click="turnOff" to="/papers" class="text-secondary font-semibold py-3 px-5">
                  <span class="w-full block" @click="turnOff">Sample Papers</span>
                </nuxt-link>
                <nuxt-link @click="turnOff" to="/blogs" class="text-secondary font-semibold py-3 px-5">
                  <span class="w-full block" @click="turnOff">Blogs</span>
                </nuxt-link>
                <nuxt-link @click="turnOff" to="/services" class="text-secondary font-semibold py-3 px-5">
                  <span class="w-full block" @click="turnOff">Services</span>
                </nuxt-link>
                <nuxt-link @click="turnOff" to="/order" class="text-secondary font-semibold py-3 px-5">
                  <span class="w-full block" @click="turnOff">New Order</span>
                </nuxt-link>
                <nuxt-link to="/profile" class="text-secondary font-semibold py-3 px-5">
                  <span class="w-full block" @click="turnOff">My Account</span>
                </nuxt-link>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue"
import { mapGetters } from 'vuex'
export default {
  components: {
    Logo
  },
  data() {
    return {
      dropDownOpen: false,
      showSubMenu0: false,
      showSubMenu1: false,
      showSubMenu2: false,
      showSubMenu3: false,
      showMobileMenu: false,
      homeIs: false,
      som: false
    }
  },
  computed: {
    ...mapGetters(["cartCount"]),
    showSubMenu() {
      if (!this.showSubMenu0) {
        this.showSubMenu1 = false;
        this.showSubMenu2 = false;
        this.showSubMenu3 = false;
      }
      return this.showSubMenu0
    },
  },
  created() {
    console.log(this.$auth.loggedIn);
  },
  methods: {
    turnOff() {
      console.log("remove menu");
      this.showMobileMenu = !this.showMobileMenu
    },
    async logout() {
      await this.$auth.logout();
      this.$store.commit('setAuth', null);
    },
    showDropdown() {
      this.dropDownOpen = !this.dropDownOpen;
    },
    checkMousePos(e) {
      let stt = false;
      document.querySelector("#evOfInt").addEventListener('mouseenter', (event) => {
        console.log(event);
        stt = true;
      })

      setTimeout(() => {
        if (!stt) {
          this.showSubMenu0 = false
        }
      }, 200)

    }
  },
  watch:{
    $route(to, from) {
      console.log(to, from);
      this.som = to.path === "/";
    }
  },
  mounted() {
    console.log(this.$router.currentRoute.fullPath, "the router");
    if (this.$router.currentRoute.fullPath === "/") this.som = true
  }
};
</script>

<style scoped>
.carttotal {
  position: absolute;
  border-radius: 1000px;
  background: black;
  color: white;
  font-size: 10px;
  padding: 3px;
  top: -18px;
  right: -5px;
  width: 25px;
  text-align: center;
  height: 25px;
  font-size: 10px;
  padding: 6px 10px;
  font-weight: bold;
}
</style>
