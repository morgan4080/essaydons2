<template>
  <div>
    <div class="min-h-screen bg-white">
      <div class="mobile-b flex justify-center items-center  min-h-screen bg-left-0 lg:bg-center-0">
        <div class="max-w-6xl flex justify-center items-center  mx-auto pt-32 lg:pt-32 z-10 px-8 lg:px-0 pb-12">
          <div class="mx-auto flex flex-col items-center justify-center">
            <div>
              <h1 v-if="error.statusCode === 404" class="font-black text-center text-6xl">404 : Page not found</h1>
              <h1 class="font-black text-center text-6xl" v-else>An error occurred</h1>
            </div>
            <button @click="doRedirect" type="button" class="cursor-pointer mt-12 text-teal-500 border border-4 border-dotted border-teal-700 px-4 py-5" >Back to {{ error.statusCode === 404 ? 'home' : $router.currentRoute.name }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error',
  mounted() {
    console.log(this.$router.currentRoute.name)
  },
  methods: {
    doRedirect(path) {
      if (this.error.statusCode === 404) {
        this.$router.push('/')
      } else {
        window.location.reload()
      }
    }
  }
}
</script>
