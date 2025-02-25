import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const ExpenseForm = ({ onAddExpense }) => {
    const [expense, setExpense] = useState({
        name: "",
        amount: "",
        date: "",
        category: "",
        paymentMode: "",
    });

    // Handle input change
    const handleChange = (e) => {
        setExpense({ ...expense, [e.target.name]: e.target.value });
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting Expense:", expense); // Log the data being sent

        if (!expense.name || !expense.amount || !expense.date || !expense.category || !expense.paymentMode) {
            alert("Please fill all fields");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/api/expenses", {
                ...expense,
                amount: Number(expense.amount), // Ensure amount is stored as a number
                date: new Date(expense.date).toISOString(), // Format date if needed
            });
            
            onAddExpense(response.data); // Update frontend with new expense
            setExpense({ name: "", amount: "", date: "", category: "", paymentMode: "" });
            alert("Expense added successfully!");
        } catch (error) {
            console.error("Failed to add expense:", error.response?.data?.message || error.message);
            alert("Failed to add expense. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded flex flex-wrap justify-around items-center">
            <input
                className="py-2 px-3 m-2 border border-gray-300 rounded"
                type="text"
                name="name"
                placeholder="Title"
                value={expense.title}
                onChange={handleChange}
                required
            />
            <input
                className="py-2 px-3 m-2 border border-gray-300 rounded"
                type="number"
                name="amount"
                placeholder="Amount"
                value={expense.amount}
                onChange={handleChange}
                required
            />
            <input
                className="py-2 px-3 m-2 border border-gray-300 rounded"
                type="date"
                name="date"
                placeholder="Select date"
                value={expense.date}
                onChange={handleChange}
                required
            />

            <select
                className="py-2 px-3 m-2 border border-gray-300 rounded"
                name="category"
                value={expense.category}
                onChange={handleChange}
                required
            >
                <option value="">Select Category</option>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Rent">Rent</option>
                <option value="Bills">Bills</option>
                <option value="Others">Others</option>
            </select>

            <select
                className="py-2 px-3 m-2 border border-gray-300 rounded"
                name="paymentMode"
                value={expense.paymentMode}
                onChange={handleChange}
                required
            >
                <option value="">Payment Mode</option>
                <option value="UPI">UPI</option>
                <option value="Cash">Cash</option>
                <option value="Card">Card</option>
            </select>

            <button
                type="submit"
                className="py-2 px-4 m-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
                Add Expense
            </button>
        </form>
    );
};

// Prop validation moved outside the component
ExpenseForm.propTypes = {
    onAddExpense: PropTypes.func.isRequired,
};

export default ExpenseForm;
