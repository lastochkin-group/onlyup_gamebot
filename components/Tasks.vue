<script setup>
    import { ref } from 'vue'

    const activeTab = ref(0)

    const switchTab = (tabId) => {
        if (activeTab.value === tabId) return
        activeTab.value = tabId
    }
</script>

<template>
    <div class="flex flex-col gap-y-4">
        <div class="flex justify-around items-center font-bold text-hint_color">
            <button @click="switchTab(0)" :class="[activeTab === 0 && 'text-text_color', 'w-1/2 h-8']">Daily tasks</button>
            <button @click="switchTab(1)" :class="[activeTab === 1 && 'text-text_color', 'w-1/2 h-8']">
                <span class="relative">
                    <span>All tasks</span>
                    <span class="flex absolute top-0 -right-4 h-2 aspect-square bg-accent_color rounded-full" />
                </span>
            </button>
        </div>

        <transition name="fade" mode="out-in">
            <div v-if="activeTab === 0" class="flex flex-col gap-y-2">
                <TaskItem title="Daily check-in" />
            </div>

            <div v-else-if="activeTab === 1" class="flex flex-col gap-y-2">
                <TaskItem title="Join in Code Hawk" />
            </div>
        </transition>
    </div>
</template>