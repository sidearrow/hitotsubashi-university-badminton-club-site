import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import PagesTopIndex from '@/pages/top/Index.vue'

describe('@/pages/top/Index.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(PagesTopIndex)
    console.log(wrapper)
    console.log("323")
    expect("333").to.equal('333')
  })
})