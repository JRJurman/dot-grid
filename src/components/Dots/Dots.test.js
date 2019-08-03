import Dots from './Dots'
import { useUrlParams } from 'tram-one'

jest.mock('tram-one', () => ({
  ...(jest.requireActual('tram-one')),
  useUrlParams: jest.fn()
}));

describe('Dots', () => {
  describe('with default props', () => {
    useUrlParams.mockImplementation(() => ({}));
    const wrapper = Dots()

    it('should match snapshot', () => {
      expect(wrapper.outerHTML).toMatchSnapshot()
    })
  })

  describe('with configured number of dots', () => {
    useUrlParams.mockImplementation(() => ({
      numberOfDots: '4'
    }));

    const wrapper = Dots()

    it('should match snapshot', () => {
      expect(wrapper.outerHTML).toMatchSnapshot()
    })
  })
})
