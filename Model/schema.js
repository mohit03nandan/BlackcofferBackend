const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: true
    },
    sector: {
        type: String,
        // required: true
    },
    topic: {
        type: String,
        // required: true
    },
    insight: {
        type: String,
        // required: true
    },
    url: {
        type: String,
        // required: true
    },
    region: {
        type: String,
        // required: true
    },
    relevance: {
        type: Number,
        // required: true,
        // min: 1,
        // max: 5
    },
    pestle: {
        type: String,
        // required: true
    },
    source: {
        type: String,
        // required: true
    },
    published: {
        type: Date,
        // required: true
    },
    added: {
        type: Date,
        // required: true
    },
    likelihood: {
        type: Number,
        // required: true,
        // min: 1,
        // max: 5
    },
    intensity: {
        type: Number,
        // required: true,
        // min: 1,
        // max: 10
    },
    country: {
        type: String,
        // required: true
    }
});

const Data = mongoose.model('Data', DataSchema);

module.exports = Data;
