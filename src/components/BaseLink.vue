<template>
  <router-link :to="props.href" :role="props.role">
    <slot />
  </router-link>
</template>

<script lang="ts" setup>
const props = defineProps({
  href: {
    type: String,
    default: '#',
  },
  role: {
    type: String,
    default: 'none',
  },
})
</script>
