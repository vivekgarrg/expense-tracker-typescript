import mongoose, { Schema } from "mongoose";

export interface expense {
  amount: number;
  date: Date;
  remarks: String;
  timestamp: { createdAt: Date; updatedAt: Date };
}

const ExpenseSchema = new Schema<expense>(
  {
    amount: {
      type: Number,
      required: [true, "Amount is required."],
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    remarks: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const ExpenseModel = mongoose.model("expenses", ExpenseSchema);

export default ExpenseModel;
