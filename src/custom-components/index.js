import Vue from 'vue'

const components = [
  'Text',
]

// 组件注册
components.forEach(key => {
  Vue.component(key,() => import(`@/custom-components/${key}/Component`))
  Vue.component(key+ 'Attr', () => import(`@/custom-components/${key}/Attr`))
})