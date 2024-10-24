<script setup>

    defineProps({
        dropDate: {
            type: String,
            default: "December 1, 2024"
        }
    })

    const metrics = [
        { id: 0, title: 'in - APP PURCHASES', count: 70, percentType: true },
        { id: 1, title: 'in - APP ADVERTISING', count: 10, percentType: true },
        { id: 2, title: 'INVESTMENTS OF OUR PARTNERS', count: 20, percentType: true }
    ]

</script>

<template>
    <div class="bg-secondary_bg_color rounded-3xl uppercase flex flex-col">
        <div class="flex flex-col p-4 gap-y-4">
            <h3 class="font-bold text-lg">Where does the money come from?</h3>

            <div class="grid grid-cols-2 gap-4">
                <div v-for="metric in metrics" :key="metric.id" class="flex flex-col text-sm justify-between">
                    <span class="font-semibold">{{ metric.title }}</span>
                    <span v-if="metric.percentType" class="text-lg font-bold text-accent_color">{{ metric.count }}%</span>
                    <span v-else class="text-lg font-bold text-accent_color">{{ metric.count ? metric.count.toLocaleString('en-EN') : 0 }}</span>
                </div>
            </div>
        </div>

        <ConnectWalletButton />

        <div class="flex flex-col p-4 gap-y-4">
            <span class="text-lg font-bold">When will we receive them?</span>
            <h2 class="text-3xl font-bold bg-accent_gradient bg-clip-text text-transparent">{{ dropDate }}</h2>
        </div>
    </div>
</template>
  