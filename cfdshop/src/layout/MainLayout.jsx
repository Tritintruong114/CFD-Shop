import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { AuthcontextProvider, MainContextProvider } from "../context";
import Modal from "../components/AuthenModal";
import Overlay from "../components/Overlay";
import MobileMenu from "../components/MobileMenu";

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
