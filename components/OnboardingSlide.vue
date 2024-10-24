<script setup>
    defineProps({
        title: {
            type: String,
            default: "Onboarding title"
        },
        description: {
            type: String,
            default: "Description"
        }
    })
</script>

<template>
    <div class="flex flex-col items-center justify-center gap-y-4">
        <h1 class="text-2xl font-bold text-center">{{ title }}</h1>
        <p class="text-hint_color">{{ description }}</p>
    </div>
</template>