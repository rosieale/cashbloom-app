const User = require('../models/User');

const createUser = async (userData) => {
    try {
        const user = new User(userData);
        await user.save();
        return user;
    } catch (error) {
        // Handle error
        console.error("Error creating user:", error);
        throw error;
    }
    
};

const getAllUsers = async () => {
    try {
        const users = await User.find({});
        return users;
    } catch (error) {
        // Handle error
        console.error("Error fetching users:", error);
        throw error;
    }
};

const getUserById = async (id) => {
    try {
        const user = await User.findById(id);
        return user;
    } catch (error) {
        // Handle error
        console.error("Error fetching user:", error);
        throw error;
    }
};

const updateUser = async (userId, updateData) => {
    try {
        const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
        return user;
    } catch (error) {
        // Handle error
        console.error("Error updating user:", error);
        throw error;
    }
};

const deleteUser = async (userId) => {
    const user = await User.findById(userId);

    if (!user) {
        return { message: "User not found" };
    }

    await User.findByIdAndDelete(userId);
    return { message: "User successfully deleted" };
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser

  };



