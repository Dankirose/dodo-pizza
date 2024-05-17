import { DesertsCard } from './DesertsCard/DesertsCard';
import s from './SectionDeserts.module.css'
import { desert } from './deserts';

export const SectionDeserts = () => {return (
  <section>
    <h4>Десерты</h4>
    <div className={s.card}>
      {desert.deserts.map((card) => {
        return (
          <DesertsCard
            path={card.path}
            title={card.title}
            desc={card.desc}
            price={card.price}
          />
        );
      })}
    </div>
  </section>
);}