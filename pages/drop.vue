<template>
  <transition name="fade" appear>
    <div class="flex flex-col gap-y-6">
        <DropHero />
        <DropStat />
        <DropTerms />
        <DropContacts />
    </div>
  </transition>

  <BottomMenu :activePage=2 />
</template>
  