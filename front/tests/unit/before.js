import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

export const wrapperShallowMount = (cmp) => {
  return shallowMount(cmp, {
    localVue,
    router,
  })
}