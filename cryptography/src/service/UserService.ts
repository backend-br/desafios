import bcrypt from "bcrypt";
import { Long } from "typeorm";
import { User } from "../entities/User";
import { userRepository } from "../repository/userRepository";

export default class UserService {
  async create(
    userDocument: string,
    creditCardToken: string,
    value: Long
  ): Promise<User> {
    const user = new User();

    user.userDocument = await bcrypt.hash(userDocument, 8);
    user.creditCardToken= await bcrypt.hash(creditCardToken, 8);
    user.value = value;

    const newUser = await userRepository.save(user);
    return newUser;
  }

  async show(id: number) {
    const user = await userRepository.findOneById(id);
    return user;
  }

  async list() {
    const userList = await userRepository.find()
    return userList;
  }

  async update(id: number, userDocument: string, creditCardToken: string) {

  }

  
}