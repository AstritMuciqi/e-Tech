const mongoose = require('mongoose');
const slugify = require('slugify');

const OrderSchema = new mongoose.Schema({
    items: {
        type:Array,
    },
    slug: String,
    value: {
        type:Number,      
    },
    username: {
        type: String,
    },
    address:{
        type: String,
    },
    city:{
        type: String,
    },

    payment: {
        type: String,
    },



});
// Create bootcamp slug from the name
OrderSchema.pre('save', function(next){
    this.slug = slugify(this.username, {lower: true});
    next();
})

module.exports = mongoose.model('Order', OrderSchema);