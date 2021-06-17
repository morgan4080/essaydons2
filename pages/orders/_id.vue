<template>
  <div class="mobile-b min-h-screen bg-left-0 bg-gray-100 lg:bg-center-0">
    <div class="min-h-screen max-w-6xl mx-auto pt-32 lg:pt-32 z-10 px-2 lg:px-0 pb-32">
      <div class="mt-8 flex flex-wrap relative text-gray-700">
        <p v-if="$fetchState.pending">Fetching order : )</p>
        <p v-else-if="$fetchState.error">An error occurred :(</p>

        <div v-if="!$fetchState.pending" class="absolute flex flex-col top-0 text-xs overflow-auto -mt-12 w-full">
          <div class="flex flex-row items-center leading-none font-bold tracking-tight text-left capitalize overflow-hidden">
            <div class="flex-grow text-3xl">
              <span class="cursor-pointer" @click="$router.push('/profile')">Orders</span> / <span class="text-teal-300">{{ order.id }}</span>
            </div>
            <div class="flex-none">
              <span :class="{'bg-red-100 text-red-300': order.status === 'processing', 'bg-green-50 text-teal-300': order.status === 'success' }" class="px-2 inline-flex text-xs border leading-5 font-semibold rounded-full">{{ order.status }}</span>
            </div>
          </div>
        </div>
        <SingleOrder v-if="!$fetchState.pending" :order="this.order" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleOrder from '@/components/SingleOrder'

export default {
  head: {
    title: 'Single Order',
  },
  middleware: 'auth',
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
