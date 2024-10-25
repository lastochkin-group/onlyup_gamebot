<script setup>
import { computed } from 'vue'

const props = defineProps({
  value: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: "Record meters"
  }
})

const formattedValue = computed(() => {
  return String(props.value).padStart(6, '0')
})

const grayDigits = computed(() => {
  const leadingZeros = formattedValue.value.match(/^0+/)?.[0].length || 0
  return leadingZeros
})
</script>

<template>
  <div class="flex justify-center items-center flex-col gap-y-2">
    <div class="text-[70px] font-extrabold flex leading-none">
        <div v-for="(digit, index) in formattedValue" :key="index">
        <span :class="{ 'opacity-10': index < grayDigits }">{{ digit }}</span>
        </div>
    </div>

    <span v-if="description" class="uppercase font-bold text-lg">{{ description }}</span>
  </div>
</template>