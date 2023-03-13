export async function getServerSideProps(context) {
  const {params} = context
  const category = params.category

  const res = await fetch(`http://localhost:4000/news?category=${category}`)
  const data = await res.json()

  return{
    props: {
      newsList: data,
      category,
    }
  }
  }

export default function Category({newsList, category}) {
  return(
    <>
      <h1>{category}の記事</h1>
      {
        newsList.map((news => {
          return(
            <div key={news.id}>
              <h2>{news.id} {news.title} | {news.category} </h2>
              <p>{news.description}</p>
              <hr />
            </div>
          )
        }))
      }

    </>
  )
  
}