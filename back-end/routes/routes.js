const express = require("express");

const router = express.Router();
router.use(express.json());

const TodoModel = require("../model/TodoModel");

// Read

router.get("/todos", async (req, res) => {
  try {
    const result = await TodoModel.find();
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

router.get("/todo/:id", async (req, res) => {
  const todoId = req.params.id;
  try {
    const result = await TodoModel.findById(todoId);
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

router.post("/todo/new", async (req, res) => {
  const todo = new TodoModel({
    text: req.body.text,
  });

  try {
    await todo.save();
    return res.status(200).json({
      message: "New todo created successfully",
      todo,
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
});

// Update

// router.put("/todo/update/:id", async (req, res) => {
//   const todoId = req.params.id;
//   const todo = new TodoModel({
//     text: req.body.text,
//   });

//   try {
//     const result = await TodoModel.findByIdAndUpdate(todoId, todo).exec();
//     return res.status(200).json({
//       message: "todo updated successfully",
//       result,
//     });
//   } catch (err) {
//     return res.status(400).json({
//       error: err.message,
//     });
//   }
// });

// Delete

router.delete("/todo/delete/:id", async (req, res) => {
  const todoId = req.params.id;
  try {
    await TodoModel.findByIdAndDelete(todoId);
    return res.status(200).json({
      message: "Successfully deleted",
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
});

// Complete

router.put("/todo/complete/:id", async (req, res) => {
  const todoId = req.params.id;
  try {
    const todo = await TodoModel.findById(todoId);
    todo.complete = !todo.complete;
    todo.save();
    return res.status(200).json({
      message: "success",
      todo,
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
});

module.exports = router;
