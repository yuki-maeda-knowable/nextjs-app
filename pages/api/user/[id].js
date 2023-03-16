import prisma from "@/lib/prisma"

export default async function handler(req, res) {
  //リクエストが何か判断
  if(req.method === 'DELETE'){
    //リクエストの内容を変数に格納。req.queryにIDが入ってる
    const {id} = req.query
    //prisma読んで処理
    await prisma.user.delete({
      where: {id : +id}
    })
    // ステータスが200だったらjsonで返す
    res.status(200).json({message: "削除"})
  }
}