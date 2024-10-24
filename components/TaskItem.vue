<script setup>
    import { Icon } from '@iconify/vue'
    defineProps({
        reward: {
            type: Number,
            default: 1
        },
        title: {
            type: String,
            default: "Task title"
        }
    })
</script>

<template>
     <div class="flex justify-between items-center bg-secondary_bg_color rounded-3xl p-4 gap-x-0.5">
        <div class="flex items-center">
            <div class="flex items-center justify-center shrink-0 gap-x-1 font-bold text-accent_color w-16 overflow-clip">
                <span>+{{ reward.toLocaleString('en-EN') }}</span>
                <Icon icon="solar:heart-bold" class="shrink-0" />
            </div>

            <span class="font-medium text-sm line-clamp-2">{{ title }}</span>
        </div>

        <button class="bg-accent_color h-10 w-20 rounded-3xl shrink-0 text-accent_text_color uppercase font-semibold text-sm">Claim</button>
    </div>
</template>