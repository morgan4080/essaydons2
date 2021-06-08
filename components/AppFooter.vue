<template>
  <div >
    <div class="pt-16 pb-4 bg-secondary">
      <div class="max-w-6xl mx-auto px-4 lg:px-0" >
        <div class="text-white flex flex-col lg:flex-row" >
          <div class="lg:w-1/4 lg:py-4" >
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="164" height="63" viewBox="0 0 164 63">
              <defs>
                <pattern id="pattern" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 164 63">
                  <image width="164" height="63" xlink:href="data:image/png;base64,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"/>
                </pattern>
              </defs>
              <rect id="logo_essaydons" width="164" height="63" fill="url(#pattern)"/>
            </svg>
          </div>
          <div class="lg:w-1/4 lg:py-4" >
            <ul >
              <li class="py-1 lg:py-2" ><a href="/samples" target="_blank" class="text-lg" >
                Samples
              </a>
              </li>
              <li class="py-1 lg:py-2" ><a href="/contact" class="text-lg" >
                Contact Us
              </a>
              </li>
            </ul>
          </div>
          <div class="lg:w-1/4 lg:py-4" >
            <ul >
              <li class="py-1 lg:py-2" >
                <nuxt-link to="/faq" target="_blank" class="text-lg" >
                  F.A.Q
                </nuxt-link>
              </li>
              <li class="py-1 lg:py-2" >
                <nuxt-link to="/refunds" class="text-lg" >Money Back Guarantee</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="lg:w-1/4 lg:py-4" >
            <ul >
              <li class="py-1 lg:py-2" >
                <nuxt-link to="/privacy" class="text-lg" >Privacy</nuxt-link>
              </li>
              <li class="py-1 lg:py-2" >
                <nuxt-link to="/terms" class="text-lg" >Terms</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="lg:w-1/4 lg:py-4" >
            <h2 class="text-2xl font-semibold leading-none pb-1 text-white">
              We accept:
            </h2>
            <ul class="flex">
              <li class="py-1 lg:py-2" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#1565C0" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"/><path fill="#FFF" d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"/><path fill="#FFC107" d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"/></svg>
              </li>
              <li class="py-1 lg:py-2" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="NgmlaCv2fU27PJOuiUvQVa" x1="20.375" x2="28.748" y1="1365.061" y2="1394.946" gradientTransform="translate(0 -1354)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00b3ee"/><stop offset="1" stop-color="#0082d8"/></linearGradient><path fill="url(#NgmlaCv2fU27PJOuiUvQVa)" d="M43.125,9H4.875C3.287,9,2,10.287,2,11.875v24.25C2,37.713,3.287,39,4.875,39h38.25 C44.713,39,46,37.713,46,36.125v-24.25C46,10.287,44.713,9,43.125,9z"/><circle cx="17.053" cy="24.053" r="10.053" fill="#cf1928"/><linearGradient id="NgmlaCv2fU27PJOuiUvQVb" x1="20" x2="40.107" y1="24.053" y2="24.053" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fede00"/><stop offset="1" stop-color="#ffd000"/></linearGradient><circle cx="30.053" cy="24.053" r="10.053" fill="url(#NgmlaCv2fU27PJOuiUvQVb)"/><path fill="#d97218" d="M20,24.053c0,3.072,1.382,5.818,3.553,7.662c2.172-1.844,3.553-4.59,3.553-7.662 s-1.382-5.818-3.553-7.662C21.382,18.235,20,20.981,20,24.053z"/></svg>
              </li>
              <li class="py-1 lg:py-2" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#1565C0" d="M18.7,13.767l0.005,0.002C18.809,13.326,19.187,13,19.66,13h13.472c0.017,0,0.034-0.007,0.051-0.006C32.896,8.215,28.887,6,25.35,6H11.878c-0.474,0-0.852,0.335-0.955,0.777l-0.005-0.002L5.029,33.813l0.013,0.001c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,0.991,1,0.991h8.071L18.7,13.767z"/><path fill="#039BE5" d="M33.183,12.994c0.053,0.876-0.005,1.829-0.229,2.882c-1.281,5.995-5.912,9.115-11.635,9.115c0,0-3.47,0-4.313,0c-0.521,0-0.767,0.306-0.88,0.54l-1.74,8.049l-0.305,1.429h-0.006l-1.263,5.796l0.013,0.001c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,1,1,1h7.333l0.013-0.01c0.472-0.007,0.847-0.344,0.945-0.788l0.018-0.015l1.812-8.416c0,0,0.126-0.803,0.97-0.803s4.178,0,4.178,0c5.723,0,10.401-3.106,11.683-9.102C42.18,16.106,37.358,13.019,33.183,12.994z"/><path fill="#283593" d="M19.66,13c-0.474,0-0.852,0.326-0.955,0.769L18.7,13.767l-2.575,11.765c0.113-0.234,0.359-0.54,0.88-0.54c0.844,0,4.235,0,4.235,0c5.723,0,10.432-3.12,11.713-9.115c0.225-1.053,0.282-2.006,0.229-2.882C33.166,12.993,33.148,13,33.132,13H19.66z"/></svg>
              </li>
            </ul>
          </div>
        </div>
        <div class="text-center pt-8" >
          <p class="text-white opacity-50 py-1" >
            Copyright © 2020 EssayDons | All Rights Reserved. |
            <a href="https://web.facebook.com/awesomeappservices" target="_blank" class="hover:text-white" >By Awesome</a>
          </p>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="transition ease-in-out duration-500"
      leave-active-class="transition ease-in-out duration-200"
      enter-class="transform -translate-y-6"
      enter-to-class="transform translate-y-0"
      leave-class="transform translate-y-0"
      leave-to-class="transform -translate-y-6"
    >
      <div v-show="showLoader" class="min-h-screen flex flex-col justify-center gb-nav">
        <div class="btn-spinner mx-auto" style="font-size: 55px;" />
        <div class="text-2xl text-white my-3 font-black mx-auto">{{ emailVerified ? 'Email Verified' : 'Verifying Email' }}</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      showLoader: false,
      emailVerified: false,
    }
  },
  created() {
    // check for token param
    // set the token globally and on request header
    // make request to backend to update users.email_verified_at

    console.log(this.$router.currentRoute.query)

    async function verifyMe() {
      if (this.$router.currentRoute.query.hasOwnProperty('token')) {
        this.showLoader = true
        this.$auth.strategy.token.set(this.$router.currentRoute.query.token)
        return await this.$axios.post('api/signup?verify=true', {
          token: this.$router.currentRoute.query,
        })
      }
    }

    verifyMe().then((data)=> {
      console.log(data)
      this.emailVerified = true
    }).catch((e) => {
      console.log(e)
    })

  }
}
</script>

<style scoped>

</style>
