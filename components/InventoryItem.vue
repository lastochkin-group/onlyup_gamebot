<script setup>

    import { Icon } from '@iconify/vue'

    defineProps({
        count: {
            type: Number,
            default: 1
        }
    })

</script>

<template>
     <button class="bg-secondary_bg_color relative flex justify-center aspect-square items-center rounded-3xl">
        <Icon icon="tabler:jetpack-filled" class="text-[52px] text-accent_color" />
        <transition name="bounce" appear>
            <span v-if="count > 0" class="w-10 absolute z-[2] -bottom-4 right-0 aspect-square rounded-full flex justify-center items-center bg-accent_gradient font-bold text-accent_text_color">{{ count }}</span>
        </transition>
    </button>
</template>