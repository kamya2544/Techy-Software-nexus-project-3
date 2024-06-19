const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/techy-software', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Schema and Model
const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const feedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Customer = mongoose.model('Customer', customerSchema);
const Feedback = mongoose.model('Feedback', feedbackSchema);

// Routes
app.post('/api/contact', (req, res) => {
    const newCustomer = new Customer(req.body);
    newCustomer.save((err) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send('Customer details saved successfully');
    });
});

app.post('/api/feedback', (req, res) => {
    const newFeedback = new Feedback(req.body);
    newFeedback.save((err) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send('Feedback saved successfully');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
