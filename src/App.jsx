import ReactDOM from "react-dom/client";
import Index from "./Index.jsx";
export default class App {
  els = {
    root: "[data-js-root]"
  }

  constructor() {
    this.rootElement = document.querySelector(this.els.root)
    if (this.rootElement) {
      this.root = ReactDOM.createRoot(this.rootElement)
      this.render()
    }
  }

  render() {
    this.root.render(<Index/>)
  }
}