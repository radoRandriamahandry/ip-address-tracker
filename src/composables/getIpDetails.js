import axios from "axios"

/**
 * @desc call the get.ipify.org API
 * @param {String} ipAddress
 * @return informations about the ipAddress
 */
const getIpDetails = async (ipAddress) => {
  const res = await axios.get(
    `https://geo.ipify.org/api/v1?apiKey=at_8nUSSlHRBQlZqt01f8vItI42yV2Ro&ipAddress=${ipAddress}`
  )
  // Remove empty value from the location attribute
  let locations = [
    res.data.location.country,
    res.data.location.city,
    res.data.location.postalCode,
  ]
  locations = locations.filter((location) => location !== "").join(", ")

  const ipInfos = {
    ip: ipAddress,
    location: locations,
    timezone: `UTC${res.data.location.timezone}`,
    isp: res.data.isp,
  }
  return ipInfos
}

export default getIpDetails

// const getIpDetails = async (ipAddress) => {
//   const {isLoading, hasError, result, callApi } = useAPI(async () => {
//     const res = await axios.get(
//       `https://geo.ipify.org/api/v1?apiKey=at_8nUSSlHRBQlZqt01f8vItI42yV2Ro&ipAddress=${ipAddress.value}`
//     )

//     // Remove empty value from the location attribute
//     let locations = [
//       res.data.location.country,
//       res.data.location.city,
//       res.data.location.postalCode,
//     ]
//     locations = locations.filter((location) => location !== "").join(", ")

//     const ipInfos = {
//       ip: ipAddress.value,
//       location: locations,
//       timezone: `UTC${res.data.location.timezone}`,
//       isp: res.data.isp,
//     }
//     return ipInfos
//   })
//   // await callApi()
//   return { isLoading, hasError, result, callApi }
//   // init the ipDetails that will be passed to the ipDetails components
//   // ipDetails.ip = result.value.ip
//   // ipDetails.location = result.value.location
//   // ipDetails.timezone = result.value.timezone
//   // ipDetails.isp = result.value.isp
// }

// export default getIpDetails
