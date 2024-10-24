<script setup>
  import { Icon } from '@iconify/vue'
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
        <div class="relative flex flex-col gap-y-6">

            <transition name="bounce" appear>
                <button class="flex absolute top-0 right-0 justify-center items-center w-14 aspect-square rounded-3xl">
                    <Icon icon="ci:exit" class="text-3xl text-hint_color" />
                </button>
            </transition>

            <TeamHero 
                :place="3"
                name="Captains Bay [Official channel]"
                username="@captainsbay"
            />

            <Contact 
                title="Our channel"
            />

            <div class="flex flex-wrap gap-2 justify-between items-center px-4">
                <span class="flex gap-x-1 font-bold text-sm">
                    <span>Players:</span>
                    <span class="text-accent_color">257 000</span>
                </span>

                <span class="flex gap-x-1 font-bold text-sm">
                    <span>Meters:</span>
                    <span class="text-accent_color">257 000 000</span>
                </span>
            </div>

            <div class="flex flex-col gap-y-2">
                <LeadboardItem v-for="el in 3" />
            </div>
        </div>
    </transition>

    <BottomMenu>
        <transition name="slide-fade" mode="out-in">

            <div class="flex justify-between items-center gap-x-2">
                <button class="flex justify-center items-center h-14 bg-accent_color w-full rounded-[20px] text-accent_text_color uppercase font-semibold">Join</button>
            </div>

        </transition>
    </BottomMenu>
</template>