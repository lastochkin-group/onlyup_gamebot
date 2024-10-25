<script setup>

    import { ref, onMounted } from 'vue'

    defineProps({
        leaders: {
            type: Array,
            default: [
                { id: 0, name: 'Player/Team', score: 100000, place: 3 },
                { id: 1, name: 'Player/Team', score: 200000, place: 2 },
                { id: 2, name: 'Player/Team', score: 300000, place: 1 }
            ]
        }
    })

    const heights = ref({
        1: 0,
        2: 0,
        3: 0,
    })

    onMounted(() => {
        setTimeout(() => {
            heights.value = {
                1: 220,
                2: 170,
                3: 120,
            }
        }, 100)
    })

</script>

<template>
    <div class="bg-secondary_bg_color flex flex-col justify-end rounded-3xl overflow-hidden pt-6 min-h-80">
       <div class="grid grid-cols-3 items-end rounded-b-3xl overflow-hidden">
            <nuxt-link v-for="leader in leaders" :key="leader.id" :to="'/team/' + leader.id" :class="['flex flex-col gap-y-3', leader.place === 1 && 'order-2', leader.place === 2 && 'order-1', leader.place === 3 && 'order-3']">
                <div class="flex flex-col items-center justify-center gap-y-1.5">
                    <Avatar :name="leader.name" />
                    <span class="text-sm font-bold line-clamp-2 text-center">{{ leader.name }}</span>
                </div>

                <div :style="{ height: heights[leader.place] + 'px', transition: 'height 0.7s ease-in-out' }" :class="['bg-accent_gradient flex flex-col justify-between items-center py-2.5 overflow-hidden', leader.place === 1 && 'rounded-t-xl']">
                    <span :class="['text-accent_text_color opacity-50 text-sm uppercase font-bold text-nowrap', leader.score > 100000000 && 'text-[10px]']">{{ leader.score.toLocaleString('en-EN') }} M</span>
                    <span class="text-[48px] font-bold text-accent_text_color">{{ leader.place }}</span>
                </div>
            </nuxt-link>
       </div>

        <slot />
    </div>
</template>