const express = require('express');
const {
    createTip,
    getAllTips,
    getTipById,
    updateTip,
    deleteTip
} = require('../controllers/tipController');

const router = express.Router();

router.post('/tip', async (req, res) => {
    try {
        const tip = await createTip(req.body);
        res.status(201).json({ message: 'Tip created successfully', tip });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/tips', async (req, res) => {
    try {
        const tips = await getAllTips();
        res.status(200).json({ tips });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/tip/:id', async (req, res) => {
    try {
        const tipId = req.params.id;
        const tip = await getTipById(tipId);

        if (!tip) {
            return res.status(404).json({ message: 'Tip not found' });
        }

        res.status(200).json({ tip });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/tip/:id', async (req, res) => {
    try {
        const tipId = req.params.id;
        const updateData = req.body;
        const updatedTip = await updateTip(tipId, updateData);

        if (!updatedTip) {
            return res.status(404).json({ message: 'Tip not found' });
        }

        res.status(200).json({ message: 'Tip updated successfully', updatedTip });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/tip/:id', async (req, res) => {
    try {
        const tipId = req.params.id;
        const response = await deleteTip(tipId);

        if (response.message === "Tip not found") {
            return res.status(404).json(response);
        }

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
