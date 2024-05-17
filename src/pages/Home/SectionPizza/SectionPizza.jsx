import { PizzaCard } from './PizzaCard/PizzaCard';
import s from './SectionPizza.module.css'
import { cardsPizzas } from './renderPizza';


export const SectionPizza = () => {return (
    <><h4>Пицца</h4><div className={s.card}>
        {cardsPizzas.cardsPizzas.map((card) => {
            return (
                <PizzaCard
                    path={card.path}
                    title={card.title}
                    desc={card.desc}
                    price={card.price}
                    medium={card.medium}
                    test={card.test}
                    id={card.id} />
            );
        })}
    </div></>)}