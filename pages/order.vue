<template>

</template>

<script>
import { mapState } from "vuex"
export default {
  data() {
    return {
      openTab: 1,
    }
  },
  computed: {
    ...mapState(["storedata"]),
  },
  methods: {
    setFirstDuration() {
      this.form.duration = {
        duration: Object.entries(this.duration)[0][0],
        price: Object.entries(this.duration)[0][1],
      };
    },
    toggleTabs(tabNumber){
      this.openTab = tabNumber
    }
  },
}
</script>

<style scoped>

</style>
