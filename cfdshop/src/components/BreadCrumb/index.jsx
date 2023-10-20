/* eslint-disable react/prop-types */

const BreadCrumb = ({ children, className }) => {
  return (
    <nav aria-label="breadcrumb" className={`breadcrumb-nav ${className}`}>
      <div className="container">
        <ol className="breadcrumb">{children}</ol>
      </div>
    </nav>
  );
};

const BreadCrumbItem = ({ children, Isactive = false }) => {
  return (
    <li className={`breadcrumb-item ${Isactive ? "active" : ""}`}>
      {children}
    </li>
  );
};

BreadCrumb.Item = BreadCrumbItem;

export default BreadCrumb;
