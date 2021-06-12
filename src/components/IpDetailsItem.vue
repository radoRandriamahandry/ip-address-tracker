<template>
  <div class="flex flex-col gap-1 px-4">
    <span class="text-xs font-semibold text-gray-400 uppercase">{{
      title
    }}</span>
    <span class="text-lg font-semibold text-gray-800">{{ value }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
      required: true,
    },
    value: {
      type: String,
      default: "",
      required: true,
    },
  },
}
</script>

<style></style>
