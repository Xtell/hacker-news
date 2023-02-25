import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import routes from "./routes/index.jsx";
export default class App {
  els = {
    root: "[data-js-root]"
  };

  router = createBrowserRouter(routes);

  constructor() {
    this.rootElement = document.querySelector(this.els.root);
    if (this.rootElement) {
      this.root = ReactDOM.createRoot(this.rootElement);
      this.render();
    }
  }

  render() {
    this.root.render(
        <Provider store={ store }>
          <RouterProvider router={ this.router }/>
        </Provider>
    );
  }
}