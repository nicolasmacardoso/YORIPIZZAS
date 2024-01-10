import { PrismaClientRustPanicError } from "@prisma/client/runtime/library";
import prismaClient from "../../prisma";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface AuthRequest {
    email: string;
    password: string;
}
class AuthUserService {
    async execute({ email, password }: AuthRequest) {
        //verificar email existente
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })
 
        if (!user) {
            throw new Error("Email ou senha inválido!")
        }

        // verificar se a senha está correta
        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("Email ou senha inválido!")
        }

        // gerar um token JWT e devolver dados do usuário
        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }
}

export { AuthUserService }