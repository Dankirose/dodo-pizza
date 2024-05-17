import { createPortal } from 'react-dom';
import { Modal } from '../../../../components/Modal/Modal';
import s from './DesertsCard.module.css'
import { useState } from 'react';
import sc from "classnames";

export const DesertsCard = ({path, title, desc, id, price}) => {
    const [isOpen, setOpen] = useState(false);

    const onClose = () => {
      setOpen(false);
    };
    
    return (
      <div className={s.cards}>
        <img src={path} alt="#" />
        <div className={s.infoCard}>
          <h5>{title}</h5>
          <p
            className={sc(s.infoCardDesc, id === false && s.infoCardDescSecond)}
          >
            {desc}
          </p>
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
            <Modal title={title} path={path} desc={desc} onClose={onClose} />,
            document.getElementById("portal")
          )}
      </div>
    );}