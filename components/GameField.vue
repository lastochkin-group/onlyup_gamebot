<template>
     <div class="flex flex-col overflow-hidden fade-out-mask">
        <span class="w-full flex justify-center font-bold text-sm p-2 text-accent_color">20 M</span>

        <div class="grid grid-cols-4 gap-2">
            <GameButton v-for="el in 4" />
        </div>

        <span class="w-full flex justify-center font-bold text-sm p-2 text-accent_color">10 M</span>

        <div class="grid grid-cols-4 gap-2">
            <GameButton v-for="el in 4" :isActive="true" />
        </div>

        <span class="w-full flex justify-center font-bold text-sm p-2 text-accent_color">0 M</span>
    </div>
</template>