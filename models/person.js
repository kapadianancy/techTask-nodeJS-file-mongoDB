const mongoose = require("mongoose");
const validator = require("validator");

const PersonSchema = mongoose.Schema(
  {
    SrNo: {
      type: Number,
      required: true,
      unique: true,
    },
    FirstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    Age: {
      type: Number,
      required: true,
      validate(value) {
        if (value <= 0) {
          throw new Error("Invalid age");
        }
      },
    },
    Email: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
      unique: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email");
        }
      },
    },
  },
  {
    timestamps: true,
  }
);

const Person = mongoose.model("persons", PersonSchema);

module.exports = Person;
