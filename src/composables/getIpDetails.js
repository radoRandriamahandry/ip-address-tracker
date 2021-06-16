import axios from "axios"
import position from "../store/position.js"
import getIpDetailsStatus from "../store/getIpDetailsStatus.js"

/**
 * @desc call the get.ipify.org API
 * @param {String} ipAddress
 * @return informations about the ipAddress
 */
const getIpDetails = async (ipAddress) => {
  const { updateGetIpDetailsIsLoadingValue } = getIpDetailsStatus()
  updateGetIpDetailsIsLoadingValue(true)
  const res = await axios.get(
    `https://geo.ipify.org/api/v1?apiKey=at_8nUSSlHRBQlZqt01f8vItI42yV2Ro&ipAddress=${ipAddress}`
  )
  let locations = [
    res.data.location.country,
    res.data.location.city,
    res.data.location.postalCode,
  ]
  // Remove empty value from the location attribute
  locations = locations.filter((location) => location !== "").join(", ")

  const { updatePosition } = position()
  updatePosition(res.data.location.lat, res.data.location.lng)

  const ipInfos = {
    ip: ipAddress,
    location: locations,
    timezone: `UTC${res.data.location.timezone}`,
    isp: res.data.isp,
  }
  updateGetIpDetailsIsLoadingValue(false)
  return ipInfos
}

export default getIpDetails
