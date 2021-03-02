import React, { useState, useEffect } from 'react';
import { Container  }  from '../../components/Container/Container';
import { OrderName  }  from './components/OrderName/Order';
import { Purchase   }  from './components/OrderPurchase/ResumePurchase';
import { TrackOrder }  from './components/TrackOrder/TrackOrder';
import { Delivery   }  from './components/OrderDelivery/Delivery';
import { Logout     }  from '../Logout/Logout'
import { toCurrency } from '../../core/number';
import { API_URL } from '../../../src/env.ts';

export const Details = (props) => {

  const ID  = props.match.params.id;
  const API = `${API_URL}/${ID}.json`;
  
  const [ data, setData ] = useState([]);
  const [ resumeOrder, setResumeOrder] = useState([]);
  const [ addressOrder, setAddressOrder] = useState({});
  const [ freightOrder, setfFreight] = useState({})
  const [ statusOrder, setStatusOrder] = useState('')
  
  // const [ loading, setLoading ] = useState(true);
  

  useEffect(() => {
    const fetchData = async () => {

      try{

        const response = await fetch(API);
        const json     = await response.json();
        const resume   = json.items;
        const address  = json.address;
        const freight  = json.freight;
        const status   = json.status;

        setData(json);
        setResumeOrder(resume);
        setAddressOrder(address);
        setfFreight(freight);
        setStatusOrder(status);
        
        // setLoading(false)
        
      } catch(error){
        console.log('ERROR', error)
      }
    }

    fetchData()
  },[])

  return (
    <Container>
      <h1>Detalhes do pedido</h1>

      <Logout />
      
      <OrderName name = {data.name} number = {data.id}/>
      
      <TrackOrder data = {statusOrder}/>
      
      <Purchase>
        { resumeOrder.map((item, index) => (
          <tr key = {index}>
            <td>{`${item.qty} x`}</td>
            <td>{item.name}</td>
            <td>{toCurrency(item.price)}</td>
          </tr>
        ))}
      </Purchase>
      
      <Delivery 
        freight  = {toCurrency(freightOrder.price)}
        from     = {freightOrder.from}
        to       = {freightOrder.to}
        total    = {toCurrency(data.total)} 
        method   = {data.payment_method}
        street   = {addressOrder.street}
        number   = {addressOrder.number}
        city     = {addressOrder.city}
        state    = {addressOrder.state}
        postcode = {addressOrder.postcode}
      />
    </Container>
  )
}
