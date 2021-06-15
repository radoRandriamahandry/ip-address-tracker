import { ref, computed } from "vue"

const getIpDetailsIsLoadingSource = ref("false")

const getIpDetailsIsLoading = computed(() => {
  return getIpDetailsIsLoadingSource.value
})

const updateGetIpDetailsIsLoadingValue = (value) => {
  getIpDetailsIsLoadingSource.value = value
}

const getIpDetailsStatus = () => {
  return { getIpDetailsIsLoading, updateGetIpDetailsIsLoadingValue }
}

export default getIpDetailsStatus
