import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import QuestForm from '../QuestForm.vue'

describe('QuestForm', () => {
  it('renders properly', () => {
    //ARRANGE
    const wrapper = mount(QuestForm);

    //ACT
    wrapper.vm.onQuestProvided;
    console.log(wrapper);

    //ASSERT
    expect(wrapper).toContain('Quest')
  })
})
