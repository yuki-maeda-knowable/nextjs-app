import { useState } from "react"


export default function Comments() {
  const [comments, setComments] = useState([]);

  async function fetchComments() {
    const res = await fetch('/api/comments')
    const data = await res.json()
    setComments(data)
  }
  

  return(
    <>
      <h1>comments</h1>
      <button onClick={fetchComments}>Load Comments</button>
      {
        comments.map((comment => {
          return(
            <div key={comment.id}>
              <h2>{comment.id} {comment.text}</h2>
            </div>
          )
        }))
      }
    </>
  )
}