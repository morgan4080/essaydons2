<template>
    <div class="conf">
      <app-nav />
        <Nuxt />
      <app-footer />
      <portal-target name="dropdown" slim />
    </div>
</template>
<script>
import AppFooter from "~/components/AppFooter.vue";
import AppNav from "~/components/AppNav.vue";
import { PortalTarget } from 'portal-vue'
export default {
  components: {
    AppFooter,
    AppNav,
    PortalTarget
  }
}
</script>
