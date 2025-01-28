const Form = require('../model/form.model');
const logger = require('../logger');

const createForm = async (req, res) => {
    try {
        const form = new Form(req.body);
        await form.save();
        res.status(201).send(form);
        logger.info(`Form created: ${form}`);
    } catch (error) {
        res.status(400).send(error);
        logger.error(`Form creation failed: ${error}`);
    }
};

const getForms = async (req, res) => {
    try {
        const forms = await Form.find({});
        res.status(200).send(forms);
        logger.info(`Forms fetched: ${forms}`);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Other methods...

module.exports = {
    createForm,
    getForms,
    // Export other methods...
};