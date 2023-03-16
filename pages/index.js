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
      <Card users={users}/>
      <FormUser />

    </>
  )
}