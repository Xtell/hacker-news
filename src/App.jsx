import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./layouts/index.js";
import { MainPage } from "./pages/index.js";

export default class App {
  els = {
    root: "[data-js-root]"
  };

  router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "/",
          element: <MainPage/>
        }
      ]
    }
  ]);

  constructor() {
    this.rootElement = document.querySelector(this.els.root);
    if (this.rootElement) {
      this.root = ReactDOM.createRoot(this.rootElement);
      this.render();
    }
  }

  render() {
    this.root.render(<RouterProvider router={ this.router }/>);
  }
}