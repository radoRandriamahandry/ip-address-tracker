<template>
  <div class="flex flex-col h-screen text-gray-700 bg-gray-100">
    <TheHeader />
    <!-- TODO: create a loading spinner -->

    <div v-if="getIpDetailsIsLoading" class="flex-1">
      Waiting for IP position ...
    </div>
    <Map v-else class="flex-1" />
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue"
import Map from "./Map.vue"
import getIpDetailsStatus from "../store/getIpDetailsStatus"

export default {
  components: {
    TheHeader,
    Map,
  },
  setup() {
    const { getIpDetailsIsLoading } = getIpDetailsStatus()

    return { getIpDetailsIsLoading }
  },
}
</script>

<style></style>
