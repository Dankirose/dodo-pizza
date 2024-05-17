import s from './SectionSnacks.module.css'
import { snack } from './snacks';
import { SnacksCard } from './SnacksCard/SnacksCard';
export const SectionSnacks = () => {return (
    <section>
    <h4>Закуски</h4>
          <div className={s.card}>
            {snack.snacks.map((card) => {
              return (
                <SnacksCard path={card.path} title={card.title} desc={card.desc} price={card.price}/>
              );
            })}
          </div>
</section>
)}