import Link from "next/link"

// export async function getStaticProps(context) {
//   const { params } = context;
//   const res = await fetch(`https://nextjs-app-taupe-gamma.vercel.app/api/user/${params.id}`)
//   const data = await res.json();
//   return{
//     props: {
//       user: data,
//     },
//   }
// }

// export async function getStaticPaths(){
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
//     fallback: false
//   }
// }

// export async function getServerSideProps(params) {
  // const { id } = params.query
  // const res = await fetch(`api/users/${id}`)
  // const data = await res.json()
  // return{
  //   props: {
  //     user: data,
  //   },
  // }
// }


export default function UserDetail({}){
  return(
    <>
    <h1>ユーザ詳細</h1>
      {
        // user.map((user => {
        //   <div key={user.id}>
        //   return(
            
        //     <h2>{user.name} {user.email}</h2>
        //     )
        //   </div>
        //   }))
      }

    <Link href={`/`}>
      Home
    </Link>    
    </>
  )
}