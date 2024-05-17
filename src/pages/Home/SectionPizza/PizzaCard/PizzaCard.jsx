import { useState } from "react";

import s from "./PizzaCard.module.css";
import { createPortal } from "react-dom";
import sc from 'classnames'
import { Modal } from "../../../../components/Modal/Modal";

export const PizzaCard = ({ path, title, desc, price, id, medium, test }) => {
  const [isOpen, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={s.card}>
      <div className={s.cards}>
        <img src={path} alt="#" />
        <div className={s.infoCard}>
          <h5>{title}</h5>
          <p className={s.infoCardDesc}>{desc}</p>
          <div className={s.priceFull}>
            <p className={s.price}>от {price} Р</p>
            <button
              onClick={() => {
                setOpen((prevState) => !prevState);
              }}
              className={sc(s.btn_take, id === 1 && s.specialBtn)}
            ></button>
          </div>
        </div>
      </div>

      {isOpen &&
        createPortal(
          <Modal
            title={title}
            path={path}
            medium={medium}
            test={test}
            onClose={onClose}
          />,
          document.getElementById("portal")
        )}
    </div>
  );
};
