const express = require("express");

const router = express.Router();
router.use(express.json());

const UserModal = require("../modals/Users");

// Read

router.get("/getUsers", async (req, res) => {
  try {
    const result = await UserModal.find();
    return res.status(200).json({
      message: "Success",
      result,
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
});

// Read by Id

router.get("/getUser/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const result = await UserModal.findById(userId);
    return res.status(200).json({
      message: "Success",
      result,
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
});

// Create

router.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModal(user);

  try {
    await newUser.save();
    return res.status(200).json({
      message: "New User created successfully",
      newUser,
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
});

// Update

router.put("/updateUser/:id", async (req, res) => {
  const userId = req.params.id;
  const user = req.body;

  try {
    const result = await UserModal.findByIdAndUpdate(userId, user).exec();
    return res.status(200).json({
      message: "User updated successfully",
      result,
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
});

// Delete

router.delete("/deleteUser/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const result = await UserModal.findByIdAndDelete(userId);
    return res.status(200).json({
      message: "Successfully deleted",
      result,
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
});

module.exports = router;
