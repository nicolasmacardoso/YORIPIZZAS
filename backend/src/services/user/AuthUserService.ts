import { PrismaClientRustPanicError } from "@prisma/client/runtime/library";
import prismaClient from "../../prisma";
import { compare } from 'bcryptjs'

interface AuthRequest{
    email: string;
    password: string;
}
class AuthUserService {
    async execute({email, password}: AuthRequest) {
        //verificar email existente
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(!user){
            throw new Error("Email ou senha inválido!")
        }

        // preciso verificar se a senha está correta
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email ou senha inválido!")
        }

        // gerar um token JWT e devolver dados do usuário
        




        return {
            ok: true
        }
    }
}

export { AuthUserService }