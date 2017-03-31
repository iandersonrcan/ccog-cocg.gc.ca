import Vue from 'vue'
import Welcome from '@/components/en/Welcome'

describe('Welcome.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Welcome)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.lead').textContent)
      .to.equal('The Canadian Council on Geomatics is the major federal-provincial-territorial consultative body for geomatics.')
  })
})
