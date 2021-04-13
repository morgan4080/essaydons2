<template>
    <div class="conf">
      <app-nav />
        <Nuxt />
      <app-footer />
    </div>
</template>
<script>
import AppFooter from "~/components/AppFooter.vue";
import AppNav from "~/components/AppNav.vue";
export default {
  components: {
    AppFooter,
    AppNav
  }
}
</script>
