<template>
  <!-- Search Bar -->
  <div class="flex justify-center">
    <div class="w-full p-10 sm:w-3/5">
      <div class="flex justify-between bg-white rounded-full shadow-xl">
        <input
          id="search"
          v-model="query"
          class="flex justify-start w-3/5 px-6 py-4 leading-tight text-gray-700 rounded-l-full sm:w-full focus:outline-none "
          type="text"
          aria-label="search"
          placeholder="Search"
        >
        <div class="p-4">
          <button class="flex items-center justify-center w-12 h-12 p-2 text-white bg-blue-600 rounded-full hover:bg-blue-400 focus:outline-none">
            <BaseIcon view-box="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </BaseIcon>
          </button>
        </div>
      </div>
    </div>
  </div>

  <section v-if="errored" class="flex items-center justify-center p-4">
    <p>We are sorry. We are unable to retrieve this information at this time. Please retry later.</p>
  </section>

  <section v-else>
    <div class="flex items-center justify-center">
      <div v-if="loading">
        {{ waiting }}
      </div>
      <div v-else class="flex flex-wrap justify-center">
        <div v-for="product in info" :key="product.description" class="w-auto px-1 m-5 my-1 lg:w-1/3 lg:w-auto md:w-auto md:w-1/2 lg:my-4 lg:px-4">
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

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
import _ from 'lodash'

export default defineComponent({
  props: {
    source: {
      type: String,
      default: '#',
    },
    description: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
      query: '',
      debouncedGetQuery: null,
      waiting: 'Type query to search products!',
    }
  },
  watch: {
    query(newQuery, oldQuery) {
      this.loading = true
      this.waiting = 'Waiting...'
      this.debouncedGetQuery()
    },
  },
  created() {
    this.debouncedGetQuery = _.debounce(this.searchProducts, 500)
  },
  methods: {
    searchProducts() {
      if (this.query === '') {
        this.info = null
        this.loading = true
        this.waiting = 'Type query to search products!'
        return
      }
      axios
        .get(`/.netlify/functions/search-api?&${new URLSearchParams({
          query: this.query,
        })}`)
        .then((response) => {
          this.info = response.data
        })
        .catch((error) => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
    },
  },
})
</script>
