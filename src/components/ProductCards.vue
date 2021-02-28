<template>
  <section v-if="errored">
    <p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le moment. Veuillez réessayer ultérieurement.</p>
  </section>

  <section v-else>
    <div class="flex items-center justify-center md:px-20">
      <div class="flex flex-wrap">
        <div v-if="loading">
          Chargement...
        </div>
        <div v-for="photo in info.results" v-else :key="photo.id" class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <div class="overflow-hidden rounded-lg shadow-lg">
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
    // const AuthStr = 'Client-ID '.concat(TOKEN)

    axios
      .get('https://api.unsplash.com/search/photos?orientation=landscape&query=products', { headers: { Authorization: 'test' } })
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
