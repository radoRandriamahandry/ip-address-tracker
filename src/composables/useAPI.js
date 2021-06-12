import { ref } from "@vue/reactivity"

/**
 * @desc Reusable composable for calling an API
 * @param {function} getResults
 * @returns {}
 */
const useAPI = (getResults) => {
  const isLoading = ref(false)
  const hasError = ref(false)
  const query = ref("")
  const result = ref("")

  const callApi = async () => {
    isLoading.value = true
    hasError.value = false
    try {
      // getResults depends on the type of query ex: graphl query.
      // The user return whatever informations he needs
      result.value = await getResults(query.value)
      console.log(result.value)
    } catch (error) {
      console.log(error.message)
      hasError.value = true
    } finally {
      isLoading.value = false
    }
  }

  return { query, result, isLoading, hasError, callApi }
}

export default useAPI
