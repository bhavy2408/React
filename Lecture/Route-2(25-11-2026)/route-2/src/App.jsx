import './App.css'
import Navbar from './Component/Navbar'
import Errorpage from './Pages/Errorpage';
import Newproduct from './Pages/newproduct';
import Oldproduct from './Pages/oldproduct';
import Pagelist from "./Pages/pagelist"
import { createBrowserRouter, RouterProvider } from "react-router"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        element: <Pagelist.Home />
      },
      {
        path:"home",
        element: <Pagelist.Home />
      },
      {
        path: "about",
        element: <Pagelist.About />
      },
      {
        path: "contact",
        element: <Pagelist.Contact />
      },
      {
        path: "product",
        element: <Pagelist.product />,
        children: [
          {
            index: true,
            element: <div className="alert alert-light border mt-4">Choose a collection above to explore its details.</div>
          },
          {
            path: "oldproduct",
            element: <Oldproduct />
          },
          {
            path: "newproduct",
            element: <Newproduct />
          }
        ]
      },
      { path: "*", element: <Errorpage /> }
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />
}
