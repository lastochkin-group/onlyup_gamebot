<script setup>

    const connectButtonClicked = () => {
        console.log('Connect Wallet')
    }

</script>

<template>
    <div class="flex flex-col justify-center items-center bg-accent_gradient p-6 rounded-3xl gap-y-3">
        <span class="font-bold text-accent_text_color">How to get rewards?</span>
        <button @click="connectButtonClicked" class="bg-white text-accent_color w-full rounded-2xl h-12 uppercase font-bold text-sm">Connect wallet</button>
    </div>
</template>