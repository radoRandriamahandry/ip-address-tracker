<template>
  <div class="flex flex-col h-screen text-gray-700 bg-gray-100">
    <TheHeader />

    <transition
      mode="out-in"
      enter-from-class="opacity-0"
      enter-active-class="transition-opacity duration-150 ease-out"
      leave-to-class="opacity-0"
      leave-active-class="transition-opacity duration-150 ease-in"
    >
      <DotLoader v-if="getIpDetailsIsLoading" class="flex-1" />
      <Map v-else class="flex-1" />
    </transition>
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue"
import Map from "./Map.vue"
import DotLoader from "./ui/DotLoader.vue"
import getIpDetailsStatus from "../store/getIpDetailsStatus"

export default {
  components: {
    TheHeader,
    Map,
    DotLoader,
  },
  setup() {
    const { getIpDetailsIsLoading } = getIpDetailsStatus()

    return { getIpDetailsIsLoading }
  },
}
</script>

<style></style>
