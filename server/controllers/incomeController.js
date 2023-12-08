const Income = require('../models/Income');

const createIncome = async (incomeData) => {
    try {
        const income = new Income(incomeData);
        await income.save();
        return income;
    } catch (error) {
        console.error("Error creating income:", error);
        throw error;
    }
};

const getAllIncomes = async () => {
    try {
        const incomes = await Income.find({});
        return incomes;
    } catch (error) {
        console.error("Error fetching incomes:", error);
        throw error;
    }
};

const getIncomeById = async (id) => {
    try {
        const income = await Income.findById(id);
        return income;
    } catch (error) {
        console.error("Error fetching income:", error);
        throw error;
    }
};

const updateIncome = async (incomeId, updateData) => {
    try {
        const income = await Income.findByIdAndUpdate(incomeId, updateData, { new: true });
        return income;
    } catch (error) {
        console.error("Error updating income:", error);
        throw error;
    }
};

const deleteIncome = async (incomeId) => {
    try {
        const income = await Income.findById(incomeId);
        if (!income) {
            return { message: "Income not found" };
        }
        await Income.findByIdAndDelete(incomeId);
        return { message: "Income successfully deleted" };
    } catch (error) {
        console.error("Error deleting income:", error);
        throw error;
    }
};

module.exports = {
    createIncome,
    getAllIncomes,
    getIncomeById,
    updateIncome,
    deleteIncome
};
