<template>
  <div class="bg-gray-200 w-full h-full">
    <!-- Navigation starts -->
    <nav class="w-full mx-auto dark:bg-black-500 shadow">
      <div class="container px-6 justify-between h-16 flex items-center lg:items-stretch mx-auto">
        <div class="h-full flex items-center">
          <div class="mr-10 flex items-center">
            <h3 class="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 hidden lg:block">Find a coach</h3>
          </div>

          <ul class="pr-12 xl:flex items-center h-full hidden">
            <li class="hover:text-indigo-700 cursor-pointer h-full flex items-center text-sm text-indigo-700 tracking-normal border-b-2 border-indigo-700"><router-link to='/coaches'>Coaches</router-link></li>
            <li class="hover:text-indigo-700 cursor-pointer h-full flex items-center text-sm text-gry-800 mx-10 tracking-normal"><router-link to='/requests'>Requests</router-link></li>

          </ul>
        </div>

        <div class="h-full xl:flex items-center justify-end hidden">
          <div class="w-full h-full flex items-center">
            <div class="w-full pr-12 h-full flex items-center border-r">
              <div class="relative w-full">
                <div class="text-gray-500 absolute ml-3 inset-0 m-auto w-4 h-4">
                  <svg v-bind:xmlns="xmlns" class="icon icon-tabler icon-tabler-search" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                  </svg>
                </div>
                <input class="border border-gray-100 focus:outline-none focus:border-indigo-700 w-56 rounded text-sm text-gray-500 bg-gray-100 pl-8 py-2" type="text" placeholder="Search" />
              </div>
            </div>
            <div class="w-full h-full flex">

              <div aria-haspopup="true" class="cursor-pointer w-full flex items-center justify-end relative" @click="dropdownHandler($event)">
                <ul class="p-2 w-40 border-r bg-white absolute rounded z-40 left-0 shadow mt-64 hidden">
                  <li class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                    <div class="flex items-center">
                      <svg v-bind:xmlns="xmlns" class="icon icon-tabler icon-tabler-user" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="12" cy="7" r="4" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                      </svg>
                      <span class="ml-2"> My Profile </span>
                    </div>
                  </li>
                </ul>
                <img class="rounded h-10 w-10 object-cover" v-bind:src="profilePhoto" alt="logo" />
                <p class="text-gray-800 text-sm ml-2">Jane Doe</p>
              </div>
            </div>
          </div>
        </div>

        <div class="visible xl:hidden flex items-center">
          <ul class="z-40 p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16 hidden">
            <li class="flex xl:hidden cursor-pointer text-gray-600 text-base leading-3 tracking-normal mt-2 py-3 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
              <div class="flex items-center">
                <router-link to=''>  <span class="leading-6 ml-2 font-bold">Coaches </span></router-link>
              </div>
            </li>
            <li class="xl:hidden flex-col cursor-pointer text-gray-600 text-base leading-3 tracking-normal py-3 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" @click="dropdownHandler($event)">
              <div class="flex items-center">
                <router-link to=''>  <span class="leading-6 ml-2 font-bold">Requests </span></router-link>
              </div>
            </li>

            <li class="ml-2 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
              <div class="flex items-center">
                <div class="w-12 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out">
                  <img class="rounded h-10 w-10 object-cover" v-bind:src="profilePhoto" alt="logo" />
                </div>
                <p class="leading-6 text-base ml-1 cursor-pointer">Jane Doe</p>
                <div class="sm:ml-2 text-white relative">
                  <svg v-bind:xmlns="xmlns" class="icon icon-tabler icon-tabler-chevron-down cursor-pointer" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </li>
            <li class="ml-2 cursor-pointer text-gray-600 text-base leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
              <div class="flex items-center">
                <svg v-bind:xmlns="xmlns" class="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="7" r="4" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
                <span class="leading-6 ml-2">Profile</span>
              </div>
            </li>
          </ul>

          <svg @click="MenuHandler($event, true)" aria-haspopup="true" aria-label="Main Menu" v-bind:xmlns="xmlns" class="show-m-menu icon icon-tabler icon-tabler-menu" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <line x1="4" y1="8" x2="20" y2="8"></line>
            <line x1="4" y1="16" x2="20" y2="16"></line>
          </svg>
          <div class="hidden close-m-menu" @click="MenuHandler($event, false)">
            <svg aria-label="Close" v-bind:xmlns="xmlns" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
    <!-- Navigation ends -->
    </div>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      xmlns: "http://www.w3.org/2000/svg",
      xlink: "http://www.w3.org/1999/xlink",
      profilePhoto: "https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png",
    };
  },
  methods: {
    dropdownHandler(event) {
      let single = event.currentTarget.getElementsByTagName("ul")[0];
      single.classList.toggle("hidden");
    },
    MenuHandler(el, val) {
      let MainList = el.currentTarget.parentElement.getElementsByTagName("ul")[0];
      let closeIcon = el.currentTarget.parentElement.getElementsByClassName("close-m-menu")[0];
      let showIcon = el.currentTarget.parentElement.getElementsByClassName("show-m-menu")[0];
      if (val) {
        MainList.classList.remove("hidden");
        el.currentTarget.classList.add("hidden");
        closeIcon.classList.remove("hidden");
      } else {
        showIcon.classList.remove("hidden");
        MainList.classList.add("hidden");
        el.currentTarget.classList.add("hidden");
      }
    },
  },
};
</script>
