import Link from "next/link"

export async function getStaticProps(context) {
  const {params} = context
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
  const data = await res.json()
  return{
    props: {
      user: data,
    }
  }
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  const paths = data.map((data => {
    return{
      params: {
        userId: `${data.id}`
      }
    }
  }))
  return{
    paths,
    fallback: false
  }  
}

export default function UserDetail({user}) {
  return(
    <>
      <h1>User Detail</h1>
      <h2>{user.id} {user.name} {user.email}</h2>
      <h2>{user.phone}</h2>
      <Link href={'/'}>
        HOME
      </Link>
    </>
  )
}