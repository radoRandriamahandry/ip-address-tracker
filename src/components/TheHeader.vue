<template>
  <div
    class="grid gap-5 pt-10 pb-16 bg-cover place-items-center"
    style="background-image: url('/src/assets/images/pattern-bg.png')"
  >
    <h1 class="text-lg font-semibold text-gray-100">IP Address Tracker</h1>
    <form class="flex items-center w-1/3 h-12 rounded-xl">
      <input
        v-model="Ip"
        type="text"
        name="ip"
        placeholder="Search for any IP address or domain"
        class="flex-1 h-full pl-4 text-sm rounded-l-lg outline-none  focus:ring-2 focus:ring-inset focus:ring-black"
      />
      <button
        type="submit"
        class="h-full px-4 bg-black rounded-r-lg hover:bg-opacity-70 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-gray-100 stroke-current"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </form>
    <IpDetails />
  </div>
</template>

<script>
import IpDetails from "./IpDetails.vue"
import axios from "axios"
import useAPI from "../composables/useAPI"
export default {
  components: {
    IpDetails,
  },
  setup() {
    const {
      query,
      result: Ip,
      callApi,
    } = useAPI(async () => {
      const res = await axios.get("https://api.ipify.org")
      return res.data
    })

    callApi()

    return { query, Ip, callApi }
  },
}
</script>

<style></style>
