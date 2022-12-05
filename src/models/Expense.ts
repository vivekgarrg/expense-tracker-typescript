import mongoose, { Schema } from "mongoose";

export interface expense {
  amount: number;
  date: Date;
  remarks: String;
  payment_mode: String;
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
    payment_mode: {
      type: String,
      enum: ["upi", "cash"],
      required: true,
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
