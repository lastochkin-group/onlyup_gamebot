<script setup>
  import { Icon } from '@iconify/vue'
</script>

<template>
    <div class="flex justify-between items-center gap-x-2">
        <button @click="() => {}" class="flex justify-center items-center h-14 bg-accent_color w-full rounded-[20px] text-accent_text_color uppercase font-semibold">Click to Invite Fren</button>
        <button @click="() => {}" class="flex justify-center items-center h-14 aspect-square bg-accent_color rounded-[20px] text-accent_text_color">
            <Icon icon="solar:copy-linear" class="text-xl" />
        </button>
    </div>
</template>