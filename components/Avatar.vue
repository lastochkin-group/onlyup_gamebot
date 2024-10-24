<script setup>
    import stringToColor from '../utils/stringToColor'
    import isColorDark from '../utils/isColorDark'

    const props = defineProps({
        name: {
            type: String,
            default: 'Player'
        }
    })

    let avatarColor = stringToColor(props.name?.slice(0, 2))
    let textColor = isColorDark(avatarColor) ? '#FFFFFF' : '#000000'
</script>

<template>
   <div :style="{ backgroundColor: avatarColor, color: textColor }" class="w-11 h-11 shrink-0 rounded-[20px] flex items-center justify-center text-sm font-bold uppercase">{{ name?.slice(0,2) }}</div>
</template>