<template>
  <div class="flex flex-col px-4 md:gap-1">
    <span class="text-xs font-semibold text-gray-400 uppercase">{{
      title
    }}</span>

    <transition
      mode="out-in"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-active-class="transition-all ease-out duration-400"
      leave-to-class="transform translate-y-4 opacity-0"
      leave-active-class="transition-all duration-300 ease-in "
    >
      <div v-if="isLoading" class="h-full">
        <!-- To avoid conflict with the transition animation -->
        <!-- animate-pulse the child instead of the parent element -->
        <div class="h-full bg-gray-200 rounded-lg animate-pulse"></div>
      </div>
      <span v-else class="text-lg font-bold text-gray-800 md:font-semibold">{{
        value
      }}</span>
    </transition>
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
    isLoading: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style></style>
