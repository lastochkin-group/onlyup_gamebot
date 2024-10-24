<script setup>
    import { ref, watch } from 'vue'
    import { Icon } from '@iconify/vue'

    const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
    })

    const emit = defineEmits(['close'])

    const isVisible = ref(props.isOpen)

    watch(() => props.isOpen, (newValue) => {
        isVisible.value = newValue
    })

    const closeSheet = () => {
        isVisible.value = false
        emit('close')
    }
</script>

<template>
  <Teleport to="body">
    <transition name="fade">
      <div v-show="isVisible" class="fixed inset-0 z-50 bg-[#00000030]" @click.self="closeSheet">
        <transition name="slide-bottom">
          <div 
            v-show="isVisible"
            class="absolute inset-x-0 bottom-6 bg-bg_color transform flex flex-col h-80 rounded-3xl mx-4"
          >
            <div 
            class="z-10 aspect-square flex h-14 justify-center items-center absolute right-0 top-0 rounded-2xl text-xl"
            @click="closeSheet"
            >
            <Icon icon="mingcute:close-fill" />
          </div>
            <div class="overflow-y-auto flex-grow p-4">
              <slot></slot>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </Teleport>
</template>