import { ref } from "@vue/reactivity"

/**
 * @desc Reusable composable for calling an API
 * @returns {result, isLoading, hasError, callApi}
 */
const useAPI = () => {
  const isLoading = ref(false)
  const hasError = ref(false)
  const result = ref("")

  /**
   * Call an API depending of the getResults function
   * getResults definne the API to call and the result to get from it
   * @param {Function} getResults
   */
  const callApi = async (getResults) => {
    isLoading.value = true
    hasError.value = false
    try {
      result.value = await getResults()
    } catch (error) {
      console.log(error.message)
      hasError.value = true
    } finally {
      isLoading.value = false
    }
  }

  return { result, isLoading, hasError, callApi }
}

export default useAPI
