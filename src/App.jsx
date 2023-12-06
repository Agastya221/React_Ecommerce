import './App.css'
import Cart from './feature/cart/Cart';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ProductListPage from './pages/ProductListPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CheckoutPage from './pages/CheckoutPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <Home/>
    ),
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignupPage/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  {
    path: "/products",
    element: <ProductListPage/>,
  },
  {
    path: "/checkout",
    element: <CheckoutPage/>,
  }
  
]);

function App() {

  return (

    <div className='w-full'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
