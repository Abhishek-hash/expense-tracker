// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/expenses';

// Fetch all expenses
export const fetchExpenses = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching expenses:', error);
        return [];
    }
};

// Create a new expense
export const createExpense = async (expenseData) => {
    try {
        const response = await axios.post(API_URL, expenseData);
        return response.data;
    } catch (error) {
        console.error('Error creating expense:', error);
    }
};
