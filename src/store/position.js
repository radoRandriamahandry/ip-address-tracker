import { ref, computed } from "vue"

const latitudeSource = ref(0)
const longitudeSource = ref(0)

const updatePosition = (lat, lng) => {
  latitudeSource.value = lat
  longitudeSource.value = lng
}

const latitude = computed(() => latitudeSource.value)
const longitude = computed(() => longitudeSource.value)

const position = () => {
  return { latitude, longitude, updatePosition }
}

export default position
