import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/jetlej/Projects/Token Race/dev/docs-test/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/jetlej/Projects/Token Race/dev/docs-test/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
