import { mount } from '@vue/test-utils'
import Index from '../../pages/index.vue'
import { describe, it, expect } from 'vitest'

describe('Index page', () => {
  it('renders welcome text', () => {
    const wrapper = mount(Index as any)
    expect(wrapper.text()).toContain('Welcome to Nuxt-app')
  })
})
