import React from 'react';
import WatchArt from './WatchArt.jsx';
import {money} from '../data/products.js';

export default function ProductCard({product}){
  return <article className="product-card">
    <div className="product-picture">
      {product.badge&&<span className="product-badge">{product.badge}</span>}
      <WatchArt color={product.color}/>
    </div>
    <div className="product-details">
      <span className="product-brand">{product.brand} / {product.category}</span>
      <div className="product-name">{product.name}</div>
      <div className="product-bottom"><span className="product-price">{money(product.price)}</span></div>
    </div>
  </article>;
}
