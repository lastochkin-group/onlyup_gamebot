<script setup>

    const contacts = [
        { id: 0, title: 'Our news - Official channel', link: 'https://t.me/OnlyUpNews' },
        { id: 1, title: 'Support team', link: 'https://t.me/OnlyUpSupportBot' }
    ]
    
</script>

<template>
    <div class="flex flex-col gap-y-4">
      <h4 class="px-4 text-lg font-bold uppercase">Contacts:</h4>

      <Contact v-for="el in contacts" :key="el.id" :title="el.title" :link="el.link" />
    </div>
</template>