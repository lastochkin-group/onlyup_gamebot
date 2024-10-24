<script setup>

    import { useRouter } from 'vue-router'
    const router = useRouter()

    const mainButtonClicked = (e) => {
        router.push('/')
    }

</script>

<template>
    <transition name="fade" appear>
        <div class="relative flex justify-center items-center h-screen">
            <OnboardingSlide />
            <OnboardingButton @submit="mainButtonClicked" />
        </div>
    </transition>
</template>