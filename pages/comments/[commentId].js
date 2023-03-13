import { comments } from "@/data/comments";

export async function getStaticPaths() {
  const res = await fetch
  return {
    paths: [
      { params: { commentId: '1'} },
      { params: { commentId: '2'} },
      { params: { commentId: '3'} }
    ],
    fallback: false
  }
}

export async function getStaticProps(context){
  const {params} = context
  const {commentId} = params
  const comment = comments.find((comment) => comment.id === parseInt(commentId))
  console.log(comment);
  return {
    props:{
      comment,
    }
  }
}

export default function Comment({comment}) {
  return (
    <div>
      <h2>{comment.id}. {comment.text}</h2>      
    </div>
  );
}

