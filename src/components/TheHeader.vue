<template>
  <div
    class="grid gap-5 pt-10 pb-16 bg-cover place-items-center"
    style="background-image: url('/src/assets/images/pattern-bg.png')"
  >
    <h1 class="text-lg font-semibold text-gray-100">IP Address Tracker</h1>
    <form
      class="flex items-center w-1/3 h-12 rounded-xl"
      @submit.prevent="handleSubmit"
    >
      <!-- TODO: handle error -->
      <input
        v-model="inputValue"
        type="text"
        name="inputValue"
        :placeholder="placeholder"
        class="flex-1 h-full pl-4 text-sm rounded-l-lg outline-none  focus:ring-2 focus:ring-inset focus:ring-black"
        :class="[
          (ipDetails.hasError || getIpHasError) &&
            'ring-inset ring-2 ring-red-600 placeholder-red-600',
        ]"
      />
      <!-- TODO: handle loading and error -->
      <!-- TODO: show message -->
      <button
        type="submit"
        class="h-full px-4 bg-black rounded-r-lg hover:bg-opacity-70 group"
        :disabled="getIpIsLoading"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-gray-100 stroke-current"
          :class="[getIpIsLoading && 'text-gray-600']"
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
    <IpDetails v-if="ipDetails" :ip-details="ipDetails" />
  </div>
</template>

<script>
import IpDetails from "./IpDetails.vue"
import useAPI from "../composables/useAPI"
import getIpDetails from "../composables/getIpDetails"
import axios from "axios"
import { ref, reactive, computed } from "vue"

export default {
  components: {
    IpDetails,
  },

  setup() {
    const inputValue = ref("")
    const ipDetails = reactive({})

    const getIpIsLoading = ref(false)
    const getIpHasError = ref(false)

    const placeholder = ref("Enter an IP address")

    /**
     * @desc get the ip address details using the geo.ipify.org API
     */
    const handleSubmit = async () => {
      const { result, isLoading, hasError, callApi } = useAPI()

      // TODO: manage error here and reset ipDetails value
      if (!inputValue.value) {
        ipDetails.isLoading = false
        ipDetails.hasError = true
        placeholder.value = "IP address is empty"
        throw new Error("IP address is empty")
      } else {
        // the API call details is define inside the getIpDetails function
        await callApi(async () => {
          return await getIpDetails(inputValue.value)
        })

        // SET the ipDetails value
        ipDetails.ip = result.value.ip
        ipDetails.location = result.value.location
        ipDetails.timezone = result.value.timezone
        ipDetails.isp = result.value.isp
        // SET the error and loading status for the ipDetails component
        // TODO: handle error when request failed or bad request
        ipDetails.isLoading = isLoading.value
        ipDetails.hasError = hasError.value
      }
    }

    const initIpDetails = async () => {
      const { result, isLoading, hasError, callApi } = useAPI()

      // GET the current IP address using the ipify API using the useAPI composable
      await callApi(async () => {
        const res = await axios.get("https://api.ipify.org")
        return res.data
      })

      // SET the ip address value, error and loading status
      inputValue.value = result.value
      getIpIsLoading.value = isLoading.value
      getIpHasError.value = hasError.value

      handleSubmit()
    }

    initIpDetails()

    return {
      inputValue,
      ipDetails,
      handleSubmit,
      getIpIsLoading,
      getIpHasError,
      placeholder,
    }
  },
}
</script>

<style></style>
