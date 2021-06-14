<template>
  <div class="relative w-1/2">
    <div
      v-if="!ipDetails.hasError"
      class="absolute inset-0 grid grid-cols-4 py-8 bg-white divide-x rounded-lg  h-36"
    >
      <!-- TODO: Handle loading status, use skeleton -->
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
