import { useState } from "react";
import signup from "../../../assets/bg-signup.png";
import logoPrep from "../../../assets/logoPrep.jpg";
import "./Register.scss";
function Register() {
  const signupNow = (e) => {
    e.preventDefault();
    console.log("dky");
  };
  return (
    <div className="wrapper">
      <div className="register">
        <div className="register__container">
          <div className="register__article">
            <img src={signup} />
            <h1>Miễn Phí Kiểm Tra Trình Độ</h1>
            <p>Kiểm tra trình độ hoàn toàn miễn phí.</p>
            <p>Chỉ cần 1 tài khoản duy nhất, bạn có thể thực hiện các bài</p>
            <p> Kiểm Tra Đầu Vào để xác định trình độ nhanh chóng.</p>
          </div>
          <form onSubmit={(e) => signupNow(e)} className="register__form">
            <div className="logo">
              <img srcSet={`${logoPrep} 2x`} alt="" />
              <h1>PREP</h1>
            </div>
            <div className="information">
              <label>Nhập email</label>
              <input type="text" />
              <label>Nhập mật khẩu</label>
              <input type="text" />
              <label>Nhập lại mật khẩu</label>
              <input type="text" />
              <button>Đăng Ký</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
