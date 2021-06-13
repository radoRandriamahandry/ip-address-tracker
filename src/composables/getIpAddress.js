import useAPI from "./useAPI"
import axios from "axios"

const getIpAddress = async () => {
  const { result, callApi } = useAPI(async () => {
    const res = await axios.get("https://api.ipify.org")
    return res.data
  })
  await callApi()

  return { result }
}

export default getIpAddress
