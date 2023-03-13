import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>hello, world</h1>
      <Link href={'/users'}>
        users
      </Link>
      <Link href={'/posts'}>
        posts
      </Link>
    </>
  )
}
