import dayjs from "dayjs";
import { sign } from "jsonwebtoken";
import { client } from "../prisma/client";

async function GenerateJwtToken(userId: string) {
    const token = sign({}, "123123", {
        subject:userId,
        expiresIn: "60s",
    })

    return token;
}

async function GenerateJwtRefreshToken(userId: string) {
    const expiresIn = dayjs().add(1, "y").unix();

    const genereatedRefreshToken = await client.refreshToken.create({
        data: {
            userId,
            expiresIn
        }
    })

    return genereatedRefreshToken;
}

export {GenerateJwtRefreshToken, GenerateJwtToken}