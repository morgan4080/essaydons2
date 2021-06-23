<template>
  <div class="min-h-screen flex flex-col justify-center items-center pt-6 sm:pt-0 bg-gray-100">

    <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg mt-16 mb-16">
      <div class="mb-4 text-lg text-gray-600">

      </div>

      <form @submit.prevent="submit">

        <div class="block mb-3">
          <label class="block font-medium text-sm text-gray-700">
            Email
          </label>

          <input type="email" v-model="form.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">

        </div>

        <div class="block mb-3">
          <label class="block font-medium text-sm text-gray-700">
            Password
          </label>

          <input type="password" v-model="form.password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">

        </div>

        <div class="block mb-3">
          <label class="block font-medium text-sm text-gray-700">
            Password Confirmation
          </label>

          <input type="password" v-model="form.password_confirmation" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">

        </div>

        <div class="flex items-center justify-end mt-4">
          <loading-button type="submit" :loading="sending" class="inline-flex items-center px-4 py-2 bg-gradient-to-br from-teal-300 to-teal-600 border border-transparent rounded-md font-semibold text-xs text-gray-900 uppercase tracking-widest hover:bg-black hover:text-white active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray disabled:opacity-25 transition ease-in-out duration-150">
            Reset Password
          </loading-button>
        </div>
      </form>
    </div>

    <div v-if="success" :class="{'bg-green-200': error === null, 'bg-red-200': error !== null}" class="-mt-12 mb-6 px-6 py-4">{{ error === null ? 'Success,': error }} <nuxt-link v-if="error === null" to="/login" class="underline cursor-pointer">got to login.</nuxt-link></div>
  </div>
</template>

<script>
import LoadingButton from '@/components/LoadingButton'

export default {
  middleware: 'auth',
  components: {
    LoadingButton,
  },
  data() {
    return {
      sending: false,
      form: {
        email: null,
        password_confirmation: null,
        password: null,
      },
      success: false,
      error: null
    }
  },
  methods: {
    async submit() {
      this.sending = true
      if (this.form.password !== this.form.password_confirmation) {
        this.$toast.success('Password Mismatch', {
          theme: "outline",
          position: "bottom-left",
          duration : 5000
        })
        return
      }
      try {
        const { data } = await this.$axios.post('api/signup?reset=true', {
          email: this.form.email,
          password_confirmation: this.form.password_confirmation,
          password: this.form.password,
        })

        console.log("reset success", data)

        this.$toast.success(data.message, {
          theme: "outline",
          position: "bottom-left",
          duration : 5000
        })

        this.sending = false

        await this.$router.push('/profile')

      } catch (e) {
        this.error = e
        this.sending = false
        console.log("password reset error", e)
      }
    }
  }
}
</script>

<style scoped>

</style>
