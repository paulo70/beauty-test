import React from 'react'

import './purchase.scss'

export const Purchase = (props) => {

  return(
    <div className='box-resume-purchase'>
      <h2>Resumo da compra</h2>
      <table className='box-resume-purchase-table'>
        <thead>
          <tr>
            <th>Quant.</th>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          { props.children }
        </tbody>
      </table>
    </div>
  )
}