<script setup lang="ts">
const { data } = useFetch('/api/time')
function formatTime(time: number) {
  return new Date(time).toLocaleString('en-US', {
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

const serverTime = computed(() => {
  return formatTime(data.value!.time)
})
const currentTime = ref(-1)

const different = computed(() => {
  if (currentTime.value === -1) {
    return 'N/A'
  }

  return `${((currentTime.value - data.value!.time) / 1000).toFixed(3)}s`
})

const clientTime = computed(() => {
  if (currentTime.value === -1) {
    return 'N/A'
  }

  return formatTime(currentTime.value)
})

onMounted(() => {
  currentTime.value = Date.now()
})
</script>
<template>
  <div>
    <div>server time: {{ serverTime }}</div>
    <div>client time: {{ clientTime }}</div>
    <div>different: {{ different }}</div>
  </div>
</template>
