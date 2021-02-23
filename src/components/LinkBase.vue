<template>
  <router-link :to="href" :role="role">
    <slot />
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
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
