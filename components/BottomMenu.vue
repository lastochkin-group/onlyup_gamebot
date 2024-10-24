<script setup>
  import { Icon } from '@iconify/vue'
  import { ref, onMounted, nextTick } from 'vue'

  defineProps({
    activePage: {
      type: Number
    }
  })

  const pages = [
    { id: 0, icon: "ci:users", path: "/frens" },
    { id: 1, icon: "solar:graph-up-broken", path: "/" },
    { id: 2, icon: "token:ton", path: "/drop" },
  ]

  const menu = ref(null)
  const menuHeight = ref(0)
  
  onMounted(async () => {
    await nextTick()
    menuHeight.value = menu.value.offsetHeight
  })
</script>

<template>
    <span :style="{ height: menuHeight + 'px' }" class="flex" />

    <div ref="menu" class="fixed bottom-0 left-0 right-0">
      <template v-if="$slots.default">
        <div class="px-4 pb-4 z-10 relative">
          <slot />
        </div>
      </template>
      <div class="bg-secondary_bg_color h-24 pb-6 flex justify-around items-center z-20 relative">
        <nuxt-link v-for="page in pages" :to="page.path" :class="['w-full h-full flex justify-center items-center', activePage === page.id ? 'text-accent_color' : 'text-hint_color']">
          <Icon :icon="page.icon" class="text-3xl" />
        </nuxt-link>
      </div>
    </div>
</template>