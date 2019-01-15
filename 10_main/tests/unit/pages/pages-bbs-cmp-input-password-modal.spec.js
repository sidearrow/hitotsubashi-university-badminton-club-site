import { assert } from 'chai'
import CmpInputPasswordModal from '@/pages/bbs/cmp-input-password-modal'
import { wrapperShallowMount } from './before'

const wrapper = wrapperShallowMount(CmpInputPasswordModal)

const wrpModal = wrapper.find('div.modal')
const wrpModalBack = wrapper.find('div.modal-backdrop')

describe('pages/bbs/cmp-input-password-modal', () => {
  it('open this modal', () => {
    wrapper.setData({ isOpen: true })
    assert.include(wrpModal.classes(), 'd-block')
    assert.include(wrpModalBack.classes(), 'show')
    assert.include(wrpModalBack.classes(), 'd-block')
  })

  it('close this modal', () => {
    wrapper.setData({ isOpen: false })
    assert.include(wrpModal.classes(), 'd-none')
    assert.include(wrpModalBack.classes(), 'd-none')
    assert.notInclude(wrpModalBack.classes(), 'show')
  })
})