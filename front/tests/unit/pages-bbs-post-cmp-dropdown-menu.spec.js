import { assert } from 'chai'
import CmpDropdownMenu from '@/pages/bbs/post/cmp-dropdown-menu'
import { wrapperShallowMount } from './before'

const wrapper = wrapperShallowMount(CmpDropdownMenu)

const wrpDropdown = wrapper.find('div.dropdown-menu')
const wrpDropdownItemFirst = wrapper.find('a.dropdown-item:nth-child(1)')
const wrpDropdownItemSecond = wrapper.find('a.dropdown-item:nth-child(2)')

describe('pages/bbs/post/cmp-dropdown-menu', () => {
  it('open this dropdown', () => {
    wrapper.setData({ isShow: true })
    assert.include(wrpDropdown.classes(), 'show')
  })

  it('close this dropdoen', () => {
    wrapper.setData({ isShow: false })
    assert.notInclude(wrpDropdown.classes(), 'show')
  })

  it('comment', () => {
    wrapper.setData({ isComment: true })
    assert.equal(wrpDropdownItemFirst.text(), 'Delete')
  })

  it('not comment', () => {
    wrapper.setData({ isComment: false })
    assert.equal(wrpDropdownItemFirst.text(), 'Edit')
    assert.equal(wrpDropdownItemSecond.text(), 'Delete')
  })
})