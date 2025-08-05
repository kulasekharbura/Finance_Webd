const User = require("../model/UserModel");
const { createSecretToken } = require("../Util/SecretToken");
const bcrypt = require("bcryptjs");

// Use a single object for exports
const AuthController = {};

AuthController.Signup = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // FIX: REMOVED the manual hashing.
    // Let the pre-save hook in your UserModel handle the hashing automatically.
    const user = await User.create({
      email,
      password, // Pass the plain text password here
      username,
    });

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user: { id: user._id, email: user.email, username: user.username },
    });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({
      message: "An internal server error occurred.",
      success: false,
    });
  }
};

AuthController.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    // Check for user *before* comparing password to avoid timing attacks
    if (!user) {
      return res.status(401).json({ message: "Incorrect password or email" });
    }

    // Now compare the provided password with the hashed password in the database
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(401).json({ message: "Incorrect password or email" });
    }

    const token = createSecretToken(user._id);

    // FIX: Corrected cookie options. `withCredentials` is a client-side setting.
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    // FIX: REMOVED next() call. Use a proper success status code (200 OK for login).
    res
      .status(200)
      .json({ message: "User logged in successfully", success: true });
  } catch (error) {
    console.error("Login Error:", error);
    // FIX: Added a response in the catch block
    res.status(500).json({
      message: "An internal server error occurred.",
      success: false,
    });
  }
};

module.exports = AuthController;
