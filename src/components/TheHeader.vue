<template>
  <div
    class="grid gap-5 px-4 pt-5 pb-32 bg-cover  sm:pb-16 sm:pt-10 place-items-center"
    style="background-image: url('/src/assets/images/pattern-bg.png')"
  >
    <h1 class="text-xl font-semibold text-gray-100 sm:text-lg">
      IP Address Tracker
    </h1>
    <form
      class="flex items-center w-full h-12 max-w-md rounded-xl"
      @submit.prevent="handleSubmit"
    >
      <input
        v-model="inputValue"
        type="text"
        name="inputValue"
        :placeholder="placeholder"
        class="flex-1 h-full pl-4 text-sm rounded-l-lg outline-none  focus:ring-2 focus:ring-inset focus:ring-black"
        :class="[
          (ipDetails.hasError || ipAddressHasError) &&
            'ring-inset ring-2 ring-red-600 placeholder-red-600',
        ]"
      />

      <button
        type="submit"
        class="h-full px-4 bg-black rounded-r-lg hover:bg-opacity-70 group"
        :disabled="ipAddressIsLoading"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-gray-100 stroke-current"
          :class="[ipAddressIsLoading && 'text-gray-600']"
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
import { ref, reactive } from "vue"

export default {
  components: {
    IpDetails,
  },

  setup() {
    const inputValue = ref("")
    const ipDetails = reactive({})

    const ipAddressIsLoading = ref(false)
    const ipAddressHasError = ref(false)

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
        await callApi(async () => {
          return await getIpDetails(inputValue.value)
        })

        ipDetails.ip = result.value.ip
        ipDetails.location = result.value.location
        ipDetails.timezone = result.value.timezone
        ipDetails.isp = result.value.isp
        // TODO: handle error when request failed or bad request
        ipDetails.isLoading = isLoading.value
        ipDetails.hasError = hasError.value
      }
    }

    const initIpDetails = async () => {
      const { result, isLoading, hasError, callApi: getIpAddress } = useAPI()

      await getIpAddress(async () => {
        const res = await axios.get("https://api.ipify.org")
        return res.data
      })

      inputValue.value = result.value
      ipAddressIsLoading.value = isLoading.value
      ipAddressHasError.value = hasError.value

      handleSubmit()
    }

    initIpDetails()

    return {
      inputValue,
      ipDetails,
      handleSubmit,
      ipAddressIsLoading,
      ipAddressHasError,
      placeholder,
    }
  },
}
</script>

<style></style>
