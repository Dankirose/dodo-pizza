import s from "./Header.module.css";
import logo from "./header-img/logo.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { data } from "./data";
import { useRef, useEffect } from "react";
import { Container } from "../../layouts/Container/Container";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import { Home } from "../../pages/Home/Home";

export const Header = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Container>
      <header className={s.header}>
        <div className={s.up__logo}>
          <div className={s.up__logo_img}>
            <img src={logo} alt="#" />
          </div>
          <div className={s.header__contacts}>
            <a href="" className={s.header__tel}>
              8 800 555-35-35
            </a>
            <a></a>
            <p className={s.header__desc}>Звонок платный</p>
          </div>
        </div>
        <div className={s.header__navigation}>
          <div>
            <nav>
              <ul>
                <li>
                  <a href="#">Пицца</a>
                </li>
                <li>
                  <a href="#">Комбо</a>
                </li>
                <li>
                  <a href="#">Закуски</a>
                </li>
                <li>
                  <a href="#">Десерты</a>
                </li>
                <li>
                  <a href="#">Напитки</a>
                </li>
                <li>
                  <a href="#">Другие товары</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <Link to={'/basket'} className={s.btn__sell}></Link>
          </div>
        </div>
      </header>
      <Swiper ref={swiperRef} className="mySwiper" loop>
        {data.map((slide) => {
          return (
            <SwiperSlide>
              <img className={s.img} src={slide} alt="#" width={1140} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};
