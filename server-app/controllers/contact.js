const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const express = require("express");
const Contact = require("../models/Contact");

// @desc    GET all categories
// @route   GET /api/v1/categories
// @access  Public
exports.getContacts = asyncHandler(async (req, res, next) => {
  const contacts = await Contact.find();
  res.setTimeout(1000, function() {
    res
      .status(200)
      .json({ success: true, count: contacts.length, data: contacts });
  });
});

// @desc    GET single category
// @route   GET /api/v1/categories/:id
// @access  Public
exports.getContact = asyncHandler(async (req, res, next) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    return next(
      new ErrorResponse(`Contact not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: contact });
});

// @desc    Create new category
// @route   POST /api/v1/categories
// @access  Private
exports.createContact = asyncHandler(async (req, res, next) => {
  const contact = await Contact.create(req.body);

  res.status(201).json({ success: true, data: contact });
});

// @desc    Update category
// @route   PUT /api/v1/categories/:id
// @access  Private
exports.updateContact = asyncHandler(async (req, res, next) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!contact) {
    return next(
      new ErrorResponse(`Contact not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: contact });
});

// @desc    Delete category
// @route   DELETE /api/v1/categories/:id
// @access  Private
exports.deleteContact = asyncHandler(async (req, res, next) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);

  if (!contact) {
    return next(
      new ErrorResponse(`Contact not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: {} });
});
