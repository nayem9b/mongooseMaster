import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload:IUser):Promise<IUser> => {
  // creating a new user
  const user = new User(payload); //!Instance toiri korchi
  await user.save(); //!Built in Instance er method
  console.log(user);
  console.log(user.fullName());

  return user;
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1 });
  return user;
};

export const getAdminUsersFromDB = async () => {
  const admins = await User.find({role: "admin"}, {name:1})
  console.log(admins);
  return admins;
};

//Class -> Attach -> Method -> Directly call using Class
// user = new User
// user.   instance methods
// User.getAdminUsers()

