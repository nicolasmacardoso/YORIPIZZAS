import { FormEvent, useState } from "react"

import Head from "next/head"
import Image from "next/image"
import styles from '../../../styles/home.module.scss'

import logoImg from '../../../public/logo.svg'

import { Input } from "../../components/ui/Input"
import { Button } from "../../components/ui/Button"

import Link from 'next/link'

export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)

    async function handleSignUp(event: FormEvent) {
        event.preventDefault();

        if(name === '' || email === '' || password === ''){
            alert('PREENCHA TODOS OS CAMPOS')
            return;
        }
        
        setLoading(true);

    }

    return (
        <>
            <Head>
                <title>Yoripizzas - Cadastre-se</title>
            </Head>
            <div className={styles.containerCenter}>
                <Image src={logoImg} alt="Logo Yoripizzas" />

                <div className={styles.login}>
                    <h1>Criando sua conta</h1>

                    <form onSubmit={handleSignUp}>
                        <Input
                            placeholder="Digite seu nome"
                            type="text"
                            value={name}
                            onChange={ (e) => setName(e.target.value)}
                        />

                        <Input
                            placeholder="Digite seu email"
                            type="text"
                            value={email}
                            onChange={ (e) => setEmail(e.target.value)}
                        />

                        <Input
                            placeholder="Digite sua senha"
                            type="password"
                            value={password}
                            onChange={ (e) => setPassword(e.target.value)}
                        />

                        <Button
                            type="submit"
                            loading={loading}
                        >
                            Cadastrar
                        </Button>
                    </form>

                    <Link href="/" legacyBehavior>
                        <a className={styles.text}>Já possui uma conta? Faça login</a>
                    </Link>

                </div>
            </div>
        </>
    )
}
