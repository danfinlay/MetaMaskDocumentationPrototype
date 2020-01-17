/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "10615ff018ca4037e68e44667934e166"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.e43bfc60.css",
    "revision": "996cd4b96f9edff7455a22a84d24b326"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3b205899.js",
    "revision": "84f840b362ded4ffc20ed159cf97dc66"
  },
  {
    "url": "assets/js/11.3e0a37eb.js",
    "revision": "12815bbad5274368d0322845d19573aa"
  },
  {
    "url": "assets/js/12.0e35c033.js",
    "revision": "7ab32053650622e980be7fe2a1d9e3df"
  },
  {
    "url": "assets/js/13.57d1e816.js",
    "revision": "6935cebaac1e6e761d68e1b6f01e4094"
  },
  {
    "url": "assets/js/14.bb4d5581.js",
    "revision": "6ae40ed2747a207d074d144e3552120b"
  },
  {
    "url": "assets/js/15.b9c0f0e4.js",
    "revision": "e948974ac9c6e9fb8fca5d547d18225b"
  },
  {
    "url": "assets/js/16.bd84a16c.js",
    "revision": "dd34bdb73271a1964ba9e96d43999f08"
  },
  {
    "url": "assets/js/17.f5aef698.js",
    "revision": "e23021c2d5e6d18bf222c36151c83839"
  },
  {
    "url": "assets/js/18.7b5725db.js",
    "revision": "41cb2f38e79d04080247c4059139f815"
  },
  {
    "url": "assets/js/19.047683bc.js",
    "revision": "973b060d10e9421bf60c6d994b19ce06"
  },
  {
    "url": "assets/js/20.97f0d4c4.js",
    "revision": "4ae0e2b4177e4e007f1bd28ad8930925"
  },
  {
    "url": "assets/js/21.9029fcfa.js",
    "revision": "00bcfad0cbeead13ce4fe24a6bdc79e1"
  },
  {
    "url": "assets/js/22.3292fd4f.js",
    "revision": "0c6236b57d9aa74314484e2bf9f5ebab"
  },
  {
    "url": "assets/js/23.73707d36.js",
    "revision": "b066dddccb90be8086565e758c24c84e"
  },
  {
    "url": "assets/js/24.b82c26ff.js",
    "revision": "00d5b758992b677c6186bd45c2b8b97d"
  },
  {
    "url": "assets/js/25.d0f57bd0.js",
    "revision": "9e2f35eae44cdd728da331c47302c6af"
  },
  {
    "url": "assets/js/26.81e7d26d.js",
    "revision": "4787f990accc82ca4fb9677e6f38078e"
  },
  {
    "url": "assets/js/27.c0dd89e7.js",
    "revision": "b812ccc94a3015b635f9e0a6075282de"
  },
  {
    "url": "assets/js/28.baadafb4.js",
    "revision": "93f6287e213da98c1701c4bf18bd1e3c"
  },
  {
    "url": "assets/js/29.b36efd6a.js",
    "revision": "19783f52f312f7301d4e2d005565e18f"
  },
  {
    "url": "assets/js/3.36d471d0.js",
    "revision": "904c775cec05f5988d6d0c2c5bcab0da"
  },
  {
    "url": "assets/js/30.fc0110f9.js",
    "revision": "6442327d70aee3beb2846479c682f578"
  },
  {
    "url": "assets/js/31.a0710900.js",
    "revision": "17926cfdfbc6089eda7941bffaabe4e4"
  },
  {
    "url": "assets/js/32.e9110905.js",
    "revision": "a3dfd2bcc961c8ae9981049114ebbad2"
  },
  {
    "url": "assets/js/33.80d0e9e9.js",
    "revision": "506dd18dc2f891d4aeade6d97c657b62"
  },
  {
    "url": "assets/js/34.559082d2.js",
    "revision": "912f0d340a8a9081ed8acaeeb100f836"
  },
  {
    "url": "assets/js/35.6ec70656.js",
    "revision": "5772e89e54f5e85dd05d6f4d02f31e65"
  },
  {
    "url": "assets/js/36.45e5d388.js",
    "revision": "1ed9291bd203c950bcd6ff3681a64210"
  },
  {
    "url": "assets/js/37.d7fe4aba.js",
    "revision": "dea7859757db3e72a881867371a42fda"
  },
  {
    "url": "assets/js/38.7bba7a87.js",
    "revision": "392ff637045b34ea2161f78244bd220a"
  },
  {
    "url": "assets/js/39.5302e8a9.js",
    "revision": "34979d72da01c49b3fcb57bd241fa47c"
  },
  {
    "url": "assets/js/4.2504ff49.js",
    "revision": "ef0f96506776e86e6078cbd6852d31f6"
  },
  {
    "url": "assets/js/40.fbcbf788.js",
    "revision": "04e46f143f12ce55a274467c5e056468"
  },
  {
    "url": "assets/js/41.efb046b5.js",
    "revision": "c308b4d0fcdf51de4a1e1b2ea77b8fde"
  },
  {
    "url": "assets/js/42.c5909b69.js",
    "revision": "08ed4772bed16ca3b11837fb5598ae95"
  },
  {
    "url": "assets/js/43.ff2f5ddd.js",
    "revision": "461010295ff4b436b62b5b74fc4b14e5"
  },
  {
    "url": "assets/js/44.cddb00f2.js",
    "revision": "fee0f53cf7396a9f072533c0ec35af7d"
  },
  {
    "url": "assets/js/45.3b7e03ef.js",
    "revision": "83f11e0175866ef05aca0799d8a2bab1"
  },
  {
    "url": "assets/js/46.20b985fa.js",
    "revision": "c08da640054eb70cb3be5c4d7d015566"
  },
  {
    "url": "assets/js/47.959b7b40.js",
    "revision": "d84345e6ac878322af40b3eef53090e5"
  },
  {
    "url": "assets/js/48.58d9f045.js",
    "revision": "215db5ac7e5d30def45f1782ec65c038"
  },
  {
    "url": "assets/js/49.13dc3920.js",
    "revision": "9f2874f4d9e7e5815d57b3ef5f72bc67"
  },
  {
    "url": "assets/js/5.8f65a0bb.js",
    "revision": "51d567edc6e0fceac7f38b3570ce583a"
  },
  {
    "url": "assets/js/50.d2acbb06.js",
    "revision": "e8bf5bcf03bc0d3b1a4e7c769dd1f9c9"
  },
  {
    "url": "assets/js/51.0e48123f.js",
    "revision": "b0ab2254ffeb66e432259f30449b4e5a"
  },
  {
    "url": "assets/js/52.559cf44d.js",
    "revision": "3fbfbccecefd2f33b2d74b9f3534e3dc"
  },
  {
    "url": "assets/js/53.ed1a718d.js",
    "revision": "e024249491f7290f23f10b53fd5fa73c"
  },
  {
    "url": "assets/js/54.836d7b62.js",
    "revision": "8f1c00222c1309fc6da9910832ba1059"
  },
  {
    "url": "assets/js/6.397b307b.js",
    "revision": "845d27d395a8ce94f6bf3836c448c6ef"
  },
  {
    "url": "assets/js/7.9da6f2eb.js",
    "revision": "22cf6763e7723cdfb2938ac8f8802814"
  },
  {
    "url": "assets/js/8.5a7a1fa6.js",
    "revision": "0426aa6e635dd86ee18198d39dc1e4ab"
  },
  {
    "url": "assets/js/9.3246a401.js",
    "revision": "213655a11463dca448bff76533da54a2"
  },
  {
    "url": "assets/js/app.c95b0050.js",
    "revision": "ece97d24aa7d8025c1b8788236b9c60d"
  },
  {
    "url": "assets/js/vendors~notification.3d0fb8da.js",
    "revision": "e03a873b6c02acb756760f161a166d8d"
  },
  {
    "url": "config/index.html",
    "revision": "028232fe0a551282bead09a3068778ee"
  },
  {
    "url": "ethereum-metamask-chrome.png",
    "revision": "79226bac078ce93a58b74aff1a8a6aa3"
  },
  {
    "url": "faq/index.html",
    "revision": "783e0d9a770dbc16198d68a82e7c1244"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "e461687d59469405655370b7b4849abd"
  },
  {
    "url": "guide/assets.html",
    "revision": "c626f0cc9394468cce6b56e0372df9fe"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "364b3a4a183368144112a4d81e3f4f3b"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "1f57259b9fb15810d30c0645ce5d7f89"
  },
  {
    "url": "guide/deploy.html",
    "revision": "699b12e3ec56b9d6fe7d9065d2f5a704"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "f8c959e0dbf0df62b5e3beed8c4913ab"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "7a98f339ba790e2df5815bd41c423a9d"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "e4e8925021fa21f8bda71a3c64ef4c73"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a00cf27e1e832dae95923c5886b70425"
  },
  {
    "url": "guide/index.html",
    "revision": "d8effc2799a1d52565ebd23a74b7ebbf"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "582c07012233d8a54f7aaa8b2583ddf5"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "c1b8aec9ecd1411e95ef67a52ca5545c"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "66b7a3ccadbe584940f47d5984c84b85"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "62ac8693597718f0462629f2fbe7371f"
  },
  {
    "url": "guide/release-notes.html",
    "revision": "306762717f18072d5af621b6e8bf384f"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "8c5cdd6224dc2d1812c98f24d0ab3ab7"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "7646c2f5f7e49ed85a9108247bf2f8bf"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "b29c91259b5cb4d20a90a435e05e27ea"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "fd0804f699b55536cee642264ea76739"
  },
  {
    "url": "plugin/index.html",
    "revision": "409e611ad125ca9ba6324794cecfe982"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "21a1fcc7792927ab5bbdb1f4cf6dcde9"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "ecbd1d12ed3c59ed2c8fc2d3380afe04"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "819a2087ac8f755b756a364e56c62afc"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "4912b68c86a30a2ddf6a373ae6c6aae5"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "c14e98f8092ae6eb57838ad82855e5d3"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "7aa0eb4f9f6b85d5c8b4324b16a9bb3f"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "640551b1a0e07ec981d42b7bf9dcdb35"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "233ba3736b90669a4695c3393ed33d7e"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "38bec52ead099845166505210ab807ba"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "22e18d6cb397c99e765eb931ef56a46f"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "d4e93414edce7e6e4bfe2fafa1ea3d59"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "901b8a618ea5286bd7f59f2d5c46b51b"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "d3ebac6c813f0163b9d8a95a3bada605"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "f80cb1ff5456eaa6115cb577559aa711"
  },
  {
    "url": "theme/index.html",
    "revision": "be39642af331aed2f9563b5319e9623e"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "5808615346d34757ac04a8d8f58a0f2a"
  },
  {
    "url": "theme/option-api.html",
    "revision": "0814e151aa36b0e4455b19542d6f1cfe"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "163a4fb78499aea1570eb2f040cf0e3f"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "13759c3fe218d43a0f14056d947c0f0e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
