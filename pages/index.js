import prisma from '@/lib/prisma'
import Link from 'next/link'
import FormUser from '../components/users/FormUser'

export async function getServerSideProps() {
  const data = await prisma.user.findMany();
  return{
    props: {
      users: data,
    },
  }
}

export default function Home({users}) {

  return (
    <>
      <h1>hello, world</h1>
      <Link href={'/users'}>
        users
      </Link>
      <Link href={'/posts'}>
        posts
      </Link>
      
      {
        users.map((user => {
          return(
            <div key={user.id}>
              <h2>{user.name} {user.email}</h2>
            </div>
          )
        }))
      }
      <FormUser />

    </>
  )
}