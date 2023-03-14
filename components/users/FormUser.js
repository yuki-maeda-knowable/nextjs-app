import { useRouter } from 'next/router';
import { useState } from 'react';

export default function FormUser() {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const router = useRouter()

  const handleInputName = (e) => {
    setUserName(e.target.value)
  }

  const handleInputEmail = (e) => {
    setUserEmail(e.target.value)
  }

  async function submitUserData(e) {
    //ここでcommentを送信したら/api/commentsの方でpostを受け取った後の処理を書く
    // const formData = new FormData()

    // console.dir('formData: ' + formData)
    const formData = {
      email: userEmail,
      name: userName
    }
    const res = await fetch('/api/user', {
      method: 'POST', 
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // console.dir('formData: ' + formData)

    const data = await res.json()
    console.log('data: ' + data);
    router.push('/')
    // e.target.reset
  }
  return(
    <>
      <form onSubmit={submitUserData} method="post">
        <span>名前: </span>
        <input type="text" name='name' value={userName} onChange={handleInputName} />
        <br />
        <span>Email: </span>
        <input type="email" name='email' value={userEmail} onChange={handleInputEmail} />
        <br />
        <button type='submit'>送信</button>
      </form>
    </>
  )
  
}