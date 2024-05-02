import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logoPrep from "../../../../assets/logoPrep.jpg";
import bannerTop from "../../../../assets/bannerTop.png";
import { TiArrowSortedDown } from "react-icons/ti";
import "./UserHeader.scss";
function UserHeader() {
  const url = window.location.href;
  const [isNavTop, setNavTop] = useState();
  if (url == "http://localhost:7000/")
    useEffect(() => {
      setNavTop(true);
    }, []);
  return (
    <>
      <div className="wrapper">
        {isNavTop && (
          <NavLink to="/auth/login">
            <img src={bannerTop}></img>
          </NavLink>
        )}
        <div className="header">
          <div className="container">
            <div className="header__container">
              <div className="logo">
                <img srcSet={`${logoPrep} 2x`} alt="" />
                <h1>PREP</h1>
              </div>
              <ul className="menu">
                <li className="menu__item">
                  <p>Trang chủ</p>
                </li>
                <li className="menu__item">
                  <p>Khoá học </p>
                  <i>
                    <TiArrowSortedDown />
                  </i>
                </li>
                <li className="menu__item">
                  <p>Kiểm tra đầu vào</p>
                </li>
                <li className="menu__item">
                  <p>Blog</p>
                  <i>
                    <TiArrowSortedDown />
                  </i>
                </li>
                <li className="menu__item">
                  <p> Tin tức</p>
                  <i>
                    <TiArrowSortedDown />
                  </i>
                </li>
              </ul>
              <div className="header-auth">
                <button className="button button--primary">
                  <NavLink to={"/auth/register"}>Bắt đầu</NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserHeader;
