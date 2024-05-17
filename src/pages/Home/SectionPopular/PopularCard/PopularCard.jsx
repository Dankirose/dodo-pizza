import { useState } from "react";

import s from "./PopularCard.module.css";
import { createPortal } from "react-dom";

import { Modal } from "../../../../components/Modal/Modal";

export const PopularCard = ({ path, title, price }) => {
  const [isOpen, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={s.newANDpopular_card} onClick={() => setOpen(true)}>
      <img src={path} alt="#" />
      <div className={s.name_place}>
        <h6 className={s.h6}>{title}</h6>
        <p className={s.pricePopul}>{price}</p>
      </div>
      {isOpen &&
        createPortal(
          <Modal title={title} path={path} onClose={onClose} />,
          document.getElementById("portal")
        )}
    </div>
  );
};
