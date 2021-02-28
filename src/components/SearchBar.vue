<template>
  <div class="flex justify-between bg-white rounded-full shadow-xl">
    <input id="search" v-model="text" class="flex justify-start w-3/5 px-6 py-4 leading-tight text-gray-700 rounded-l-full sm:w-full focus:outline-none " type="text" placeholder="Search">

    <div class="p-4">
      <button class="flex items-center justify-center w-12 h-12 p-2 text-white bg-blue-600 rounded-full hover:bg-blue-400 focus:outline-none" @click="searchProduct">
        <IconBase view-box="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
        </IconBase>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      text: null,
    }
  },
  methods: {
    searchProduct() {
      return this.text
    },
  },
})
</script>
