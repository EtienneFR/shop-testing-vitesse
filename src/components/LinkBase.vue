<template>
  <a :href="href" :class="classe" :role="role"><slot /></a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    classe: {
      type: String,
      default: 'classes',
    },
    href: {
      type: String,
      default: '#',
    },
    role: {
      type: String,
      default: 'none',
    },
  },
})
</script>
