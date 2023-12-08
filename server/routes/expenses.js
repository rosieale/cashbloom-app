const express = require('express');
const {
    createExpense,
    getAllExpenses,
    getExpenseById,
    updateExpense,
    deleteExpense
} = require('../controllers/expenseController');

const router = express.Router();

router.post('/expense', async (req, res) => {
    try {
        const expense = await createExpense(req.body);
        res.status(201).json({ message: 'Expense created successfully', expense });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/expenses', async (req, res) => {
    try {
        const expenses = await getAllExpenses();
        res.status(200).json({ expenses });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/expense/:id', async (req, res) => {
    try {
        const expenseId = req.params.id;
        const expense = await getExpenseById(expenseId);

        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        res.status(200).json({ expense });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/expense/:id', async (req, res) => {
    try {
        const expenseId = req.params.id;
        const updateData = req.body;
        const updatedExpense = await updateExpense(expenseId, updateData);

        if (!updatedExpense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        res.status(200).json({ message: 'Expense updated successfully', updatedExpense });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/expense/:id', async (req, res) => {
    try {
        const expenseId = req.params.id;
        const response = await deleteExpense(expenseId);

        if (response.message === "Expense not found") {
            return res.status(404).json(response);
        }

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
