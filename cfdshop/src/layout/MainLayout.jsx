import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Overlay from "../pages/Homepage/Overlay";
import MobileMenu from "../pages/Homepage/MobileMenu";
import { AuthcontextProvider, MainContextProvider } from "../context";
import Modal from "../components/AuthenModal";

const MainLayout = () => {
  return (
    <>
      <MainContextProvider>
        <AuthcontextProvider>
          <div className="page-wrapper">
            <Header />
            <Outlet />
            <Footer />
          </div>

          <Overlay />
          <Modal />
          <MobileMenu />
        </AuthcontextProvider>
      </MainContextProvider>
    </>
  );
};

export default MainLayout;
