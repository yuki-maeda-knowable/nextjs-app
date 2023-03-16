// import prisma from "@/lib/prisma";
// import getUser from "@/lib/prismaFunction";
import Link from "next/link"
import { useRouter } from "next/router"

// export async function getStaticProps({context}) {
//   const { params } = context;
//   const res = await prisma.user.params.id
//   // const res = await fetch(`https://nextjs-app-taupe-gamma.vercel.app/api/user/${params.id}`)

//   const data = await res.json();
//   return{
//     props: {
//       user: data,
//     },
//   }
// }

// export const getStaticPaths = () => {
//   return{
//     paths: [],
//     fallback: true
//   }
// }

// getStaticPaths(){
//   const res = await fetch(`https://nextjs-app-taupe-gamma.vercel.app/api/user/`)
//   const data = await res.json()
//   const paths = data.map((data => {
//     return{
//       params: {
//         id: `${data.id}`
//       }
//     }
//   }))
//   return{
//     paths,
//     fallback: true
//   }
// }

// export async function getServerSideProps(params) {
//   const { id } = params.query
//   const res = await fetch(`/api/user/${id}`)
//   const data = await res.json()
//   return{
//     props: {
//       user: data,
//     },
//   }
// }


// async function fetchDetails(id) {
//   const res = await fetch(`/api/user/17`)
//   const data = await res.json();
//   return data
// }

// export async function getServerSideProps(context) {
//   const {params} = context
//   const {id} = params
//   console.log(id);
//   const user = await prisma.user.findUnique({where: {id: +id}})
//   return{
//     props: {
//       user,
//     },
//   }
// }

export default function UserDetail(){
  return(
    <>
    <h1>ユーザ詳細</h1>
  
    <Link href={`/`}>
      Home
    </Link>    
    </>
  )
}