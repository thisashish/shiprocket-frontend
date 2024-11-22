import React, { useState } from 'react';

const OrderForm = ({ onSubmit }) => {
  const [orderData, setOrderData] = useState({
    order_id: '',
    order_date: '',
    pickup_location: '',
    channel_id: '',
    comment: '',
    order_items: [{ name: '', sku: '', units: 0, selling_price: 0 }],
    payment_method: '',
    sub_total: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(orderData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="order_id"
        value={orderData.order_id}
        onChange={handleInputChange}
        placeholder="Order ID"
        required
      />
      <input
        type="datetime-local"
        name="order_date"
        value={orderData.order_date}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="pickup_location"
        value={orderData.pickup_location}
        onChange={handleInputChange}
        placeholder="Pickup Location"
        required
      />
      <button type="submit">Create Order</button>
    </form>
  );
};

export default OrderForm;
