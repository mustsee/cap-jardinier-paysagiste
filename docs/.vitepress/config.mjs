import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/cap-jardinier-paysagiste/',
  title: "CAPA Jardinier-paysagiste",
  description: "2025-2026",
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Botanique', link: '/botanique-introduction' }
    ],

    sidebar: [
      {
        text: 'Botanique',
        items: [
          { text: 'Introduction à la botanique', link: '/botanique-introduction' },
          { text: 'Reconnaissance des arbres', link: '/botanique-arbres' }
        ]
      }
    ]
  }
})
