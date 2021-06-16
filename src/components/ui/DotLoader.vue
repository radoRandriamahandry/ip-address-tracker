<template>
  <div class="grid place-items-center">
    <div class="flex items-baseline gap-2 dot-loader">
      <span class="text-lg font-semibold text-gray-400">Waiting for data</span>
      <span class="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></span>
      <span class="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></span>
      <span class="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.dot-loader span:nth-child(3) {
  animation-delay: 0.2s;
}
.dot-loader span:nth-child(4) {
  animation-delay: 0.4s;
}
</style>
