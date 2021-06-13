import useAPI from "./useAPI"
import axios from "axios"

const getIpAddress = async () => {
  const { isLoading, hasError, result, callApi } = useAPI(async () => {
    const res = await axios.get("https://api.ipify.org")
    return res.data
  })
  // await callApi()

  return { isLoading, hasError, result, callApi }
}

export default getIpAddress
