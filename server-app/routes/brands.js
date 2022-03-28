const express = require('express');
const { getbrands,
        getbrand,
      createbrand, 
      updatebrand,
      deletebrand } = require('../Controllers/brands');

const router = express.Router();

router
.route('/')
.get(getbrands)
.post(createbrand);

router.route('/:id')
.get(getbrand)
.put(updatebrand)
.delete(deletebrand);



module.exports = router;