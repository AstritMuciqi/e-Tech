const mongoose = require('mongoose');
const slugify = require('slugify');

const CategorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    slug: String,
    photo: {
        type: String,
        default: 'no-photo.jpg'
    }

});

//Create Category slug from the name
CategorySchema.pre('save', function(next){
    this.slug = slugify(this.name, {lower: true})
    next();
});

module.exports = mongoose.model('Category', CategorySchema);

