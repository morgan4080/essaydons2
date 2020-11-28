<template>
  <div>
    <div>
      <div class="min-h-screen" style="background: #FBFBFB;">
        <div class="topServiceBanner mx-auto px-0 lg:px-0 mt-12 lg:mt-12 pt-8">
          <div style="height: 100%;background: rgba(0, 0, 0, 0.5);">
            <div class="max-w-6xl px-4 md:px-0 mx-auto pt-16 pb-24">
              <div class="flex flex-col w-full" >
                <span class="font-black text-vuegreen text-6xl">Term papers</span>
                <span class="text-white font-black text-3xl">Overview</span>
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-6xl mx-auto px-4 md:px-0 mt-12">
          <div class="lg:grid lg:grid-cols-4 lg:gap-6">
            <div class="col-span-3 mx-auto pb-24 flex flex-col w-full" >
              <h2 class="text-4xl font-semibold leading-none pb-8 text-black">
                About Us
              </h2>
              <p class="text-lg text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
            <div class="min-h-64 pb-24 col-span-1 mx-auto text-center">
              <div class="mx-auto flex flex-col py-6 text-xl custom-calc md:right-10 md:top-30 lg:top-30 max-w-xs">
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
                  <a href="/order" class="w-1/2  button-bg rounded-full text-base px-3 py-2 text-white font-medium transform hover:scale-105 transition ease-in-out duration-100 mr-1">Continue</a>
                  <a href="/order" class="w-1/2  button-bg rounded-full text-base px-3 py-2 text-white font-medium transform hover:scale-105 transition ease-in-out duration-100 ml-1">10% Discount</a>
                </div>
              </div>
              <div class="mt-6 essay-main-sidebar-companies">
                <div class="essay-main-sidebar-companies-item mc-afee"></div>
                <div class="essay-main-sidebar-companies-item geo-trust"></div>
                <div class="essay-main-sidebar-companies-item dmca"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  auth: false,
  data() {
    return {
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
  mounted() {
    this.form.subject = this.subjects[0];
    console.log(this.duration[Object.keys(this.duration)[0]]);
    console.log(Object.entries(this.duration)[0]);
    this.form.duration = {
      duration: Object.entries(this.duration)[0][0],
      price: Object.entries(this.duration)[0][1],
    };
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
  }
}
</script>

<style scoped>
.topServiceBanner {
  background-size: contain;
  background: url(~assets/images/aboutbanner.jpg) no-repeat top center;
  overflow: hidden; height: 300px;
}
.custom-calc {
  background: rgb(98,98,98);
  padding: 20px;
  border: 1px solid rgb(66, 251, 183);
  border-radius: 1rem;
}
.essay-main-sidebar-companies {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.essay-main-sidebar-companies .mc-afee {
  background-position: -2%;
}
.essay-main-sidebar-companies .geo-trust {
  background-position: 50%;
}
.essay-main-sidebar-companies .dmca {
  background-position: 103%;
}
.essay-main-sidebar-companies-item {
  width: 100px;
  height: 63px;
  background-image: url(~assets/images/companies.png);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.essay-main-sidebar-companies-item:after {
  content: "";
  position: absolute;
  width: 1px;
  height: 100%;
  background: #c3c3c3;
  right: 0;
  top: 0;
}
</style>
