<script setup>

    defineProps({
        title: {
            type: String,
            default: "MainButton"
        }
    })

    const emit = defineEmits(['mainClick'])

</script>

<template>
    <button @click="emit('mainClick')" class="flex justify-center items-center h-14 bg-accent_color w-full rounded-[20px] text-accent_text_color uppercase font-semibold">{{ title }}</button>
</template>