import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useAuthContext } from "../../context/AuthContext";
import { MODAL_TYPE } from "../../config";
import ReactDom from "react-dom";

const Modal = () => {
  const { showModal, isShowModal, handleCloseModal, handleShowModal } =
    useAuthContext();

  return ReactDom.createPortal(
    <div
      className={`modal fade ${showModal ? "show" : ""}`}
      id="signin-modal"
      style={{ display: `${isShowModal ? "block" : "none"}` }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <button
              onClick={(e) => handleCloseModal(e)}
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
                    onClick={() => handleShowModal(MODAL_TYPE.login)}
                    className="nav-item"
                  >
                    <a
                      className={`nav-link ${
                        showModal === MODAL_TYPE.login ? "active" : ""
                      }`}
                      id="signin-tab"
                    >
                      Sign In
                    </a>
                  </li>
                  <li
                    style={{ cursor: "pointer" }}
                    onClick={() => handleShowModal(MODAL_TYPE.register)}
                    className="nav-item"
                  >
                    <a
                      className={`nav-link ${
                        showModal === MODAL_TYPE.register ? "active" : ""
                      }`}
                      id="register-tab"
                    >
                      Register
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="tab-content-5">
                  {showModal === MODAL_TYPE.login && <LoginForm />}
                  {showModal === MODAL_TYPE.register && <RegisterForm />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isShowModal && (
        <div
          onClick={(e) => handleCloseModal(e)}
          className="modal-backdrop fade show"
          style={{ zIndex: -1 }}
        ></div>
      )}
    </div>,
    document.body
  );
};

export default Modal;
