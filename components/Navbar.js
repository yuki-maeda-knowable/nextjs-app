import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

function Navbar() {

  const { data: session, status} = useSession()
  // console.log(session);
  /*
    sessionに{user: {name: ****, email: ****, image: ***}}が入っていて、サインアウト直後は[undefined]でしばらくしたら[null]になる
    statusに[authenticated]か[unauthenticated]が入っている。サインアウト直後は[loading]があるなあ
   */
  return (
    <nav className='header'>
      <h1 className='logo'>
        <Link href={`/`}>
          NextAuth
        </Link>
      </h1>
      <ul className='main-nav'>
        <li>
          <Link href='/' legacyBehavior>
            <a>Home</a>
          </Link>
        </li>
        {
          session && (
          <li>
            <Link href='/dashboard' legacyBehavior>
              <a>Dashboard</a>
            </Link>
          </li>
        )}
        <li>
          <Link href='/blog' legacyBehavior>
            <a>Blog</a>
          </Link>
        </li>
        {
          !session && status === 'unauthenticated' &&(
            <li>
              <Link href='#' legacyBehavior>
                <a onClick={e => {
                  e.preventDefault();
                  signIn('github');
                }}>
                  Sign In
                </a>
              </Link>
            </li>
          )
        }
        {
          session && (
            <li>
              <Link href='#' legacyBehavior>
                <a onClick={e => {
                  e.preventDefault();
                  signOut();
                }}>
                  Sign Out
                </a>
              </Link>
            </li>
          )
        }
      </ul>
    </nav>
  )
}

export default Navbar