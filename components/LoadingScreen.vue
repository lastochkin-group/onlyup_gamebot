<script setup>

  import { Icon } from '@iconify/vue'

  defineProps({
    heading: {
      type: String,
      default: "December 1, 2024"
    },
    supHeading: {
      type: String,
      default: "Completion of the 1st season"
    }
  })

</script>

<template>
    <div class="fixed top-0 left-0 right-0 bottom-0 bg-accent_gradient flex flex-col items-center justify-between py-16">
        <div class="w-[100px] aspect-square rounded-full bg-white flex justify-center items-center overflow-hidden">
            <Icon icon="token:ton" class="text-[44px] text-accent_color" />
        </div>

        <div class="flex flex-col justify-center items-center text-accent_text_color gap-y-0.5">
            <span class="text-center font-semibold">{{ supHeading }}</span>
            <h2 class="text-center font-bold text-3xl uppercase">{{ heading }}</h2>
        </div>

        <span class="flex items-center gap-x-1 text-accent_text_color">
            <span class="font-bold">Loading</span>
            <Icon icon="line-md:loading-twotone-loop" />
        </span>
    </div>
</template>