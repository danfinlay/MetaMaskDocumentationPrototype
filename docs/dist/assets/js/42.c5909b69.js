(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{236:function(t,s,e){"use strict";e.r(s);var a=e(2),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vuepress-plugin-pwa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-pwa","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-pwa",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/plugin-pwa"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("PWA plugin")])]),t._v(" "),e("h2",{attrs:{id:"install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[t._v("#")]),t._v(" Install")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D @vuepress/plugin-pwa@next\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR npm install -D @vuepress/plugin-pwa@next")]),t._v("\n")])])]),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/pwa'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[t._v("#")]),t._v(" Options")]),t._v(" "),e("h3",{attrs:{id:"serviceworker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serviceworker","aria-hidden":"true"}},[t._v("#")]),t._v(" serviceWorker")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("boolean")])]),t._v(" "),e("li",[t._v("Default: "),e("code",[t._v("true")])])]),t._v(" "),e("p",[t._v("If set to "),e("code",[t._v("true")]),t._v(", VuePress will automatically generate and register a "),e("a",{attrs:{href:"https://developers.google.com/web/fundamentals/primers/service-workers/",target:"_blank",rel:"noopener noreferrer"}},[t._v("service worker"),e("OutboundLink")],1),t._v(" that caches the content for offline use (only enabled in production).")]),t._v(" "),e("p",[t._v("There is a aliased module "),e("code",[t._v("@sw-event")]),t._v(" module that will also be emitting the following events:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("sw-ready")])]),t._v(" "),e("li",[e("code",[t._v("sw-cached")])]),t._v(" "),e("li",[e("code",[t._v("sw-updated")])]),t._v(" "),e("li",[e("code",[t._v("sw-offline")])]),t._v(" "),e("li",[e("code",[t._v("sw-error")])])]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("PWA NOTES")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("serviceWorker")]),t._v(" option only handles the service worker. To make your site fully PWA-compliant, you will need to provide the Web App Manifest and icons in "),e("code",[t._v(".vuepress/public")]),t._v(". For more details, see "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Manifest",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN docs about the Web App Manifest"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("Also, only enable this if you are able to deploy your site with SSL, since service worker can only be registered under HTTPs URLs.")])]),t._v(" "),e("h3",{attrs:{id:"generateswconfig"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generateswconfig","aria-hidden":"true"}},[t._v("#")]),t._v(" generateSWConfig")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("object")])]),t._v(" "),e("li",[t._v("Default: "),e("code",[t._v("{}")])])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developers.google.com/web/tools/workbox/modules/workbox-build#full_generatesw_config",target:"_blank",rel:"noopener noreferrer"}},[t._v("generateSW config"),e("OutboundLink")],1),t._v(" of workbox-build.")]),t._v(" "),e("h3",{attrs:{id:"updatepopup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updatepopup","aria-hidden":"true"}},[t._v("#")]),t._v(" updatePopup")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("boolean|object")])]),t._v(" "),e("li",[t._v("Default: "),e("code",[t._v("undefined")])])]),t._v(" "),e("p",[t._v("The definition of type "),e("code",[t._v("popupConfig")]),t._v(" is as follows:")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("normalPopupConfig")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// defaults to 'New content is available.'")]),t._v("\n  buttonText"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// defaults to 'Refresh'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("localedPopupConfig")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("localePath"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" normalPopupConfig\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" popupConfig "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" normalPopupConfig "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" localedPopupConfig\n")])])]),e("p",[t._v("This option enables the popup to refresh contents. The popup will be shown when the site is updated (i.e. service worker is updated). It provides "),e("code",[t._v("refresh")]),t._v(" button to allow users to refresh contents immediately.")]),t._v(" "),e("blockquote",[e("p",[t._v("If without the "),e("code",[t._v("refresh")]),t._v(" button, the new service worker will be active after all "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Clients",target:"_blank",rel:"noopener noreferrer"}},[t._v("clients"),e("OutboundLink")],1),t._v(" are closed. This means that visitors cannot see new contents until they close all tabs of your site. But the "),e("code",[t._v("refresh")]),t._v(" button activates the new service worker immediately.")])]),t._v(" "),e("h3",{attrs:{id:"popupcomponent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#popupcomponent","aria-hidden":"true"}},[t._v("#")]),t._v(" popupComponent")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("Default: "),e("code",[t._v("undefined")])])]),t._v(" "),e("p",[t._v("A custom component to replace the default popup component.")]),t._v(" "),e("p",[e("strong",[t._v("Also see:")])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#customize-the-ui-of-sw-update-popup"}},[t._v("Customize the SW-Update Popup UI")])])]),t._v(" "),e("h2",{attrs:{id:"migration-from-0-x"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#migration-from-0-x","aria-hidden":"true"}},[t._v("#")]),t._v(" Migration from 0.x")]),t._v(" "),e("h3",{attrs:{id:"service-worker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#service-worker","aria-hidden":"true"}},[t._v("#")]),t._v(" Service Worker")]),t._v(" "),e("div",{staticClass:"language-diff extra-class"},[e("pre",{pre:!0,attrs:{class:"language-diff"}},[e("code",[t._v("module.exports = {\n"),e("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t._v("- serviceWorker: true,\n")]),e("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v("+ plugins: ['@vuepress/pwa']\n")]),t._v("}\n")])])]),e("h3",{attrs:{id:"sw-update-popup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sw-update-popup","aria-hidden":"true"}},[t._v("#")]),t._v(" SW-Update Popup")]),t._v(" "),e("div",{staticClass:"language-diff extra-class"},[e("pre",{pre:!0,attrs:{class:"language-diff"}},[e("code",[t._v("module.exports = {\n"),e("span",{pre:!0,attrs:{class:"token unchanged"}},[t._v("  themeConfig: {\n")]),e("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t._v('-   serviceWorker: {\n-     updatePopup: {\n-        message: "New content is available.",\n-        buttonText: "Refresh"\n-     }\n-   }\n')]),e("span",{pre:!0,attrs:{class:"token unchanged"}},[t._v("  },\n")]),e("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v('+  plugins: {\n+   \'@vuepress/pwa\': {\n+      serviceWorker: true,\n+      updatePopup: {\n+        message: "New content is available.",\n+        buttonText: "Refresh"\n+      }\n+    }\n+ }\n')]),t._v("}\n")])])]),e("p",[t._v("For i18n user:")]),t._v(" "),e("div",{staticClass:"language-diff extra-class"},[e("pre",{pre:!0,attrs:{class:"language-diff"}},[e("code",[t._v("module.exports = {\n"),e("span",{pre:!0,attrs:{class:"token unchanged"}},[t._v("  themeConfig: {\n    '/': {\n")]),e("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t._v('-     serviceWorker: {\n-       updatePopup: {\n-         message: "New content is available.",\n-         buttonText: "Refresh"\n-       }\n-     }\n')]),e("span",{pre:!0,attrs:{class:"token unchanged"}},[t._v("    },\n    '/zh/': {\n")]),e("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t._v('-     serviceWorker: {\n-       updatePopup: {\n-         message: "发现新内容可用",\n-         buttonText: "刷新"\n-       }\n-     }\n')]),e("span",{pre:!0,attrs:{class:"token unchanged"}},[t._v("    }\n  },\n")]),e("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v('+  plugins: {\n+    \'@vuepress/pwa\': {\n+      serviceWorker: true,\n+      updatePopup: {\n+        \'/\': {\n+          message: "New content is available.",\n+          buttonText: "Refresh"\n+        },\n+        \'/zh/\': {\n+          message: "发现新内容可用",\n+          buttonText: "刷新"\n+        }\n+      }\n+    }\n+  }\n')])])])]),e("p",[t._v("It's worth mentioning that the PWA plugin has above i18n built in, so if you want to use the default i18n directly, you can abbreviate the above configuration as:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/pwa'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      serviceWorker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      updatePopup"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Feel free to submit PRs to improve the default "),e("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/plugin-pwa/lib/i18n.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("i18n configuration"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"customize-the-ui-of-sw-update-popup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#customize-the-ui-of-sw-update-popup","aria-hidden":"true"}},[t._v("#")]),t._v(" Customize the UI of SW-Update Popup")]),t._v(" "),e("p",[t._v("The default sw-update popup component provides a default slot which gives you the ability to fully control the appearance of the popup.")]),t._v(" "),e("p",[t._v("First, you need to create a global component (e.g. "),e("code",[t._v("MySWUpdatePopup")]),t._v(") at "),e("code",[t._v(".vuepress/components")]),t._v(". A simple component created based on the default component is as follows:")]),t._v(" "),e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("SWUpdatePopup")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slot-scope")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ enabled, reload, message, buttonText }"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("my-sw-update-popup"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      {{ message }}"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("reload"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ buttonText }}"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("SWUpdatePopup")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}},[e("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SWUpdatePopup "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/plugin-pwa/lib/SWUpdatePopup.vue'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" SWUpdatePopup "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token style"}},[e("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".my-sw-update-popup")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" right"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fixed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("right")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fff"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid #3eaf7c"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".my-sw-update-popup button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #fefefe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("Then, update your plugin config:")]),t._v(" "),e("div",{staticClass:"language-diff extra-class"},[e("pre",{pre:!0,attrs:{class:"language-diff"}},[e("code",[t._v("module.exports = {\n"),e("span",{pre:!0,attrs:{class:"token unchanged"}},[t._v("   plugins: {\n    '@vuepress/pwa': {\n       serviceWorker: true,\n")]),e("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v("+      popupComponent: 'MySWUpdatePopup',\n")]),e("span",{pre:!0,attrs:{class:"token unchanged"}},[t._v("       updatePopup: true\n     }\n  }\n")]),t._v("}\n")])])]),e("p",[e("strong",[t._v("Also see:")])]),t._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"/guide/using-vue.html#using-components"}},[t._v("VuePress > Using Components")])],1),t._v(" "),e("li",[e("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#scoped-slots",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue > Scoped Slots"),e("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=n.exports}}]);