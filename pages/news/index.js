export async function getServerSideProps() {
  const res = await fetch(`http://localhost:4000/news`)
  const data = await res.json()
  return{
    props: {
      newsList: data,
    },
  }
}
export default function News({newsList}){
  return(
    <>
      <h1>News</h1>
      {
        newsList.map((news => {
          return(
            <div key={news.id}>

                <h2>{news.id} {news.title} | {news.category}</h2>

              <hr />
            </div>
          )
        }))
      }
    </>
  )
}