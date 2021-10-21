import { Request, Response } from "express";

class ProfileUserController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;

        const service = new ProfileUserService();
    }
}