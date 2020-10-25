<template>
  <div class="absolute top-0 w-full z-20 custom-mg-head" >
    <div class="max-w-6xl mx-auto" >
      <div class="w-full h-auto" >
        <div class="flex items-center justify-between" >
          <div class="bg-secondary px-6 py-4 w-auto" >
            <a href="/" aria-current="page" class="nuxt-link-exact-active nuxt-link-active" >
              <div>
                <Logo />
              </div>
            </a>
          </div>
          <div class="hidden lg:block relative" >
            <a href="/services" class="mx-2 text-lg text-secondary font-semibold py-3 px-5 hover:text-vuegreen" >
              Services
            </a>
            <a href="/papers" class="mx-2 text-lg text-secondary font-semibold py-3 px-5 hover:text-vuegreen" >
              Sample papers
            </a>
            <a href="/about" class="mx-2 text-lg text-secondary font-semibold py-3 px-5 hover:text-vuegreen" >
              About us
            </a>
            <a href="/account" class="mx-2 text-lg text-secondary font-semibold py-3 px-5 hover:text-vuegreen" >
              Account
            </a>
            <a href="/order" class="inline-block mx-2 text-lg font-semibold py-3 px-5 bg-white text-vuegreen rounded-full transform hover:scale-105 transition ease-in-out duration-100">
              New Order
            </a>
          </div>
          <div class="lg:hidden mx-8 absolute z-20 right-0" >
            <button class="block lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:text-white" >
              <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" class="h-6 w-6" >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" ></path>
              </svg>
            </button>
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
  computed: {
    ...mapGetters(["cartCount"])
  }
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
