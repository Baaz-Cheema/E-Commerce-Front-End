
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import StoreItems from './pages/StoreItems'
import Root from './pages/Root'
import ItemDetailPage from './pages/ItemDetailPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignupPage'
import Account from './pages/Account'
import MyAccount from './Components/Account/MyAccount'
import PurchaseHistory from './Components/Account/PurchaseHistory'
import Addresses from './Components/Account/Addresses'
import CategoryPage from './pages/CategoryPage'
import StoreMainSection from './Components/StoreItems/AllProducts'
import Checkout from './pages/Checkout'
import Shipping from './Components/Checkout/Shipping'
import Payment from './Components/Checkout/Payment'
import Confirmation from './Components/Checkout/Confirmation'


const router = createBrowserRouter([
  {
    path: '/', element: <Root />, children: [
      { index: true, element: <HomePage /> },
      {
        path: 'store', element: <StoreItems />,
        children: [
          { index: true, element: <StoreMainSection /> },
          { path: 'category', element: <CategoryPage /> }
        ]
      },
      { path: 'itemDetail', element: <ItemDetailPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignUpPage /> },
      {
        path: 'account', element: <Account />, children: [
          { index: true, element: <MyAccount /> },
          { path: 'purchaseHistory', element: <PurchaseHistory /> },
          { path: 'addresses', element: <Addresses /> }
        ]
      },
      {
        path: 'checkout', element: <Checkout />,
        children: [
          { index: true, element: <Shipping /> },
          { path: 'Payment', element: <Payment /> },
          { path: 'Confirmation', element: <Confirmation /> }
        ]
      }
    ]
  }
])


function App() {
  return <RouterProvider router={router}>
  </RouterProvider>
}

export default App
