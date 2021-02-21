<template>
  <svg
    :class="classe"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :fill="fill"
    xmlns="http://www.w3.org/2000/svg"
  >
    <slot />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    classe: {
      type: String,
      default: 'classes',
    },
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
    viewBox: {
      type: String,
      default: '0 0 24 24',
    },
    fill: {
      type: String,
      default: 'none',
    },
  },
})
</script>
