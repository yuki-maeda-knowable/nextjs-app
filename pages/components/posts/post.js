import Link from "next/link"

export default function Post({post}) {
  return(
    <>
      <Link href={`/posts/${post.id}`}>
        <h2>{post.id} {post.title}</h2>
        <hr />
      </Link>
    </>
  )
  
}