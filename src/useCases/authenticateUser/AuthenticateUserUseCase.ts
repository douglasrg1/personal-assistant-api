import { compare } from "bcryptjs";
import { client } from "../../prisma/client"
import { GenerateJwtRefreshToken, GenerateJwtToken } from "../../providers/JWTTokenProvider";

interface IRequest {
    username: string,
    password: string
}
class AuthenticateUserUseCase {
    async execute({ username, password }: IRequest) {
        const user = await client.user.findFirst({
            where: {
                username
            }
        })

        if (!user) {
            throw new Error("User or password incorrect");
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error("User or password incorrect")
        }

        const token = await GenerateJwtToken(user.id);

        const refreshToken = await GenerateJwtRefreshToken(user.id);

        return {token, refreshToken};
    }
}

export { AuthenticateUserUseCase }

// TODO -> add error handling
// TODO -> how to inject classes
// TODO -> tests
// TODO -> try to implement hexagonal architecture good practices.