<template>
  <div class="font-sans text-gray-900 antialiased">
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">

      <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <div class="mb-4 text-sm text-gray-600">
          Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
        </div>

        <form @submit.prevent="forgotPassword">
          <div class="block">
            <label class="block font-medium text-sm text-gray-700">
              Email
            </label>

            <input v-model="form.email" class="form-input rounded-md shadow-sm block mt-1 w-full" type="email" name="email" required="required" autofocus="autofocus">

          </div>

          <div class="flex items-center justify-end mt-4">
            <button type="submit" class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray disabled:opacity-25 transition ease-in-out duration-150">
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
      }
    }
  },
  methods: {
    forgotPassword() {

    }
  }
}
</script>

<style scoped>

</style>
