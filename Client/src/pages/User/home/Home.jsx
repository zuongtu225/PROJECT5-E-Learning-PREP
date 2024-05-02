import React from "react";
import bannerImg from "../../../assets/banner.avif";
import graduation from "../../../assets/graduation.svg";
import school from "../../../assets/school.svg";
import "./Home.scss";
function Home() {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner__container">
          <div className="banner__top">
            <div className="banner__heading">
              <p>Nền Tảng</p>
              <span> Học & Luyện Thi </span>
              Thông Minh
            </div>
            <div className="banner__image">
              <img srcSet={`${bannerImg} 2x`} alt="" />
            </div>
          </div>
          <div className="banner__bottom">
            <div className="banner__graduation">
              <img src={school} alt="" />
              <h1>IELTS</h1>
              <p>Lộ trình học hiệu quả</p>
            </div>
            <div className="banner__graduation">
              <img src={graduation} alt="" />
              <h1>IELTS</h1>
              <p>Lộ trình luyện thi cấp tốc</p>
            </div>
            <div className="banner__graduation">
              <img src={graduation} alt="" />
              <h1>IELTS</h1>
              <p>Lộ trình học và ôn thi hiệu quả</p>
            </div>
          </div>
        </div>
      </div>
      <div className="award"></div>
    </section>
  );
}
export default Home;
