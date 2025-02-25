import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]);

    // Fetch expenses from the backend
    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/expenses');
                setExpenses(response.data);
            } catch (error) {
                console.error('Failed to fetch expenses:', error);
            }
        };
        fetchExpenses();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold mb-2">Expense History</h2>
            <ul>
                {expenses.map((expense) => (
                    <li key={expense._id} className="p-2 bg-gray-100 mb-1 rounded">
                        {expense.name} - ₹{expense.amount} on {new Date(expense.date).toLocaleDateString()} ({expense.category})
                    </li>
                ))}
            </ul>
        </div>
    );
};

ExpenseList.propTypes = {
    expenses: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            date: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ExpenseList;
