<template>
  <main>
    <div class="flex flex-wrap -m-4 mt-2">
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full cursor-pointer group">
        <div class="relative bg-gray-100 shadow-md h-full rounded-lg  transform transition group-hover:bg-gradient-to-r from-teal-300 via-teal-300 to-teal-300 duration-200 ease-in-out flex flex-col relative overflow-hidden">
          <div class="flex flex-col m-1 px-6 lg:px-4 py-6 bg-white rounded-lg bg-gray-100">
            <p class="text-2xl w-0 text-left font-light leading-none text-gray-900 flex items-center pb-4 mb-4 ">
              Listed Orders
            </p>
            <span class="absolute top-2/3 left-4.5 text-teal-300 font-semibold text-base">0</span>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute right-2.5 opacity-25 group-hover:scale-105 transition transform duration-200 ease-in-out">
              <path d="M24 9C24 7.34315 25.3431 6 27 6H33C34.6569 6 36 7.34315 36 9C36 10.6569 34.6569 12 33 12H27C25.3431 12 24 10.6569 24 9Z" fill="#111827"/>
              <path d="M18 9C14.6863 9 12 11.6863 12 15V48C12 51.3137 14.6863 54 18 54H42C45.3137 54 48 51.3137 48 48V15C48 11.6863 45.3137 9 42 9C42 13.9706 37.9706 18 33 18H27C22.0294 18 18 13.9706 18 9Z" fill="#111827"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full cursor-pointer group">
        <div class="relative bg-gray-100 shadow-md h-full rounded-lg  transform transition group-hover:bg-gradient-to-r from-teal-300 via-teal-300 to-teal-300 duration-200 ease-in-out flex flex-col relative overflow-hidden">
          <div class="flex flex-col m-1 px-6 lg:px-4 py-6 bg-white rounded-lg bg-gray-100">
            <p class="text-2xl w-0 text-left font-light leading-none text-gray-900 flex items-center pb-4 mb-4 ">
              In-Progress
            </p>
            <span class="absolute top-2/3 left-4.5 text-teal-300 font-semibold text-base">0</span>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute right-2.5 opacity-25 group-hover:scale-105 transition transform duration-200 ease-in-out">
              <path d="M27 6C25.3431 6 24 7.34315 24 9C24 10.6569 25.3431 12 27 12H33C34.6569 12 36 10.6569 36 9C36 7.34315 34.6569 6 33 6H27Z" fill="#111827"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 15C12 11.6863 14.6863 9 18 9C18 13.9706 22.0294 18 27 18H33C37.9706 18 42 13.9706 42 9C45.3137 9 48 11.6863 48 15V48C48 51.3137 45.3137 54 42 54H18C14.6863 54 12 51.3137 12 48V15ZM21 27C19.3431 27 18 28.3431 18 30C18 31.6569 19.3431 33 21 33H21.03C22.6869 33 24.03 31.6569 24.03 30C24.03 28.3431 22.6869 27 21.03 27H21ZM30 27C28.3431 27 27 28.3431 27 30C27 31.6569 28.3431 33 30 33H39C40.6569 33 42 31.6569 42 30C42 28.3431 40.6569 27 39 27H30ZM21 39C19.3431 39 18 40.3431 18 42C18 43.6568 19.3431 45 21 45H21.03C22.6869 45 24.03 43.6568 24.03 42C24.03 40.3431 22.6869 39 21.03 39H21ZM30 39C28.3431 39 27 40.3431 27 42C27 43.6568 28.3431 45 30 45H39C40.6569 45 42 43.6568 42 42C42 40.3431 40.6569 39 39 39H30Z" fill="#111827"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full cursor-pointer group">
        <div class="relative bg-gray-100 shadow-md h-full rounded-lg  transform transition group-hover:bg-gradient-to-r from-teal-300 via-teal-300 to-teal-300 duration-200 ease-in-out flex flex-col relative overflow-hidden">
          <div class="flex flex-col m-1 px-6 lg:px-4 py-6 bg-white rounded-lg bg-gray-100">
            <p class="text-2xl w-0 text-left font-light leading-none text-gray-900 flex items-center pb-4 mb-4 ">
              Done Orders
            </p>
            <span class="absolute top-2/3 left-4.5 text-teal-300 font-semibold text-base">0</span>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute right-2.5 opacity-25 group-hover:scale-105 transition transform duration-200 ease-in-out" >
              <path d="M27 6C25.3431 6 24 7.34315 24 9C24 10.6569 25.3431 12 27 12H33C34.6568 12 36 10.6569 36 9C36 7.34315 34.6568 6 33 6H27Z" fill="#111827"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 15C12 11.6863 14.6863 9 18 9C18 13.9706 22.0294 18 27 18H33C37.9706 18 42 13.9706 42 9C45.3137 9 48 11.6863 48 15V48C48 51.3137 45.3137 54 42 54H18C14.6863 54 12 51.3137 12 48V15ZM41.1213 32.1213C42.2929 30.9498 42.2929 29.0503 41.1213 27.8787C39.9497 26.7071 38.0502 26.7071 36.8787 27.8787L27 37.7574L23.1213 33.8787C21.9497 32.7071 20.0503 32.7071 18.8787 33.8787C17.7071 35.0503 17.7071 36.9498 18.8787 38.1213L24.8787 44.1213C26.0502 45.2929 27.9497 45.2929 29.1213 44.1213L41.1213 32.1213Z" fill="#111827"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full cursor-pointer group">
        <div class="relative bg-gray-100 shadow-md h-full rounded-lg  transform transition group-hover:bg-gradient-to-r from-teal-300 via-teal-300 to-teal-300 duration-200 ease-in-out flex flex-col relative overflow-hidden">
          <div class="flex flex-col m-1 px-6 lg:px-4 py-6 bg-white rounded-lg bg-gray-100">
            <p class="text-2xl w-0 text-left font-light leading-none text-gray-900 flex items-center pb-4 mb-4 ">
              Finished Orders
            </p>
            <span class="absolute top-2/3 left-4.5 text-teal-300 font-semibold text-base">0 </span>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute right-2.5 opacity-25 group-hover:scale-105 transition transform duration-200 ease-in-out">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M36 21C34.3431 21 33 19.6569 33 18C33 16.3431 34.3431 15 36 15H51C52.6569 15 54 16.3431 54 18V33C54 34.6569 52.6569 36 51 36C49.3431 36 48 34.6569 48 33V25.2426L35.1213 38.1213C33.9497 39.2929 32.0503 39.2929 30.8787 38.1213L24 31.2426L11.1213 44.1213C9.94975 45.2929 8.05025 45.2929 6.87868 44.1213C5.70711 42.9497 5.70711 41.0503 6.87868 39.8787L21.8787 24.8787C23.0503 23.7071 24.9497 23.7071 26.1213 24.8787L33 31.7574L43.7574 21H36Z" fill="#111827"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap -m-4 mt-2">
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full cursor-pointer group">
        <div class="relative bg-gray-100 shadow-md h-full rounded-lg  transform transition group-hover:bg-gradient-to-r from-teal-300 via-teal-300 to-teal-300 duration-200 ease-in-out flex flex-col relative overflow-hidden">
          <div class="flex flex-col m-1 px-6 lg:px-4 py-6 bg-white rounded-lg bg-gray-100">
            <p class="text-2xl w-0 text-left font-light leading-none text-gray-900 flex items-center pb-4 mb-4 ">
              Disputed Orders
            </p>
            <span class="absolute top-2/3 left-4.5 text-teal-300 font-semibold text-base">0</span>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute right-2.5 opacity-25 group-hover:scale-105 transition transform duration-200 ease-in-out">
              <path d="M54 9C54 7.96027 53.4616 6.99467 52.5772 6.44805C51.6927 5.90143 50.5883 5.85174 49.6584 6.31672L26.2918 18H15C10.0294 18 6 22.0294 6 27C6 31.9706 10.0294 36 15 36H15.8377L21.154 51.9487C21.5623 53.1737 22.7087 54 24 54H27C28.6569 54 30 52.6569 30 51V37.8541L49.6584 47.6833C50.5883 48.1483 51.6927 48.0986 52.5772 47.552C53.4616 47.0053 54 46.0397 54 45V9Z" fill="#111827"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full cursor-pointer group">
        <div class="relative bg-gray-100 shadow-md h-full rounded-lg  transform transition group-hover:bg-gradient-to-r from-teal-300 via-teal-300 to-teal-300 duration-200 ease-in-out flex flex-col relative overflow-hidden">
          <div class="flex flex-col m-1 px-6 lg:px-4 py-6 bg-white rounded-lg bg-gray-100">
            <p class="text-2xl w-0 text-left font-light leading-none text-gray-900 flex items-center pb-4 mb-4 ">
              Revision Orders
            </p>
            <span class="absolute top-2/3 left-4.5 text-teal-300 font-semibold text-base"></span>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute right-2.5 opacity-25 group-hover:scale-105 transition transform duration-200 ease-in-out">
              <path d="M24 6C22.3431 6 21 7.34315 21 9C21 10.6569 22.3431 12 24 12H30C31.6569 12 33 10.6569 33 9C33 7.34315 31.6569 6 30 6H24Z" fill="#111827"/>
              <path d="M9 15C9 11.6863 11.6863 9 15 9C15 13.9706 19.0294 18 24 18H30C34.9706 18 39 13.9706 39 9C42.3137 9 45 11.6863 45 15V33H31.2426L35.1213 29.1213C36.2929 27.9497 36.2929 26.0503 35.1213 24.8787C33.9497 23.7071 32.0503 23.7071 30.8787 24.8787L21.8787 33.8787C20.7071 35.0503 20.7071 36.9497 21.8787 38.1213L30.8787 47.1213C32.0503 48.2929 33.9497 48.2929 35.1213 47.1213C36.2929 45.9497 36.2929 44.0503 35.1213 42.8787L31.2426 39H45V48C45 51.3137 42.3137 54 39 54H15C11.6863 54 9 51.3137 9 48V15Z" fill="#111827"/>
              <path d="M45 33H51C52.6569 33 54 34.3431 54 36C54 37.6569 52.6569 39 51 39H45V33Z" fill="#111827"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'TileCard'
}
</script>

<style scoped>

</style>
