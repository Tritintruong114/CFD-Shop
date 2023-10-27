import { Link } from "react-router-dom";
import BreadCrumb from "../../../components/BreadCrumb";
import { PATHS } from "../../../config/path";
import ProductDetailTop from "./ProductDetailTop";
import ProductDetailBot from "./ProductDetailBot";
import useProducDetailPage from "../../../hooks/useProductDetail";

const ProductDetail = () => {
  const { productName, productDetailTopProps, productDetailTabProps } =
    useProducDetailPage();

  return (
    <main className="main">
      <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
        <div className="container d-flex align-items-center">
          <BreadCrumb>
            <BreadCrumb.Item>
              <Link to={PATHS.HOME}>Home</Link>
            </BreadCrumb.Item>
            <BreadCrumb.Item>
              <Link to={PATHS.PRODUCTS}>Product</Link>
            </BreadCrumb.Item>
            <BreadCrumb.Item>
              <Link to={PATHS.PRODUCTS}>{productName || ""}</Link>
            </BreadCrumb.Item>
          </BreadCrumb>
        </div>
      </nav>
      <div className="page-content">
        <div className="container">
          <ProductDetailTop {...productDetailTopProps} />
          <ProductDetailBot {...productDetailTabProps} />
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
