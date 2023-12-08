const express = require('express');
const {
    createIncome,
    getAllIncomes,
    getIncomeById,
    updateIncome,
    deleteIncome
} = require('../controllers/incomeController');

const router = express.Router();

router.post('/income', async (req, res) => {
    try {
        const income = await createIncome(req.body);
        res.status(201).json({ message: 'Income created successfully', income });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/incomes', async (req, res) => {
    try {
        const incomes = await getAllIncomes();
        res.status(200).json({ incomes });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/income/:id', async (req, res) => {
    try {
        const incomeId = req.params.id;
        const income = await getIncomeById(incomeId);

        if (!income) {
            return res.status(404).json({ message: 'Income not found' });
        }

        res.status(200).json({ income });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/income/:id', async (req, res) => {
    try {
        const incomeId = req.params.id;
        const updateData = req.body;
        const updatedIncome = await updateIncome(incomeId, updateData);

        if (!updatedIncome) {
            return res.status(404).json({ message: 'Income not found' });
        }

        res.status(200).json({ message: 'Income updated successfully', updatedIncome });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/income/:id', async (req, res) => {
    try {
        const incomeId = req.params.id;
        const response = await deleteIncome(incomeId);

        if (response.message === "Income not found") {
            return res.status(404).json(response);
        }

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
