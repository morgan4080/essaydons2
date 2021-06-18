<template>
  <div class="min-h-screen bg-left-0 bg-gray-100 lg:bg-center-0">
    <div class="max-w-6xl mx-auto pt-32 lg:pt-32 z-10 px-6 lg:px-0 pb-32">
      <div class="lg:grid lg:grid-cols-8 lg:gap-8">
        <div class="col-span-4 mt-8 flex flex-wrap relative text-gray-700">
          <p v-if="$fetchState.pending">Fetching order : )</p>
          <p v-else-if="$fetchState.error">An error occurred :(</p>

          <div v-if="!$fetchState.pending" class="flex flex-col top-0 text-xs overflow-auto -mt-12 w-full">
            <div class="flex flex-row flex-wrap items-center leading-none font-bold tracking-tight text-left capitalize overflow-hidden">
              <div class="text-2xl flex-grow leading-none font-black tracking-tight text-left capitalize mb-6">
                <span class="testLink cursor-pointer" @click="$router.push('/profile')">Orders /</span>
                &nbsp;
                <span class="text-teal-300">Id: {{ order.id }}</span>
              </div>
              <div class="flex-none flex flex-row flex-wrap items-center ml-auto space-x-1 mr-1.5 mb-6">
                <span>State: <span :class="{'bg-transparent border-red-200 text-red-800': !order.state, 'bg-transparent border-teal-300 text-green-500': order.state }" class="px-2 inline-flex text-xs border leading-5 font-semibold rounded-full">{{ order.state ? order.state : 'Listed' }}</span></span>
                <span>Payment: <span :class="{'bg-red-200 text-red-800': order.status === 'processing', 'bg-green-200 text-green-500': order.status === 'success' }" class="px-2 inline-flex text-xs border leading-5 font-semibold rounded-full">{{ order.status }}</span></span>
                <div class="border-l border-gray-400 w-0 h-6 opacity-75"></div>
                <button v-if="order.status === 'processing'" type="button" class="group mr-1.5 px-4 border border-gray-300 rounded-full text-sm leading-4 font-medium text-gray-700 hover:text-white hover:bg-black focus:outline-none focus:border-teal-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transform hover:scale-105 transition duration-150 ease-in-out">
                  Complete
                  <span class="transform inline-block transition ease-in-out duration-150 group-hover:translate-x-2">→</span>
                </button>
              </div>
            </div>
          </div>
          <SingleOrder v-if="!$fetchState.pending" :order="this.order" />
        </div>
        <div class="col-span-4 mt-8 flex flex-wrap relative text-gray-700">
          <p v-if="$fetchState.pending">Fetching order : )</p>
          <p v-else-if="$fetchState.error">An error occurred :(</p>

          <div v-if="!$fetchState.pending" class="flex flex-col top-0 text-xs overflow-auto -mt-12 w-full">
            <div class="flex flex-row flex-wrap items-center leading-none font-bold tracking-tight text-left capitalize overflow-hidden">
              <div class="flex-none flex flex-row flex-wrap items-center ml-auto space-x-1 mr-1.5 mb-6">
<!--                order actions-->
              </div>
            </div>
          </div>
<!--          comments section-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleOrder from '@/components/SingleOrder'

export default {
  head: {
    title: 'Order',
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
    }
  }
}
</script>

<style scoped>

</style>
