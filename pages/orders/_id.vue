<template>
  <div class="min-h-screen bg-left-0 bg-gray-100 lg:bg-center-0">
    <div class="topServiceBanner mx-auto px-0 lg:px-0 mt-12 lg:mt-12 pt-8">
      <div style="height: 100%" class="bg-gradient-to-br from-teal-300 to-teal-600 -mt-1 -mt-1">
        <div class="max-w-6xl px-3 md:px-0 mx-auto pt-16 pb-24"></div>
      </div>
    </div>
    <div class="max-w-6xl mx-auto z-10 px-6 lg:px-0 pb-32 -mt-24 space-y-12">
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
                <div class="flex items-center">
                  <span class="cursor-pointer" @click="$router.push('/profile')"
                  >Orders</span
                  >
                  <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.875 9.375L30 22.5L16.875 35.625" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span v-if="!$fetchState.pending" class="text-white"
                  >Id: {{ order.id }}</span
                  >
                  <span
                    v-if="$fetchState.pending"
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
              </div>
              <div class="flex-none flex flex-row flex-wrap items-center mb-4">
                <span class="flex space-x-1 items-center ml-0.5">
                  <span class="text-sm">State:</span>
                  <span
                    v-if="!$fetchState.pending"
                    :class="{
                      'bg-transparent text-red-800':
                        !order.state,
                      'bg-black text-white': order.state,
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

          <div class="flex flex-col w-full">
            <div class="shadow-lg rounded-xl flex-none md:w-xl sm:overflow-hidden md:sticky md:top-10 w-full">
              <div class="rounded-t-xl bg-white px-6 py-8 relative md:p-10 text-lg md:text-xl leading-8  md:leading-8 font-semibold text-gray-900 w-full">
                <span v-if="!$fetchState.pending" class="text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl-xl rounded-tr-xl" :class="{'bg-red-300': order.status === 'processing', 'bg-black text-green-300': order.status === 'success'}" >{{ order.status === 'processing' ? 'unpaid' : 'paid' }}</span>
                <span v-if="$fetchState.pending" class="absolute right-0 top-0 rounded-bl-xl rounded-tr-xl animate-pulse inline-block w-12 h-4 bg-gray-400 rounded"></span>
                <div class="flex justify-between items-center">
                  <svg class="fill-current text-teal-100" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 13.125L37.5 13.125M37.5 13.125L30 5.625M37.5 13.125L30 20.625M30 31.875L7.5 31.875M7.5 31.875L15 39.375M7.5 31.875L15 24.375" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <p class="ml-4">
                    Order Actions
                  </p>
                </div>
                <div class="p-4 flex flex-col">
                  <div class="flex justify-between">
                    <p class="">
                      Assign Writer
                    </p>

                    <select id="assign-writer" v-model="assignedWriter" class="block mt-2 w-1/2 pl-2 form-select w-full py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline focus:bg-gradient-to-r focus:outline-none focus:shadow-outline focus:bg-gradient-to-r transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                      <option v-for="writer in writers" :value="writer.id" >{{ writer.name }}</option>
                    </select>


                  </div>
                </div>
              </div>
              <div class="flex items-center space-x-4 p-6 md:px-6 md:py-6 bg-gradient-to-br rounded-b-xl leading-6 font-semibold text-white from-teal-300 to-teal-600">
                <div class="flex-auto flex justify-between items-center">
<!--                  complete order -->
                  <button @click="$router.push(`/order?edit=${order.id}`)" type="button" v-if="!$fetchState.pending && order.status === 'processing'" class="group ml-0.5 bg-black px-3 py-2 font-semibold rounded-full text-sm leading-4 text-white hover:text-white hover:bg-black focus:outline-none focus:border-gray-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transform hover:scale-105 transition duration-150 ease-in-out">
                    Complete
                  </button>
                  <span v-else-if="$fetchState.pending" class="animate-pulse inline-block w-12 h-4 bg-gray-50 rounded"></span>
                  <button type="button" v-if="!$fetchState.pending && order.status === 'success'" class="group ml-0.5 bg-black px-3 py-2 font-semibold rounded-full text-sm leading-4 text-white hover:text-white hover:bg-black focus:outline-none focus:border-gray-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transform hover:scale-105 transition duration-150 ease-in-out">
                    Save Actions
                  </button>
                  <span v-if="!$fetchState.pending" class="font-semibold text-base">{{ JSON.parse(order.order_details).amount | dollar }}</span>
                  <span v-else class="animate-pulse inline-block w-12 h-4 bg-gray-50 rounded"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!$fetchState.pending" class="lg:grid lg:grid-cols-12 lg:gap-4">
        <div class="col-span-12 flex flex-col">
          <div  class="shadow-lg rounded-xl flex-none md:w-xl sm:overflow-hidden md:sticky md:top-10">
            <div  class="rounded-t-xl bg-white px-6 py-8 relative md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900">
               <div class="flex justify-between">
                 <div  class="flex space-x-6 items-center">
                   <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M31.875 15H35.625C37.6961 15 39.375 16.6789 39.375 18.75V30C39.375 32.0711 37.6961 33.75 35.625 33.75H31.875V41.25L24.375 33.75H16.875C15.8395 33.75 14.902 33.3303 14.2233 32.6516M14.2233 32.6516L20.625 26.25H28.125C30.1961 26.25 31.875 24.5711 31.875 22.5V11.25C31.875 9.17893 30.1961 7.5 28.125 7.5H9.375C7.30393 7.5 5.625 9.17893 5.625 11.25V22.5C5.625 24.5711 7.30393 26.25 9.375 26.25H13.125V33.75L14.2233 32.6516Z" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>
                   <p class="ml-4 text-sm md:text-base lg:text-base">
                     Support Chat
                   </p>
                 </div>
                 <div  class="flex space-x-2 items-center">
                   <p class="ml-4 text-sm md:text-base lg:text-base">
                     25
                   </p>
                   <div class="cursor-pointer bg-gradient-to-br from-teal-300 to-teal-600 rounded-xl">
                     <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M7.5 7.5V16.875H8.59034M37.3839 20.625C36.4613 13.2257 30.1493 7.5 22.5 7.5C16.2049 7.5 10.8155 11.3778 8.59034 16.875M8.59034 16.875H16.875M37.5 37.5V28.125H36.4097M36.4097 28.125C34.1845 33.6222 28.7951 37.5 22.5 37.5C14.8507 37.5 8.53873 31.7743 7.61605 24.375M36.4097 28.125H28.125" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                   </div>
                 </div>
               </div>
            </div>
            <div class="flex flex-col">
              <div  class="bg-white px-6 py-5 relative md:px-10 md:py-4 text-lg md:text-xl leading-8 space-y-3 md:leading-8 font-semibold text-gray-900">
                <div v-for="comment in comments" :key="comment.id" class="flex p-4 rounded-xl">
                  <div v-if="!comment.user.owner" class="w-full relative shadow-xl md:w-1/2 ml-auto flex flex-wrap bg-gradient-to-br from-teal-300 to-teal-600 items-center justify-end p-2 rounded-tl-xl rounded-br-xl rounded-bl-xl">
                    <div class="text-teal-300 tracking-widest text-xs absolute right-0 top-0 -mr-1 -mr-1 transform rotate-90" style="margin-top: -3px;">▶</div>
                    <p class="ml-4 mb-1 text-sm capitalize text-left mr-auto">
                      {{ comment.user.name }} <span class="opacity-60 text-gray-500 text-xs font-thin">{{ comment.updated_at | formatDate }}</span>
                    </p>
                    <p class="ml-4 font-normal text-gray-700 text-sm">
                      {{ comment.comment }}
                    </p>
                  </div>
                  <div v-if="comment.user.owner" class="w-full relative shadow-xl md:w-1/2 flex flex-wrap items-center bg-gray-200 justify-start p-2 rounded-tr-xl rounded-bl-xl rounded-tr-xl rounded-br-xl">
                    <div class="text-gray-200 tracking-widest text-xs absolute left-0 top-0 -ml-1 -mt-1 transform rotate-90" style="margin-top: -3px;">▶</div>
                    <p class="ml-4 mb-1 text-sm capitalize">
                      {{ comment.user.name }} <span class="opacity-60 text-gray-500 text-xs font-thin">{{ comment.updated_at | formatDate }}</span>
                    </p>
                    <p class="ml-4 font-normal text-gray-700 text-sm">
                      {{ comment.comment }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-white px-6 py-8 relative md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900">
              <div class="flex justify-between space-x-2 relative">
                <div class="flex space-x-6 items-center w-full">
                  <input type="text" placeholder="Comment here ..." class="py-3 border border-gray-100 font-visible-shut px-5 w-full bg-gray-200 rounded-full focus:shadow-outline text-sm md:text-base lg:text-base shadow-xl">
                </div>
                <div id="dragBox" @drop="dropHandler" @dragover="handleDragOver" @dragleave="handleDragLeave" @dragenter="handleDragEnter" class="absolute right-0 top-2 flex items-center justify-center space-x-1 pr-1">
                  <div @click="handleFileUploadClick()" class="flex-1 flex items-center cursor-pointer bg-gradient-to-br from-black to-gray-900 rounded-full p-1.5">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.643 5.83333L7.15482 11.3215C6.50394 11.9724 6.50394 13.0276 7.15482 13.6785C7.80569 14.3294 8.86097 14.3294 9.51184 13.6785L14.857 8.19036C16.1588 6.88861 16.1588 4.77806 14.857 3.47631C13.5553 2.17456 11.4447 2.17456 10.143 3.47631L4.79779 8.96447C2.84517 10.9171 2.84517 14.0829 4.79779 16.0355C6.75042 17.9882 9.91624 17.9882 11.8689 16.0355L17.0833 10.8333" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <input id="fileUploader" @change="change" accept="text/plain,image/jpeg,image/jpeg,image/png,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/x-iwork-pages-sffpages" multiple="" type="file" autocomplete="off" tabindex="-1" class="hidden h-full w-full" style="z-index: 2;">
                  <div class="flex-1 flex items-center cursor-pointer bg-gradient-to-br from-teal-300 to-teal-600 rounded-full p-0.5">
                    <svg class="animate-pulse" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0)">
                        <path d="M9.19338 17.1715L11.5 24.5L20.7404 10.5048L4.00001 11.5096L9.19338 17.1715ZM9.19338 17.1715L14.9669 13.8382" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="20" height="20" fill="white" transform="translate(17.9054 0.594604) rotate(60)"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-white px-6 pt-2 mb-12 relative md:px-10 md:pt-0 md:pb-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900">
              <ul class="text-xs previewImgTab max-h-48 overflow-auto">
                <li class="rounded-full shadow-xl" v-for="upload in form.uploads">{{ upload.name }} - {{ upload.size }} bytes<svg @click="removeFile(upload)" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path></svg></li>
              </ul>
            </div>
          </div>

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
        ...data.order,
      }
    } catch (e) {
      console.log("order error", e)
      this.$toast.error('Order Cannot be fetched', {
        theme: 'outline',
        position: 'bottom-center',
        duration: 5000,
      })
    }
    try {
      const { data } = await this.$axios.get('api/users?type=writer')
      this.writers = [...data]
    } catch (e) {
      console.log("writers error", e)
      this.$toast.error('Writers Cannot be fetched', {
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
      assignedWriter: null,
      writers: [],
      order: null,
      comments: [
        {
          id: 1,
          user: {
            name: 'Gaitho Gibson',
            owner: true,
          },
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget mi interdum, sagittis tellus vel, ullamcorper lacus. Integer eget sem magna. ",
          upload: [],
          updated_at: new Date(),
        },
        {
          id: 2,
          user: {
            name: 'murungi mutugi',
            owner: false,
          },
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget mi interdum, sagittis tellus vel, ullamcorper lacus. Integer eget sem magna. ",
          upload: [],
          updated_at: new Date(),
        },
        {
          id: 3,
          user: {
            name: this.$auth.user.name,
            owner: this.$auth.user.owner,
          },
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget mi interdum, sagittis tellus vel, ullamcorper lacus. Integer eget sem magna. ",
          upload: [],
          updated_at: new Date(),
        },
        {
          id: 4,
          user: {
            name: this.$auth.user.name,
            owner: this.$auth.user.owner,
          },
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget mi interdum, sagittis tellus vel, ullamcorper lacus. Integer eget sem magna. ",
          upload: [],
          updated_at: new Date(),
        }
      ],
      form: {
        comment: "",
        uploads: [],
        user: {
          name: this.$auth.user.name,
          owner: this.$auth.user.owner,
        },
      }
    }
  },
  methods: {
    change(e) {
      this.readFileUrl(e.target);
    },
    async readFileUrl(input) {
      if (input.files && input.files[0]) {
        for (let i = 0; i < input.files.length; i++) {
          this.form.uploads.push(input.files[i]);
        }
      }
    },
    removeFile(file) {
      let index = this.form.uploads.findIndex(file0 => file0 === file);
      this.form.uploads.splice(index, 1);
    },
    dropHandler(ev) {
      ev.preventDefault();
      if (ev.dataTransfer.items) {
        for (let i = 0; i < ev.dataTransfer.items.length; i++) {
          if (ev.dataTransfer.items[i].kind === 'file') {
            let file = ev.dataTransfer.items[i].getAsFile();
            this.form.uploads.push(file);
          }
        }
      } else {
        for (let i = 0; i < ev.dataTransfer.files.length; i++) {
          this.form.uploads.push(ev.dataTransfer.files[i]);
        }
      }
    },
    handleFileUploadClick() {
      const fileSelect = document.getElementById("dragBox"),
        fileElem = document.getElementById("fileUploader");
      fileSelect.addEventListener("click", function (e) {
        if (fileElem) {
          fileElem.click();
        }
      }, false);
    },
    handleDragOver(ev) {
      ev.preventDefault();
      console.log('File(s) in drop zone');
    },
    handleDragEnter(ev) {
      ev.preventDefault();
    },
    handleDragLeave(ev) {
      ev.preventDefault();
    },
  }
}
</script>

<style scoped>
.previewImgTab li{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  border: 1px solid #dbdbdb;
  background-color: #000000;
  color: #ffffff;
  padding: 10px 15px;
  margin-top: 5px;
}
</style>
