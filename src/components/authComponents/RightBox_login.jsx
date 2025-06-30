import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const RightBox_login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(""); // for error messages

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setError(""); // clear error while typing
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      localStorage.setItem("token", res.data.token);
    // navigate(res.data.lastSelectedPath || "/selectProblem");
    navigate(res.data.redirectPath || "/selectProblem");

    } catch (err) {
      // Set error message without alert
      const msg = err.response?.data?.msg || "Server error. Please try again.";
      setError(msg);
    }
  };

  return (
    <div className="col-md-6 right-box px-lg-5 py-lg-3 d-flex justify-content-center align-items-center">
      <form className="row align-items-center border p-sm-2 p-xl-5 w-100" onSubmit={handleSignIn}>
        <div className="header-text mt-3 mb-3 text-center">
          <p>{t("login.title")}</p>
          <p>{t("login.subtitle")}</p>
        </div>

        <div className="input-group mb-2">
          <input
            className="form-control form-control-lg fs-6 bg-light pb-3"
            type="email"
            placeholder={t("login.emailPlaceholder")}
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-group mb-1 position-relative">
          <input
            className="form-control form-control-lg fs-6 bg-light pb-3"
            type={showPassword ? "text" : "password"}
            placeholder={t("login.passwordPlaceholder")}
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          <span className="eye" onClick={togglePasswordVisibility}>
            <i className={`fa-solid ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
          </span>
        </div>

        {/* Error message */}
        {error && (
          <div className="text-danger mb-3 text-center">
            <small>{error}</small>
          </div>
        )}

        <div className="input-group mb-4 d-flex justify-content-between align-items-center">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label text-secondary rememberMe" htmlFor="rememberMe">
              <small>{t("login.rememberMe")}</small>
            </label>
          </div>
          <div className="forget">
            <small><Link to="/forgetPassword">{t("login.forgotPassword")}</Link></small>
          </div>
        </div>

        <div className="input-group mb-2">
          <button
            type="submit"
            className="btn btn-primary btn-lg w-100 fs-6 logo-color btn-login"
          >
            {t("login.signInButton")}
          </button>
        </div>

        <div className="row text-center sup mb-3">
          <small>{t("login.noAccount")} <Link to="/register">{t("login.signUpLink")}</Link></small>
        </div>
      </form>
    </div>
  );
};

export default RightBox_login;
