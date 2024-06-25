const express = require('express');
const Data = require('../Model/schema');
const router = express.Router();



router.put('/', async (req, res) => {
    try {
        const dataEntries = req.body; // Assuming req.body is an array of data entries

        // Insert all data entries into MongoDB using insertMany
        const insertedData = await Data.insertMany(dataEntries);

        // Respond with the inserted data
        res.status(201).json(insertedData);
    } catch (err) {
        // Handle errors
        console.error('Error adding batch data:', err);
        res.status(500).json({ error: 'Failed to add batch data' });
    }
    // res.send("hell")
});

module.exports = router;
