<script setup>

    import { Icon } from '@iconify/vue'
    import { ref } from 'vue'

    defineProps({
        title: {
            type: String,
            default: "Title"
        },
        description: {
            type: String,
            default: "Description"
        },
        price: {
            type: Number,
            default: 1
        },
        sale: {
            type: Boolean,
            default: false
        }
    })

    const isOpen = ref(false)

    const setModal = () => {
        isOpen.value = !isOpen.value
    }

</script>

<template>
        <Modal :isOpen="isOpen" @close="setModal">
            
        </Modal>

        <div :class="['flex overflow-clip', sale && 'p-1 scale-[102%]']">
            <button @click="setModal" class="flex relative items-center p-4 rounded-3xl bg-secondary_bg_color gap-x-4 w-full">

                <span class="rounded-2xl h-24 aspect-square shrink-0 flex justify-center items-center">
                    <Icon icon="tabler:jetpack-filled" class="text-[52px] text-accent_color" />
                </span>

                <div class="flex flex-col items-start gap-y-2 w-full">
                    <h4 class="font-bold line-clamp-1">{{ title }}</h4>
                    <span class="text-sm line-clamp-2">{{ description }}</span>

                    <button class="flex gap-x-1 mt-1 items-center bg-pay_gradient rounded-2xl h-10 w-full justify-center text-accent_text_color font-bold">
                        <div class="flex gap-x-1 items-center">
                            <span>{{ price.toLocaleString('en-EN') }}</span>
                            <Icon icon="ic:round-star" class="text-lg" />
                        </div>
                    </button>
                </div>
            </button>
        </div>
</template>