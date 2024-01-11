import { canSSRAuth } from "@/utils/canSSRAuth"
import Head from "next/head"

import { Header } from "@/components/ui/Header"

export default function Dashboard(){
  return(
    <>
    <Head>
      <title>Painel - Yoripizzas</title>
    </Head>
    <Header/>
    <div>
      <h1>Painel</h1>
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