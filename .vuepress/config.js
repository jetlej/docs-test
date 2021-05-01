module.exports = {
  title: 'Token Race',
  description: 'The first blockchain multiplayer board game',
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