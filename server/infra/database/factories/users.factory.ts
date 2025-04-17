import { UserModel } from "../models/user";
import { UserRepository } from "../repository/users.repository";

export const makeUserRepository = () => {
  return new UserRepository(UserModel);
};
