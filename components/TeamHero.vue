<script setup>

    defineProps({
        place: {
            type: Number,
            default: 0
        },
        name: {
            type: String,
            default: "Team name"
        },
        username: {
            type: String,
            default: "@username"
        }
    })

</script>

<template>
    <div class="flex flex-col items-center justify-center gap-y-6">

        <div class="flex w-[124px] justify-center items-center aspect-square rounded-3xl bg-secondary_bg_color overflow-hidden">
            <span :class="['font-bold', place < 100 ? 'text-3xl' : 'text-xl']">{{ place.toLocaleString('en-EN') }}</span>
        </div>

        <div class="flex flex-col gap-y-0.5 justify-center items-center">
            <h2 class="text-xl font-bold text-center line-clamp-1">{{ name }}</h2>
            <a href="#" target="_blank" class="font-medium text-hint_color line-clamp-1">{{ username }}</a>
        </div>

    </div>
</template>