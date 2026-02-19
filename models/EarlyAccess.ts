import mongoose, { Schema, type Document } from "mongoose";

export interface IEarlyAccess extends Document {
  role: "parent" | "school" | "doctor";
  // Parent fields
  name?: string;
  email: string;
  childName?: string;
  childAge?: number;
  // School fields
  schoolName?: string;
  address?: string;
  // Doctor fields
  specialization?: string;
  createdAt: Date;
}

const EarlyAccessSchema = new Schema<IEarlyAccess>({
  role: {
    type: String,
    required: true,
    enum: ["parent", "school", "doctor"],
    index: true,
  },
  name: { type: String, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  childName: { type: String, trim: true },
  childAge: { type: Number },
  schoolName: { type: String, trim: true },
  address: { type: String, trim: true },
  specialization: { type: String, trim: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.EarlyAccess ||
  mongoose.model<IEarlyAccess>("EarlyAccess", EarlyAccessSchema);
