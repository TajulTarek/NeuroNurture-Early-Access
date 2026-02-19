import mongoose, { Schema, type Document } from "mongoose";

export interface IEarlyAccess extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: Date;
}

const EarlyAccessSchema = new Schema<IEarlyAccess>({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  phone: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.EarlyAccess ||
  mongoose.model<IEarlyAccess>("EarlyAccess", EarlyAccessSchema);
