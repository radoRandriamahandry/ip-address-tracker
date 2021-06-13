<template>
  <div class="relative w-1/2">
    <div
      class="absolute inset-0 grid grid-cols-4 py-8 bg-white divide-x rounded-lg  h-36"
    >
      <IpDetailsItem title="ip address" :value="ipDetails.ip" />
      <IpDetailsItem title="Location" :value="ipDetails.location" />
      <IpDetailsItem title="timezone" :value="ipDetails.timezone" />
      <IpDetailsItem title="isp" :value="ipDetails.isp" />
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
}
</script>

<style></style>
