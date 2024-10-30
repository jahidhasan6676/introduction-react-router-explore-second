import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/about/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Meals from './components/Meals/Meals.jsx';
import CategoryDetails from './components/CategoryDetails/CategoryDetails.jsx';

const router = createBrowserRouter([
  {
    path:"/",
  element:<Home></Home>,
  children:[
    {
      path:"/about",
      element:<About></About>
    },
    {
      path: "/contact",
      element:<Contact></Contact>
    },
    {
      path:"/meal",
      loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
      element: <Meals></Meals>
    },
    {
      path:"/meals/:strCategory",
      loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.strCategory}`),
      element:<CategoryDetails></CategoryDetails>
    }
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
