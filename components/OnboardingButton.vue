<script setup>
    defineProps({
        title: {
            type: String,
            default: "Continue"
        }
    })

    const emit = defineEmits(['submit'])
</script>

<template>
    <div class="fixed bottom-0 left-0 right-0 h-20 px-4 bg-bg_color">
        <button @click="emit('submit', true)" class="bg-accent_color text-accent_text_color w-full h-[60px] rounded-3xl font-bold">{{ title }}</button>
    </div>
</template>