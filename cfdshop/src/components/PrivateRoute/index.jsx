/* eslint-disable react/prop-types */
import tokenMethod from "../../ultils/token";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { MODAL_TYPE } from "../../config";

const PrivateRoute = ({ redirectPath = "" }) => {
  const { handleShowModal } = useAuthContext();

  // const navigate = useNavigate();
  if (!tokenMethod.get()) {
    handleShowModal?.(MODAL_TYPE.login);
    return <Navigate to={redirectPath} />;
  } else {
    console.log("Error");
  }
  return <Outlet />;
};

export default PrivateRoute;
