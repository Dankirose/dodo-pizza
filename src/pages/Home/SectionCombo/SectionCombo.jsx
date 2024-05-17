import { ComboCard } from './ComboCard/ComboCard';
import s from './SectionCombo.module.css'
import { combo } from './combo';

export const SectionCombo = () => {return (
  <section>
    <h4>Комбо</h4>
    <div className={s.combos_sect}>
      {combo.combos.map((com) => {
        return (
          <ComboCard path={com.path} title={com.title} desc={com.desc} price={com.price}/>
        );
      })}
    </div>
  </section>
);}