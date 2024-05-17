import { createPortal } from 'react-dom';
import { Modal } from '../../../../components/Modal/Modal';
import s from './BeveragesCard.module.css'
import { useState } from 'react';

export const BeveragesCard = ({path, title, desc, price}) => {

    const [isOpen, setOpen] = useState(false);

    const onClose = () => {
      setOpen(false);
    };
           return (
             <div className={s.combo_sect}>
               <img src={path} alt="#" />
               <div>
                 <h6>{title}</h6>
                 <p className={s.combo_desc}>{desc}</p>
               </div>
               <div className={s.priceFull}>
                 <p className={s.price}>{price}</p>
                 <button
                   onClick={() => {
                     setOpen((prevState) => !prevState);
                   }}
                   className={s.specialBtn}
                 ></button>
               </div>
               {isOpen &&
                 createPortal(
                   <Modal title={title} path={path} onClose={onClose} />,
                   document.getElementById("portal")
                 )}
             </div>
           );
       }
       