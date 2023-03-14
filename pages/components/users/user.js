import Link from "next/link"

export default function User({user}){
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')

  const handleInputName = (e) => {
    setUserName(e.target.value)
  }

  const handleInputEmail = (e) => {
    setUserEmail(e.target.value)
  }

  async function submitUserData() {
    //ここでcommentを送信したら/api/commentsの方でpostを受け取った後の処理を書く
    const res = await fetch('/api/user/register', {
      method: 'POST', 
      body: JSON.stringify({userName, userEmail}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    console.log(data);
  }

  return(
    <>
      <Link href={`/users/${user.id}`}>
        <h2>{user.id} {user.name} {user.email} </h2>
      </Link>
    </>
  )
}