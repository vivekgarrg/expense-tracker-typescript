import { Router } from "express";
import ExpenseRouter from "./ExpenseRouter";

class MasterRouter {
  private _router = Router();
  private _subrouter = ExpenseRouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    this._router.use("/expense", this._subrouter);
  }
}

export = new MasterRouter().router;
