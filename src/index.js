import "babel-polyfill";
import { registerHtml, useUrlParams, start } from "tram-one"
import Dots from "./components/Dots"
import "./styles.css"

const html = registerHtml({
  Dots
})

const home = () => {
  const { background = "black" } = useUrlParams()
  const pageStyle = `
    background: ${background};
  `
  return html`
    <div style=${pageStyle}>
      <Dots />
    </div>
  `
}

start("#app", home)
