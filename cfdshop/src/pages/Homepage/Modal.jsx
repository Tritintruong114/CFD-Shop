import LoginForm from "../../components/AuthenModal/LoginForm";
import RegisterForm from "../../components/AuthenModal/RegisterForm";
import { useAuthContext } from "../../context/AuthContext";
import useForm from "../../hooks/useForm";
import { regrexRule, requireRule } from "../../ultils/validate";

const Modal = () => {
  const { showModal, isShowModal, handleCloseModal } = useAuthContext();

  return (
    <>
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
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="signin-tab"
                        data-toggle="tab"
                        href="#signin"
                        role="tab"
                        aria-controls="signin"
                        aria-selected="true"
                      >
                        Sign In
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="register-tab"
                        data-toggle="tab"
                        href="#register"
                        role="tab"
                        aria-controls="register"
                        aria-selected="false"
                      >
                        Register
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="tab-content-5">
                    <LoginForm />
                    <RegisterForm />
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
      </div>
    </>
  );
};

export default Modal;
