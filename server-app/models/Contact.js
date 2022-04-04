const mongoose = require('mongoose');
const slugify = require('slugify');

const ContactSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, 'Please add a email'],
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    message:{
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    slug: String,
    

});

//Create Category slug from the name
ContactSchema.pre('save', function(next){
    this.slug = slugify(this.email, {lower: true})
    next();
});

module.exports = mongoose.model('Contact', ContactSchema);

