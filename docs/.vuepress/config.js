const { fs, path } = require('@vuepress/shared-utils')

module.exports = ctx => ({
  dest: 'docs/dist',
  
  locales: {
    '/': {
      lang: 'en-US',
      title: 'MetaMask Docs',
      description: 'Welcome'
    }
    // '/zh/': {
    //   lang: 'zh-CN',
    //   title: 'MetaMask Developer Documentation',
    //   description: 'Vue 驱动的静态网站生成器'
    // }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  theme: '@vuepress/vue',
  themeConfig: {
    repo: 'vuejs/vuepress',
    editLinks: true,
    docsDir: 'packages/docs/docs',
    // #697 Provided by the official algolia team.
    // algolia: ctx.isProd ? ({
    //   apiKey: '3a539aab83105f01761a137c61004d85',
    //   indexName: 'vuepress'
    // }) : null,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/guide/': getGuideSidebar('MetaMask Updates','Guide', 'API Reference','Best Practices'),
        }
      }
      // '/zh/': {
      //   label: '简体中文',
      //   selectText: '选择语言',
      //   editLinkText: '在 GitHub 上编辑此页',
      //   lastUpdated: '上次更新',
      //   nav: require('./nav/zh'),
      //   sidebar: {
      //     '/zh/api/': getApiSidebar(),
      //     '/zh/guide/': getGuideSidebar('指南', '深入','深入'),
      //   }
      // }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/google-analytics', {
      ga: 'UA-128189152-1'
    }],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>',
    }],
    ['container', {
      type: 'upgrade',
      before: info => `<UpgradePath title="${info}">`,
      after: '</UpgradePath>',
    }],
  ],
  extraWatchFiles: [
    '.vuepress/nav/en.js',
    // '.vuepress/nav/zh.js',
  ]
})

function getGuideSidebar (groupA, groupB, groupC, groupD) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        'release-notes',
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'getting-started',
        'common-terms',
        'initializing-dapps',
        'accessing-accounts',
        'sending-transactions',
      ]
    },
    {
      title: groupC,
      collapsable: false,
      children: [
        'ethereum-provider',
        'json-rpc-api',
        'experimental-apis',
        'signing-data',
      ]
    },
    {
      title: groupD,
      collapsable: false,
      children: [
        'registering-function-names',
        'registering-your-token',
        'defining-your-icon',
      ]
    }
  ]
}

const officalPlugins = fs
  .readdirSync(path.resolve(__dirname, '../plugin/official'))
  .map(filename => 'official/' + filename.slice(0, -3))
  .sort()