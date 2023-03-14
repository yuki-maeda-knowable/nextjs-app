import {useSession} from 'next-auth/react'
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import Link from 'next/link';

export async function getServerSideProps(context) {
  //セッション情報が消えちゃうからサインインしても、blogページに来たらログアウト認定されるんだ
  //この下の処理が間違ってるんだなあ
  const isLogin = await getServerSession(context.req, context.res, authOptions)
  return{
    props: {
      isLogin: isLogin ? 'ログインしてる' : 'ログインしろ'
    }
  }
  
}

export default function Blog({isLogin}) {
  const {data: session} = useSession();

  
  return(
    <>
      <h1>Blog Page - {isLogin}</h1>
      <>
        {!session && (
          <Link href={`/api/auth/signin`}>
            <h2>ログインしてね</h2>
          </Link>
        )}
        </>
        
    </>
  )
}