<script setup>
    defineProps({
        isActive: {
            type: Boolean,
            default: false
        }
    })
</script>

<template>
  <button :disabled="!isActive" :class="['w-full aspect-square rounded-3xl relative overflow-hidden bg-accent_color', isActive ? 'wave-animation' : 'opacity-40 active:opacity-40']">
    <span v-if="isActive" class="uppercase font-bold text-sm text-accent_text_color wave-text">Select</span>
  </button>
</template>

<style scoped>
.button {
  position: relative;
  z-index: 1;
}

.wave-animation::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  background-color: #FFFFFF40;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  animation: waveEffect 4s infinite;
  z-index: 0;
}

.wave-text {
  position: relative;
  z-index: 1;
  animation: textFade 2s infinite;
}

@keyframes waveEffect {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0.8;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 0;
  }
}

@keyframes textFade {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
