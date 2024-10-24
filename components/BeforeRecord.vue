<script setup>
    const props = defineProps({
        recordMeters: {
            type: Number,
            default: 200
        },
        score: {
            type: Number,
            default: 0
        }
    })

    const message = computed(() => {
        if (props.score >= props.recordMeters) {
            return 'The record is broken!'
        } else {
            return `Before the record: ${(props.recordMeters - props.score).toLocaleString('en-EN')}`
        }
    })
</script>

<template>
    <div class="flex items-center gap-x-1 font-semibold text-sm justify-center w-full bg-secondary_bg_color rounded-2xl h-11">
        <span>{{ message }}</span>
    </div>
</template>