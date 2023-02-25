import { Root } from "../layouts/index.js";
import { MainPage } from "../pages/index.js";

export default [
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
]