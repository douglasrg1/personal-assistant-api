import { client } from "../../prisma/client"
import {hash} from "bcryptjs"

interface IUserRequest {
    name: string,
    password: string,
    username: string
}

class CreateUserUseCase {
    async execute({name, username, password}: IUserRequest){
        
        const userExists = await client.user.findFirst({
            where: {
                username
            }
        })

        if(userExists){
            throw new Error("User already exists!");
        }

        password = await hash(password, 8);

        return await client.user.create({
            data: {
                name, username, password
            }
        })
    }
}

export {CreateUserUseCase}