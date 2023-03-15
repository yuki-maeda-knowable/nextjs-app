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

  async function submitUserData() {
    //送信ボタンを押下したら/api/user/indexの方でpostを受け取った後の処理を書く
    //formDataに入力された値を格納
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
    const data = await res.json()
    router.refresh();
    router.push('/')
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