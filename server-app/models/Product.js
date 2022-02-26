const mongoose = require('mongoose');
const slugify = require('slugify');

const ProductSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, "Please add a name"],
        trim: true,
        maxlength: [50, "Name can't be more than 50 characters"]
    },
    slug: String,
    model: {
        type:String,
        required:[true, "Please add a definitive model"],
        trim: true,
        unique:true,
        maxlength: [50, "Name can't be more than 50 characters"]
    },
    description: {
        type: String,
        required : [true, "Please add a description"],
        maxlength : [500, "Description can't be more than 500 characters"]
    },
    price: Number,
    category: {
        type: String,
        required : [true, "Please select a category"],
    },
    brand: {
        type: String,
        required : [true, "Please select a brand"],
    },
    photo: {
        type: String,
        default: 'anonymous.jpg'
        //required : [true, "Please insert a photo"],
    }


});
// Create bootcamp slug from the name
ProductSchema.pre('save', function(next){
    this.slug = slugify(this.name, {lower: true});
    next();
})

module.exports = mongoose.model('Product', ProductSchema);