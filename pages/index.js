import prisma from '@/lib/prisma'
import Link from 'next/link'
import FormUser  from '../components/users/FormUser'
import  Card  from "../components/users/card";
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
      <Link href={'/users-json'}>
        <button>
          users
        </button>
      </Link>
      <Link href={'/posts'}>
        <button>
          posts
        </button>
      </Link>
      
      <Card users={users}/>
      <FormUser />

    </>
  )
}