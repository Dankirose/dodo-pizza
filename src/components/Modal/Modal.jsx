import { useEffect } from "react";
import s from "./Modal.module.css";
import { ingredients } from "./ingridients";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const sizes = [{id: 1, name: 'Маленькая', price: 600 }, { id: 2, name: 'Средняя', price: 650 }, {id: 3, name: 'Большая', price: 700 }];
const options = [{id: 1, name: 'Традиционное', price: 100 }, { id: 2, name: 'Тонкое', price: 200 }];


export const Modal = ({onClose, title, path, medium, test, handleAddToCart}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

 
  //событие выбора карточек и также подсчета их стоимость в button'е
  const [activeIds, setActiveIds] = useState([]); //состояние прорисовки доп.класса с бордером
  const [total, setTotal] = useState(0); //состояние начало подсчета карточек
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(null);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [prevSizePrice, setPrevSizePrice] = useState(0);
  const [prevOptionPrice, setPrevOptionPrice] = useState(0);
  
  const handleClick = (id) => {
    const ingredient = ingredients.cards.find(card => card.id === id)
    if(!ingredient) return; 

    setActiveIds(prevIds => {

      if (prevIds.includes(id)) {
        setTotal(prevTotal => prevTotal - ingredient.price)
      return (prevIds.filter(prevId => prevId !== id));
    }
      setTotal(prevTotal => prevTotal + ingredient.price)
      return [...prevIds, id];
    })
  };
  
  
  const handleSizeClick = (index) => {
    setSelectedSizeIndex(index);
    setTotal((prevTotal) => prevTotal - prevSizePrice + sizes[index].price);
    setPrevSizePrice(sizes[index].price);
};
  
  const handleOptionClick = (index) => {
    setSelectedOptionIndex(index);
    setTotal((prevTotal) => prevTotal - prevOptionPrice + options[index].price);
    setPrevOptionPrice(options[index].price);
};

  return (
    <div className={s.modal} onClick={onClose}>
      <div className={s.modal__info} onClick={(e) => e.stopPropagation()}>
        <button className={s.btn__closed} onClick={onClose}>
          ×
        </button>
        <div className={s.pizzaIMG}>
          <img className={s.pizzaIMG_image} src={path} alt="#" />
        </div>
        <div className={s.pizza__option}>
          <p className={s.title__pizza_option}>{title}</p>
          <p className={s.medium__pizza_option}>{medium}</p>
          <p className={s.test__pizza_option}>{test}</p>
          <div className={s.sizePizza}>
          {sizes.map((size, index) => (
            <button key={size.name} className={`${s.sizePizza_btn} ${selectedSizeIndex === index ? s.active : ""}`} type="button" onClick={() => handleSizeClick(index)}
            >
              {size.name}
            </button>
          ))}
          </div>
          <div className={s.optionTesto}>
          {options.map((option, index) => (
            <button  key={option.name} className={`${s.optionTesto_btn} ${selectedOptionIndex === index ? s.active : ""}`} type="button" onClick={() => handleOptionClick(index++)}>
              {option.name}
            </button>
          ))}
          </div>
          <h5>Добавить в пиццу</h5>
          <div className={s.ingredients_cards}>
            {ingredients.cards.map((ing) => {
              return (
                <div 
                  className={`${s.ingred_card} ${activeIds.includes(ing.id) ? s.active : ''}`} 
                   onClick={() => handleClick(ing.id)}
                    >
                  <img src={ing.path} alt="#" />
                  <p>{ing.title}</p>
                  <p>{ing.price} ₽</p>
                  </div>
            );
              })}
          </div>

          <Link to={'/basket'} onClick={() => handleAddToCart()} className={s.result_price} type="button">
            Добавить в корзину за {total} ₽
          </Link>
      
        </div>
      </div>
    </div>
  );
}
