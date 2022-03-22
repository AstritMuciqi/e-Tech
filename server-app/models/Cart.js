const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    product: {
        type:Object,
    },
    quantity: {
        type: Number,
    },
    _id : {
        type: mongoose.Schema.ObjectId,
        ref:"Product"

    },
    button: {
        type: Boolean,
    }
});

//Create Category slug from the name
    CartSchema.pre('save', function(next){
    next();
});

module.exports = mongoose.model('Cart', CartSchema);

