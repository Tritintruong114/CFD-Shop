/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { PATHS } from "./config/path";
import MainLayout from "./layout/MainLayout";
import ErrorPage from "./pages/404";
import AboutUs from "./pages/Aboutus";
import BlogsPage from "./pages/Blog";
import BlogDetailPage from "./pages/Blog/Blog-detail";
import CartPage from "./pages/Cart";
import CheckOutPage from "./pages/Checkout";
import ContactUsPage from "./pages/Contact";
import DashboardPage from "./pages/Dashboard";
import FaqPage from "./pages/Faq";
import HomePage from "./pages/Homepage";
import PaymentMethodPage from "./pages/PaymentMethod";
import PrivacyPage from "./pages/Privacy";
import Products from "./pages/Product";
import ProductDetail from "./pages/Product/Product-detail";
import ProductsList from "./pages/Product/Product-list";
import ReturnPage from "./pages/Returns";
import ShippingPage from "./pages/Shipping";
import SuccessPage from "./pages/Success";

function App() {
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<MainLayout />}>
        <Route path={PATHS.HOME} element={<HomePage />} />
        <Route path={PATHS.ABOUT} element={<AboutUs />} />
        <Route path={PATHS.BLOGS} element={<BlogsPage />} />
        <Route path={PATHS.BLOGS_DETAIL} element={<BlogDetailPage />} />

        <Route path={PATHS.CONTACT} element={<ContactUsPage />} />
        <Route path={PATHS.FAQ} element={<FaqPage />} />
        <Route path={PATHS.PAYMENT} element={<PaymentMethodPage />} />
        <Route path={PATHS.PRIVACY} element={<PrivacyPage />} />

        <Route path={PATHS.PRODUCTS} element={<Products />}>
          <Route index element={<ProductsList />} />
          <Route path=":slug" element={<ProductDetail />} />
        </Route>
        <Route path={PATHS.RETURN} element={<ReturnPage />} />
        <Route path={PATHS.SHIPPING} element={<ShippingPage />} />
        {/* Privarate Route */}
        <Route element={<PrivateRoute redirectPath={PATHS.HOME} />}>
          <Route path={PATHS.CART} element={<CartPage />} />
          <Route path={PATHS.CHECKOUT} element={<CheckOutPage />} />
          <Route path={PATHS.DASHBOARD} element={<DashboardPage />} />
          <Route path={PATHS.SUCCESS} element={<SuccessPage />} />
        </Route>
        {/* Error */}
        <Route path={PATHS.ERROR} element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
