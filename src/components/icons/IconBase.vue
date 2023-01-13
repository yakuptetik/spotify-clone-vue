<template>
  <svg fill="currentColor" :height="height" :width="width" :viewBox="viewBox">
    <slot />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 24,
    },

    height: {
      type: Number,
      default: 24,
    },

    viewBox: {
      type: String,
      default: '0 0 24 24',
    },
  },
};
</script>
