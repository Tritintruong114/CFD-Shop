import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/Homepage";
import AboutUs from "./pages/Aboutus";
import ErrorPage from "./pages/404";
import BlogsPage from "./pages/Blog";
import BlogDetailPage from "./pages/Blog/Blog-detail";
import CheckOutPage from "./pages/Checkout";
import SuccessPage from "./pages/Success";
import DashboardPage from "./pages/Dashboard";
import ContactUsPage from "./pages/Contact";
import FaqPage from "./pages/Faq";
import PaymentMethodPage from "./pages/PaymentMethod";
import PrivacyPage from "./pages/Privacy";
import Products from "./pages/Product";
import ProductDetail from "./pages/Product/Product-detail";
import ReturnPage from "./pages/Returns";
import ShippingPage from "./pages/Shipping";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog-detail" element={<BlogDetailPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/payment" element={<PaymentMethodPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/detail" element={<ProductDetail />} />
          <Route path="/return" element={<ReturnPage />} />
          <Route path="/shipping" element={<ShippingPage />} />

          {/* Error */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
