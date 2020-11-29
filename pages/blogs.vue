<template>
  <div>
    <div>
      <div class="min-h-screen" style="background: #FBFBFB;">
        <div class="mobile-b min-h-screen relative bg-left-0 lg:bg-center-0">
          <div class="max-w-6xl topBanner mx-auto pt-40 lg:pt-70 z-10 px-8 lg:px-0 pb-56">
            <div>
              <h1 class="text-4xl lg:text-5xl text-white font-bold leading-tight py-2 lg:py-0">
                Blog <br>
                Academic Writing & College Life.
              </h1>
              <p class="text-white text-lg lg:text-2xl py-6 max-w-4xl leading-normal">
                All-in-one blog for students Paper writing guides College life experience.
              </p>
              <a href="/order" class="button-bg py-3 px-8 text-xl rounded-full text-white font-semibold inline-block mt-4 transform hover:scale-105 transition ease-in-out duration-100">
                Order Now
              </a>
            </div>
          </div>
          <div class="header-main-shape"></div>
          <div class="absolute text-center flex flex-col py-6 text-xl custom-calc md:right-10 md:top-30 lg:top-30 max-w-xs">
            <h2 class="text-2xl font-semibold leading-none pb-1 text-white" data-v-409e2651="">
              Place your order
            </h2>
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
            <div class="px-1 py-3 text-white font-bold text-xl">{{ totalPrice | dollar }}</div>
            <div class="flex">
              <nuxt-link to="/order" class="w-1/2  button-bg rounded-full text-base px-3 py-2 text-white font-medium transform hover:scale-105 transition ease-in-out duration-100 mr-1">Continue</nuxt-link>
              <nuxt-link to="/order" class="w-1/2  button-bg rounded-full text-base px-3 py-2 text-white font-medium transform hover:scale-105 transition ease-in-out duration-100 ml-1">10% Discount</nuxt-link>
            </div>
          </div>
        </div>
        <div class="max-w-6xl mx-auto px-4 lg:px-0 mt-4 lg:mt-12 pt-12">
          <section class="text-gray-700 body-font">
            <div class="mx-auto flex flex-wrap w-full">
              <div class="secondSectAbout0 lg:max-w-lg md:w-1/2 w-full lg:mr-auto md:mr-auto">
                <img src="~/assets/images/Image 7.jpg" alt="">
              </div>
              <div class="lg:max-w-lg lg:w-1/2 md:w-1/2 w-full">
                <div class="h-full text-secondary px-8 pt-16 pb-8 rounded-r-large overflow-hidden flex flex-col justify-center text-center relative">
                  <div class="mx-auto text-left mt-2 leading-none absolute top-0 left-0 w-full py-4 px-6 flex justify-center">
                    <span  class="text-gray-600 mr-auto inline-flex items-center leading-none text-sm pr-3 py-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                        <g id="ic_access_time_48px" transform="translate(-4 -4)">
                          <path id="Path_57" data-name="Path 57" d="M13,4a9,9,0,1,0,9,9A8.994,8.994,0,0,0,13,4Zm0,16.2A7.2,7.2,0,1,1,20.2,13,7.2,7.2,0,0,1,13,20.2Zm.45-11.7H12.1v5.4l4.72,2.835.68-1.107-4.05-2.4Z" fill="#42FBB7"></path>
                        </g>
                      </svg>
                      <span class="ml-2 mt-1">08.27.2020</span>
                    </span>
                    <span class="text-gray-600 ml-auto inline-flex items-center leading-none text-sm pr-3 py-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20.7" height="18" viewBox="0 0 20.7 18">
                        <g id="folder-15" transform="translate(-1 -4)">
                          <path id="Path_58" data-name="Path 58" d="M8.2,5.8,6.4,4H1.9a.9.9,0,0,0-.9.9V20.2A1.8,1.8,0,0,0,2.8,22H19.9a1.8,1.8,0,0,0,1.8-1.8V7.6a1.8,1.8,0,0,0-1.8-1.8Z" fill="#42FBB7"></path>
                          <path id="Path_59" data-name="Path 59" d="M21.7,8.5H1V4.9A.9.9,0,0,1,1.9,4H6.4L8.2,5.8H19.9a1.8,1.8,0,0,1,1.8,1.8Z" fill="#0dd48b"></path>
                        </g>
                      </svg>
                      <span class="ml-2 mt-1">Guide</span>
                    </span>
                  </div>
                  <h1 class="text-left title-font sm:text-2xl text-xl font-medium text-black mb-3">Steps Towards Mastering Proposal Essay Writing</h1>
                  <p class="text-left leading-relaxed mb-3">
                    As a college student, you must write essays on a regular basis since the latter is one of the most common types of home assignments. All this means is that in order to get good grades and be successful with writing the papers, you need to have a sound understanding of the structure. Additionally, what you should never neglect is the variety of essay types. Indeed, your essay will significantly differ from one type to another: description essay will most likely have a structure that is slightly different from an argumentative one
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="max-w-6xl mx-auto px-4 lg:px-0 mt-4 lg:mt-12 pt-12">
          <section class="text-gray-700 body-font">
            <div class="mx-auto flex flex-wrap w-full">
              <div class="secondSectAbout0 lg:max-w-lg md:w-1/2 w-full lg:mr-auto md:mr-auto">
                <div class="h-full text-secondary px-8 pt-16 pb-8 rounded-r-large overflow-hidden flex flex-col justify-center text-center relative">
                  <div class="mx-auto text-left mt-2 leading-none absolute top-0 left-0 w-full py-4 px-6 flex justify-center">
                    <span  class="text-gray-600 mr-auto inline-flex items-center leading-none text-sm pr-3 py-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                        <g id="ic_access_time_48px" transform="translate(-4 -4)">
                          <path id="Path_57" data-name="Path 57" d="M13,4a9,9,0,1,0,9,9A8.994,8.994,0,0,0,13,4Zm0,16.2A7.2,7.2,0,1,1,20.2,13,7.2,7.2,0,0,1,13,20.2Zm.45-11.7H12.1v5.4l4.72,2.835.68-1.107-4.05-2.4Z" fill="#42FBB7"></path>
                        </g>
                      </svg>
                      <span class="ml-2 mt-1">08.27.2020</span>
                    </span>
                    <span class="text-gray-600 ml-auto inline-flex items-center leading-none text-sm pr-3 py-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20.7" height="18" viewBox="0 0 20.7 18">
                        <g id="folder-15" transform="translate(-1 -4)">
                          <path id="Path_58" data-name="Path 58" d="M8.2,5.8,6.4,4H1.9a.9.9,0,0,0-.9.9V20.2A1.8,1.8,0,0,0,2.8,22H19.9a1.8,1.8,0,0,0,1.8-1.8V7.6a1.8,1.8,0,0,0-1.8-1.8Z" fill="#42FBB7"></path>
                          <path id="Path_59" data-name="Path 59" d="M21.7,8.5H1V4.9A.9.9,0,0,1,1.9,4H6.4L8.2,5.8H19.9a1.8,1.8,0,0,1,1.8,1.8Z" fill="#0dd48b"></path>
                        </g>
                      </svg>
                      <span class="ml-2 mt-1">Guide</span>
                    </span>
                  </div>
                  <h1 class="text-left title-font sm:text-2xl text-xl font-medium text-black mb-3">Steps Towards Mastering Proposal Essay Writing</h1>
                  <p class="text-left leading-relaxed mb-3">
                    As a college student, you must write essays on a regular basis since the latter is one of the most common types of home assignments. All this means is that in order to get good grades and be successful with writing the papers, you need to have a sound understanding of the structure. Additionally, what you should never neglect is the variety of essay types. Indeed, your essay will significantly differ from one type to another: description essay will most likely have a structure that is slightly different from an argumentative one
                  </p>
                </div>
              </div>
              <div class="lg:max-w-lg lg:w-1/2 md:w-1/2 w-full">
                <img src="~/assets/images/Image 8.jpg" alt="">
              </div>
            </div>
          </section>
        </div>
        <div class="max-w-6xl mx-auto px-4 lg:px-0 lg:pt-12 lg:pb-16 pb-16">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  auth: false,
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
      }
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
.mobile-b {
  background-image: linear-gradient(rgba(101,101,101,.5),rgba(101,101,101,.5)),url(~assets/images/aboutbanner.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
.custom-calc {
  background: rgb(98,98,98);
  padding: 20px;
  border: 1px solid rgb(66, 251, 183);
  border-radius: 1rem;
}
.header-main-shape {
  z-index: 2!important;
}
.header-main-shape {
  height: 90px;
  position: absolute;
  width: 100%;
  background: #fbfbfb;
  border-radius: 50% 50% 0 0/90px 90px 0px 0px;
  bottom: 0;
  left: 0;
  z-index: 0;
}
</style>
