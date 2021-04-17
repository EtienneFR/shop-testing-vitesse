<template>
  <div class="overflow-hidden bg-white shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg font-medium leading-6 text-gray-900">
        Dashboard
      </h3>
      <p class="max-w-2xl mt-1 text-sm text-gray-500">
        Personal space of Bob D.
      </p>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <div
          class="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">
            Full name
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            Bob D.
          </dd>
        </div>
        <div class="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Email address
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            donbob@example.com
          </dd>
        </div>
        <div
          class="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">
            Phone
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            415-555-0120
          </dd>
        </div>
        <div class="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Address
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            (415) 374-7739 2701 Green St San Francisco, California, USA
          </dd>
        </div>
        <div
          class="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">
            Lists of orders
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <ul
              v-for="order in orders"
              :key="order.id"
              class="border border-gray-200 divide-y divide-gray-200 rounded-md"
            >
              <li
                class="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
              >
                <div class="flex items-center flex-1 w-0">
                  <BaseIcon
                    class="flex-shrink-0 w-5 h-5 text-gray-400"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                      clip-rule="evenodd"
                    />
                  </BaseIcon>
                  <span class="flex-1 w-0 ml-2 truncate">
                    {{ order.title }}.pdf
                  </span>
                </div>
                <div class="flex-shrink-0 ml-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Download
                  </a>
                </div>
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      orders: [
        {
          id: '49279287',
          title: 'posters_xl',
        },
        {
          id: '79131873',
          title: 'laptop',
        },
        {
          id: '827492847',
          title: 'carpet',
        },
        {
          id: '29624628',
          title: 'smartphone_64GB',
        },
      ],
    }
  },
})
</script>
