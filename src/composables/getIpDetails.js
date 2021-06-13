import useAPI from "./useAPI"
import axios from "axios"

const getIpDetails = async (ipAddress) => {
  const { result, callApi } = useAPI(async () => {
    const res = await axios.get(
      `https://geo.ipify.org/api/v1?apiKey=at_8nUSSlHRBQlZqt01f8vItI42yV2Ro&ipAddress=${ipAddress.value}`
    )

    // Remove empty value from the location attribute
    let locations = [
      res.data.location.country,
      res.data.location.city,
      res.data.location.postalCode,
    ]
    locations = locations.filter((location) => location !== "").join(", ")

    const ipInfos = {
      ip: ipAddress.value,
      location: locations,
      timezone: `UTC${res.data.location.timezone}`,
      isp: res.data.isp,
    }
    return ipInfos
  })
  await callApi()
  return { result }
  // init the ipDetails that will be passed to the ipDetails components
  // ipDetails.ip = result.value.ip
  // ipDetails.location = result.value.location
  // ipDetails.timezone = result.value.timezone
  // ipDetails.isp = result.value.isp
}

export default getIpDetails
