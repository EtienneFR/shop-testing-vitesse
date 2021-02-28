<template>
  <section v-if="errored">
    <p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le moment. Veuillez réessayer ultérieurement.</p>
  </section>

  <section v-else>
    <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <div class="flex flex-wrap mx-6 lg:-mx-4">
        <div v-if="loading">
          Chargement...
        </div>
        <article
          v-for="photo in info.results"
          v-else
          :key="photo.id"
          class="overflow-hidden rounded-lg shadow-lg"
        >
          <img
            alt="Placeholder"
            class="block"
            :src="photo.urls.raw"
          >
          <header class="flex items-center justify-between p-2 leading-tight md:p-4">
            <h1 class="text-lg">
              {{ photo.alt_description }}
            </h1>
          </header>
        </article>
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
      .get('https://api.unsplash.com/search/photos?query=road', { headers: { Authorization: 'Client-ID test' } })
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
