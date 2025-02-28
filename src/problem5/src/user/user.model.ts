import mongoose, { Document, Schema } from "mongoose";

// Define an interface for TypeScript support
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Define the User schema
const UserSchema: Schema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true, collection: "users" }
);

// Create the model
const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
