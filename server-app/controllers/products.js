const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Product = require("../models/Product");

// @desc Get all products
// @route GET /api/v1/products
// @access Public
exports.getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find();
  res.setTimeout(2000, function(){
        res.status(200);
        res.json({ success: true, count: products.length, data: products }).time;
    });
});

// @desc Get single products
// @route GET /api/v1/products/:id
// @access Public

exports.getProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return next(
        new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
      );
    }
    res.setTimeout(1000, function(){
      res.status(200);
      res.json({
        success: true,
        data: product,
      });
    });
     //res.status().json({success:false});
});

// @desc Create new products
// @route POST /api/v1/products/
// @access Private

exports.createProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.create(req.body);
    res.setTimeout(1000, function(){
      res.status(201);
      res.json({
        success: true,
        data: product,
      });
    });
});

// @desc Edit  products
// @route Update /api/v1/products/:id
// @access Private

exports.updateProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      return next(
        new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
      );
    }
    res.setTimeout(1000, function(){
      res.status(200);
      res.json({
        success: true,
        data: product,
      });
    })
});

// @desc Delete  products
// @route Delete /api/v1/products/:id
// @access Private

exports.deleteProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return next(
        new ErrorResponse(`Product not found with id of ${req.params.id}`, 404)
      );
    }
    res.setTimeout(1000, function(){
      res.status(200);
      res.json({
        success: true,
        data: {},
      });
    });

});
