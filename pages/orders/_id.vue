<template>
  <div>
    <p v-if="$fetchState.pending">Fetching order : )</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <SingleOrder v-else @back="$router.push('/profile')" :order="this.order" />
  </div>
</template>

<script>
import SingleOrder from '@/components/SingleOrder'

export default {
  middleware: 'auth',
  async fetch() {
    try {
      const { data } = await this.$axios.get('api/orders?id=' + this.id)

      this.order = {
        ...data.order
      }

      console.log(this.order)
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
    SingleOrder
  },
  data() {
    return {
      id: this.$route.params.id,
      order: null
    };
  }
}
</script>

<style scoped>

</style>
