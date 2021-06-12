<template>
  <div class="h-screen bg-gray-100 text-gray-700 flex flex-col">
    <TheHeader />
    <Map class="flex-1" />
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue"
import Map from "./Map.vue"
export default {
  components: {
    TheHeader,
    Map,
  },
}
</script>

<style></style>
