<template>
  <router-link :to="href" :class="classe" :role="role">
    <slot />
  </router-link>
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
