import { assert } from 'chai'
import CmpNavBar from '@/components/cmp-navbar.vue'
import { wrapperShallowMount } from './before'

const wrapper = wrapperShallowMount(CmpNavBar)

const wrpMenuButton = wrapper.find('button.dropdown-toggle')
const wrpMenu = wrapper.find('div.dropdown-menu')
const wrpMenuItem = wrapper.find('router-link-stub.dropdown-item')

describe('components/NavBar.vue', () => {
  it('click the menu button to open the menu', () => {
    wrpMenuButton.trigger('click')
    assert.include(wrpMenu.classes(), 'show')
  })

  it('click the menu button to close the menu', () => {
    wrpMenuButton.trigger('click')
    assert.notInclude(wrpMenu.classes(), 'show')
  })

  it('click the menu item and close the menu', () => {
    wrapper.setData({ isShowMenu: true })
    assert.include(wrpMenu.classes(), 'show')
    wrpMenuItem.trigger('click')
    assert.notInclude(wrpMenu.classes(), 'show')
  })
})
