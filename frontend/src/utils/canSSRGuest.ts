import { GetServerSideProps, GetStaticPathsContext, GetServerSidePropsResult, GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";

export function canSSRGuest<P>(fn: GetServerSideProps<P>) {
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {

        const cookies = parseCookies(ctx);

        if(cookies["@yoripizzas.token"]){
            return {
                redirect:{
                    destination: '/dashboard',
                    permanent: false,
                }
            }
        }



        return await fn(ctx);
        
    }
}