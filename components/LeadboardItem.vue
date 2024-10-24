<script setup>
    const props = defineProps({
        place: {
            type: Number,
            default: 0
        },
        name: {
            type: String,
            default: 'Player'
        },
        score: {
            type: Number,
            default: 0
        },
        owner: {
            type: Boolean,
            default: false
        }
    })
</script>

<template>
    <div :class="['flex justify-between items-center bg-secondary_bg_color rounded-3xl px-4 py-2.5', owner && 'outline-2 outline-accent_color outline']">
        <div class="flex gap-x-4 items-center">
            <Avatar :name="name" />

            <div class="flex flex-col">
                <span class="text-sm font-semibold line-clamp-1">{{ name }}</span>
                <span class="text-xs text-hint_color font-medium">#{{ place.toLocaleString('en-EN') }}</span>
            </div>
        </div>

        <span class="text-sm font-bold text-nowrap">{{ score.toLocaleString('en-EN') }} М</span>
    </div>
</template>