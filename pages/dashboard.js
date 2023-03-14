import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";

export default function Dashboard() {
  const { data: session, status} = useSession()

  return(
    <>
      {
      !session && status === 'unauthenticated' && (
        <>
          <h2>ログインしてね</h2>
          <Link href={'#'} legacyBehavior>
            <a onClick={e => {
                  e.preventDefault();
                  signIn('github');
                }}>サインイン</a>
          </Link>
        </>
        )
      }
      <>
      {
        (session && 
          <h1>Dashboard Page</h1>
        )
      }
      </>
    </>
  )
}