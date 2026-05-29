import jwt from "jsonwebtoken";
import ApiError from "./api-error.js";

// Generate JWT token
const generateAccessToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "1d",
  });
};

// Verify JWT token
const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw ApiError.unauthorized(error.message || "Invalid token");
  }
};

export { generateAccessToken, verifyAccessToken };
