import React from 'react';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';
import axios from 'axios';

function App() {
  const handleOrderSubmit = (orderData) => {
    axios.post('/api/orders/create', orderData)
      .then((response) => {
        console.log('Order created:', response.data);
      })
      .catch((error) => {
        console.error('Error creating order:', error);
      });
  };

  return (
    <div>
      <h1>Create New Order</h1>
      <OrderForm onSubmit={handleOrderSubmit} />
      <h2>Existing Orders</h2>
      <OrderList />
    </div>
  );
}

export default App;
