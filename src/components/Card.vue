<template>
  <article class="overflow-hidden rounded-lg shadow-lg">
    <img
      alt="Placeholder"
      class="block w-full h-auto"
      :src="source"
    >

    <header class="flex items-center justify-between p-2 leading-tight md:p-4">
      <h1 class="text-lg">
        {{ description }}
      </h1>
    </header>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
})
</script>
