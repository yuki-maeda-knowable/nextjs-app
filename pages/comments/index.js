import { useState } from "react"


export default function Comments() {
  //GETでLoad Commentsを押すとコメント一覧を取得
  const [comments, setComments] = useState([]);//コメント一覧は配列を返すので初期値は空配列
  //inputの状態管理
  const [comment, setComment] = useState('');//inputの初期値は空

  async function fetchComments() {
    const res = await fetch('/api/comments')
    const data = await res.json()
    setComments(data)
  }
  async function submitComment(params) {
    //ここでcommentを送信したら/api/commentsの方でpostを受け取った後の処理を書く
    const res = await fetch('/api/comments', {
      method: 'POST', 
      body: JSON.stringify({comment}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    console.log(data);
    fetchComments();
  }

  async function deleteComment(commentId) {
    const res = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
    })
    const data = await res.json();
    console.log(data);
    //削除したらデータ一覧取得の関数呼び出し
    fetchComments();
    
  }
  return(
    <>
      <h1>comments</h1>
      <button onClick={fetchComments}>Load Comments</button>
      <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
      <button type="submit" onClick={submitComment}>submit comment</button>
      {
        //コメント一覧が表示される
        comments.map((comment => {
          return(
            <div key={comment.id}>
              <h2>{comment.id} {comment.text}</h2>
              <button onClick={() => deleteComment(comment.id)}>Delete</button>
              {/* 削除の時のonclickの書き方は以下の書き方もできる */}
              {/* <button onClick={deleteComment.bind(this, comment.id)}>Delete</button> */}
            </div>  
          )
        }))
      }
    </>
  )
}