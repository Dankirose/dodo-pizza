import { PopularCard } from './PopularCard/PopularCard';
import s from './SectionPopular.module.css'
import { newPopular } from './newANDpopular';

export const SectionPopular = () => {return (
    <><h4 className={s.new}>Новое и популярное</h4><div className={s.newANDpopular}>
        {newPopular.newPOP.map((el) => {
            return (
                <PopularCard path={el.path} title={el.title} price={el.price} />
            );
        })}
    </div></>
)}