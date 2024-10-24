<script setup>
    import { Icon } from '@iconify/vue'
    defineProps({
        place: {
            type: Number,
            default: 10000
        }
    })
</script>

<template>
    <nuxt-link to="/players" class="flex items-center gap-x-1 bg-accent_color w-fit rounded-xl text-sm font-bold text-accent_text_color px-4 h-8">
      <span># {{ place.toLocaleString('en-EN') }}</span>
      <Icon icon="ep:arrow-right-bold" class="text-xs" />
    </nuxt-link>
</template>