import { BeveragesCard } from "./BeveragesCard/BeveragesCard";
import s from "./SectionBeverages.module.css";
import { beverages } from "./beverages";

export const SectionBeverages = () => {
  return (
    <section>
      <h4>Напитки</h4>
      <div className={s.combos_sect}>
        {beverages.drinks.map((com) => {
          return (
            <BeveragesCard
              path={com.path}
              title={com.title}
              desc={com.desc}
              price={com.price}
            />
          );
        })}
      </div>
    </section>
  );
};
