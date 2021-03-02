import React from 'react'

import './tracker.scss'

export const TrackOrder = (props) => {
  
  return (
    <div className='box-track-order'>
      <h2 className='box-track-order-title'>Acompanhe seu pedido</h2>
      <ul className='box-track-order-line'>
        <li>
          <span 
            className={props.data === 'Aguardando pagamento' ? 'box-track-order-fill' : 'box-track-order-unless-fill'}>
          </span>Aguardando pagamento
        </li>

        <li>
          <span 
            className={props.data === 'Pagamento aprovado' ? 'box-track-order-fill' : 'box-track-order-unless-fill'}>
          </span>Pagamento aprovado
        </li>

        <li> 
          <span 
            className={props.data === 'Pedido em separação' ? 'box-track-order-fill' : 'box-track-order-unless-fill'}> 
          </span>Pedido em separação
        </li>

        <li>
          <span 
            className={props.data === 'Pedido em transporte' ? 'box-track-order-fill' : 'box-track-order-unless-fill'}>
            </span>Pedido em transporte
        </li>
        
        <li>
          <span 
          className={props.data === 'Pedido entregue' ? 'box-track-order-fill' : 'box-track-order-unless-fill'}>
          </span>Pedido entregue</li>
      </ul>
    </div>
  )
}