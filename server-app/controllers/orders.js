const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')
const Order = require('../models/Order')

// @desc    GET all categories
// @route   GET /api/v1/categories
// @access  Public
exports.getOrders = asyncHandler(async (req, res, next) => {
        const orders = await Order.find();

        res.status(200).json({success: true, count: orders.length, data: orders});

});

// @desc    GET single category
// @route   GET /api/v1/categories/:id
// @access  Public
exports.getOrder = asyncHandler(async  (req, res, next) => {
        const order = await Order.findById(req.params.id);

        if(!order){
            return next(new ErrorResponse(`Order not found with id of ${req.params.id}`, 404));
        }
        
        res.status(200).json({success: true, data: order})
    
    
});

// @desc    Create new category
// @route   POST /api/v1/categories
// @access  Private
exports.createOrder = asyncHandler(async (req, res, next) => {
   
    const order = await Order.create(req.body);

    res.status(201).json( {success: true, data: order});
   
});

// @desc    Update category
// @route   PUT /api/v1/categories/:id
// @access  Private
exports.updateOrder = asyncHandler(async (req, res, next) => {
    
        const order = await Category.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if(!order){
            return next(new ErrorResponse(`Order not found with id of ${req.params.id}`, 404));
        }

        res.status(200).json({ success: true, data: order });
       
});

// @desc    Delete category
// @route   DELETE /api/v1/categories/:id
// @access  Private
exports.deleteOrder = asyncHandler(async (req, res, next) => {

        const order = await Order.findByIdAndDelete(req.params.id);

        if(!order){
            return next(new ErrorResponse(`Order not found with id of ${req.params.id}`, 404));
        }

        res.status(200).json({ success: true, data: {} });
        
    
});