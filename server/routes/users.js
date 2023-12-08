const express = require('express');


const {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
  } = require('../controllers/userController');
  

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const user = await createUser(req.body);
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get('/allUsers', async (req, res) => {
    try {
        const user = await getAllUsers(req.body);
        res.status(201).json({ user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/user/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await getUserById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/updateUser/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const updateData = req.body;
        const updatedUser = await updateUser(userId, updateData);

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User updated successfully', updatedUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.delete('/user/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const response = await deleteUser(userId);

        if (response.message === "User not found") {
            return res.status(404).json(response);
        }

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



module.exports = router;
