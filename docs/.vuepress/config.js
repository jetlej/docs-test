module.exports = {
  title: 'Token Race',
  description: 'The first blockchain multiplayer board game',
  base: '/docs-test/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'https://tokenrace.co/icon.png',
      },
    ],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'application-name', content: 'Token Race' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Token Race' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'white' },
    ],
  ],
  themeConfig: {
    lang: 'en-US',
    logo: '/images/icon.svg',
    contributors: false,
    sidebar: [
      {
        isGroup: true,
        text: 'Get Started',
        children: ['/get-started/metamask.md', '/get-started/betting.md'],
      },
      {
        isGroup: true,
        text: 'How to Play',
        children: [],
      },
    ],
    navbar: [
      {
        text: 'Play Token Race',
        link: 'https://tokenrace.co',
      },
    ],
  }
}