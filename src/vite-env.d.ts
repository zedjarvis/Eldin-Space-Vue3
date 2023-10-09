/// <reference types="vite/client" />
/// <reference types="vue3-compare-image/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
