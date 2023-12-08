const Tips = require('../models/Tips');

const createTip = async (tipData) => {
    try {
        const tip = new Tips(tipData);
        await tip.save();
        return tip;
    } catch (error) {
        console.error("Error creating tip:", error);
        throw error;
    }
};

const getAllTips = async () => {
    try {
        const tips = await Tips.find({});
        return tips;
    } catch (error) {
        console.error("Error fetching tips:", error);
        throw error;
    }
};

const getTipById = async (id) => {
    try {
        const tip = await Tips.findById(id);
        return tip;
    } catch (error) {
        console.error("Error fetching tip:", error);
        throw error;
    }
};

const updateTip = async (tipId, updateData) => {
    try {
        const tip = await Tips.findByIdAndUpdate(tipId, updateData, { new: true });
        return tip;
    } catch (error) {
        console.error("Error updating tip:", error);
        throw error;
    }
};

const deleteTip = async (tipId) => {
    try {
        const tip = await Tips.findById(tipId);
        if (!tip) {
            return { message: "Tip not found" };
        }
        await Tips.findByIdAndDelete(tipId);
        return { message: "Tip successfully deleted" };
    } catch (error) {
        console.error("Error deleting tip:", error);
        throw error;
    }
};

module.exports = {
    createTip,
    getAllTips,
    getTipById,
    updateTip,
    deleteTip
};
