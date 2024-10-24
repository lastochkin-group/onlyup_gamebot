<script setup>
    import { onMounted } from 'vue'

    const webapp = useNuxtApp().$webapp

    onMounted(() => {
        webapp.ready()
        webapp.disableVerticalSwipes()
        webapp.expand()
    })
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>