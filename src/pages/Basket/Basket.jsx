import s from './Basket.module.css'
import logo from './basket-img/logo.svg'
import { Container } from '../../layouts/Container/Container'
import { Link } from 'react-router-dom'

export const Basket = () => {return ( <>
    <Container>
    <header className={s.headerSecond}>
        <div>
            <img src={logo} alt="#" />
        </div>
        <div className={s.path}>
            <div className={s.path_first}><p className={s.path_first_num}>1</p><p>Корзина</p></div>
            <hr className={s.hr_dashed_bg}></hr>
            <div className={s.path_second}><p className={s.path_first_num}>2</p><p className={s.path_desc}>Оформление заказа</p></div>
            <hr className={s.hr_dashed_bg}></hr>
            <div className={s.path_three}><p className={s.path_first_num}>3</p><p className={s.path_desc_second}>Заказ принят</p></div>
        </div>
    </header>
    </Container>
    <hr className={s.hr_new}></hr>
    <Link to={'/'} className={s.back_page} type="button"><p>🢀</p><p>Вернуться обратно</p></Link>
    </>
)}