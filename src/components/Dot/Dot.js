import { registerHtml, useUrlParams } from 'tram-one'
import './Dot.scss'

const html = registerHtml()

export default (props, children) => {
  const { size = 0.5, color = 'grey', radius = '100%' } = useUrlParams();
  const dotStyle = `
    margin: 1em;
    width: ${size}em;
    height: ${size}em;
    background: ${color};
    border-radius: ${radius};
  `
  return html`
    <div class="Dot" style=${dotStyle}>
    </div>
  `
}
