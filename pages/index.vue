<template>
  <transition name="fade" appear>
    <div class="flex flex-col gap-y-6">
      <div class="flex flex-col justify-center items-center gap-y-2">
        <BagePosition />
        <Counter :value="200" />
      </div>

      <LeadboardWidget>
        <div class="p-4 flex">
          <nuxt-link to="/teams" class="bg-bg_color flex w-full h-11 rounded-2xl justify-center items-center uppercase font-semibold text-accent_color">
            <span>All teams</span>
          </nuxt-link>
        </div>
      </LeadboardWidget>

      <Tasks />
    </div>
  </transition>

  <BottomMenu :activePage=1>
    <transition name="slide-fade" mode="out-in">
        <div class="flex justify-between items-center gap-x-2">
            <nuxt-link to="/game" class="flex justify-center items-center h-14 bg-accent_color w-full rounded-[20px] text-accent_text_color uppercase font-semibold">Play now</nuxt-link>
        </div>
    </transition>
  </BottomMenu>
</template>
  