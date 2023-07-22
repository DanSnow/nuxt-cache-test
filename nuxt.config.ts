// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    storage: {
      cache: {
        driver: 'cloudflare-kv-binding',
      },
    },
  },
  routeRules: {
    '/**': {
      cache: {
        swr: true,
        maxAge: 10,
        staleMaxAge: 3,
      },
    },
  },
})
