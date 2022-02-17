module.exports = {
  lang: 'en-US',
  title: 'Lando',
  description: 'Lando is the best local development environment option for Go, the fastest way to build modern web apps.',
  base: '/go/',
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1'}],
    ['link', {rel: 'icon', href: '/go/favicon.ico', size: 'any'}],
    ['link', {rel: 'icon', href: '/go/favicon.svg', type: 'image/svg+xml'}],
    ['link', {rel: 'preconnect', href: '//fonts.googleapis.com'}],
    ['link', {rel: 'preconnect', href: '//fonts.gstatic.com', crossorigin: true}],
    ['link', {rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Lexend:wght@500&display=swap'}],
  ],
  theme: '@lando/vuepress-theme-default-plus',
  themeConfig: {
    landoDocs: true,
    logo: '/images/icon.svg',
    docsDir: 'docs',
    docsBranch: 'main',
    repo: 'lando/go',
    sidebarHeader: {
      enabled: true,
      title: 'Go Plugin',
      icon: '/images/golangicon.png',
    },
    sidebar: [
      {
        text: 'Getting Started',
        link: '/index.md',
      },
      '/config.md',
      '/support.md',
      {text: 'Examples', link: 'https://github.com/lando/go/tree/main/examples'},
      {text: 'Release Notes', link: 'https://github.com/lando/go/releases'},
      '/development.md',
    ],
  },
};