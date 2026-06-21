const Expense = require("../models/Expenses");

const createExpense = async (req, res) => {
  try {
    const { title, amount, category ,date} = req.body;

    const expense = await Expense.create({
      title,
      amount,
      category,
      user: req.user.userId,
      date
    });

    res.status(201).json({
      message: "Expense created",
      expense
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
const getExpenses = async (req, res) => {
  try {

    const { filter, startDate, endDate } = req.query;

    let query = {
      user: req.user.userId
    };

    let currentDate = new Date();

    if (filter === "week") {

      let weekAgo = new Date();

      weekAgo.setDate(
        currentDate.getDate() - 7
      );

      query.date = {
        $gte: weekAgo
      };

    }

    else if (filter === "month") {

      let monthAgo = new Date();

      monthAgo.setMonth(
        currentDate.getMonth() - 1
      );

      query.date = {
        $gte: monthAgo
      };

    }

    else if (filter === "3months") {

      let threeMonthsAgo = new Date();

      threeMonthsAgo.setMonth(
        currentDate.getMonth() - 3
      );

      query.date = {
        $gte: threeMonthsAgo
      };

    }

    else if (startDate && endDate) {

      query.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };

    }

    const expenses =
      await Expense.find(query);

    res.json({
      count: expenses.length,
      expenses
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
const updateExpense = async (req, res) => {
  try {

    const expense = await Expense.findById(
      req.params.id
    );

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found"
      });
    }

    if (
      expense.user.toString() !==
      req.user.userId
    ) {
      return res.status(403).json({
        message: "Not authorized"
      });
    }

    const updatedExpense =
      await Expense.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true
        }
      );

    res.json({
      message: "Expense updated",
      expense: updatedExpense
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
const deleteExpense = async (req, res) => {
  try {

    const expense =
      await Expense.findById(
        req.params.id
      );

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found"
      });
    }

    if (
      expense.user.toString() !==
      req.user.userId
    ) {
      return res.status(403).json({
        message: "Not authorized"
      });
    }

    await expense.deleteOne();

    res.json({
      message:
        "Expense deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
module.exports = {
  createExpense,
  getExpenses,
  updateExpense,
  deleteExpense
};