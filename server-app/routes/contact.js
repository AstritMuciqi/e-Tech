const express = require('express');
const {getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
    } = require('../controllers/contact');
const router = express.Router();

router
.route('/')
.get(getContacts)
.post(createContact);

router
.route('/:id')
.get(getContact)
.put(updateContact)
.delete(deleteContact);



module.exports = router;