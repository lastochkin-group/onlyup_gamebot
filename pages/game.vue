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
        <div class="flex flex-col justify-center items-center gap-y-2">
          <BagePosition />
          <Counter :value="0" description="Total score" />
        </div>

        <Disclosure />

        <div class="flex gap-x-2 items-center">
          <LifeCounter />
          <BeforeRecord />
        </div>

        <GameField />

        <div class="flex flex-col gap-y-2">
              <h4 class="px-4 text-lg font-bold uppercase">Inventory:</h4>
              <div class="flex justify-between gap-x-2 items-center p-4 rounded-3xl bg-secondary_bg_color">
                  <span class="uppercase font-semibold text-hint_color text-sm">Inventory is empty</span>

                  <nuxt-link to="/store" class="bg-pay_gradient text-accent_text_color uppercase font-semibold rounded-2xl w-24 h-11 flex justify-center items-center text-sm">
                      <span>Store</span>
                  </nuxt-link>
              </div>
        </div>
      </div>
    </transition>

    <BottomMenu>
      <transition name="slide-fade" mode="out-in">
          <div class="flex justify-between items-center gap-x-2">
              <MainButton @main-click="back" title="Back" />
          </div>
      </transition>
    </BottomMenu>
</template>

<style scoped>
.fade-out-mask {
  position: relative;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 100%);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 100%);
}
</style>