<script setup>

    import { Icon } from '@iconify/vue'

    defineProps({
        title: {
            type: String,
            default: "80% of all income"
        },
        subTitle: {
            type: String,
            default: "Total drop"
        }
    })
  
</script>

<template>
    <div class="flex flex-col justify-center items-center gap-y-6">
        <div class="w-[144px] aspect-square rounded-full bg-accent_color flex justify-center items-center overflow-hidden">
            <Icon icon="token:ton" class="text-[64px] text-accent_text_color" />
        </div>

        <div class="flex flex-col items-center font-bold uppercase gap-y-1">
            <h1 class="text-3xl text-center">{{ title }}</h1>
            <span class="text-xl">{{ subTitle }}</span>
        </div>
    </div>
</template>
  