import prisma from "@/lib/prisma"

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body
    await prisma.user.create({
      data: {
        email: data.email,
        name: data.name
      },
    })
    res.status(200).json({message: "OK"});
  }
}