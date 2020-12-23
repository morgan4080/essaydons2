<template>
  <div class="font-sans text-gray-900 antialiased">
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">

      <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <div class="mb-4 text-sm text-gray-600">
          Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
        </div>

        <form @submit.prevent="forgotPassword">
          <div class="block">
            <input name="email" required="required" autofocus="autofocus" v-model="form.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email">
          </div>

          <div class="flex items-center justify-end mt-4">
            <button class="flex items-center bg-black hover:bg-teal-300 text-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform hover:scale-105 transition ease-in-out duration-100" type="submit">
              <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Email Password Reset Link
            </button>

          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: 'guest',
  data() {
    return {
      form: {
        email: null,
        account_id: 1
      },
      loading: false
    }
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    for (let p of urlParams) {
      console.log(p);
    }
  },
  methods: {
    forgotPassword() {
      try {
        this.loading = true;

        this.$toast.success('Check mail!', {
          theme: "outline",
          position: "bottom-left",
          duration : 5000
        });

        this.loading = false;

      } catch (e) {
        this.loading = false;

        this.$toast.error('sm went terribly wrong!', {
          theme: "outline",
          position: "bottom-left",
          duration : 5000
        });
      }
    }
  }
}
</script>

<style scoped>

</style>
