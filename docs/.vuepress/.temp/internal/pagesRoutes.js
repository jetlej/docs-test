import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","Hello",["/index.html","/README.md"]],
  ["v-4637ab09","/betting/","Betting",["/betting/index.html","/get-started/betting.html","/get-started/betting.md"]],
  ["v-8115ddf6","/metamask/","MetaMask",["/metamask/index.html","/get-started/metamask.html","/get-started/metamask.md"]],
  ["v-3706649a","/404.html","",[]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
