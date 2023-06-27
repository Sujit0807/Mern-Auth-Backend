const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

const { protect } = require("../middleware/authMiddleware");

// DRY - (If we have same route for different methods)
router.route("/").get(protect, getGoals).post(protect, setGoal);

// OLD SYNTAX
router.put("/:id", protect, updateGoal);
router.delete("/:id", protect, deleteGoal);

module.exports = router;
