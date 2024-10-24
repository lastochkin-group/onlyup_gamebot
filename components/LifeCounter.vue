<script setup>

    import { Icon } from '@iconify/vue'

    defineProps({
        lifes: {
            type: Number,
            default: 0
        }
    })

</script>

<template>
    <nuxt-link to="/store" class="flex items-center justify-center gap-x-2 bg-secondary_bg_color rounded-2xl h-11 px-4">
        <Icon icon="typcn:heart-full-outline" class="text-accent_color text-2xl" />
        <span class="font-bold text-lg">{{ lifes }}</span>
        <span class="flex justify-center items-center overflow-hidden bg-pay_gradient rounded-full w-5 aspect-square shrink-0">
            <Icon icon="heroicons-solid:plus-sm" class="text-accent_text_color text-lg" />
        </span>
    </nuxt-link>
</template>