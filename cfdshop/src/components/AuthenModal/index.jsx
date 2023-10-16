import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useAuthContext } from "../../context/AuthContext";
import { MODAL_TYPE } from "../../config";
import ReactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleCloseModal, handleShowModal } from "../../slices/authSlice";

const Modal = () => {
  // const { showModal, isShowModal, handleCloseModal, handleShowModal } =
  //   useAuthContext();
  const dispatch = useDispatch();
  const { showedModal } = useSelector((state) => state.auth);

  const _onTabChange = (e, tab) => {
    e?.stopPropagation();
    e?.preventDefault();
    dispatch(handleShowModal(tab));
  };

  const _onCloseModal = (e) => {
    e?.stopPropagation();
    e?.preventDefault();
    dispatch(handleCloseModal());
  };

  return ReactDom.createPortal(
    <div
      className={`modal fade ${showedModal ? "show" : ""}`}
      id="signin-modal"
      style={{ display: `${showedModal ? "block" : "none"}` }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <button
              onClick={_onCloseModal}
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="icon-close" />
              </span>
            </button>
            <div className="form-box">
              <div className="form-tab">
                <ul
                  className="nav nav-pills nav-fill nav-border-anim"
                  role="tablist"
                >
                  <li
                    style={{ cursor: "pointer" }}
                    onClick={(e) => _onTabChange(e, MODAL_TYPE.login)}
                    className="nav-item"
                  >
                    <a
                      className={`nav-link ${
                        showedModal === MODAL_TYPE.login ? "active" : ""
                      }`}
                      id="signin-tab"
                    >
                      Sign In
                    </a>
                  </li>
                  <li
                    style={{ cursor: "pointer" }}
                    onClick={(e) => _onTabChange(e, MODAL_TYPE.register)}
                    className="nav-item"
                  >
                    <a
                      className={`nav-link ${
                        showedModal === MODAL_TYPE.register ? "active" : ""
                      }`}
                      id="register-tab"
                    >
                      Register
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  {showedModal === MODAL_TYPE.login && <LoginForm />}
                  {showedModal === MODAL_TYPE.register && <RegisterForm />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showedModal && (
        <div
          onClick={_onCloseModal}
          className="modal-backdrop fade show"
          style={{ zIndex: -1 }}
        ></div>
      )}
    </div>,
    document.body
  );
};

export default Modal;
