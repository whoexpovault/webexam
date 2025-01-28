const router = require("express").Router();
const { createForm, getForms } = require("../controller/formController");

router.post('/forms', createForm);
router.get('/forms', getForms);

module.exports = router;