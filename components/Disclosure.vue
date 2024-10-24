<script setup>

import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import autoAnimate from "@formkit/auto-animate"

const props = defineProps({
    title: {
        type: String,
        default: "Title"
    },
    description: {
        type: String,
        default: "Кстати, сделанные на базе интернет-аналитики выводы, превозмогая сложившуюся непростую экономическую ситуацию, ограничены исключительно образом мышления. Кстати, сторонники тоталитаризма в науке формируют глобальную экономическую сеть и при этом — объективно рассмотрены соответствующими инстанциями. Являясь всего лишь частью общей картины, представители современных социальных резервов, инициированные исключительно синтетически, заблокированы в рамках своих собственных рациональных ограничений."
    }
})

const dropdown = ref()
const show = ref(false)

onMounted(() => {
  autoAnimate(dropdown.value)
})

</script>

<template>
    <div ref="dropdown" class="bg-secondary_bg_color rounded-3xl overflow-hidden transition-all">
        <button @click="show = !show" class="flex w-full p-4 justify-between items-center">
            <h5 class="font-semibold" v-html="title" />
            <Icon icon="ep:arrow-up-bold" class="transition-all duration-300" :class="show && '-rotate-180'" />
        </button>

        <div v-if="show" class="px-4 pb-4">
            <p class="text-sm whitespace-pre-wrap">{{ description }}</p>
        </div>
    </div>
</template>

