import Head from "next/head";
import styles from './styles.module.scss'
import { Header } from "@/components/ui/Header";

import { canSSRAuth } from "@/utils/canSSRAuth";

export default function Product() {
    return (
        <>
            <Head>
                <title>Novo produto - Yoripizzas</title>
            </Head>
            <div>
                <Header/>
                <main className={styles.container}>
                    <h1>Novo produto</h1>

                    <form className={styles.form}>
                        <select>
                            <option>
                                Bebidas
                            </option>
                            <option>
                                Pizzas
                            </option>
                        </select>
                            <input 
                                type="text"
                                placeholder="Digite o nome do produto" 
                                className={styles.input}
                            />
                            <input 
                                type="text"
                                placeholder="Digite o preço do produto" 
                                className={styles.input}
                            />

                            <textarea
                                placeholder="Descreva seu produto..."
                                className={styles.input}
                            />

                            <button className={styles.buttonAdd}>
                                Cadastrar
                            </button>

                    </form>

                </main>
            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {

        }
    }
})