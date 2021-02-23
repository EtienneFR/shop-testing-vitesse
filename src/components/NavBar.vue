<template>
  <nav class="bg-blue-700">
    <div class="sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex items-center flex-1 sm:items-stretch sm:justify-start">
          <div class="flex items-center flex-shrink-0">
            <div class="block m-1 sm:hidden">
              <button
                class="inline-flex items-start justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
                @click.prevent="isOpenMenu = !isOpenMenu"
              >
                <span class="sr-only">Open main menu</span>

                <IconBase
                  class="block w-6 h-6"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </IconBase>
              </button>
            </div>
          </div>
          <div v-for="link in links" :key="link.id" class="hidden sm:block">
            <div class="flex">
              <LinkBase
                :href="link.to"
                class="px-3 py-2 text-sm font-medium text-gray-100 rounded-md hover:bg-blue-600 hover:text-white"
              >
                {{ link.text }}
              </LinkBase>
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <!-- Notification Menu -->
          <div class="relative ml-3">
            <button
              id="notification-menu"
              class="flex p-1 text-gray-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-900 focus:ring-white"
              aria-haspopup="true"
              @click.prevent="(isNotif = !isNotif), (isOpen = false)"
            >
              <span class="sr-only">View notifications</span>
              <IconBase
                classe="w-6 h-6"
                view-box="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </IconBase>
            </button>
            <div
              v-show="isNotif"
              class="absolute right-0 py-1 mt-2 origin-top-right bg-white border border-gray-300 rounded-lg shadow-lg w-max"
              aria-orientation="vertical"
              aria-labelledby="notification-menu"
            >
              <div class="flex flex-row">
                <div class="px-2">
                  <IconBase
                    classe="w-6 h-6"
                    view-box="0 0 1792 1792"
                    fill="#44C997"
                  >
                    <path
                      d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
                    />
                  </IconBase>
                </div>
                <div class="ml-2 mr-6 text-sm text-left">
                  <span class="font-semibold">Order #X100 saved!</span>
                  <span
                    class="block text-gray-500"
                  >Go to your personal space</span>
                </div>
              </div>
              <div class="flex flex-row">
                <div class="px-2">
                  <IconBase
                    view-box="0 0 510.111 510.111"
                    fill="#44C997"
                  >
                    <circle
                      style="fill: #e24c4b"
                      cx="227.556"
                      cy="227.556"
                      r="227.556"
                    />
                    <path
                      style="fill: #d1403f"
                      d="M455.111,227.556c0,125.156-102.4,227.556-227.556,227.556c-72.533,0-136.533-32.711-177.778-85.333
  c38.4,31.289,88.178,49.778,142.222,49.778c125.156,0,227.556-102.4,227.556-227.556c0-54.044-18.489-103.822-49.778-142.222
  C422.4,91.022,455.111,155.022,455.111,227.556z"
                    />
                    <path
                      style="fill: #ffffff"
                      d="M331.378,331.378c-8.533,8.533-22.756,8.533-31.289,0l-72.533-72.533l-72.533,72.533
  c-8.533,8.533-22.756,8.533-31.289,0c-8.533-8.533-8.533-22.756,0-31.289l72.533-72.533l-72.533-72.533
  c-8.533-8.533-8.533-22.756,0-31.289c8.533-8.533,22.756-8.533,31.289,0l72.533,72.533l72.533-72.533
  c8.533-8.533,22.756-8.533,31.289,0c8.533,8.533,8.533,22.756,0,31.289l-72.533,72.533l72.533,72.533
  C339.911,308.622,339.911,322.844,331.378,331.378z"
                    />
                  </IconBase>
                </div>
                <div class="ml-2 mr-6 text-sm text-left">
                  <span class="font-semibold">Error order #X3910</span>
                  <span
                    class="block text-gray-500"
                  >Item is no longer available</span>
                </div>
              </div>
            </div>
          </div>
          <!-- User Menu -->
          <div class="relative ml-3">
            <button
              id="user-menu"
              class="flex text-gray-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
              aria-haspopup="true"
              @click.prevent="(isOpen = !isOpen), (isNotif = false)"
            >
              <span class="sr-only">Open user menu</span>
              <IconBase classe="w-8 h-8 fill-current" view-box="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </IconBase>
            </button>
            <div
              v-show="isOpen"
              class="absolute right-0 w-48 py-1 mt-2 text-center origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu"
            >
              <LinkBase
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Profile
              </LinkBase>
              <LinkBase
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Settings
              </LinkBase>
              <LinkBase
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Logout
              </LinkBase>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isOpenMenu" class="">
      <div v-for="link in links" :key="link.id" class="pt-1 pb-2 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <LinkBase
          :href="link.to"
          class="block py-2 text-base font-medium text-center text-gray-100 rounded-md hover:bg-blue-600 hover:text-white"
        >
          {{ link.text }}
        </LinkBase>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      isOpen: false,
      isNotif: false,
      isOpenMenu: false,
      links: [
        {
          id: 1,
          to: '#',
          text: 'Personal Space',
        },
        {
          id: 2,
          to: 'products',
          text: 'Products',
        },
        {
          id: 3,
          to: '#',
          text: 'Discount',
        },
      ],
    }
  },
  mounted() {
    document.addEventListener('click', this.close)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.close)
  },
  methods: {
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.isOpen = false
        this.isNotif = false
        this.isOpenMenu = false
      }
    },
  },
})
</script>
