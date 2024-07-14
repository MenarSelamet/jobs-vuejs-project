<script setup>
defineProps({
  bg: {
    default: "bg-gray-100",
  },
});
</script>

<template>
  <div v-bind:class="`${bg} p-6 rounded-lg shadow-md`">
    <slot></slot>
  </div>
</template>
