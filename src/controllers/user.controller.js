import User from "../../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import bcrypt from "bcrypt";

export const register = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ where: { email: email } });
  if (existingUser) {
    return res.status(409).json({ message: "User already exists." });
  }

  if (typeof password !== "string") {
    return res.status(400).json({ error: "Password must be a string" });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: hashedPassword,
    });
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    res.status(400).json(error.message);
  }
});

export const signIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ where: { email: email } });
    if (!validUser) {
      return res.status(400).json({ message: "User not found!" });
    }

    const validPassword = await bcrypt.compare(password, validUser.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    } else {
      res
        .status(200)
        .json({ result: validUser, message: "User logged in successfully" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
});

export const updateUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { email, password } = req.body;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(400).json({ message: "could not found" });
    } else {
      user.password = (await bcrypt.hash(password, 10)) || user.password;
    }

    await user.save();

    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(400).json(error.message);
  }
});

export const deleteUser = asyncHandler(async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(400).json({ message: "Could not found" });
    }
    await user.destroy();
    res.status(400).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "User deleted unsuccessful!" });
  }
});
