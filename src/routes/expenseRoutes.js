const express = require("express");
const router = express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

const {
  createExpense,getExpenses,updateExpense,deleteExpense
} = require("../controllers/expenseController");

router.post(
  "/",
  authMiddleware,
  createExpense
);
router.get(
  "/",
  authMiddleware,
  getExpenses
);
router.post(
  "/",
  authMiddleware,
  updateExpense
);
router.post(
  "/",
  authMiddleware,
  deleteExpense
);
module.exports = router;