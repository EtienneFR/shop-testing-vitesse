<template>
  <!-- Search Bar -->
  <div class="flex justify-center">
    <div class="w-full p-10 sm:w-3/5">
      <div class="flex justify-between bg-white rounded-lg shadow-xl">
        <div class="p-3">
          <div class="flex items-center justify-center w-12 h-12 text-gray-400 rounded-full focus:outline-none">
            <BaseIcon view-box="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </BaseIcon>
          </div>
        </div>
        <input
          id="search"
          class="flex justify-start w-full px-4 py-4 leading-tight text-gray-700 rounded-l-full sm:w-full focus:outline-none "
          type="text"
          aria-label="search"
          placeholder="Search"
          :value="searchQuery"
          @input="send({ type: 'MODIFY_QUERY', searchQuery: $event.target.value })"
        >
      </div>
    </div>
  </div>

  <p v-if="state.matches('waiting')">
    Type query to search products!
  </p>

  <section v-else-if="state.matches('erroredData')" class="flex items-center justify-center p-4">
    <p>We are sorry. We are unable to retrieve this information at this time. Please retry later.</p>
  </section>

  <section v-else-if="state.matches('fetchingData') || state.matches('debouncing')">
    <div class="flex items-center justify-center">
      <div>
        Waiting...
      </div>
    </div>
  </section>

  <section v-else-if="(state.matches('fetchedData') && images.length === 0)">
    No result found. Type a different query.
  </section>

  <section v-else-if="state.matches('fetchedData')">
    <div class="flex items-center justify-center">
      <div class="flex flex-wrap justify-center">
        <div v-for="product in images" :key="product.description" class="w-auto px-1 m-5 my-1 lg:w-1/3 lg:w-auto md:w-auto lg:my-4 lg:px-4">
          <div class="overflow-hidden rounded-lg shadow-lg">
            <img
              alt="Placeholder"
              class="block object-cover"
              :src="product.small"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import axios from 'axios'
import urlcat from 'urlcat'
import { useMachine } from '@xstate/vue'
import { searchMachine, Image } from '../machines/searchMachine'

const { state, send } = useMachine(searchMachine, {
  services: {
    fetchImages: ({ searchQuery }) => async(sendBack) => {
      try {
        const API_URL = '/.netlify/functions/'
        const requestUrl = urlcat(API_URL, 'search-api', { query: searchQuery })

        const response = await axios.get(requestUrl)
        const images = response.data as Image[]

        sendBack({
          type: 'RECEIVED_IMAGES',
          images,
        })
      }
      catch (err) {
        sendBack({
          type: 'ERRORED_FETCHING_IMAGES',
        })
      }
    },
  },
})

const searchQuery = computed(() => state.value.context.searchQuery)
const images = computed(() => state.value.context.images)
</script>
