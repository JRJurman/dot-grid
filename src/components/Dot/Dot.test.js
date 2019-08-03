import Dot from './Dot'

describe('Dot', () => {
  describe('with default props', () => {
    const wrapper = Dot()

    it('should match snapshot', () => {
      expect(wrapper.outerHTML).toMatchSnapshot()
    })
  })
})
