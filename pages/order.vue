<template>
  <div>
    <div class="min-h-screen" style="background: #FBFBFB;">
      <div class="mobile-b min-h-screen bg-left-0 lg:bg-center-0">
        <div class="max-w-6xl topBanner mx-auto pt-32 lg:pt-32 z-10 px-8 lg:px-0 pb-32 md:grid md:grid-cols-3 md:gap-6 md:items-center">
          <div class="flex flex-wrap flex-col mb-12 col-span-2">
            <div class="flex mx-auto flex-wrap mb-20">
              <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>STEP 1
              </a>
              <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>STEP 2
              </a>
              <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>STEP 3
              </a>
              <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>STEP 4
              </a>
            </div>
            <div class="flex flex-col text-left w-full">
              <div class="w-full max-w-xs mx-auto" >
                <Notification :message="error" v-if="error"/>
                <form @submit="userLogin" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" style="border: 1px solid rgba(66, 251, 183, 0.8);">
                  <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                      Username
                    </label>
                    <input v-model="login.username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                  </div>
                  <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                      Password
                    </label>
                    <!--border-red-500-->
                    <input v-model="login.password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
                    <p class="hidden text-red-500 text-xs italic">Please choose a password.</p>
                  </div>
                  <div class="flex items-center justify-between">
                    <button class="bg-black hover:bg-teal-300 text-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform hover:scale-105 transition ease-in-out duration-100" type="submit">
                      Sign In
                    </button>
                    <a class="inline-block align-baseline font-bold text-sm text-black hover:text-teal-300" href="#">
                      Forgot Password?
                    </a>
                  </div>
                </form>
                <div class="flex flex-row justify-center flex-no-wrap w-full space-x-2 relative" style="border-top: 1px solid #f1f1f1;padding-top: 10px;padding-bottom: 10px;">
                  <span class="absolute" style="top: -9px;font-size: 14px;color: #777;background: #fbfbfb;">Or</span>
                  <div class="w-1/2 rounded focus:outline-none focus:shadow-outline transform hover:scale-105 transition ease-in-out duration-100">
                    <div class="w-full abcRioButton abcRioButtonBlue" style="height: 40px; background-color: rgb(59, 89, 152) !important;">
                      <div class="abcRioButtonContentWrapper flex items-center" style="height: 40px;">
                        <div class="abcRioButtonIcon" style="padding: 16px; background-color: rgb(46 69 117) !important;">
                          <div class="abcRioButtonSvgImageWithFallback abcRioButtonIconImage abcRioButtonIconImage18" style="width: 18px; height: 18px;">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 310 310" xml:space="preserve"><g id="XMLID_834_"><path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z" fill="#ffffff"></path></g></svg>
                          </div>
                        </div>
                        <span class="abcRioButtonContents w-full text-center">
                            <span class="text-white w-full text-left text-xs md:text-sm pr-1">Facebook</span>
                          </span>
                      </div>
                    </div>
                  </div>
                  <div class="w-1/2 rounded focus:outline-none focus:shadow-outline transform hover:scale-105 transition ease-in-out duration-100">
                    <div class="w-full abcRioButton abcRioButtonBlue" style="height: 40px;">
                      <div class="abcRioButtonContentWrapper flex items-center" style="height: 40px;">
                        <div class="abcRioButtonIcon" style="padding: 16px;">
                          <div class="abcRioButtonSvgImageWithFallback abcRioButtonIconImage abcRioButtonIconImage18" style="width: 18px; height: 18px;">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48" class="abcRioButtonSvg"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path> <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path> <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path> <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path> <path fill="none" d="M0 0h48v48H0z"></path></g></svg>
                          </div>
                        </div>
                        <div class="abcRioButtonContents w-full text-center">
                          <span class="text-white w-full text-left text-xs md:text-sm pr-1">Google</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p class="text-center text-gray-500 text-xs">
                  &copy;2020 EssayDons. All rights reserved.
                </p>
              </div>
            </div>
          </div>
          <div class="flex mx-auto lg:ml-auto flex-col justify-center py-6 text-xl custom-calc md:right-10 md:top-30 lg:top-30 max-w-xs col-span-1">
            <h2 class="text-base font-semibold leading-none pb-1 text-gray-700">
              Order Information
            </h2>
            <div class="grid text-sm" style="grid-row-gap: 15px;margin: 0 15px;">
              <div class="grid innerGrid">
                <span>Type</span>
              </div>
              <div class="grid innerGrid">
                <span>Type</span>
              </div>
              <div class="grid innerGrid">
                <span>Type</span>
              </div>
              <div class="grid innerGrid">
                <span>Type</span>
              </div>
              <div class="grid innerGrid">
                <span>Type</span>
              </div>
              <div class="grid innerGrid">
                <span>Type</span>
              </div>
              <div class="grid innerGrid">
                <span>Type</span>
              </div>
              <div class="grid innerGrid">
                <span>Type</span>
              </div>
              <div class="grid innerGrid">
                <span>Type</span>
              </div>
              <div class="grid innerGrid">
                <span>Discount</span>
              </div>
              <div class="grid innerGrid">
                <span>Extra options</span>
              </div>
            </div>
            <div class="hidden">
              <select v-model="form.subject" class="bg-secondary text-vuegreen hover:bg-gradient-to-r mt-2 form-input py-3 px-3 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:shadow-outline-blue focus:bg-gradient-to-r transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                <optgroup label="Subjects">
                  <option v-for="subject in subjects" :value="subject">{{ subject }}</option>
                </optgroup>
              </select>
              <select @change="setFirstDuration" v-model="form.level" class="bg-secondary text-vuegreen hover:bg-gradient-to-r mt-2 form-input py-3 px-3 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:shadow-outline-blue focus:bg-gradient-to-r transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                <optgroup label="Academic Levels">
                  <option v-for="data in storedata" :key="data.id" :value="data.id" >{{ data.level }}</option>
                </optgroup>
              </select>
              <div class="flex mt-2 sm:text-sm sm:leading-5">
                <select v-model="form.duration" class="w-1/2 bg-secondary hover:bg-gradient-to-r py-3 px-3 text-vuegreen form-input border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:shadow-outline-blue focus:bg-gradient-to-r transition duration-150 ease-in-out ">
                  <optgroup label="Deadline">
                    <option v-for="[key, value] of Object.entries(duration)" :value="{duration: key, price: value}" >{{ key }}</option>
                  </optgroup>
                </select>
                <div class="flex w-1/2 ml-1 text-vuegreen border border-gray-300 bg-secondary rounded-3xl">
                  <button class="w-1/3" @click="form.pages > 0 ? form.pages-- : form.pages = 0">-</button>
                  <input class="w-1/3 form-input bg-secondary hover:bg-gradient-to-r text-center" type="number" v-model="form.pages" />
                  <button class="w-1/3" @click="form.pages++">+</button>
                </div>
              </div>
            </div>
            <div class="border-t px-1 mt-6 py-3 text-gray-700 font-medium text-xl flex">
              <span class="mr-auto">Total</span>
              <span class="ml-auto">{{ totalPrice | dollar }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import Notification from '@/components/Notification'
export default {
  auth: false,
  components: {
    Notification,
  },
  data() {
    return {
      openTab: 1,
      form: {
        level: 1,
        subject: null,
        duration: {
          duration: null,
          price: null
        },
        pages: 1,
      },
      login: {
        username: '',
        password: ''
      },
      error: null
    }
  },
  computed: {
    ...mapState(["storedata"]),
    duration() {
      return this.storedata.filter(el => el.id === this.form.level)[0].deadline;
    },
    subjects() {
      return this.storedata.filter(el => el.id === this.form.level)[0].subjects;
    },
    totalPrice() {
      return this.form.duration.price * this.form.pages
    }
  },
  methods: {
    setFirstDuration() {
      this.form.duration = {
        duration: Object.entries(this.duration)[0][0],
        price: Object.entries(this.duration)[0][1] * this.form.pages,
      };
    },
    toggleTabs(tabNumber){
      this.openTab = tabNumber
    },
    async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', { data: this.login });
        console.log('login response', response);
        this.$router.push('/');
      } catch (err) {
        console.log(err);
        this.error = err.response.data.message
      }
    }
  },
  mounted() {
    this.form.subject = this.subjects[0];
    console.log(this.duration[Object.keys(this.duration)[0]]);
    console.log(Object.entries(this.duration)[0]);
    this.form.duration = {
      duration: Object.entries(this.duration)[0][0],
      price: Object.entries(this.duration)[0][1],
    };
  }
}
</script>

<style scoped>
.custom-calc {
  padding: 20px;
  border: 1px solid rgb(66, 251, 183);
  border-radius: 1rem;
}
.abcRioButtonBlue {
  background-color: #ea4335 !important;
  border: none;
  color: #fff;
}

.abcRioButton {
  -webkit-border-radius: 1px;
  border-radius: 1px;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.25);
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.25);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: background-color .218s,border-color .218s,box-shadow .218s;
  transition: background-color .218s,border-color .218s,box-shadow .218s;
  -webkit-user-select: none;
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  color: #262626;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  position: relative;
  vertical-align: middle;
  white-space: nowrap;
}

img {
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
}

.abcRioButtonBlue .abcRioButtonContentWrapper {

}

.abcRioButtonBlue .abcRioButtonIcon {
  background-color: #fef2f1;
  -webkit-border-radius: 1px;
  border-radius: 1px;
}

.abcRioButtonIcon {
  float: left;
}

.abcRioButtonContents {
  margin-left: 6px;
  margin-right: 6px;
  vertical-align: top;
}

.abcRioButtonSvg {
  display: block;
}

.innerGrid{
  grid-auto-flow: column;
  grid-column-gap: 5px;
  grid-template-columns: auto 1fr;
  align-items: center;
  justify-items: end;
}
</style>
