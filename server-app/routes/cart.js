const express = require('express');
const {getItems,
     createItem,
     updateItem,
     deleteItem,
     deleteAll
    } = require('../controllers/cart');
const router = express.Router();

router
.route('/')
.get(getItems)
.post(createItem)
.delete(deleteAll);



router
.route('/:id')
.put(updateItem)
.delete(deleteItem);



module.exports = router;