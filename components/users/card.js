import Link from "next/link"
import { useRouter } from "next/router";

export default function Card({users}){
  const router = useRouter();

  async function delUser(id){
    const res = await fetch(`/api/user/${id}`,
      {
        method: "DELETE"
      })
    const data = res.json();

    console.log(data);
    router.push('/');
  }

  return(
      users.map((user => {
        return(
          <div key={user.id}>
            <h2>{user.name} {user.email}</h2>
            <Link href={`users/${user.id}`}>
              <button style={{ padding: '0.1rem', margin: '0.1rem 0.3rem' }}>
                詳細
              </button>
            </Link>
            <button style={{ padding: '0.1rem', margin: '0.1rem 0.3rem'  }} onClick={() => delUser(user.id)}>
              削除
            </button>
            <hr style={{ margin: '0.7rem 0'  }}/>
          </div>
        )
      }))
  )
}