import HomePage from "./pages/home-page/HomePage"
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from "./components/Navbar/Header"
import RegisterPage from "./pages/register-page/RegisterPage"
import ProductDetailsPage from "./pages/product-details/ProductDetailsPage"
import ProductListPage from "./pages/product-list-page/ProductListPage"
import CartPage from "./pages/cart-page/CartPage"
import LoginPage from "./pages/login-page/LoginPage"
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

// Protected user pages:
import UserProfilePage from "./pages/user/UserProfilePage"
import UserOrdersPage from "./pages/user/UserOrdersPage"
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage"
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage"

// Protected admin pages
import AdminUsersPage from "./pages/admin/AdminUsersPage"
import AdminEditUserPage from "./pages/admin/AdminEditUserPage"
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage"
import AdminEditProductPage from "./pages/admin/AdminEditProductPage"
import AdminProductsPage from "./pages/admin/AdminProductsPage"
import AdminOrdersPage from "./pages/admin/AdminOrdersPage"
import AdminChatsPage from "./pages/admin/AdminChatsPage"
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage"
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage"
import RouteWithUserChatComponent from "./components/chat/RouteWithUserChatComponent"
import { useEffect, useState } from "react"

import Footer from "./components/Footer/Footer"
import ScrollToTop from "./utils/ScrollToTop"


function App() {


  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  // CHECK IF USER AT THE TOP OF THE PAGE
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTopOfPage(true);
    }
    if (window.scrollY !== 0) setIsTopOfPage(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  };


  useEffect(() => {
    handleScroll()
  }, []);


  return (


    <div className="app">

      <BrowserRouter>
        <ScrollToTop />
        <Header isTopOfPage={isTopOfPage} />
        <Routes>

          <Route element={<RouteWithUserChatComponent />}>
            {/* Public availabe routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/product-list" element={<ProductListPage />} />
            <Route path="/product-details" element={<ProductDetailsPage />} />
            <Route path="/product-details/:id" element={<ProductDetailsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element="Page 404" />

            {/* User protected routes */}
            <Route element={<ProtectedRoutesComponent admin={true} />}>
              <Route path="/user" element={<UserProfilePage />} />
              <Route path="/user/my-orders" element={<UserOrdersPage />} />
              <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
              <Route path="/user/order-details" element={<UserOrderDetailsPage />} />
            </Route>
          </Route>


          {/* Admin protected routes */}
          <Route element={<ProtectedRoutesComponent admin={true} />}>
            <Route path="/admin/users" element={<AdminUsersPage />} />
            <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
            <Route path="/admin/products" element={<AdminProductsPage />} />
            <Route path="/admin/create-new-product" element={<AdminCreateProductPage />} />
            <Route path="/admin/edit-product" element={<AdminEditProductPage />} />
            <Route path="/admin/orders" element={<AdminOrdersPage />} />
            <Route path="/admin/order-details" element={<AdminOrderDetailsPage />} />
            <Route path="/admin/chats" element={<AdminChatsPage />} />
            <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
          </Route>
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </div>

  )
}

export default App
