import Link from "next/link";

export async function getStaticProps(context) {
  const {params} = context
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  const data = await res.json();
  return{
    props :{
      post: data,
    },
  }
}


export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  const paths = data.map(data => {
    return{
      params: {
        postId: `${data.id}`
      }
    }
  })
  return{
    paths,
    fallback: false
  }
  
}

export default function PostDetail({post}) {
  return(
    <>
      <h1>Post Detail</h1>
      <h2>title: {post.title}</h2>
      <p>body: {post.body}</p>
      <p>user: {post.userId}</p>
      <Link href={`/posts`}>
        Post一覧へ
      </Link>
    </>
  )
}