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

            <h2 class="text-2xl font-bold uppercase text-center">Top teams</h2>

            <LeadboardWidget>
                <nuxt-link to="/team/1" class="">
                    <LeadboardItem />
                </nuxt-link >
            </LeadboardWidget>

            <PayButton @main-click="router.push('/frens')" title="Create a team" />

            <div class="flex flex-col gap-y-2">
                <h4 class="px-4 text-lg font-bold uppercase">All teams:</h4>
                <LeadboardItem v-for="el in 3" :key="el" />
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