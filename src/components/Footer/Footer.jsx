import s from "./Footer.module.css";
import google from "./footer-img/google-play-dodo.jpg";
import app from "./footer-img/app-store-dodo.jpg";
import logo from "./footer-img/Group.png";
import facebook from "./footer-img/ant-design_facebook-filled.svg";
import insta from "./footer-img/bx_bxl-instagram.svg";
import odnokl from "./footer-img/brandico_odnoklassniki.svg";
import vk from "./footer-img/akar-icons_vk-fill.svg";
import yt from "./footer-img/bi_youtube.svg";

export const Footer = () => {
  return (
    <footer className={s.container}>
      <div className={s.footer}>
        <div className={s.list__ul}>
          <div class={s.dodo__pizza}>
            <nav>
              <ul className={s.nav}>
                <a href="#">
                  <b>Додо Пицца</b>
                </a>
                <li>
                  <a href="#">О нас</a>
                </li>
                <li>
                  <a href="#">Додо-книга</a>
                </li>
                <li>
                  <a href="#">Блог «Сила ума»</a>
                </li>
                <li>
                  <a href="#">Додо ИС</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class={s.job}>
            <nav>
              <ul className={s.nav}>
                <a href="#">
                  <b>Работа</b>
                </a>
                <li>
                  <a href="#">В пиццерии</a>
                </li>
                <li>
                  <a href="#">В контакт-центре</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class={s.partners}>
            <nav>
              <ul className={s.nav}>
                <a href="#">
                  <b>Партнерам</b>
                </a>
                <li>
                  <a href="#">Франшиза</a>
                </li>
                <li>
                  <a href="#">Инвестиции</a>
                </li>
                <li>
                  <a href="#">Поставщикам</a>
                </li>
                <li>
                  <a href="#">Предложить помещение</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class={s.interesting}>
            <nav>
              <ul className={s.nav}>
                <a href="#">
                  <b>Это интересно</b>
                </a>
                <li>
                  <a href="#">Экскурсии и мастер-классы</a>
                </li>
                <li>
                  <a href="#">Корпоративные заказы</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className={s.footer__contact}>
          <div className={s.google__app}>
            <button>
              <img src={google} alt="" />
            </button>
            <button>
              <img src={app} alt="" />
            </button>
          </div>
          <div className={s.footer__contacts}>
            <a href="#">8-800-302-00-60</a>
            <p>Звонок бесплатный</p>
            <i>
              <a href="#">feedback@dodopizza.com</a>
            </i>
          </div>
        </div>
        <div className={s.footer_cash}>
          <p className={s.number}>1 396 362 874 ₽</p>
          <p className={s.number__desc}>
            Выручка российской сети в этом месяце. В прошлом — 2 460 305 416 ₽
          </p>
        </div>
        <div className={s.footer__desc}>
          <p className={s.number}>688 пиццерий</p>
          <p className={s.number__desc}>
            в 14 странах, включая Китай, США и Великобританию
          </p>
        </div>
      </div>
      <hr />
      <div className={s.footer__second}>
        <div className={s.logotype}>
          <img className={s.logo} src={logo} alt="#" />
          <p>© 2021</p>
        </div>
        <div className={s.easy__info}>
          <a href="#">Правовая информация</a>
          <a href="#">Калорийность и состав</a>
          <a href="#">Помощь</a>
        </div>
        <div className={s.btn__sub}>
          <button type="submit">
            <img className={s.btn__img} src={facebook} alt="" />
          </button>
          <button type="submit">
            <img className={s.btn__img} src={insta} alt="" />
          </button>
          <button type="submit">
            <img className={s.btn__img} src={odnokl} alt="" />
          </button>
          <button type="submit">
            <img className={s.btn__img} src={vk} alt="" />
          </button>
          <button type="submit">
            <img className={s.btn__img} src={yt} alt="" />
          </button>
        </div>
      </div>
    </footer>
  );
};
