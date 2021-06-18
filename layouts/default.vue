<template>
    <div class="conf">
      <app-nav />
        <nuxt keep-alive :keep-alive-props="{ max: 10 }" />
      <app-footer />
      <portal-target name="dropdown" slim />
    </div>
</template>
<script>
import AppFooter from "~/components/AppFooter.vue"
import AppNav from "~/components/AppNav.vue"
import { PortalTarget } from 'portal-vue'

export default {
  components: {
    AppFooter,
    AppNav,
    PortalTarget
  },
  mounted() {
    const Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();

    Tawk_API.onLoad = () => {
      if(Tawk_API.isVisitorEngaged()){
        this.$toast.show("Login to secure chat", {
          theme: "outline",
          position: "bottom-center",
          duration : 5000
        })
      }
    }
  }
}
</script>
