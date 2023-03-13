import Link from "next/link"

export default function User({user}){
  return(
    <>
      <Link href={`/users/${user.id}`}>
        <h2>{user.id} {user.name} {user.email} </h2>
      </Link>
    </>
  )
}