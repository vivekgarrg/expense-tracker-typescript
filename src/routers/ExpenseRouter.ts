import { Router } from "express";
import ExpenseController from "../controllers/ExpenseController";

class SurveyRouter {
  private _router = Router();
  private _controller = ExpenseController;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    this._router.post("/", this._controller.addExpense);
    this.router.delete("/", this._controller.deleteExpense);
    this._router.get("/", this._controller.getAllExpense);
    this.router.get("/:id", this._controller.getExpenseById);
  }
}

export = new SurveyRouter().router;
