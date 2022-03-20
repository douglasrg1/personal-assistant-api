import { Request, Response } from "express";
import { RefreshJwtTokenUseCase } from "./RefreshJwtTokenUseCase";

class RefreshJwtTokenController {
    async handler(request: Request, response: Response){
        const {refresh_token} = request.body;

        const refreshTokenUseCase = new RefreshJwtTokenUseCase();

        const token = await refreshTokenUseCase.execute(refresh_token);

        return response.json(token);
    }
}

export {RefreshJwtTokenController}