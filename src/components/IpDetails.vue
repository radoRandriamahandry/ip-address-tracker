<template>
  <div class="relative z-10 w-full max-w-[800px]">
    <div
      v-if="!ipDetails.hasError"
      class="absolute inset-0 grid gap-2 py-4 text-center bg-white rounded-lg  sm:grid-cols-2 md:grid-rows-1 sm:divide-x md:grid-cols-4 sm:grid-rows-2 h-60 sm:h-32"
    >
      <IpDetailsItem
        title="ip address"
        :value="ipDetails.ip"
        :is-loading="ipDetails.isLoading"
      />
      <IpDetailsItem
        title="Location"
        :value="ipDetails.location"
        :is-loading="ipDetails.isLoading"
      />
      <IpDetailsItem
        title="timezone"
        :value="ipDetails.timezone"
        :is-loading="ipDetails.isLoading"
      />
      <IpDetailsItem
        title="isp"
        :value="ipDetails.isp"
        :is-loading="ipDetails.isLoading"
      />
    </div>
    <div
      v-else
      class="absolute inset-0 grid py-8 text-red-600 bg-white border border-red-600 divide-x rounded-lg  place-items-center h-36"
    >
      Could not get your IP information. Please check your IP address.
    </div>
  </div>
</template>

<script>
import IpDetailsItem from "./IpDetailsItem.vue"

export default {
  components: {
    IpDetailsItem,
  },
  props: {
    ipDetails: {
      type: Object,
      required: true,
    },
  },
  setup() {},
}
</script>

<style></style>
