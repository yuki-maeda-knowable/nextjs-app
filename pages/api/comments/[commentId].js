import { comments } from "@/data/comments";

export default function handler(req, res) {
  const {commentId} = req.query //req.queryに{ commentId: '1' }が入ってるから値だけ取得

  if(req.method === 'GET'){
    const comment = comments.find((comment) => comment.id === parseInt(commentId))
    res.status(200).json(comment)  
  }else if (req.method === 'DELETE'){
    const deleteComment = comments.find((comment) => comment.id === parseInt(commentId))

    // 配列から削除
    const index = comments.findIndex((comment) => comment.id === parseInt(commentId))
    comments.splice(index, 1)
    res.status(200).json(deleteComment)
  }  
}