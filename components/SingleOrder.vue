<template>
  <div class="shadow-xl border-b bg-white border-gray-200 overflow-hidden rounded-lg text-gray-900 block w-full">
    <div class="">
      <div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="">
            <div class="text-sm font-medium text-gray-900">Client</div>
          </dt>
          <dd class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="flex flex-col">
              <div class="text-sm font-medium capitalize text-gray-900">
                {{ order.users.name }}
              </div>
            </div>
          </dd>
        </div>
        <div
          class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt>
            <div class="flex flex-col">
              <div class="text-sm font-medium text-gray-900">Email</div>
              <div class="text-sm text-gray-500">Phone</div>
            </div>
          </dt>
          <dd class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="flex flex-col">
              <div class="text-sm font-medium text-gray-900">
                {{ order.users.email }}
              </div>
              <div class="text-sm text-gray-500">
                {{ order.users.phone }}
              </div>
            </div>
          </dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="">
            <div class="text-sm font-medium text-gray-900">Paper Type</div>
          </dt>
          <dd class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="flex flex-col">
              <div class="text-sm font-medium text-gray-900">
                {{ orderDetails.paper_type }}
              </div>
            </div>
          </dd>
        </div>
        <div
          class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt>
            <div class="flex flex-col">
              <div class="text-sm font-medium text-gray-900">
                Academic Level
              </div>
              <div class="text-sm text-gray-500">Discipline/Subject</div>
            </div>
          </dt>
          <dd class="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
            <div class="flex flex-col">
              <div class="text-sm font-medium text-gray-900">
                {{ academicLevel }}
              </div>
              <div class="text-sm text-gray-500">
                {{ orderDetails.subject }}
              </div>
            </div>
          </dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="">
            <div class="text-sm font-medium text-gray-900">Deadline</div>
          </dt>
          <dd class="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
            <div class="flex flex-col">
              <div class="text-sm font-medium text-gray-900">
                {{ orderDetails.duration.duration }}
              </div>
            </div>
          </dd>
        </div>
        <div
          class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="">
            <div class="text-sm font-medium text-gray-900">Pages</div>
            <div class="text-sm text-gray-500">Format/Spacing</div>
          </dt>
          <dd class="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
            <div class="flex flex-col">
              <div class="text-sm font-medium text-gray-900">
                {{ orderDetails.pages }}
              </div>
              <div class="text-sm text-gray-500">
                {{ orderDetails.format }} / {{ orderDetails.spacing }}
              </div>
            </div>
          </dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="">
            <div class="text-sm font-medium text-gray-900">Extra Options</div>
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <ul>
              <li>Sources = {{ orderDetails.sources }}</li>
              <li>Slides = {{ orderDetails.slides }}</li>
              <li>Charts = {{ orderDetails.charts }}</li>
              <li v-if="orderDetails.advanced_writer">Advanced writer</li>
              <li v-if="orderDetails.additional_editing">Additional editing</li>
              <li v-if="orderDetails.digital_copies">
                Digital copies of sources
              </li>
              <li v-if="orderDetails.initial_draft">Initial draft</li>
              <li v-if="orderDetails.one_page_summary">Page summary</li>
              <li v-if="orderDetails.plagiarism_report">Plagiarism report</li>
            </ul>
          </dd>
        </div>
        <div
          class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="">
            <div class="text-sm font-medium text-gray-900">Topic</div>
            <div class="text-sm text-gray-500">Paper Details</div>
          </dt>
          <dd class="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
            <span class="font-semibold text-sm mb-1 text-gray-700">{{
              orderDetails.topic
            }}</span>
            <br />
            <p class="text-sm text-gray-500">
              {{ orderDetails.details }}
            </p>
          </dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="">
            <div class="text-sm font-medium text-gray-900">Attachments</div>
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <ul class="border border-gray-200 divide-y divide-gray-200">
              <li
                v-for="upload in orderDetails.uploads"
                class="pl-3 pr-4 py-3 flex items-center justify-between"
              >
                <div class="w-0 flex-1 flex items-center">
                  <!-- Heroicon name: paper-clip -->
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="ml-2 flex-1 w-0 truncate">
                    {{
                      upload.secure_url
                        .slice(upload.secure_url.lastIndexOf('/'))
                        .slice(1)
                    }}
                  </span>
                </div>
                <div  class="ml-4 flex-shrink-0 space-x-2">
                  <a @click="genDownload(upload.public_id)"

                    class="
                      font-medium
                      cursor-pointer
                      text-indigo-600
                      hover:text-indigo-500
                    "
                  >
                    Preview </a
                  ><a @click="genDownload(upload.public_id)"

                    class="
                      font-medium
                      cursor-pointer
                      text-indigo-600
                      hover:text-indigo-500
                    "
                  >
                    Download
                  </a>
                </div>
              </li>
            </ul>
          </dd>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SingleOrder',
  props: {
    order: Object,
  },
  computed: {
    ...mapState(['storedata']),
    orderDetails() {
      return JSON.parse(this.order.order_details)
    },
    academicLevel() {
      return this.storedata.find((item) => item.id === this.orderDetails.level)
        .level
    },
  },
  methods: {
    genDownload(id) {
      console.log(id)
    },
  },
}
</script>

<style scoped></style>
