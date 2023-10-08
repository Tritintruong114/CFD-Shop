import LoginForm from "../../components/AuthenModal/LoginForm";
import Input from "../../components/Input";
import { useAuthContext } from "../../context/AuthContext";
import useForm from "../../hooks/useForm";
import { regrexRule, requireRule } from "../../ultils/validate";

const Modal = ({ handleFormSubmit }) => {
  const { showModal, isShowModal, handleCloseModal, handleRegister } =
    useAuthContext();

  const rules = {
    email: [requireRule("Vui lòng nhập Email"), regrexRule("email")],
    password: [requireRule("Vui lòng nhập Password")],
  };

  const { form, error, register, validate } = useForm(
    {
      email: "",
      password: "",
    },
    rules
  );

  const _onSubmit = () => {
    const errorObject = validate(rules, form);

    //Validate
    if (Object.keys(errorObject).length > 0) {
      console.log(errorObject);
    } else {
      handleFormSubmit?.(form);
    }
  };

  return (
    <>
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        id="signin-modal"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
        style={{ display: `${isShowModal ? "block" : "none"}` }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                onClick={() => handleCloseModal()}
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
                    <div
                      className="tab-pane fade"
                      id="register"
                      role="tabpanel"
                      aria-labelledby="register-tab"
                    >
                      <form action="#">
                        <Input
                          label="Email"
                          name="email"
                          required
                          {...register("email")}
                        />
                        <Input
                          label="Password"
                          name="password"
                          required
                          {...register("password")}
                        />

                        <div className="form-footer">
                          <button
                            type="submit"
                            className="btn btn-outline-primary-2"
                            onClick={_onSubmit}
                          >
                            <span>SIGN UP</span>
                            <i className="icon-long-arrow-right" />
                          </button>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="register-policy"
                              required
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="register-policy"
                            >
                              I agree to the
                              <a href="privacy-policy.html">privacy policy</a> *
                            </label>
                          </div>
                        </div>
                      </form>
                      {/* <div className="form-choice">
                        <p className="text-center">or sign in with</p>
                        <div className="row">
                          <div className="col-sm-6">
                            <a href="#" className="btn btn-login btn-g">
                              <i className="icon-google" />
                              Login With Google
                            </a>
                          </div>
                          <div className="col-sm-6">
                            <a href="#" className="btn btn-login  btn-f">
                              <i className="icon-facebook-f" />
                              Login With Facebook
                            </a>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isShowModal === true && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

export default Modal;
