<template>
  <div class="min-h-screen bg-left-0 bg-gray-100 lg:bg-center-0">
    <div class="topServiceBanner mx-auto px-0 lg:px-0 mt-12 lg:mt-12 pt-8">
      <div style="height: 100%" class="bg-gradient-to-br from-teal-300 to-teal-600 -mt-1 -mt-1">
        <div class="max-w-6xl px-3 md:px-0 mx-auto pt-16 pb-24"></div>
      </div>
    </div>
    <div class="max-w-6xl mx-auto z-10 px-6 lg:px-0 pb-32 -mt-24">
      <div class="lg:grid lg:grid-cols-12 lg:gap-4">
        <div class="col-span-8 mt-8 flex flex-wrap relative text-gray-700">
          <div v-if="$fetchState.error">An error occurred :(</div>

          <div class="flex flex-col top-0 text-xs overflow-auto -mt-12 w-full">
            <div
              class="
                flex flex-row flex-wrap
                items-center
                leading-none
                font-bold
                tracking-tight
                text-left
                capitalize
                overflow-hidden
                px-2 px-2
              "
            >
              <div
                class="
                  text-2xl
                  flex-grow
                  leading-none
                  font-black
                  tracking-tight
                  text-left
                  capitalize
                  mb-4
                "
              >
                <span class="cursor-pointer" @click="$router.push('/profile')"
                  >Orders</span
                >
                &nbsp;
                <span v-if="!$fetchState.pending" class="text-white"
                  >Id: {{ order.id }}</span
                >
                <span
                  v-else
                  class="
                    animate-pulse
                    inline-block
                    w-12
                    h-4
                    bg-gray-400
                    rounded
                  "
                ></span>
              </div>
              <div class="flex-none flex flex-row flex-wrap items-center mb-4">
                <span class="flex space-x-1 items-center ml-0.5">
                  <span class="text-sm">State:</span>
                  <span
                    v-if="!$fetchState.pending"
                    :class="{
                      'bg-transparent border-red-200 text-red-800':
                        !order.state,
                      'bg-black border-white text-white': order.state,
                    }"
                    class="
                      px-2
                      inline-flex
                      text-xs
                      leading-5
                      font-semibold
                      rounded-full
                    "
                    >{{ order.state ? order.state : 'Listed' }}</span
                  >
                  <span
                    v-else
                    class="
                      animate-pulse
                      inline-block
                      w-12
                      h-4
                      bg-gray-400
                      rounded
                    "
                  ></span>
                </span>
                <span class="flex space-x-1 items-center ml-0.5">
                  <span class="text-sm">Payment:</span>
                  <span
                    v-if="!$fetchState.pending"
                    :class="{
                      'bg-red-200 text-red-800': order.status === 'processing',
                      'bg-green-200 text-green-500': order.status === 'success',
                    }"
                    class="
                      px-2
                      inline-flex
                      text-xs
                      border
                      leading-5
                      font-semibold
                      rounded-full
                    "
                    >{{ order.status }}</span
                  >
                  <span
                    v-else
                    class="
                      animate-pulse
                      inline-block
                      w-12
                      h-4
                      bg-gray-400
                      rounded
                    "
                  ></span>
                </span>
                <div
                  v-if="!$fetchState.pending && order.status !== 'success'"
                  class="border-l border-gray-400 w-0 h-6 opacity-75 mx-0.5"
                ></div>
                <button
                  v-if="!$fetchState.pending && order.status === 'processing'"
                  type="button"
                  class="
                    group
                    ml-0.5
                    bg-black
                    px-3
                    border border-white
                    rounded-full
                    text-sm
                    leading-4
                    font-medium
                    text-white
                    hover:text-white
                    hover:bg-black
                    focus:outline-none
                    focus:border-gray-300
                    focus:shadow-outline-blue
                    active:bg-gray-50
                    active:text-gray-800
                    transform
                    hover:scale-105
                    transition
                    duration-150
                    ease-in-out
                  "
                >
                  Complete
                </button>
              </div>
            </div>
          </div>
          <SingleOrder v-if="!$fetchState.pending" :order="this.order" />
          <div
            v-else
            class="space-y-2 flex flex-col w-full bg-white rounded-lg py-6 px-4"
          >
            <span
              v-for="x in '00000'"
              class="
                animate-pulse
                inline-block
                w-full
                h-4
                py-5
                bg-gray-400
                rounded
              "
            ></span>
          </div>
        </div>
        <div class="col-span-4 mt-8 flex flex-wrap relative text-gray-700">
          <div v-if="$fetchState.error">An error occurred :(</div>

          <div class="flex flex-col">
            <div
              class="shadow-lg rounded-xl flex-none w-80 md:w-xl"
            >
              <div
                class="
                        rounded-t-xl
                        bg-white
                        px-6
                        py-8
                        md:p-10
                        text-lg
                        md:text-xl
                        leading-8
                        md:leading-8
                        font-semibold
                        text-gray-900
                      "
              >
                <svg
                  width="45"
                  height="36"
                  class="mb-5 fill-current text-orange-100"
                >
                  <path
                    d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"
                  ></path>
                </svg>
                <p>
                  I have no design skills and with Tailwind I can actually
                  make good looking websites with ease and it's everything
                  I ever wanted in a CSS framework.
                </p>
              </div>
              <div
                class="
                        flex
                        items-center
                        space-x-4
                        p-6
                        md:px-10
                        md:py-6
                        bg-gradient-to-br
                        rounded-b-xl
                        leading-6
                        font-semibold
                        text-white
                        from-teal-300
                        to-teal-600
                      "
              >
                <div class="flex-auto">
<!--                  complete order -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!$fetchState.pending" class="flex flex-wrap">
        <!--          comments section-->
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
        ...data.order,
      }
    } catch (e) {
      console.log(e)
      this.$toast.error('Order Cannot be fetched', {
        theme: 'outline',
        position: 'bottom-center',
        duration: 5000,
      })
    }
  },
  components: {
    SingleOrder,
  },
  data() {
    return {
      id: this.$route.params.id,
      order: null,
    }
  },
}
</script>

<style scoped></style>
