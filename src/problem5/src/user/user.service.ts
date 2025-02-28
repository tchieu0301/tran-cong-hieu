import UserModel, { IUser } from "./user.model";

export class UserService {
  static async create(userData: IUser) {
    try {
      const existingUser = await UserModel.findOne({ email: userData.email });
      if (existingUser) throw new Error("Email already exists");

      const newUser = new UserModel(userData);
      return await newUser.save();
    } catch (error) {
      throw error;
    }
  }

  static async update(userId: string, updateData: Partial<IUser>) {
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(userId, updateData, {
        new: true,
        runValidators: true,
      });
      if (!updatedUser) throw new Error("User not found");
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      return await UserModel.find();
    } catch (error) {
      throw error;
    }
  }

  static async getById(userId: string) {
    try {
      const user = await UserModel.findById(userId);
      if (!user) throw new Error("User not found");
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async deleteById(userId: string) {
    try {
      const deletedUser = await UserModel.findByIdAndDelete(userId);
      if (!deletedUser) throw new Error("User not found");
      return deletedUser;
    } catch (error) {
      throw error;
    }
  }
}
