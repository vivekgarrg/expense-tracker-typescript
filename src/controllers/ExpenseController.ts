import { Response, Request, NextFunction } from "express";
import ErrorHandler from "../error/ErrorHandler";
import httpStatusCodes from "../error/HttpCodes";
import ExpenseModel, { expense } from "../models/Expense";
class ExpenseController {
  async addExpense(req: Request, res: Response, next: NextFunction) {
    try {
      const expense = await ExpenseModel.create(req.body);
      if (expense) {
        res.status(httpStatusCodes.OK).json({
          message: "Expense Created Successfully",
          expense,
        });
      } else {
        throw new ErrorHandler(
          httpStatusCodes.BAD_REQUEST,
          "Expense not created."
        );
      }
    } catch (error) {
      next(error);
    }
  }

  async deleteExpense(req: Request, res: Response, next: NextFunction) {
    try {
      const expense = await ExpenseModel.findByIdAndDelete(req.body.id);
      if (expense) {
        res.status(httpStatusCodes.OK).json({
          message: "Expense Deleted Successfully",
          expense,
        });
      } else {
        throw new ErrorHandler(
          httpStatusCodes.BAD_REQUEST,
          `No expense found with id: ${req.body.id}`
        );
      }
    } catch (error) {
      next(error);
    }
  }

  async getAllExpense(req: Request, res: Response, next: NextFunction) {
    try {
      const expense = await ExpenseModel.find();

      let total = 0;
      expense.forEach((val: expense) => {
        console.log(val.amount);
        total += val.amount || 0;
      });

      if (expense) {
        res.status(httpStatusCodes.OK).json({
          message: "Expenses Fetched Successfully",
          expense,
          total,
        });
      } else {
        throw new ErrorHandler(
          httpStatusCodes.BAD_REQUEST,
          `No expense found!!`
        );
      }
    } catch (error) {
      next(error);
    }
  }

  async getExpenseById(req: Request, res: Response, next: NextFunction) {
    try {
      const expense = await ExpenseModel.findOne({ _id: req.params.id });
      if (expense) {
        res.status(httpStatusCodes.OK).json({
          message: "Expense Fetched Successfully",
          expense,
        });
      } else {
        throw new ErrorHandler(
          httpStatusCodes.BAD_REQUEST,
          `No expense found with id: ${req.params.id}!!`
        );
      }
    } catch (error) {
      next(error);
    }
  }
}

export = new ExpenseController();
