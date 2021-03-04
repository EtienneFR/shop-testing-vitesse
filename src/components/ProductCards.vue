<template>
  <section v-if="errored" class="flex items-center justify-center p-4">
    <p>We are sorry, we are unable to retrieve this information at this time. Please retry later.</p>
  </section>

  <section v-else>
    <div class="flex items-center justify-center md:px-20">
      <div class="flex flex-wrap">
        <div v-if="loading">
          Waiting...
        </div>
        <div v-for="product in info" v-else :key="product.description" class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <div class="overflow-hidden rounded-lg shadow-lg">
            <img
              alt="Placeholder"
              class="block"
              :src="product.url"
            >
            <header class="flex items-center justify-between p-2 leading-tight md:p-4">
              <h1 class="text-lg">
                {{ product.description }}
              </h1>
            </header>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

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
    }
  },
  mounted() {
    axios
      .get('/.netlify/functions/search-api')
      .then((response) => {
        console.log(response.data.results)
        this.info = response.data
      })
      .catch((error) => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  },
})
</script>
