import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
    async handler(request: Request, response: Response) {
        const { username, password } = request.body;

        const authenticateUserUseCase = new AuthenticateUserUseCase();
        const token = await authenticateUserUseCase.execute({ username, password });

        response.json(token)
    }
}

export { AuthenticateUserController }