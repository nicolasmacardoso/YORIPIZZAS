import { FormEvent, useContext, useState } from "react"

import Head from "next/head"
import Image from "next/image"
import styles from '../../styles/home.module.scss'

import logoImg from '../../public/logo.svg'

import { Input } from "../components/ui/Input"
import { Button } from "../components/ui/Button"
import { toast } from "react-toastify"

import { AuthContext } from "../contexts/AuthContext"

import Link from 'next/link'

export default function Home() {
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    if(email === '' || password === '') {
      toast.warning("Preencha todos os campos!")
      return;
    }

    setLoading(true);

    let data = {
      email,
      password
    }

    await signIn(data)

    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Yoripizzas - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo Yoripizzas"/>

        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input
              placeholder="Digite seu email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              placeholder="Digite sua senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              loading={loading}
            >
              Entrar
            </Button>
          </form>

          <Link href="/signup" legacyBehavior>
            <a className={styles.text}>Não possui uma conta? Cadastre-se</a>
          </Link>

        </div>
      </div>
    </>
  )
}
