const Expense = require('../models/Expense');

const createExpense = async (expenseData) => {
    try {
        const expense = new Expense(expenseData);
        await expense.save();
        return expense;
    } catch (error) {
        console.error("Error creating expense:", error);
        throw error;
    }
};

const getAllExpenses = async () => {
    try {
        const expenses = await Expense.find({});
        return expenses;
    } catch (error) {
        console.error("Error fetching expenses:", error);
        throw error;
    }
};

const getExpenseById = async (id) => {
    try {
        const expense = await Expense.findById(id);
        return expense;
    } catch (error) {
        console.error("Error fetching expense:", error);
        throw error;
    }
};

const updateExpense = async (expenseId, updateData) => {
    try {
        const expense = await Expense.findByIdAndUpdate(expenseId, updateData, { new: true });
        return expense;
    } catch (error) {
        console.error("Error updating expense:", error);
        throw error;
    }
};

const deleteExpense = async (expenseId) => {
    try {
        const expense = await Expense.findById(expenseId);
        if (!expense) {
            return { message: "Expense not found" };
        }
        await Expense.findByIdAndDelete(expenseId);
        return { message: "Expense successfully deleted" };
    } catch (error) {
        console.error("Error deleting expense:", error);
        throw error;
    }
};

module.exports = {
    createExpense,
    getAllExpenses,
    getExpenseById,
    updateExpense,
    deleteExpense
};
