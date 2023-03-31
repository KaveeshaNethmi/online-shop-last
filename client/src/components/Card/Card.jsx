import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ item }) => {
  return (
    <div className="card">
      <Link className="link" to={`/product/${item.id}`}>
        <div className="card">
          <div className="image">
            {item.isNew && <span>New Season</span>}
            <img src={item.img} alt="car" />
            <img src={item.img2} alt="img" className="secondImg" />
          </div>
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice}</h3>
          <h3>${item.price}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Card;
