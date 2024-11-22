

import React, { useState } from 'react';
import axios from 'axios';
import OrderForm from '../components/OrderForm';
import { useHistory } from 'react-router-dom';

const CreateOrderPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const handleOrderSubmit = (orderData) => {
    setIsLoading(true);
    setErrorMessage('');
    
   
    axios.post('/api/orders/create', orderData)
      .then((response) => {
        if (response.data.success) {
          history.push('/orders');
        }
      })
      .catch((error) => {
        setErrorMessage(error.response ? error.response.data.message : 'Error creating order');
        setIsLoading(false);
      });
  };

  return (
    <div>
      <h1>Create Order</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <OrderForm onSubmit={handleOrderSubmit} />
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default CreateOrderPage;
