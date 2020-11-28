<template>
  <div>
    <div class="absolute top-0 w-full z-20 custom-mg-head" >
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
              <nuxt-link to="/about" class="uppercase mx-2 text-base text-white font-semibold py-3 px-4 hover:text-black" >
                About us
              </nuxt-link>
              <nuxt-link to="/papers" class="uppercase mx-2 text-base text-white font-semibold py-3 px-4 hover:text-black" >
                Sample papers
              </nuxt-link>
              <nuxt-link to="/blogs" class="uppercase mx-2 text-base text-white font-semibold py-3 px-4 hover:text-black" >
                Blog
              </nuxt-link>
              <nuxt-link to="/services" class="group uppercase mx-2 text-base text-white font-semibold py-3 px-4 hover:text-black inline-block" >
                <span @mouseover="showSubMenu0 = true" class="flex flex-row items-center">
                  Services
                  <svg class="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </span>

                <transition
                  enter-active-class="transition ease-out duration-200"
                  leave-active-class="transition ease-in duration-150"
                  enter-class="opacity-0 translate-y-1"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 translate-y-1"
                >
                  <div @mouseleave="showSubMenu0 = false" v-if="showSubMenu" class="absolute right-0 -mr-3 pt-5 transform px-2 w-screen lg:mt-2 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/6 capitalize" style="max-width: 15rem;">
                    <div class="rounded-lg shadow-lg">
                      <div class="rounded-lg shadow-xs">
                        <div class="rounded-lg z-20 relative grid gap-6 px-5 sm:gap-8 sm:p-6" style="background-color: #42fbb7;">
                          <a href="javascript:void(0)" class="group -m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                            <div class="flex-1 space-y-1">
                              <p @mouseover="showSubMenu2 = false;showSubMenu1 = true;showSubMenu3 = false;" class="transform hover:translate-x-2 hover:text-black leading-6 text-white flex flex-row items-center text-lg -mb-1 transition ease-in-out duration-150">
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
                            <div @mouseleave="showSubMenu1 = false" v-if="showSubMenu1" class="absolute right-0 -mr-3 pt-0 transform px-2 w-screen lg:mt-0 sm:px-0 lg:ml-0 lg:left-1/2 lg:translate-x-full capitalize" style="max-width: 15rem;">
                              <div class="rounded-lg shadow-lg">
                                <div class="rounded-lg shadow-xs overflow-hidden">
                                  <div class="z-20 relative grid gap-6 px-5 sm:gap-8 sm:p-6" style="background-color: #42fbb7;">
                                    <nuxt-link to="/service/academic/college-papers" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-black leading-6 text-white text-lg -mb-1 transition ease-in-out duration-150">
                                          College Papers
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/academic/articles" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-black leading-6 text-white text-lg -mb-1 transition ease-in-out duration-150">
                                          Articles
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/academic/personal-statement" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-black leading-6 text-white text-lg -mb-1 transition ease-in-out duration-150">
                                          Personal statement
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/academic/literature-review" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-black leading-6 text-white text-lg -mb-1 transition ease-in-out duration-150">
                                          Literature review
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/academic/coursework" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-black leading-6 text-white text-lg -mb-1 transition ease-in-out duration-150">
                                          Coursework
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/academic/case-study" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-black leading-6 text-white text-lg -mb-1 transition ease-in-out duration-150">
                                          Case study
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/academic/term-papers" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-black leading-6 text-white text-lg -mb-1 transition ease-in-out duration-150">
                                          Term Paper
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/academic/speech" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-black leading-6 text-white text-lg -mb-1 transition ease-in-out duration-150">
                                          Speech
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/academic/presentation" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-black leading-6 text-white text-lg -mb-1 transition ease-in-out duration-150">
                                          Presentation
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/academic/lab-reports" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-black leading-6 text-white text-lg -mb-1 transition ease-in-out duration-150">
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
                              <p @mouseover="showSubMenu2 = true;showSubMenu1 = false;showSubMenu3 = false;" class="transform hover:translate-x-2 hover:text-black flex flex-row items-center leading-6 text-white text-lg -mb-1 transition ease-in-out duration-150">
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
                            <div @mouseleave="showSubMenu2 = false" v-if="showSubMenu2" class="absolute right-0 -mr-3 pt-0 transform px-2 w-screen lg:mt-0 sm:px-0 lg:ml-0 lg:left-1/2 lg:translate-x-full capitalize" style="max-width: 15rem;">
                              <div class="rounded-lg shadow-lg">
                                <div class="rounded-lg shadow-xs overflow-hidden">
                                  <div class="z-20 relative grid gap-6 px-5 sm:gap-8 sm:p-6" style="background-color: #42fbb7;">
                                    <nuxt-link to="/service/essay/argumentative" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-black leading-6 text-white text-lg -mb-1 transition ease-in-out duration-150">
                                          Argumentative Essay
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/essay/descriptive" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-black leading-6 text-white text-lg -mb-1 transition ease-in-out duration-150">
                                          Descriptive Essay
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/essay/narrative" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-black leading-6 text-white text-lg -mb-1 transition ease-in-out duration-150">
                                          Narrative Essay
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/essay/scholarship" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-black leading-6 text-white text-lg -mb-1 transition ease-in-out duration-150">
                                          Scholarship Essay
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/essay/mba" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-black leading-6 text-white text-lg -mb-1 transition ease-in-out duration-150">
                                          MBA Essay
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/essay/persuasive" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-black leading-6 text-white text-lg -mb-1 transition ease-in-out duration-150">
                                          Persuasive Essay
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/essay/admission" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-black leading-6 text-white text-lg -mb-1 transition ease-in-out duration-150">
                                          Admission Essay
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/essay/literature" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-black leading-6 text-white text-lg -mb-1 transition ease-in-out duration-150">
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
                              <p @mouseover="showSubMenu1 = false;showSubMenu2 = false;showSubMenu3 = false;" class="transform hover:translate-x-2 hover:text-black leading-6 text-white text-lg -mb-1 transition ease-in-out duration-150">
                                Thesis writing
                              </p>
                            </div>
                          </nuxt-link>
                          <nuxt-link to="/service/research-paper" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                            <div class="flex-1 space-y-1">
                              <p @mouseover="showSubMenu1 = false;showSubMenu2 = false;showSubMenu3 = false;" class="transform hover:translate-x-2 hover:text-black leading-6 text-white text-lg -mb-1 transition ease-in-out duration-150">
                                Research paper writing
                              </p>
                            </div>
                          </nuxt-link>
                          <nuxt-link to="/service/dissertation" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                            <div class="flex-1 space-y-1">
                              <p @mouseover="showSubMenu1 = false;showSubMenu2 = false;showSubMenu3 = false;" class="transform hover:translate-x-2 hover:text-black leading-6 text-white text-lg -mb-1 transition ease-in-out duration-150">
                                Dissertation writing
                              </p>
                            </div>
                          </nuxt-link>
                          <a href="javascript:void(0)" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                            <div class="flex-1 space-y-1">
                              <p @mouseover="showSubMenu2 = false;showSubMenu1 = false;showSubMenu3 = true;" class="transform hover:translate-x-2 hover:text-black flex flex-row items-center leading-6 text-white text-lg -mb-1 transition ease-in-out duration-150">
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
                            <div @mouseleave="showSubMenu3 = false" v-if="showSubMenu3" class="absolute right-0 -mr-3 pt-0 transform px-2 w-screen lg:mt-0 sm:px-0 lg:ml-0 lg:left-1/2 lg:translate-x-full capitalize" style="max-width: 15rem;">
                              <div class="rounded-lg shadow-lg">
                                <div class="rounded-lg shadow-xs overflow-hidden">
                                  <div class="z-20 relative grid gap-6 px-5 sm:gap-8 sm:p-6" style="background-color: #42fbb7;">
                                    <nuxt-link to="/service/editing/essay" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-black leading-6 text-white text-lg -mb-1 transition ease-in-out duration-150">
                                          Essay editing
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/editing/thesis" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-black leading-6 text-white text-lg -mb-1 transition ease-in-out duration-150">
                                          Thesis editing
                                        </p>
                                      </div>
                                    </nuxt-link>
                                    <nuxt-link to="/service/editing/dissertation" class="-m-4 p-2 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
                                      <div class="flex-1 space-y-1">
                                        <p class="transform hover:translate-x-2 hover:text-black leading-6 text-white text-lg -mb-1 transition ease-in-out duration-150">
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
              <nuxt-link to="/order" class="uppercase inline-block mx-2 text-base font-semibold py-3 px-4 bg-transparent text-white border-2 border-white rounded-full transform hover:scale-105 transition ease-in-out duration-100">
                New Order
              </nuxt-link>
              <div class="relative inline-block text-left">
                <button v-on:click="showDropdown" type="button" class="uppercase inline-flex justify-center mx-2 text-base font-semibold py-3 px-4 bg-white text-vuegreen rounded-full transform hover:scale-105 transition ease-in-out duration-100">
                  My Account
                  <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>

                <div v-if="dropDownOpen" @mouseleave="showDropdown" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
                  <div class="rounded-md bg-white shadow-xs">
                    <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <nuxt-link to="/login" class="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                        Log In
                      </nuxt-link>
                      <nuxt-link to="/register" class="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                        Register
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:hidden mx-8 absolute z-20 right-0" >
              <button class="block lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:text-white" >
                <svg stroke="#000000" fill="none" viewBox="0 0 24 24" class="h-6 w-6" >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import { mapGetters } from "vuex";

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
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    },
    showDropdown() {
      this.dropDownOpen = !this.dropDownOpen;
    },
  },
};
</script>

<style scoped lang="scss">
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
