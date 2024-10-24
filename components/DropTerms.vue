<script setup>

  const terms = [
    { id: 0, title: 'Title', description: 'Description' }
  ]

</script>

<template>
    <div class="flex flex-col gap-y-4">
      <h4 class="px-4 text-lg font-bold uppercase">About our project:</h4>

      <Disclosure v-for="el in terms" :key="el.id" :title="el.title" :description="el.description" />
    </div>
</template>