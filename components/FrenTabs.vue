<script setup>
    import { ref, computed } from 'vue'

    const props = defineProps({
        activeTab: {
            type: Number,
            default: 0
        }
    })

    const tab = ref(props.activeTab)

    const emit = defineEmits(['switch'])

    const switchTab = (tabIndex) => {
        if (tab.value === tabIndex) return
        tab.value = tabIndex
        emit('switch', tabIndex)
    }

    const sliderPosition = computed(() => {
        return tab.value === 0 ? '0%' : '100%'
    })
</script>

<template>
    <div class="relative flex items-center justify-between bg-secondary_bg_color rounded-3xl h-20 overflow-hidden">
        <div class="absolute inset-0 w-1/2 h-full bg-accent_gradient transition-all duration-300 ease-in-out rounded-3xl" :style="{ transform: `translateX(${sliderPosition})` }"></div>
        <button @click="switchTab(0)" class="relative flex justify-center items-center h-full w-1/2 text-2xl font-bold rounded-3xl transition-colors duration-300" :class="tab === 0 ? 'text-accent_text_color' : 'text-hint_color'">Frens</button>
        <button @click="switchTab(1)" class="relative flex justify-center items-center h-full w-1/2 text-2xl font-bold rounded-3xl transition-colors duration-300" :class="tab === 1 ? 'text-accent_text_color' : 'text-hint_color'">Team</button>
    </div>
</template>