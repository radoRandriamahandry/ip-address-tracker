<template>
  <div ref="mapContainer" class="z-0"></div>
</template>

<script>
import mapboxgl from "mapbox-gl"
import { onMounted, ref } from "vue"
import position from "../store/position"
export default {
  setup() {
    const mapContainer = ref(null)
    const { latitude, longitude } = position()

    const setMap = (longitude, latitude) => {
      mapboxgl.accessToken =
        "pk.eyJ1Ijoib2RhciIsImEiOiJja3B4cW9hanowaTdzMndvYmg4NmRyNmZkIn0.7q5iGPlja3EYQ1VUO81A9A"

      const map = new mapboxgl.Map({
        container: mapContainer.value,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [longitude, latitude],
        zoom: 15,
      })

      // Wait for the map to be loaded before adding marker
      setTimeout(() => {
        const marker = new mapboxgl.Marker({ color: "#000000" })
          .setLngLat([longitude, latitude])
          .addTo(map)
      }, 1500)
    }

    onMounted(() => {
      setMap(longitude.value, latitude.value)
    })

    return { mapContainer }
  },
}
</script>

<style></style>
