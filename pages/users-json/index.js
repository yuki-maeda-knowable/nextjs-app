import Link from 'next/link'
import User from '../../components/users/user';

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();
  return{
    props: {
      users: data,
    },
  }
}

export default function Users({users}) {
  return(
    <>
      <h1>User List</h1>
      {
        users.map((user => {
          return(
            <div key={user.id}>
              <User user={user}/>
            </div>
          )
        }))
      }
      <Link href={'/'}>
        HOME
      </Link>
    </>
  )  
  
}