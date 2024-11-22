import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders')
      .then((response) => setOrders(response.data.orders))
      .catch((error) => console.error('Error fetching orders:', error));
  }, []);

  const cancelOrder = (orderId) => {
    axios.delete(`/api/orders/${orderId}`)
      .then(() => setOrders(orders.filter((order) => order.order_id !== orderId)))
      .catch((error) => console.error('Error cancelling order:', error));
  };

  return (
    <div>
      <h1>Order List</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.order_id}>
            {order.order_id} - {order.order_date}
            <button onClick={() => cancelOrder(order.order_id)}>Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
