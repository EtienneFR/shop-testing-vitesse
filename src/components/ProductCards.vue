<template>
  <section v-if="errored" class="flex items-center justify-center p-4">
    <p>We are sorry. We  are unable to retrieve this information at this time. Please retry later.</p>
  </section>

  <section v-else>
    <div class="flex items-center">
      <div class="flex flex-wrap justify-center">
        <div v-if="loading">
          Waiting...
        </div>
        <div v-for="product in info" v-else :key="product.description" class="w-auto px-1 m-5 my-1 lg:w-1/3 lg:w-auto md:w-auto md:w-1/2 lg:my-4 lg:px-4">
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
