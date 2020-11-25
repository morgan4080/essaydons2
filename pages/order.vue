<template>
  <div>
    <div class="min-h-screen" style="background: #FBFBFB;">
      <div class="mobile-b min-h-screen bg-left-0 lg:bg-center-0">
        <div class="max-w-6xl topBanner mx-auto pt-32 lg:pt-32 z-10 px-8 lg:px-0 pb-32 md:grid md:grid-cols-3 md:gap-6">
          <div class="grid grid-rows-orders mb-12 col-span-2">
            <div class="flex mx-auto flex-wrap h-12">
              <a @click="toggleTabs(1)" :class="{'border-red-200 text-red-200 cursor-not-allowed': openTab !== 1 ,'border-green-300 bg-gray-100 text-green-300 cursor-pointer rounded-t': openTab === 1}" class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider">
                <svg fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 mr-3"><title>step one login</title><path class="a" d="M12.5,2.5H20a.5.5,0,0,1,.5.5V21a.5.5,0,0,1-.5.5H12.5"></path><path class="a" d="M3.5,21.222a.5.5,0,0,0,.392.488l8,1.778A.5.5,0,0,0,12.5,23V1a.5.5,0,0,0-.608-.488l-8,1.778a.5.5,0,0,0-.392.488Z"></path><circle class="a" cx="9" cy="12" r="1.5"></circle></svg>
                Authorize
              </a>
              <a @click="toggleTabs(2)" :class="{'border-red-200 text-red-200 cursor-not-allowed': openTab !== 2 ,'border-green-300 bg-gray-100 text-green-300 cursor-pointer rounded-t': openTab === 2}" class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider">
                <svg fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve" class="w-5 h-5 mr-3">
                  <g id="Layer_1_1_">
                    <path d="M5,7v42h34v-6h6V1H11v6H5z M37,47H7V9h4h19v7h7v27V47z M32,10.414L35.586,14H32V10.414z M13,3h30v38h-4V14.586L31.414,7H13   V3z"/>
                    <rect x="11" y="20" width="22" height="2"/>
                    <rect x="11" y="26" width="22" height="2"/>
                    <rect x="11" y="32" width="22" height="2"/>
                    <rect x="11" y="40" width="9" height="2"/>
                    <rect x="24" y="40" width="9" height="2"/>
                    <rect x="18" y="14" width="8" height="2"/>
                  </g>
                  </svg>
                Paper details
              </a>
              <a @click="toggleTabs(3)" :class="{'border-red-200 text-red-200 cursor-not-allowed': openTab !== 3 ,'border-green-300 bg-gray-100 text-green-300 cursor-pointer rounded-t': openTab === 3}" class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider">
                <svg fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Icons" x="0px" y="0px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve" class="w-5 h-5 mr-3">
                  <line class="" x1="17" y1="5" x2="29" y2="5"/>
                  <line class="" x1="17" y1="9" x2="24" y2="9"/>
                  <line class="" x1="17" y1="21" x2="29" y2="21"/>
                  <line class="" x1="17" y1="25" x2="24" y2="25"/>
                  <circle class="fill-none" cx="8" cy="8" r="5"/>
                  <circle class="fill-none" cx="8" cy="24" r="5"/>
                </svg>
                Options
              </a>
              <a @click="toggleTabs(4)" :class="{'border-red-200 text-red-200 cursor-not-allowed': openTab !== 4 ,'border-green-300 bg-gray-100 text-green-300 cursor-pointer rounded-t': openTab === 4}" class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider">
                <svg fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 128 128" class="w-5 h-5 mr-3">
                  <title>a</title>
                  <path class="" d="M110.203,2.36307H17.797a4.32226,4.32226,0,0,0-4.3223,4.3223v114.629a4.32235,4.32235,0,0,0,7.37861,3.0564l8.49446-8.49456,8.49446,8.49456a4.32242,4.32242,0,0,0,6.11261,0l8.49446-8.49456,8.49446,8.49456a4.32242,4.32242,0,0,0,6.11261,0l8.49446-8.49456,8.49446,8.49456a4.32255,4.32255,0,0,0,6.11271,0l8.49426-8.49456,8.49446,8.49456a4.32235,4.32235,0,0,0,7.37861-3.0564V6.68538A4.32226,4.32226,0,0,0,110.203,2.36307Zm-4.3223,108.51634-4.17216-4.17216a4.3223,4.3223,0,0,0-6.11271,0l-8.49426,8.49446-8.49446-8.49446a4.3223,4.3223,0,0,0-6.11271,0l-8.49436,8.49446-8.49446-8.49446a4.32218,4.32218,0,0,0-6.11261,0l-8.49446,8.49446-8.49446-8.49446a4.32218,4.32218,0,0,0-6.11261,0l-4.17216,4.17216V11.00768h83.76139Z"/>
                  <path class="" d="M38.43962,30.654H81.17154a3.41088,3.41088,0,1,0,0-6.82176H38.43962a3.41088,3.41088,0,0,0,0,6.82176Z"/>
                  <path class="" d="M38.43962,47.55005H81.17154a3.41088,3.41088,0,1,0,0-6.82176H38.43962a3.41088,3.41088,0,0,0,0,6.82176Z"/>
                  <path class="" d="M38.43962,64.44663H60.30449a3.41087,3.41087,0,0,0,0-6.82175H38.43962a3.41087,3.41087,0,0,0,0,6.82175Z"/>
                  <path class="" d="M82.64767,59.68588v4.07743a9.50815,9.50815,0,0,0-2.86922.96275,6.40959,6.40959,0,0,0-1.9633,1.60446,6.3419,6.3419,0,0,0-1.1137,2.09521,8.00936,8.00936,0,0,0-.35871,2.39763A5.77982,5.77982,0,0,0,78.476,75.54248a9.80865,9.80865,0,0,0,2.15179,1.34024q1.18955.54771,2.43516,1.00055,1.28328.45321,2.26519.84935a9.76251,9.76251,0,0,1,1.62361.8118,3.32983,3.32983,0,0,1,.98152.925,2.16242,2.16242,0,0,1,.33969,1.2271,2.05015,2.05015,0,0,1-.84935,1.75553,5.666,5.666,0,0,1-3.1526.6228,13.87209,13.87209,0,0,1-3.86979-.52843,19.8386,19.8386,0,0,1-3.15233-1.17027l-1.62336,4.34164a25.72868,25.72868,0,0,0,2.54831,1.0381,17.65591,17.65591,0,0,0,4.47381.8496V93.098h4.75693v-4.606a9.96826,9.96826,0,0,0,3.11481-.981,6.93294,6.93294,0,0,0,2.05767-1.62284,5.81516,5.81516,0,0,0,1.13247-2.05639,7.65006,7.65006,0,0,0,.33994-2.24514,6.77261,6.77261,0,0,0-.58526-2.90573,6.69692,6.69692,0,0,0-1.62336-2.16979,11.50417,11.50417,0,0,0-2.45393-1.6429,27.91932,27.91932,0,0,0-3.077-1.3243q-1.09544-.37878-1.86893-.70021a8.31258,8.31258,0,0,1-1.30244-.66138,2.25987,2.25987,0,0,1-.774-.774,2.07031,2.07031,0,0,1-.24531-1.03809,1.9,1.9,0,0,1,.79278-1.58581,4.36619,4.36619,0,0,1,2.60487-.6039,15.403,15.403,0,0,1,3.4545.37735,17.47673,17.47673,0,0,1,2.88826.90618l1.17052-4.53039a14.96143,14.96143,0,0,0-2.24643-.75511,21.22529,21.22529,0,0,0-3.37915-.56635V59.68588Z"/>
                </svg>
                Checkout
              </a>
            </div>
            <div :class="{'hidden': openTab !== 1 , 'block': openTab === 1}" class="flex flex-col text-left w-full">
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
            <div :class="{'hidden': openTab !== 2 , 'block': openTab === 2}" class="flex flex-col text-left w-full">
              <div class="w-full mx-auto" >

              </div>
            </div>
            <div :class="{'hidden': openTab !== 3 , 'block': openTab === 3}" class="flex flex-col text-left w-full">
              <div class="w-full mx-auto" >

              </div>
            </div>
            <div :class="{'hidden': openTab !== 4 , 'block': openTab === 4}" class="flex flex-col text-left w-full">
              <div class="w-full mx-auto" >

              </div>
            </div>
          </div>
          <div class="md:ml-auto col-span-1 mb-12">
            <div class="flex px-4 py-3 flex-col no-wrap w-64 shadow sm:rounded-md sm:overflow-hidden">
              <h2 class="text-sm font-light leading-tight mb-4 text-gray-700">
                Order Information
              </h2>
              <div class="grid pb-2 text-lg font-bold text-gray-700" style="grid-row-gap: 5px;">
                <div class="grid innerGrid">
                  <span>Type</span>
                  <span class="font-normal text-base">Essay (any)</span>
                </div>
                <div class="grid innerGrid">
                  <span>Level</span>
                  <span class="font-normal text-base">College</span>
                </div>
                <div class="grid innerGrid">
                  <span>Deadline</span>
                  <span class="font-normal text-base">14 days</span>
                </div>
                <div class="grid innerGrid">
                  <span>Pages</span>
                  <span class="font-normal text-base">1 (Double)</span>
                </div>
                <div class="grid innerGrid">
                  <span>Paper format</span>
                  <span class="font-normal text-base">APA</span>
                </div>
                <div class="grid innerGrid">
                  <span>Sources</span>
                  <span class="font-normal text-base">0</span>
                </div>
                <div class="grid innerGrid">
                  <span>Slides</span>
                  <span class="font-normal text-base">0</span>
                </div>
                <div class="grid innerGrid">
                  <span>Charts</span>
                  <span class="font-normal text-base">0</span>
                </div>
                <div class="grid innerGrid">
                  <span>Discount</span>
                  <span class="font-normal text-base">none</span>
                </div>
                <div class="grid innerGrid">
                  <span>Extra options:</span>
                  <span class="font-normal text-base"></span>
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
              <div class="border-t px-1 py-3 text-gray-700 font-medium text-xl flex">
                <span class="mr-auto">Total</span>
                <span class="ml-auto">{{ totalPrice | dollar }}</span>
              </div>
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
