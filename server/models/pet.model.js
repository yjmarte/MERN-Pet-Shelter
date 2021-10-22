const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "Name is required."],
      minlength: [3, "Name must be at least 3 characters long."],
    },
    type: {
      type: String,
      required: [true, "Type is required."],
      minlength: [3, "Type must be at least 3 characters long."],
    },
    desc: {
      type: String,
      required: [true, "Description is required."],
      minlength: [3, "Description must be at least 3 characters long."],
    },
    skillone: {
      type: String,
    },
    skilltwo: {
      type: String,
    },
    skillthree: {
      type: String,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pet", PetSchema);
