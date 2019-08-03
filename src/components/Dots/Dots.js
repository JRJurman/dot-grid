import { registerHtml, useUrlParams } from 'tram-one'
import Dot from '../Dot'
import './Dots.scss'

const html = registerHtml({
  Dot
})

export default (props, children) => {
  const { numberOfDots = 1000 } = useUrlParams();
  const manyDots = Array(numberOfDots).fill().map(() => Dot())
  return html`
    <div class="Dots">
      ${manyDots}
    </div>
  `
}
