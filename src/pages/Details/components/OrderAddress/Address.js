import React from 'react'

import './address.scss'

export const Address = (props) => {
  return (
    <div className='box-order-address'>
      <h4 className='box-order-address-title'>Entregar em:</h4>
      <ul className='box-order-address-list'>
        <li>
          {`${props.street} - ${props.number}`}
        </li>
        <li> 
          {`${props.city} - ${props.state} - ${props.postcode}`} 
        </li>
      </ul>
      <h4 className='box-order-address-title'>Forma de pagamento:</h4>
      <p>{props.method}</p>
    </div>
  )
}