import Link from "next/link"
import Post from "../components/posts/post"

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return{
    props: {
      posts: data,
    },
  }
}


export default function Posts({posts}) {
  return(
    <>
      <h1>Post一覧</h1>
      {
        posts.map((post => {
          return(
          <div key={post.id}>
            <Post post={post}/>
          </div>
          )
        }))
      }
      <Link href={`/`}>
        Home
      </Link>
    </>
  )
}