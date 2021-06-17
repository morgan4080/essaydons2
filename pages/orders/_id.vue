<template>
  <SingleOrder @back="$router.push('/profile')" :order="this.order" />
</template>

<script>
export default {
  auth: false,
  async fetch() {
    try {
      const { data } = await this.$axios.get('api/orders?id=' + this.id)

      this.order = {
        ...data.order
      }
    } catch (e) {
      console.log(e)
      this.$toast.error('Order Cannot be fetched', {
        theme: "outline",
        position: "bottom-center",
        duration : 5000
      })
    }
  },
  components: {

  },
  data() {
    return {
      id: this.$route.params.id,
      order: {}
    };
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style scoped>

</style>
