import { useState } from 'react';
import { Modal } from '../../../../components/Modal/Modal';
import s from './SnacksCard.module.css'
import { createPortal } from 'react-dom';


export const SnacksCard = ({path, title, desc, price}) => {
const [isOpen, setOpen] = useState(false);

const onClose = () => {
  setOpen(false);
};

return (
  <div className={s.cards}>
    <img src={path} alt="#" />
    <div className={s.infoCard}>
      <h5>{title}</h5>
      <p className={s.infoCardDesc}>{desc}</p>
      <div className={s.priceFull}>
        <p className={s.price}>{price}</p>
        <button
          onClick={() => {
            setOpen((prevState) => !prevState);
          }}
          className={s.specialBtn}
        ></button>
      </div>
    </div>
    {isOpen &&
      createPortal(
        <Modal title={title} path={path} onClose={onClose} />,
        document.getElementById("portal")
      )}
  </div>
);}