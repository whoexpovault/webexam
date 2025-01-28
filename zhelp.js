const Form = require('../model/form.model');

const formController = {
    createForm: async (req, res) => {
        try {
            const form = new Form(req.body);
            await form.save();
            res.status(201).send(form);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    getForms: async (req, res) => {
        try {
            const forms = await Form.find({});
            res.status(200).send(forms);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    getFormById: async (req, res) => {
        try {
            const form = await Form.findById(req.params.id);
            if (!form) {
                return res.status(404).send();
            }
            res.status(200).send(form);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    updateForm: async (req, res) => {
        try {
            const form = await Form.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!form) {
                return res.status(404).send();
            }
            res.status(200).send(form);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    deleteForm: async (req, res) => {
        try {
            const form = await Form.findByIdAndDelete(req.params.id);
            if (!form) {
                return res.status(404).send();
            }
            res.status(200).send(form);
        } catch (error) {
            res.status(500).send(error);
        }
    }
};

module.exports = formController;


const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.post("/api/feedback", (req, res) => {
  const { name, email, subject, message } = req.body;

  // Log the feedback to the console
  console.log("Feedback received:");
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${message}`);

  // Send a response back to the client
  res.status(200).json({ message: "Feedback received successfully!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
