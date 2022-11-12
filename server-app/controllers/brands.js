const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Brand = require("../models/Brand");
//

exports.getbrands = asyncHandler(async (req, res, next) => {
  const brands = await Brand.find();
  res.setTimeout(1000, function() {
    res.status(200).json({ success: true, count: brands.length, data: brands });
  });
});
///
exports.getbrand = asyncHandler(async (req, res, next) => {
  const brand = await Brand.findById(req.params.id);
  if (!brand) {
    return next(
      new ErrorResponse(`brand not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: brand });
});

// Create (Krijimi)
exports.createbrand = asyncHandler(async (req, res, next) => {
  const brand = await Brand.create(req.body);

  res.status(201).json({
    success: true,
    data: brand
  });
});

// Update (Updatimi)
exports.updatebrand = asyncHandler(async (req, res, next) => {
  const brand = await Brand.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!brand) {
    return next(
      new ErrorResponse(`brand not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: brand });
});

// Delete (Fshirja)
exports.deletebrand = asyncHandler(async (req, res, next) => {
  const brand = await Brand.findByIdAndDelete(req.params.id);

  if (!brand) {
    return next(
      new ErrorResponse(`brand not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: {} });
});
