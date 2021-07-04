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
                  <span v-if="!$fetchState.pending" class="text-white"> Id: {{ order.id }}</span>
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
              <div class="relative rounded-t-xl bg-white p-6 md:px-6 md:py-6 text-lg md:text-xl leading-8  md:leading-8 font-semibold text-gray-900 w-full">
                <span v-if="!$fetchState.pending" class="text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl-xl rounded-tr-xl" :class="{'bg-red-300': order.status === 'processing', 'bg-black text-green-300': order.status === 'success'}" >{{ order.status === 'processing' ? 'unpaid' : 'paid' }}</span>
                <span v-if="$fetchState.pending" class="absolute right-0 top-0 rounded-bl-xl rounded-tr-xl animate-pulse inline-block w-12 h-4 bg-gray-400 rounded"></span>
                <div class="flex justify-between items-center mb-6">
                  <svg class="fill-current text-teal-100" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 13.125L37.5 13.125M37.5 13.125L30 5.625M37.5 13.125L30 20.625M30 31.875L7.5 31.875M7.5 31.875L15 39.375M7.5 31.875L15 24.375" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <p class="ml-4">
                    Order Actions
                  </p>
                </div>
                <div class="flex flex-col">
                  <div  class="flex justify-between">
                    <p v-if="$auth.user.owner && !$fetchState.pending  && order.status === 'success' && order.state === 'listed'" class="text-sm ml-2 mb-2 w-1/3 flex items-center">
                      Assign Writer
                    </p>

                    <span v-else class="animate-pulse inline-block w-12 h-4 bg-gray-200 rounded ml-2 mb-2 w-1/3"></span>

                    <select v-if="$auth.user.owner && !$fetchState.pending  && order.status === 'success' && order.state === 'listed'" id="assign-writer" v-model="assignedWriter" class="block w-2/3 mb-2 form-select py-1 border border-gray-300 bg-white rounded-lg shadow-xl focus:outline-none focus:shadow-outline focus:bg-gradient-to-r transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                      <option v-for="writer in writers" :value="writer.id" >{{ writer.name }}</option>
                    </select>

                    <span v-else class="animate-pulse inline-block w-2/3 h-4 bg-gray-200 rounded mb-2"></span>

                  </div>
                </div>
              </div>
              <div class="flex items-center space-x-4 p-6 md:px-6 md:py-6 bg-gradient-to-br rounded-b-xl leading-6 font-semibold text-white from-teal-300 to-teal-600">
                <div class="flex-auto flex justify-between items-center">
<!--                  complete order -->
                  <button v-if="!$fetchState.pending && order.status === 'processing'" @click="$router.push(`/order?edit=${order.id}`)" type="button" class="group ml-0.5 bg-black px-3 py-2 font-semibold rounded-full text-sm leading-4 text-white hover:text-white hover:bg-black focus:outline-none focus:border-gray-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transform hover:scale-105 transition duration-150 ease-in-out">
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
                 <div  class="flex space-x-6 justify-between items-center">
                   <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M31.875 15H35.625C37.6961 15 39.375 16.6789 39.375 18.75V30C39.375 32.0711 37.6961 33.75 35.625 33.75H31.875V41.25L24.375 33.75H16.875C15.8395 33.75 14.902 33.3303 14.2233 32.6516M14.2233 32.6516L20.625 26.25H28.125C30.1961 26.25 31.875 24.5711 31.875 22.5V11.25C31.875 9.17893 30.1961 7.5 28.125 7.5H9.375C7.30393 7.5 5.625 9.17893 5.625 11.25V22.5C5.625 24.5711 7.30393 26.25 9.375 26.25H13.125V33.75L14.2233 32.6516Z" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>
                   <div class="ml-4 text-sm flex items-center md:text-sm lg:text-base">
                     <div v-for="user in users" v-if="!user.self" :class="{'bg-black text-white': selectedUser === user, 'bg-gray-100 text-gray-600': selectedUser !== user}" class="flex -space-x-1 px-1 pb-1 rounded-full">
                       <div class="relative cursor-pointer" @click="onSelectUser(user)" >
                         <span :class="{'bg-pink-400' : !user.connected, 'bg-green-400' : user.connected, }" class="absolute ring-2 ring-white w-1 h-1 top-0 right-0 rounded-full"></span>
                         <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" :alt="`${ user.self ? 'me' : user.username.split(' ')[0] }`">
                         <span class="mx-auto text-xs text-center font-light md:font-medium max-w-6">{{ user.self ? "yourself" : user.username.split(" ")[0] }}&nbsp;</span>
                         <span v-if="user.hasNewMessages" class="mx-auto animate-pulse text-xs text-center font-light md:font-medium max-w-6">!</span>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div  class="flex space-x-2 items-center">
                   <p class="ml-4 text-sm md:text-base flex items-center space-x-0.5 lg:text-base">

                   </p>
                 </div>
               </div>
            </div>
            <div v-if="selectedUser" class="flex flex-col">
              <div class="bg-white px-6 py-5 relative md:px-10 md:py-4 text-lg md:text-xl leading-8 space-y-3 md:leading-8 font-semibold text-gray-900">
                <div v-for="(message, index) in selectedUser.messages" :key="index" class="flex p-4 rounded-xl">
                  <div v-if="message.fromSelf" class="w-full relative shadow-xl md:w-1/2 ml-auto flex flex-wrap bg-gradient-to-br from-teal-300 to-teal-600 items-center justify-end p-2 rounded-tl-xl rounded-br-xl rounded-bl-xl">
                    <div class="text-teal-300 tracking-widest text-xs absolute right-0 top-0 -mr-1 -mr-1 transform rotate-90" style="margin-top: -3px;">▶</div>
                    <p v-if="displaySender(message, index)" class="ml-4 mb-1 text-sm capitalize text-left mr-auto">
                      {{ message.fromSelf ? "(yourself)" : selectedUser.username }} <span class="opacity-60 text-gray-500 text-xs font-thin">{{ new Date().toLocaleString() | formatDate }}</span>
                    </p>
                    <p class="ml-4 font-normal text-gray-700 text-sm">
                      {{ message.content }}
                    </p>
                  </div>

                  <div v-if="!message.fromSelf" class="w-full relative shadow-xl md:w-1/2 flex flex-wrap items-center bg-gray-200 justify-start p-2 rounded-tr-xl rounded-bl-xl rounded-tr-xl rounded-br-xl">
                    <div class="text-gray-200 tracking-widest text-xs absolute left-0 top-0 -ml-1 -mt-1 transform rotate-90" style="margin-top: -3px;">▶</div>
                    <p v-if="displaySender(message, index)" class="ml-4 mb-1 text-sm capitalize">
                      {{ message.fromSelf ? "(yourself)" : selectedUser.username }} <span class="opacity-60 text-gray-500 text-xs font-thin">{{ new Date().toLocaleString() | formatDate }}</span>
                    </p>
                    <p class="ml-4 font-normal text-gray-700 text-sm">
                      {{ message.content }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <form v-if="selectedUser" @submit.prevent="onMessage">
              <div class="bg-white px-6 py-8 relative md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900">
                <div class="flex justify-between space-x-2 relative">
                  <div class="flex space-x-6 items-center w-full">
                    <input v-model="form.message" type="text" placeholder="Your message..." class="py-3 border border-gray-100 font-visible-shut px-5 w-full bg-gray-200 rounded-full focus:shadow-outline text-sm md:text-base lg:text-base shadow-xl">
                  </div>
                  <div id="dragBox" @drop="dropHandler" @dragover="handleDragOver" @dragleave="handleDragLeave" @dragenter="handleDragEnter" class="absolute right-0 top-2 flex items-center justify-center space-x-1 pr-1">
                    <div @click="handleFileUploadClick()" class="flex-1 flex items-center cursor-pointer bg-gradient-to-br from-black to-gray-900 rounded-full p-1.5">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.643 5.83333L7.15482 11.3215C6.50394 11.9724 6.50394 13.0276 7.15482 13.6785C7.80569 14.3294 8.86097 14.3294 9.51184 13.6785L14.857 8.19036C16.1588 6.88861 16.1588 4.77806 14.857 3.47631C13.5553 2.17456 11.4447 2.17456 10.143 3.47631L4.79779 8.96447C2.84517 10.9171 2.84517 14.0829 4.79779 16.0355C6.75042 17.9882 9.91624 17.9882 11.8689 16.0355L17.0833 10.8333" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <input id="fileUploader" @change="change" accept="text/plain,image/jpeg,image/jpeg,image/png,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/x-iwork-pages-sffpages" multiple="" type="file" autocomplete="off" tabindex="-1" class="hidden h-full w-full" style="z-index: 2;">
                    <button type="submit" class="flex-1 flex items-center cursor-pointer bg-gradient-to-br from-teal-300 to-teal-600 rounded-full p-0.5">
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
                    </button>
                  </div>
                </div>
              </div>
              <div class="bg-white px-6 pt-2 mb-12 relative md:px-10 md:pt-0 md:pb-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900">
                <ul class="text-xs previewImgTab max-h-48 overflow-auto">
                  <li class="rounded-full shadow-xl" v-for="upload in form.uploads">{{ upload.name }} - {{ upload.size }} bytes<svg @click="removeFile(upload)" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path></svg></li>
                </ul>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleOrder from '@/components/SingleOrder'
import { io } from "socket.io-client"
export default {
  head: {
    title: 'Order',
  },
  middleware: 'auth',
  async fetch() {
    try {
      const [ order, writers ] = await Promise.all([
        this.$axios.get('api/orders?id=' + this.id),
        this.$auth.user.owner ? this.$axios.get('api/users?type=writer') : new Promise(resolve => resolve([]))
      ])

      this.order = {
        ...order.data.order,
      }

      this.writers = [...writers.data.data]

    } catch (e) {
      console.log("fetch error", e)
      this.$toast.error(e.message, {
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
      socket: null,
      selectedUser: null,
      users: [],
      tokenAlreadyApplied: false,
      assignedWriter: null,
      writers: [],
      order: null,
      form: {
        message: "",
        uploads: [],
        user: {
          name: this.$auth.user.name,
          owner: this.$auth.user.owner,
        },
      }
    }
  },
  methods: {
    onMessage() {
      if (this.selectedUser && this.form.message !== "") {
        this.socket.emit("private message", {
          content: this.form.message,
          to: this.selectedUser.userID,
        });
        this.selectedUser.messages.push({
          content: this.form.message,
          fromSelf: true,
        });
        this.form.message = ""
      }
    },
    displaySender(message, index) {
      return (
        index === 0 ||
        this.selectedUser.messages[index - 1].fromSelf !==
        this.selectedUser.messages[index].fromSelf
      );
    },
    onSelectUser(user) {
      this.selectedUser = user;
      user.hasNewMessages = false;
    },
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
  },
  created() {
    this.socket = io("http://localhost:4500", { autoConnect: false })

    this.socket.onAny((event, ...args) => {
      console.log(event, args);
    })

    // session strategy
    // Engine.IO handshake
    // (contains the session ID
    // that is used in subsequent requests

    const sessionID = localStorage.getItem("sessionID")

    const initReactiveProperties = (user) => {
      user.hasNewMessages = false;
    }

    if (sessionID) {
      this.tokenAlreadyApplied = true
      this.socket.auth = { sessionID }
      this.socket.connect()
    }

    this.socket.on("session", ({ sessionID, userID }) => {
      // attach the session ID to the next reconnection attempts
      this.socket.auth = { sessionID }
      // store it in the localStorage
      localStorage.setItem("sessionID", sessionID)
      // save the ID of the user
      this.socket.userID = userID
    })

    this.socket.on("connect", () => {
      this.users.forEach((user) => {
        if (user.self) {
          user.connected = true;
        }
      })
    })

    this.socket.on("connect_error", error => {
      console.log("socket error", error)
      if (error.message === "invalid token") {
        this.tokenAlreadyApplied = false
      }
    })

    this.socket.on("disconnect", () => {
      this.users.forEach((user) => {
        if (user.self) {
          user.connected = false;
        }
      });
    })

    this.socket.on("user connected", user => {
      for (let i = 0; i < this.users.length; i++) {
        const existingUser = this.users[i];
        if (existingUser.userID === user.userID) {
          existingUser.connected = true;
          return;
        }
      }
      initReactiveProperties(user);
      this.users.push(user);
    })

    this.socket.on("user disconnected", id => {
      for (let i = 0; i < this.users.length; i++) {
        const user = this.users[i];
        if (user.userID === id) {
          user.connected = false;
          break;
        }
      }
    })

    this.socket.on("users", users => {
      users.forEach((user) => {
        user.messages.forEach((message) => {
          message.fromSelf = message.from === this.socket.userID;
        });
        for (let i = 0; i < this.users.length; i++) {
          const existingUser = this.users[i];
          if (existingUser.userID === user.userID) {
            existingUser.connected = user.connected;
            existingUser.messages = user.messages;
            return;
          }
        }
        user.self = user.userID === this.socket.userID;
        initReactiveProperties(user);
        this.users.push(user);
      });
      // put the current user first, and sort by username
      this.users.sort((a, b) => {
        if (a.self) return -1;
        if (b.self) return 1;
        if (a.username < b.username) return -1;
        return a.username > b.username ? 1 : 0;
      });
    })

    this.socket.on("private message", ({ content, from, to }) => {
      for (let i = 0; i < this.users.length; i++) {
        const user = this.users[i];
        const fromSelf = this.socket.userID === from;
        if (user.userID === (fromSelf ? to : from)) {
          user.messages.push({
            content,
            fromSelf,
          });
          if (user !== this.selectedUser) {
            user.hasNewMessages = true;
          }
          break;
        }
      }
    })
  },
  mounted() {

    // token strategy
    if (!this.tokenAlreadyApplied) {
      this.tokenAlreadyApplied = true
      this.socket.auth = { token: this.$auth.strategy.token.get() }
      this.socket.connect()
    }

  },
  destroyed() {
    this.socket.off("connect");
    this.socket.off("connect_error");
    this.socket.off("disconnect");
    this.socket.off("users");
    this.socket.off("user connected");
    this.socket.off("user disconnected");
    this.socket.off("private message");
  },
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
