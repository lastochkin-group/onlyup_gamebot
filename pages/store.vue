<script setup>
  import { onMounted, onUnmounted } from 'vue'
  import { useRouter } from 'vue-router'

  const webapp = useNuxtApp().$webapp
  const router = useRouter()

  const back = () => {
      if (window.history.length > 1) {
          router.go(-1)
      }
  }

  onMounted(() => {
    webapp.onEvent('backButtonClicked', back)
    webapp.BackButton.show()
  })

  onUnmounted(() => {
    webapp.offEvent('backButtonClicked', back)
    webapp.BackButton.hide()
  })
</script>

<template>
    <transition name="fade" appear>
        <div class="flex flex-col gap-y-6">
            <div class="flex justify-between items-center px-4">
                <h4 class="text-lg font-bold uppercase">Inventory:</h4>
                <LifeCounter />
            </div>

            <div class="grid grid-cols-3 gap-2">
                <InventoryItem v-for="el in 4" />
            </div>

            <div class="flex justify-between items-center px-4">
                <h4 class="text-lg font-bold uppercase">Special offers:</h4>
            </div>

            <div class="flex flex-col gap-y-2">
                <StoreItem :sale="true" />
            </div>
        </div>
    </transition>

    <BottomMenu>
        <transition name="slide-fade" mode="out-in">
            <MainButton @main-click="back" title="Back" />
        </transition>
    </BottomMenu>
</template>