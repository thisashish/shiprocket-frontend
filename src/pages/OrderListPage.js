

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const OrderListPage = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  useEffect(() => {
    axios.get('/api/orders')
      .then((response) => {
        setOrders(response.data.orders);
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.response ? error.response.data.message : 'Error fetching orders');
        setIsLoading(false);
      });
  }, []);

  const handleCancelOrder = (orderId) => {
    axios.delete(`/api/orders/${orderId}`)
      .then(() => {
        setOrders(orders.filter((order) => order.order_id !== orderId));
      })
      .catch((error) => {
        setErrorMessage(error.response ? error.response.data.message : 'Error cancelling order');
      });
  };

  return (
    <div>
      <h1>Order List</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.order_id}>
              <p>Order ID: {order.order_id}</p>
              <p>Order Date: {order.order_date}</p>
              <p>Pickup Location: {order.pickup_location}</p>
              <button onClick={() => handleCancelOrder(order.order_id)}>Cancel Order</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderListPage;
