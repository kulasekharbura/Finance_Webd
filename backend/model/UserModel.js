const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // <-- 1. REQUIRE BCRYPTJS HERE

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now, // Use Date.now as the function reference
  },
});

// 2. ATTACH THE PRE-SAVE HOOK DIRECTLY TO THE SCHEMA
// This function will run automatically right before a document is saved.
userSchema.pre("save", async function (next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified("password")) {
    return next();
  }
  // Hash the password with a cost factor of 12
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// 3. EXPORT THE COMPILED MODEL DIRECTLY (NO CURLY BRACES)
module.exports = mongoose.model("User", userSchema);
