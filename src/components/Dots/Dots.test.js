import Dots from './Dots'

describe('Dots', () => {
  describe('with default props', () => {
    const wrapper = Dots()

    it('should match snapshot', () => {
      expect(wrapper.outerHTML).toMatchSnapshot()
    })
  })
})
