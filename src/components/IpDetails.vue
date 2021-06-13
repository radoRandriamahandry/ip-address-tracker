<template>
  <div class="relative w-1/2">
    <div
      class="absolute inset-0 grid grid-cols-4 py-8 bg-white divide-x rounded-lg  h-36"
    >
      <IpDetailsItem title="ip address" :value="result.ip" />
      <IpDetailsItem title="Location" :value="result.location" />
      <IpDetailsItem title="timezone" :value="result.timezone" />
      <IpDetailsItem title="isp" :value="result.ips" />
    </div>
  </div>
</template>

<script>
import useAPI from "../composables/useAPI"
import axios from "axios"
import IpDetailsItem from "./IpDetailsItem.vue"

export default {
  components: {
    IpDetailsItem,
  },
  // TODO: get the query as a prop
  props: {
    ipAddress: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const { result, callApi } = useAPI(async () => {
      const res = await axios.get(
        `https://geo.ipify.org/api/v1?apiKey=at_8nUSSlHRBQlZqt01f8vItI42yV2Ro&ipAddress=${props.ipAddress}`
      )
      // TODO: formate the location value
      let locations = [
        res.data.location.country,
        res.data.location.city,
        res.data.location.postalCode,
      ]
      locations = locations.filter((location) => location !== "").join(", ")

      const ipDetails = {
        ip: props.ipAddress,
        location: locations,
        timezone: `UTC${res.data.location.timezone}`,
        ips: res.data.isp,
      }
      return ipDetails
    })
    callApi()

    return { result }
  },
}
</script>

<style></style>
