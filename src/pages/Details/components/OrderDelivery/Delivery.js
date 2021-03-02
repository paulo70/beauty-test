import React from 'react';

import { Address } from '../OrderAddress/Address'
import './delivery.scss';

export const Delivery = (props) => {
  return (
    <div className='box-order-delivery'>
      <div className='box-order-delivery-card'>
        <ul className='box-order-delivery-card-list'>
          <li><span>Prazo de entrega:</span> de {props.from} a {props.to} dias</li>
          <li><span>Frete:</span> {props.freight}</li>
          <li><span>Total:</span> {props.total} </li>
        </ul>
      </div>
      <div className='box-order-delivery-card'>
        <Address 
          method   = {props.method}
          street   = {props.street}
          number   = {props.number}
          city     = {props.city}
          state    = {props.state}
          postcode = {props.postcode} 
         />
      </div>
    </div>
  )
}