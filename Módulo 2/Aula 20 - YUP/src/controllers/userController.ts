import { Request, Response } from "express";


const userRepository = new UserRepository(User);
const userService = new UserService(userRepository);

export async function createUserController(
    request: Request,
    response: Response
) {
    const { email, password } = request.body;
    const user = await userService.createUser({ email, password });

    response.status(201).send({ user });
}

