import { client } from "../../prisma/client";
import { GenerateJwtToken } from "../../providers/JWTTokenProvider";


class RefreshJwtTokenUseCase {
    async execute(refresh_token: string) {
        const refreshToken = await client.refreshToken.findFirst({
            where: {
                id: refresh_token
            }
        })

        if (!refreshToken) {
            throw new Error("Invalid refresh token")
        }

        const token = await GenerateJwtToken(refreshToken.userId);

        return token;
    }
}

export {RefreshJwtTokenUseCase}