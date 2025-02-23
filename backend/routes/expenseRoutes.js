// routes/expenseRoutes.js
import express from 'express';
const router = express.Router();
import {  getExpenses,
    createExpense,
    getExpenseById,
    updateExpense,
    deleteExpense,} from '../controllers/expenseController.js'

// Define CRUD routes
router.get('/', getExpenses);
router.post('/', createExpense);
router.get('/:id', getExpenseById);
router.put('/:id', updateExpense);
router.delete('/:id', deleteExpense);

export default router;
