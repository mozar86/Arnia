import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";
import { User } from "../models/UserModel";
import { UserService } from "../services/UserService";

const userRepository = new UserRepository(User);
const userService = new UserService(userRepository);

export async function createUserController(
  request: Request,
  response: Response
) {
  const { fullName, nickname, email, password } = request.body;
  try {
    const user = await userService.createUser({
      fullName, 
      nickname, 
      email, 
      password, 
    });
    return response.status(201).send({ user });
  } catch (error: any) {
    response.status(400).send({ message: error.message });
  }
}

export async function getAllUsersController(
  request: Request,
  response: Response
) {
  const users = await userService.getAllUsers();
  return response.status(200).send({ users });
}

export async function authUserController(request: Request, response: Response) {
  const { email, password } = request.body;
  try {
    const token = await userService.authUser(email, password);
    return response.status(200).send({ token });
  } catch (error: any) {
    response.status(400).send({ message: error.message });
  }

}