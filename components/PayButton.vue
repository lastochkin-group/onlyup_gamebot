<script setup>
    defineProps({
        title: {
            type: String,
            default: "Pay"
        }
    })

    const emit = defineEmits(['mainClick'])
</script>

<template>
     <button @click="emit('mainClick')" class="flex justify-center items-center h-14 bg-pay_gradient w-full rounded-[20px] text-accent_text_color uppercase font-semibold gap-x-1" v-html="title" />
</template>