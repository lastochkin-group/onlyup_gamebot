export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
        nuxtApp.provide('webapp', window.Telegram?.WebApp)
    }
})
