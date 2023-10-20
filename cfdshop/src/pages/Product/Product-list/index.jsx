import BreadCrumb from "../../../components/BreadCrumb";
import { Link } from "react-router-dom";
import { PATHS } from "../../../config/path";
import ProductToolbox from "./ProductToolbox";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import ProductFilter from "./ProductFilter";
const ProductsList = () => {
  return (
    <main className="main">
      <div
        className="page-header text-center"
        style={{ backgroundImage: 'url("/assets/images/page-header-bg.jpg")' }}
      >
        <div className="container">
          <h1 className="page-title">Product</h1>
        </div>
      </div>
      <BreadCrumb>
        <BreadCrumb.Item>
          <Link to={PATHS.HOME}>Home</Link>
        </BreadCrumb.Item>
        <BreadCrumb.Item Isactive>Product</BreadCrumb.Item>
      </BreadCrumb>
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <ProductToolbox />
              <ProductList />
              <Pagination />
            </div>
            <ProductFilter />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsList;
