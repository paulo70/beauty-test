import React from 'react';

import './OrderName.scss'; 

export const OrderName = (props) => {
  return (
    <div className='box-details-name'>
      <h2 className='box-details-name-title'>Olá {props.name},</h2>
      <h3 className='box-details-name-number'>Número do Pedido: {props.number}</h3>
    </div>
  )
}