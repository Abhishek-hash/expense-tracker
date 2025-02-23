// models/Expense.js
import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    date: { type: Date, default: Date.now },
    paymentMode: { type: String, required: true },
});

const Expense = mongoose.model('Expense', expenseSchema);
export default Expense;
