import axios from 'axios';

// Set the base URL for your API
const API_BASE_URL = 'http://localhost:5000/api';  // Change this to your backend API URL

// Create axios instance to configure default settings (e.g., timeouts, headers)
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,  // Timeout after 5 seconds
});

// Function to fetch all orders
export const fetchOrders = async () => {
  try {
    const response = await api.get('/orders');
    return response.data.orders; 
  } catch (error) {
    throw error.response ? error.response.data.message : 'Error fetching orders';
  }
};


export const createOrder = async (orderData) => {
  try {
    const response = await api.post('/orders/create', orderData);
    return response.data;  
  } catch (error) {
    throw error.response ? error.response.data.message : 'Error creating order';
  }
};


export const deleteOrder = async (orderId) => {
  try {
    const response = await api.delete(`/orders/${orderId}`);
    return response.data;  
  } catch (error) {
    throw error.response ? error.response.data.message : 'Error deleting order';
  }
};
