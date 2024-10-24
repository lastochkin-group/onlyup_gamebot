<script setup>

  const activeTab = ref(0)
  const switchTab = (indexTab) => {
    activeTab.value = indexTab
  }

  const frens = [
    { id: 0, name: 'Player', place: 1, score: 3000 },
    { id: 1, name: 'User', place: 2, score: 2000 },
    { id: 2, name: 'Superuser', place: 3, score: 1000 }
  ]

  const share = () => {
    console.log('share')
  }

  const copyInviteLink = () => {
    console.log('copyInviteLink')
  }
  
</script>

<template>
  <transition name="fade" appear>
    <div class="flex flex-col gap-y-6">

      <FrenTabs :activeTab="activeTab" @switch="switchTab" />

      <transition name="fade" mode="out-in">
        <div v-if="activeTab === 0" class="flex flex-col gap-y-6">
          <Disclosure 
            title="You invited 3<span class='text-hint_color'>/10</span> friends"
            description="Description"
          />

          <div class="flex flex-col gap-y-2" v-if="frens && frens.length > 0">
            <LeadboardItem v-for="fren in frens" :key="fren.id" :place="fren.place" :name="fren.name" :score="fren.score" />
          </div>
        </div>

        <div v-else-if="activeTab === 1" class="flex flex-col gap-y-6">
          <Disclosure 
            title="Info"
            description="Description"
          />

          <CreateTeamForm />
        </div>
      </transition>
    </div>
  </transition>

  <BottomMenu :activePage=0>
      <transition name="slide-fade" mode="out-in">

        <InviteButton v-if="activeTab === 0" />
        <PayButton v-else-if="activeTab === 1" title="Create a team <span class='opacity-50'>for</span> 1 000 Stars" />

      </transition>
  </BottomMenu>
</template>
  