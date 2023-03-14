import {useSession} from 'next-auth/react'
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import Link from 'next/link';

export default function Blog() {
  const {data: session} = useSession();

  
  return(
    <>
      <h1>Blog Page</h1>
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