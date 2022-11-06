<template>
  <svg
    :width="props.width"
    :height="props.height"
    :viewBox="props.viewBox"
    :fill="props.fill"
    xmlns="http://www.w3.org/2000/svg"
  >
    <slot />
  </svg>
</template>

<script lang="ts" setup>

const props = defineProps({
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
})
</script>
