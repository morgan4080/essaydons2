<template>
  <div class="bg-white overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Order Information
      </h3>
      <p class="mt-1 max-w-2xl text-base text-gray-500">
        Specifications data.
      </p>
      <p class="mt-1 max-w-2xl text-base text-gray-500">
        <a @click="$emit('back')" class="font-bold text-teal-600 cursor-pointer underline">Orders</a>  /  OrderID: {{ order.id }}
      </p>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" v-if="isOwner">
          <dt class="text-base font-medium text-gray-500">
            Full name
          </dt>
          <dd class="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
            {{ order.users.name }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" v-if="isOwner">
          <dt class="text-base font-medium text-gray-500">
            Contact Information
          </dt>
          <dd class="flex flex-col mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
            <a href="mailto:someone@example.com">Email - {{ order.users.email }}</a>
            <a href="tel:+18475555555">Call - {{ order.users.phone }}</a>
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-base font-medium text-gray-500">
            Paper Type
          </dt>
          <dd class="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
            {{ orderDetails.paper_type }}
          </dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-base font-medium text-gray-500">
            Academic Level, Discipline/Subject
          </dt>
          <dd class="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
            {{ academicLevel }} - {{ orderDetails.subject }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-base font-medium text-gray-500">
            Urgency
          </dt>
          <dd class="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
            {{ orderDetails.duration.duration }}
          </dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-base font-medium text-gray-500">
            Pages (spacing) (format)
          </dt>
          <dd class="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
            {{ orderDetails.pages }} ({{ orderDetails.spacing }}) ({{ orderDetails.format }})
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-base font-medium text-gray-500">
            Extra Options
          </dt>
          <dd class="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
            <ul>
              <li>Sources = {{ orderDetails.sources }}</li>
              <li>Slides = {{ orderDetails.slides }}</li>
              <li>Charts = {{ orderDetails.charts }}</li>
              <li v-if="orderDetails.advanced_writer">Advanced writer</li>
              <li v-if="orderDetails.additional_editing">Additional editing</li>
              <li v-if="orderDetails.digital_copies">Digital copies of sources</li>
              <li v-if="orderDetails.initial_draft">Initial draft</li>
              <li v-if="orderDetails.one_page_summary">Page summary</li>
              <li v-if="orderDetails.plagiarism_report">Plagiarism report</li>
            </ul>
          </dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-base font-medium text-gray-500">
            Topic and Paper Details
          </dt>
          <dd class="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
            <span class="font-bold mb-1">{{ orderDetails.topic }}</span><br>
            {{ orderDetails.details }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-base font-medium text-gray-500">
            Attachments
          </dt>
          <dd class="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
            <ul class="border border-gray-200 rounded-md divide-y divide-gray-200">
              <li v-for="upload in orderDetails.uploads" class="pl-3 pr-4 py-3 flex items-center justify-between text-base">
                <div class="w-0 flex-1 flex items-center">
                  <!-- Heroicon name: paper-clip -->
                  <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd" />
                  </svg>
                  <span class="ml-2 flex-1 w-0 truncate">
                  {{ upload.secure_url.slice(upload.secure_url.lastIndexOf("/")).slice(1) }}
                </span>
                </div>
                <div class="ml-4 flex-shrink-0">
                  <a @click="genDownload(upload.public_id)" class="font-medium text-indigo-600 hover:text-indigo-500">
                    Download
                  </a>
                </div>
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "SingleOrder",
  props: {
    order: Object
  },
  computed: {
    ...mapState(['storedata']),
    orderDetails() {
      return JSON.parse(this.order.order_details)
    },
    academicLevel() {
      return this.storedata.find(item => item.id === this.orderDetails.level).level
    },
    isOwner() {
      return this.$auth.loggedIn ? this.$auth.user.owner : false
    }
  },
  mounted() {
    console.log(this.order)
  },
  methods: {
    genDownload(id) {
      console.log(id)
    }
  }
}
</script>

<style scoped>

</style>
