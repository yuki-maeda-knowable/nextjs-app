import { comments } from "@/data/comments";

export default function handler( req, res){
  if (req.method === 'GET') {
    res.status(200).json(comments)
  }else if (req.method === 'POST'){
    //postだったら、リクエストのbodyに入ってるコメントを変数に格納
    const comment = req.body.comment
    //新しいオブジェクトを作成し、IDとtextにフォームから送られてきた内容を定義する
    const NewComment = {
      id: Date.now(), //idは開発用に一旦ユニークな値にできる日付で。
      text: comment //送られてきたcomment
    }
    //ここで言うcommentsは/data/commentsのデータに対して登録してる。
    //だけど、実際に書き込みをしているわけじゃなく、メモリ内に保持してる感じかな
    comments.push(NewComment)
    res.status(201).json(NewComment)
  }
}