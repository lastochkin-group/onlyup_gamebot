<script setup>
    import { Icon } from '@iconify/vue'

    defineProps({
        title: {
            type: String,
            default: "Contact title"
        },
        link: {
            type: String,
            default: "#"
        }
    })
</script>

<template>
    <a :href="link" target="_blank" class="bg-secondary_bg_color rounded-3xl p-4 flex gap-x-4 items-center">
        <span class="w-10 shrink-0 aspect-square rounded-full flex justify-center items-center bg-accent_gradient">
            <Icon icon="mingcute:telegram-fill" class="text-accent_text_color text-xl" />
        </span>

        <span class="font-medium">{{ title }}</span>
    </a>
</template>