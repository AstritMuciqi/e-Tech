const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')
const express = require('express');
const Cart = require('../models/Cart')

// @desc    GET all categories
// @route   GET /api/v1/categories
// @access  Public
exports.getItems = asyncHandler(async (req, res, next) => {
        const items = await Cart.find();

        res.status(200).json({success: true, count: items.length, data: items});

});


// @desc    Create new category
// @route   POST /api/v1/categories
// @access  Private
exports.createItem = asyncHandler(async (req, res, next) => {
   
    const item = await Cart.create(req.body);

    res.status(201).json( {success: true, data: item});
   
});

// @desc    Update category
// @route   PUT /api/v1/categories/:id
// @access  Private
exports.updateItem = asyncHandler(async (req, res, next) => {
    
        const item = await Cart.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if(!item){
            return next(new ErrorResponse(`Cart item not found with id of ${req.params.id}`, 404));
        }

        res.status(200).json({ success: true, data: item });
       
});

// @desc    Delete category
// @route   DELETE /api/v1/categories/:id
// @access  Private
exports.deleteItem = asyncHandler(async (req, res, next) => {

        const item = await Cart.findByIdAndDelete(req.params.id);

        if(!item){
            return next(new ErrorResponse(`Cart item not found with id of ${req.params.id}`, 404));
        }

        res.status(200).json({ success: true, data: {} });
        
    
});
exports.deleteAll = asyncHandler(async (req, res, next) => {

    const item = await Cart.remove();

    if(!item){
        return next(new ErrorResponse(`Cart item not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({ success: true, data: {} });
    

});