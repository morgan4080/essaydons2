<template>
  <SingleOrder @back="$router.push('/profile')" :order="this.order" />
</template>

<script>
export default {
  auth: false,
  async fetch() {
    const { data } = await this.$axios.get('api/orders');
    this.order = [...data.orders];
  },
  components: {

  },
  data() {
    return {
      id: this.$route.params.id,
      order: []
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
