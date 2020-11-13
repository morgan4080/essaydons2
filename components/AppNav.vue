<template>
  <div>
    <div class="absolute top-0 w-full z-20 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="w-full h-auto">
          <div class="flex items-center justify-between">
            <div class="px-6 py-4 w-auto"></div>
            <div class="hidden lg:flex relative">
              <div class="text-xs mr-8 flex">
                <svg class="mx-2" id="email-84" xmlns="http://www.w3.org/2000/svg" width="16.108" height="11.951" viewBox="0 0 16.108 11.951">
                  <path id="Path_55" data-name="Path 55" d="M16.588,9H1.52A.519.519,0,0,0,1,9.52V20.431a.519.519,0,0,0,.52.52H16.588a.519.519,0,0,0,.52-.52V9.52A.519.519,0,0,0,16.588,9Zm-.893,1.774L9.2,15.19a.26.26,0,0,1-.292,0l-6.5-4.417a.26.26,0,0,1,.292-.43l6.349,4.318L15.4,10.344a.26.26,0,1,1,.292.43Z" transform="translate(-1 -9)" fill="#626262"/>
                </svg>
                <p>info@essaydons.com</p>
              </div>
              <div class="text-xs mr-4 flex">
                <svg class="mx-2" id="ic_phone_in_talk_48px" xmlns="http://www.w3.org/2000/svg" width="11.5" height="11.5" viewBox="0 0 11.5 11.5">
                  <path id="Path_5" data-name="Path 5" d="M6.639,13.986a7.288,7.288,0,0,0,2.281-.364.641.641,0,0,1,.648.157l1.406,1.409a9.638,9.638,0,0,0,4.21-4.207L13.778,9.571a.641.641,0,0,1-.157-.648,7.308,7.308,0,0,0,.364-2.284A.637.637,0,0,1,14.625,6h2.236a.637.637,0,0,1,.639.639A10.86,10.86,0,0,1,6.639,17.5.637.637,0,0,1,6,16.861V14.625A.637.637,0,0,1,6.639,13.986Zm.639-2.236H6A5.75,5.75,0,0,1,11.75,6V7.278A4.473,4.473,0,0,0,7.278,11.75Zm2.556,0H8.556A3.2,3.2,0,0,1,11.75,8.556V9.833A1.918,1.918,0,0,0,9.833,11.75Z" transform="translate(-6 -6)" fill="#626262"/>
                </svg>
                <p>+254720753971</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute top-50 w-full z-20 custom-mg-head" >
      <div class="max-w-6xl mx-auto" >
        <div class="w-full h-auto" >
          <div class="flex items-center justify-between" >
            <div class="px-6 py-2 w-auto" >
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
              <nuxt-link to="/services" class="uppercase mx-2 text-base text-white font-semibold py-3 px-4 hover:text-black" >
                Services
              </nuxt-link>
              <nuxt-link to="/papers" class="uppercase mx-2 text-base text-white font-semibold py-3 px-4 hover:text-black" >
                Sample papers
              </nuxt-link>
              <nuxt-link to="/blog" class="uppercase mx-2 text-base text-white font-semibold py-3 px-4 hover:text-black" >
                Blog
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
      dropDownOpen: false
    }
  },
  computed: {
    ...mapGetters(["cartCount"])
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
