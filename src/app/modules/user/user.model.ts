import mongoose, { Schema, model, Model } from "mongoose";
import { IUser, IUserMethods } from "./user.interface";

type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  name: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  dateOfBirth: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  email: {
    type: String,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
});

// class -> this.  --> classs
userSchema.static("getAdminUsers", async function getAdminUsers() {
  const admins = await this.find({ role: "admin" });
  console.log(admins);
  return admins;
});

userSchema.method("fullName", function fullName() {
  return this.name.firstName + " " + this.name.lastName;
});

const User = model<IUser>("User", userSchema);

// export const createUserToDB = async () => {
//   const user = new User({
//     id: "5445",
//     role: "student",
//     password: "joss",
//     name: {
//       firstName: "johnh",
//       middleName: "doe",
//       lastName: "john",
//     },

//     gender: "male",
//     email: "abc@gmail.com",
//     contactNo: "012122",
//     emergencyContactNo: "15125",
//     presentAddress: "abc",
//     permanentAddress: "xyz",
//   });
//   await user.save();
//   console.log(user);
// };
// createUserToDB();
export default User;

// instance methods --> instance er methods
// class -> instance + methods -> instance methods
