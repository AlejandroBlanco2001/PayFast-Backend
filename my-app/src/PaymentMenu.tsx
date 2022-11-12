import PaymentMethod from './PaymentMethod';
import MenuTab from './MenuTab';
import { faCreditCard, faPiggyBank, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Input, InputGroup } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PaymentMenu(){
    
    let master_card_logo = "https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png";

    const [paymentMethods, setPaymentMethods] = useState([
        {'image': master_card_logo, 'status': true, 'name': 'visa'},{'image': master_card_logo, 'status': true, 'name': 'visa'},
        {'image': master_card_logo, 'status': true, 'name': 'visa'}, {'image': master_card_logo, 'status': true, 'name': 'visa'},
        {'image': master_card_logo, 'status': true, 'name': 'visa'}, {'image': master_card_logo, 'status': true, 'name': 'visa'}]);

    return(
      <div className="PaymentMenu">
        <MenuTab opt="1"></MenuTab>
        <div className="PaymentBoxContainer">
          <div className='PaymentBoxGrid'>
            {paymentMethods.map((method,index) => {
              return <PaymentMethod key={index} image={method.image} status={method.status} name={method.name}></PaymentMethod>
            })}
          </div>
          <div className='PaymentCupon'>
            <div className="PaymentCuponText">
                <div className='PaymentCuponTitle'>Bonificación</div>
                <span>Ingrese algun codigo de descuento</span>
            </div>
              <InputGroup>
                <Input placeholder='ELPRECIOESCORRECTO' />
              </InputGroup>
          </div>
        </div>
      </div>
    );
}